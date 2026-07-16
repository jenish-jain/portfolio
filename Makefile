.PHONY: install dev build clean

install:
	npm install

dev: install
	NODE_OPTIONS=--openssl-legacy-provider npm start

build: install
	NODE_OPTIONS=--openssl-legacy-provider npm run build

clean:
	rm -rf build node_modules/.cache
