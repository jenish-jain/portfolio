# jenishjain-sites

Monorepo for Jenish Jain's personal sites. Three independent [Eleventy](https://www.11ty.dev/) apps, each its own Netlify deployment to its own domain — merging the repos didn't merge the deploys, so each site keeps building and deploying on its own.

| App | Domain | Status |
| --- | --- | --- |
| [`apps/portfolio`](apps/portfolio) | [jenishjain.in](https://jenishjain.in) | [![Netlify Status](https://api.netlify.com/api/v1/badges/b1750240-5592-420d-91be-5c9caea0e885/deploy-status)](https://app.netlify.com/sites/jenishjain/deploys) |
| [`apps/blog`](apps/blog) | [blog.jenishjain.in](https://blog.jenishjain.in) | [![Netlify Status](https://api.netlify.com/api/v1/badges/e5f62391-a2de-4aa3-a239-70cd1dad8858/deploy-status)](https://app.netlify.com/sites/jenishjain-blog/deploys) |
| [`apps/drawings`](apps/drawings) | [drawings.jenishjain.in](https://drawings.jenishjain.in) | [![Netlify Status](https://api.netlify.com/api/v1/badges/6142976e-1d89-4558-b7cd-7940e175a260/deploy-status)](https://app.netlify.com/sites/jenishjain-drawings/deploys) |

## Structure

npm workspaces (`apps/*`) hoist shared dependencies into one root `node_modules`/lockfile and one Node version (`.nvmrc`, v22). Each app keeps its own `.eleventy.js`, `package.json`, and `netlify.toml` — the builds aren't unified, only the source repo is.

## Development

```sh
npm install                          # once, from the repo root

npm run dev --workspace=apps/portfolio
npm run dev --workspace=apps/blog
npm run dev --workspace=apps/drawings

npm run build --workspace=apps/<app> # outputs to apps/<app>/dist/
```

Or via the root `Makefile`:

```sh
make install         # npm install, once from repo root
make dev-portfolio    # or dev-blog / dev-drawings
make build-portfolio   # or build-blog / build-drawings / build (all three)
make clean             # remove dist/ and .cache/ in every app
```

Each app also has its own `Makefile` (`make dev`, `make build`, `make clean`) for working inside `apps/<app>` directly. `apps/blog` and `apps/drawings` additionally need a `.env` (copy from `.envtemplate`) with Cloudinary credentials for image handling.

See each app's own README for app-specific notes.
