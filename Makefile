.PHONY: publish

clean:
	rm -rf build
	rm -rf node_modules

node_modules:
	yarn install

build: node_modules
	yarn build

publish: build
	yarn run deploy
#	cp -r build/* publish/
#	cd publish && git add --all && (git commit -am "Update"; git push)
