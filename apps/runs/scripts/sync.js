#!/usr/bin/env node
// Fetches real runs from the Strava API and regenerates
// site/static/runs-data.js. Run locally with:
//   node --env-file=.env scripts/sync.js
// (or `npm run sync:local` from apps/runs, after copying .env.example to .env)
//
// This module's fetch/transform logic (lib/) has no filesystem
// dependencies, so it can be reused as-is from a scheduled job — see
// .github/workflows/sync-runs.yml for the nightly automation.

const fs = require('fs');
const path = require('path');
const { refreshAccessToken, listRunActivities, getActivityDetail } = require('./lib/strava-client');
const { buildRun } = require('./lib/transform');
const { renderDataFile } = require('./lib/data-file');

const ROOT = path.join(__dirname, '..');
const CACHE_PATH = path.join(__dirname, '.cache', 'activities.json');
const OUTPUT_PATH = path.join(ROOT, 'site', 'static', 'runs-data.js');
const ENV_PATH = path.join(ROOT, '.env');

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function saveCache(cache) {
  fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

async function main() {
  const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env;
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
    console.error('Missing STRAVA_CLIENT_ID / STRAVA_CLIENT_SECRET / STRAVA_REFRESH_TOKEN.');
    console.error('Copy apps/runs/.env.example to apps/runs/.env and fill them in, then run:');
    console.error('  npm run sync:local');
    process.exit(1);
  }

  const syncDays = Number(process.env.STRAVA_SYNC_DAYS || 365);
  const longRunKm = Number(process.env.LONG_RUN_KM || 12);
  const afterUnix = Math.floor(Date.now() / 1000) - syncDays * 86400;

  console.log('Refreshing Strava access token...');
  const { accessToken, refreshToken: newRefreshToken } = await refreshAccessToken({
    clientId: STRAVA_CLIENT_ID,
    clientSecret: STRAVA_CLIENT_SECRET,
    refreshToken: STRAVA_REFRESH_TOKEN,
  });

  if (newRefreshToken && newRefreshToken !== STRAVA_REFRESH_TOKEN) {
    if (fs.existsSync(ENV_PATH)) {
      // Safe to write locally — never print secrets to stdout.
      const updated = fs
        .readFileSync(ENV_PATH, 'utf8')
        .replace(/^STRAVA_REFRESH_TOKEN=.*$/m, `STRAVA_REFRESH_TOKEN=${newRefreshToken}`);
      fs.writeFileSync(ENV_PATH, updated);
      console.warn('\n⚠️  Strava issued a new refresh token — updated apps/runs/.env with it.\n');
    } else {
      // In CI (no local .env to write to) there's nowhere safe to reveal the
      // new secret — CI logs aren't masked for values that weren't already
      // registered as secrets. Fail loudly instead of leaking it.
      console.error(
        '\nStrava issued a new refresh token, invalidating the STRAVA_REFRESH_TOKEN secret.\n' +
          'Run `npm run sync:local` from apps/runs on your machine to capture the new token' +
          ' into apps/runs/.env, then update the STRAVA_REFRESH_TOKEN secret in this repo' +
          ' (Settings → Secrets and variables → Actions) with that value.\n',
      );
      process.exitCode = 1;
    }
  }

  console.log(`Fetching runs from the last ${syncDays} days...`);
  const activities = await listRunActivities(accessToken, afterUnix);
  console.log(`Found ${activities.length} runs with GPS data. Fetching splits (cached where possible)...`);

  const cache = loadCache();
  const runs = [];
  for (const activity of activities) {
    const hadCache = Boolean(cache[activity.id]);
    const run = await buildRun(activity, { accessToken, cache, getActivityDetail, longRunKm });
    if (run) runs.push(run);
    process.stdout.write(hadCache ? '.' : '+');
    if (!hadCache) await new Promise((r) => setTimeout(r, 150));
  }
  console.log('\nDone fetching.');
  saveCache(cache);

  runs.sort((a, b) => a.ts - b.ts);

  const content = renderDataFile(runs);
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, content);
  console.log(`Wrote ${runs.length} runs to ${path.relative(ROOT, OUTPUT_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
