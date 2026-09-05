.PHONY: help install dev build clean sync

help:
	@echo "Usage:"
	@echo "  make install   Install dependencies"
	@echo "  make dev       Start local dev server with live reload"
	@echo "  make build     Build the site to dist/"
	@echo "  make clean     Remove the dist/ output directory"
	@echo "  make sync      Sync runs-data.js from the Strava API (needs .env)"

install:
	npm install

dev: install
	npm run dev

build: install
	npm run build

clean:
	rm -rf dist

sync:
	npm run sync:local
