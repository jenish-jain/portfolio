export NODE_OPTIONS=--openssl-legacy-provider

.PHONY: install dev build deploy clean

install:
	npm install

dev: install
	npm start

build: install
	npm run build

deploy: build
	npm run deploy

clean:
	rm -rf build node_modules/.cache
