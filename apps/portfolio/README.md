# personal portfolio

Static portfolio/resume site for [jenishjain.in](https://jenishjain.in), built with [Eleventy](https://www.11ty.dev/). Content (experience, projects, resume, writings, drawings) is pulled from `site/_data/*.js` into templates under `site/_includes/`. CSS and `site.js` are compiled and minified in-place by custom Eleventy extensions in `.eleventy.js` (PostCSS + Autoprefixer + csso for styles, Terser for JS).

## Development

```sh
npm install     # or: make install
npm run dev     # eleventy --serve — or: make dev
npm run build   # outputs to dist/ — or: make build
```

This app is part of the `jenishjain-sites` npm workspace — see the [root README](../../README.md) for repo-wide setup.

## Deployment

Deploys automatically on push to `master` via Netlify (`base = apps/portfolio`, `publish = dist`). See `netlify.toml`.

[![Deployment Status](https://api.netlify.com/api/v1/badges/b1750240-5592-420d-91be-5c9caea0e885/deploy-status)](https://app.netlify.com/sites/jenishjain/deploys)

## Backlog

- [ ] socialize section to share/recommend movies, series, music, blogs
- [ ] debounce logic from https://codepen.io/plasm/pen/VJYaQg to prevent mouse jitters
- [ ] daily diary option with MDX pages but without committing code to GitHub?