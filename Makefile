.PHONY: install dev build deploy clean

install:
	npm install

dev: install
	NODE_OPTIONS=--openssl-legacy-provider npm start

build: install
	NODE_OPTIONS=--openssl-legacy-provider npm run build

deploy: build
	NODE_OPTIONS=--openssl-legacy-provider npm run deploy

clean:
	rm -rf build node_modules/.cache
