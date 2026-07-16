.PHONY: install dev build clean

install:
	npm install

dev: install
	npm run dev

build: install
	npm run build

clean:
	rm -rf dist node_modules/.cache
