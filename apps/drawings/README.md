## drawings site for jenishjain.in

Static drawing/sketch portfolio built with [Eleventy](https://www.11ty.dev/) and `markdown-it`. Each drawing lives under `site/posts/`; images and assets are hosted via Cloudinary (`@jlengstorf/cloudinary-11ty-helpers`, `@jlengstorf/get-share-image`).

## Development

```sh
cp .envtemplate .env   # fill in CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET
npm install             # or: make install
npm run dev              # eleventy --serve — or: make dev
npm run build             # outputs to dist/ — or: make build
```

This app is part of the `jenishjain-sites` npm workspace — see the [root README](../../README.md) for repo-wide setup.

## Deployment

Deploys automatically on push to `master` via Netlify (`base = apps/drawings`, `publish = dist`). See `netlify.toml`.

[![Netlify Status](https://api.netlify.com/api/v1/badges/6142976e-1d89-4558-b7cd-7940e175a260/deploy-status)](https://app.netlify.com/sites/jenishjain-drawings/deploys)