const { decodePolyline, toSvgPath } = require('./polyline');

function loopDistanceDeg(startLatLng, endLatLng) {
  if (!startLatLng || !endLatLng) return Infinity;
  const [a, b] = startLatLng;
  const [c, d] = endLatLng;
  return Math.hypot(a - c, b - d);
}

// Turns one Strava activity (+ cached/fetched detail) into the RUNS row
// shape runs-data.js and runs.html expect.
async function buildRun(activity, { accessToken, cache, getActivityDetail, longRunKm }) {
  let cached = cache[activity.id];
  if (!cached) {
    const detail = await getActivityDetail(accessToken, activity.id);
    cached = { splitsMetric: detail.splits_metric || [] };
    cache[activity.id] = cached;
  }

  const path = toSvgPath(decodePolyline(activity.map.summary_polyline));
  if (!path) return null;

  const startLocal = new Date(activity.start_date_local);
  const date = activity.start_date_local.slice(0, 10);
  // Strava's start_date_local is local wall-clock time mislabeled with a
  // trailing "Z" — read it back with the UTC getters so we don't apply a
  // second timezone shift on top.
  const hour = startLocal.getUTCHours();
  const minute = startLocal.getUTCMinutes();

  const km = +(activity.distance / 1000).toFixed(2);
  const paceSec = km > 0 ? Math.round(activity.moving_time / km) : 0;

  const splits = (cached.splitsMetric || [])
    .filter((s) => s.distance > 0)
    .map((s) => Math.round(s.moving_time / (s.distance / 1000)));

  const kind = loopDistanceDeg(activity.start_latlng, activity.end_latlng) < 0.0015 ? 'loop' : 'outback';

  return {
    id: activity.id,
    date,
    ts: startLocal.getTime(),
    hour,
    minute,
    name: activity.name,
    km,
    moving: activity.moving_time,
    elapsed: activity.elapsed_time,
    paceSec,
    elev: Math.round(activity.total_elevation_gain || 0),
    hr: activity.average_heartrate ? Math.round(activity.average_heartrate) : 0,
    // Strava reports running cadence per-leg (rpm-style); double it for the
    // total steps/min the UI labels "spm".
    cadence: activity.average_cadence ? Math.round(activity.average_cadence * 2) : 0,
    kudos: activity.kudos_count || 0,
    long: km >= longRunKm,
    path,
    kind,
    splits,
  };
}

module.exports = { buildRun };
