.PHONY: help install dev build clean

help:
	@echo "Usage:"
	@echo "  make install   Install dependencies"
	@echo "  make dev       Start local dev server with live reload"
	@echo "  make build     Build the site to dist/"
	@echo "  make clean     Remove the dist/ output directory"

install:
	npm install

dev: install
	npm run dev

build: install
	npm run build

clean:
	rm -rf dist .cache
