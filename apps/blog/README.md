## blog site for jenishjain.in

Static blog built with [Eleventy](https://www.11ty.dev/) and `markdown-it`. Posts live under `site/posts/`; RSS feed via `@11ty/eleventy-plugin-rss`, table of contents via `eleventy-plugin-toc`, and post share images/asset hosting via Cloudinary (`@jlengstorf/cloudinary-11ty-helpers`, `@jlengstorf/get-share-image`).

## Development

```sh
cp .envtemplate .env   # fill in CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET
npm install            # or: make install
npm run dev             # eleventy --serve — or: make dev
npm run build            # outputs to dist/ — or: make build
```

This app is part of the `jenishjain-sites` npm workspace — see the [root README](../../README.md) for repo-wide setup.

## Deployment

Deploys automatically on push to `master` via Netlify (`base = apps/blog`, `publish = dist`, `functions = netlify/functions`). See `netlify.toml`.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e5f62391-a2de-4aa3-a239-70cd1dad8858/deploy-status)](https://app.netlify.com/sites/jenishjain-blog/deploys)