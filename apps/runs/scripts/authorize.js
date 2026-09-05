#!/usr/bin/env node
// One-time helper to mint a refresh_token with the activity:read_all scope.
// The token Strava shows by default on strava.com/settings/api is usually
// scoped to `read` only, which is why syncing fails with:
//   {"errors":[{"resource":"AccessToken","field":"activity:read_permission","code":"missing"}]}
//
// Usage (from apps/runs, with STRAVA_CLIENT_ID/_SECRET already in .env):
//   node --env-file=.env scripts/authorize.js
// or:
//   npm run authorize
//
// This starts a tiny local server to catch Strava's OAuth redirect, then
// exchanges the resulting code for tokens and writes STRAVA_REFRESH_TOKEN
// into apps/runs/.env for you.

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const ENV_PATH = path.join(ROOT, '.env');
const PORT = 8787;
const REDIRECT_URI = `http://localhost:${PORT}/exchange_token`;

function upsertEnv(key, value) {
  let contents = fs.existsSync(ENV_PATH) ? fs.readFileSync(ENV_PATH, 'utf8') : '';
  const line = `${key}=${value}`;
  const pattern = new RegExp(`^${key}=.*$`, 'm');
  contents = pattern.test(contents) ? contents.replace(pattern, line) : contents.trimEnd() + `\n${line}\n`;
  fs.writeFileSync(ENV_PATH, contents);
}

async function main() {
  const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET } = process.env;
  if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET) {
    console.error('Missing STRAVA_CLIENT_ID / STRAVA_CLIENT_SECRET.');
    console.error('Copy apps/runs/.env.example to apps/runs/.env and fill those two in first');
    console.error('(from https://www.strava.com/settings/api), then re-run this.');
    process.exit(1);
  }

  const authorizeUrl =
    `https://www.strava.com/oauth/authorize?client_id=${STRAVA_CLIENT_ID}` +
    `&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&approval_prompt=force&scope=activity:read_all`;

  console.log('\nOpen this URL and authorize the app (grant "View data about your private activities"):\n');
  console.log(`  ${authorizeUrl}\n`);
  console.log(
    'If it errors with "redirect_uri does not match", set this app\'s\n' +
      '"Authorization Callback Domain" to `localhost` at https://www.strava.com/settings/api\n',
  );

  try {
    execSync(`open "${authorizeUrl}"`, { stdio: 'ignore' });
  } catch {
    // fine — user can open the printed URL manually
  }

  const { code, scope } = await new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, `http://localhost:${PORT}`);
      const error = url.searchParams.get('error');
      const authCode = url.searchParams.get('code');
      const grantedScope = url.searchParams.get('scope');
      res.setHeader('Content-Type', 'text/html');
      if (error) {
        res.end(`<p>Authorization failed: ${error}. You can close this tab.</p>`);
        server.close();
        reject(new Error(`Strava authorization denied: ${error}`));
        return;
      }
      res.end('<p>Authorized — you can close this tab and go back to the terminal.</p>');
      server.close();
      resolve({ code: authCode, scope: grantedScope });
    });
    server.listen(PORT, () => console.log(`Waiting for the Strava redirect on ${REDIRECT_URI} ...`));
    server.on('error', reject);
  });

  if (!scope || !scope.includes('activity:read')) {
    console.warn(
      `\n⚠️  Granted scope was "${scope || 'unknown'}" — it doesn't include activity:read.\n` +
        '   Re-run this and make sure to check the "View data about your private activities"\n' +
        '   (or equivalent activity read) box on the Strava authorization screen.\n',
    );
  }

  console.log('Exchanging code for tokens...');
  const res = await fetch('https://www.strava.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    }),
  });
  if (!res.ok) {
    throw new Error(`Token exchange failed: ${res.status} ${await res.text()}`);
  }
  const data = await res.json();

  upsertEnv('STRAVA_REFRESH_TOKEN', data.refresh_token);
  console.log(`\nDone. Wrote a new STRAVA_REFRESH_TOKEN (scope: ${scope || 'unknown'}) to apps/runs/.env.`);
  console.log('You can now run: npm run sync:local\n');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
