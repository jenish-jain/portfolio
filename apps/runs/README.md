# runs.jenishjain.in

"Every run, drawn" — a wall of real GPS traces pulled from Strava, plus a
detail view with real per-km splits. Built with Eleventy as a static
passthrough site (see the other `apps/*` sites for the same pattern).

## Data

`site/static/runs-data.js` is **generated**, not hand-written — it's
produced by `scripts/sync.js` from the Strava API. Don't edit it directly;
re-run the sync instead.

### One-time Strava setup

1. Create/open an API application at <https://www.strava.com/settings/api>
   and copy its **Client ID** and **Client Secret**.
2. **Don't use the "Your Refresh Token" shown on that page** — it's scoped
   to `read` only, which makes `/athlete/activities` fail with
   `{"errors":[{"resource":"AccessToken","field":"activity:read_permission","code":"missing"}]}`.
   You need a refresh token scoped to `activity:read_all` instead:

   ```sh
   cd apps/runs
   cp .env.example .env          # fill in STRAVA_CLIENT_ID / STRAVA_CLIENT_SECRET
   npm run authorize
   ```

   This opens a Strava authorization page in your browser (check the box
   granting access to your activities), catches the redirect on a local
   server, and writes a correctly-scoped `STRAVA_REFRESH_TOKEN` into `.env`
   for you. If it errors with "redirect_uri does not match", set this
   app's **Authorization Callback Domain** to `localhost` on the settings
   page above and try again.

   A bare access token isn't enough for automation either way — it expires
   every 6 hours, while the refresh token is what lets the script mint new
   ones indefinitely.

### Sync locally

```sh
cd apps/runs
npm run sync:local
npm run build           # or `npm run dev` to preview
```

This fetches every `Run` activity with GPS data from the last
`STRAVA_SYNC_DAYS` (default 365), pulls real per-km splits for each, and
rewrites `site/static/runs-data.js`. Activity detail lookups (needed for
splits) are cached in `scripts/.cache/activities.json` (gitignored) so
re-runs only fetch data for new runs.

If Strava ever rotates your refresh token, the script detects it and
rewrites `.env` for you automatically — just re-check it's committed
wherever you store the secret (never in git).

### Weekly automation

`.github/workflows/sync-runs.yml` runs the same script on a schedule
(Sundays, ~2am IST), commits the regenerated `runs-data.js` straight to
the repo if it changed, and Netlify's existing git-based deploy picks it
up from there — no extra hosting/functions needed.

It needs three repository secrets (Settings → Secrets and variables →
Actions): `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`,
`STRAVA_REFRESH_TOKEN`. If Strava ever rotates the refresh token, the
scheduled run will fail on purpose (rather than leak the new token into
CI logs) — when that happens, run `npm run sync:local` on your machine
and update the `STRAVA_REFRESH_TOKEN` secret with the new value.

You can also trigger a sync manually from the Actions tab
(`workflow_dispatch`).
