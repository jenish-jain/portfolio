// Decodes a Google-encoded polyline (Strava's map.summary_polyline format,
// precision 5) into [lat, lng] pairs.
function decodePolyline(encoded) {
  let index = 0;
  let lat = 0;
  let lng = 0;
  const coordinates = [];

  while (index < encoded.length) {
    let shift = 0;
    let result = 0;
    let b;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    lat += result & 1 ? ~(result >> 1) : result >> 1;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    lng += result & 1 ? ~(result >> 1) : result >> 1;

    coordinates.push([lat / 1e5, lng / 1e5]);
  }

  return coordinates;
}

function minMax(values) {
  let min = Infinity;
  let max = -Infinity;
  for (const v of values) {
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return [min, max];
}

// Projects real [lat, lng] points onto a 100x100 SVG viewBox, preserving
// aspect ratio, north-up. Mirrors the quadratic-smoothed line style the
// design's synthetic routePath() used, so real traces look consistent
// with the mockup.
function toSvgPath(latlngs) {
  if (!latlngs || latlngs.length < 2) return null;

  const lat0 = (latlngs[0][0] * Math.PI) / 180;
  const mPerDegLat = 110540;
  const mPerDegLng = 111320 * Math.cos(lat0);

  const [olat, olng] = latlngs[0];
  const pts = latlngs.map(([lat, lng]) => [
    (lng - olng) * mPerDegLng,
    -(lat - olat) * mPerDegLat, // negate so north is up in SVG space
  ]);

  const [mnx, mxx] = minMax(pts.map((p) => p[0]));
  const [mny, mxy] = minMax(pts.map((p) => p[1]));
  const w = mxx - mnx || 1;
  const h = mxy - mny || 1;
  const s = Math.min(84 / w, 84 / h);
  const ox = (100 - w * s) / 2 - mnx * s;
  const oy = (100 - h * s) / 2 - mny * s;

  const P = pts.map(([x, y]) => [+(x * s + ox).toFixed(2), +(y * s + oy).toFixed(2)]);

  let d = `M${P[0][0]} ${P[0][1]}`;
  for (let i = 1; i < P.length - 1; i++) {
    const [x, y] = P[i];
    const [nx, ny] = P[i + 1];
    d += `Q${x} ${y} ${((x + nx) / 2).toFixed(2)} ${((y + ny) / 2).toFixed(2)}`;
  }
  d += `L${P[P.length - 1][0]} ${P[P.length - 1][1]}`;
  return d;
}

module.exports = { decodePolyline, toSvgPath };
