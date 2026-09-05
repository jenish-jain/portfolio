.PHONY: help install dev-portfolio dev-blog dev-drawings dev-runs build-portfolio build-blog build-drawings build-runs build clean

help:
	@echo "Usage:"
	@echo "  make install          Install dependencies for all apps (npm workspaces)"
	@echo "  make dev-portfolio    Start apps/portfolio dev server"
	@echo "  make dev-blog         Start apps/blog dev server"
	@echo "  make dev-drawings     Start apps/drawings dev server"
	@echo "  make dev-runs         Start apps/runs dev server"
	@echo "  make build-portfolio  Build apps/portfolio to apps/portfolio/dist/"
	@echo "  make build-blog       Build apps/blog to apps/blog/dist/"
	@echo "  make build-drawings   Build apps/drawings to apps/drawings/dist/"
	@echo "  make build-runs       Build apps/runs to apps/runs/dist/"
	@echo "  make build            Build all apps"
	@echo "  make clean            Remove dist/ and .cache/ in every app"

install:
	npm install

dev-portfolio:
	npm run dev --workspace=apps/portfolio

dev-blog:
	npm run dev --workspace=apps/blog

dev-drawings:
	npm run dev --workspace=apps/drawings

dev-runs:
	npm run dev --workspace=apps/runs

build-portfolio:
	npm run build --workspace=apps/portfolio

build-blog:
	npm run build --workspace=apps/blog

build-drawings:
	npm run build --workspace=apps/drawings

build-runs:
	npm run build --workspace=apps/runs

build: build-portfolio build-blog build-drawings build-runs

clean:
	rm -rf apps/*/dist apps/*/.cache
