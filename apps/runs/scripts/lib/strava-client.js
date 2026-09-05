const STRAVA_BASE = 'https://www.strava.com/api/v3';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Exchanges a long-lived refresh_token for a fresh access_token. Strava may
// (rarely) rotate the refresh_token itself — callers must persist the
// returned value or the next refresh will fail.
async function refreshAccessToken({ clientId, clientSecret, refreshToken }) {
  const res = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });
  if (!res.ok) {
    throw new Error(`Strava token refresh failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();
  return { accessToken: data.access_token, refreshToken: data.refresh_token, expiresAt: data.expires_at };
}

async function stravaFetch(pathname, accessToken, params = {}) {
  const url = new URL(STRAVA_BASE + pathname);
  Object.entries(params).forEach(([k, v]) => {
    if (v != null) url.searchParams.set(k, v);
  });

  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } });
    if (res.status === 429) {
      const retryAfter = Number(res.headers.get('Retry-After')) || 30;
      console.warn(`Rate limited by Strava, waiting ${retryAfter}s...`);
      await sleep(retryAfter * 1000);
      continue;
    }
    if (!res.ok) {
      throw new Error(`Strava API ${pathname} failed: ${res.status} ${await res.text()}`);
    }
    return res.json();
  }
  throw new Error(`Strava API ${pathname} failed after retries (rate limited)`);
}

// Fetches every "Run" activity with GPS data since `afterUnix` (paginated).
async function listRunActivities(accessToken, afterUnix) {
  const all = [];
  for (let page = 1; ; page++) {
    const batch = await stravaFetch('/athlete/activities', accessToken, {
      after: afterUnix,
      per_page: 100,
      page,
    });
    if (!batch.length) break;
    all.push(...batch);
    if (batch.length < 100) break;
    await sleep(200);
  }
  return all.filter((a) => a.type === 'Run' && a.map && a.map.summary_polyline);
}

// Detail endpoint — needed for splits_metric (per-km splits), which the
// activity list summary doesn't include.
async function getActivityDetail(accessToken, id) {
  return stravaFetch(`/activities/${id}`, accessToken);
}

module.exports = { refreshAccessToken, listRunActivities, getActivityDetail };
