.PHONY: publish
NVM=8.10.0

clean:
	rm -rf build
	rm -rf node_modules

node_modules:
	. "${NVM_DIR}/nvm.sh" && nvm use $(NVM) && yarn install

build: node_modules
	. "${NVM_DIR}/nvm.sh" && nvm use $(NVM) && yarn build

start: build
	. "${NVM_DIR}/nvm.sh" && nvm use $(NVM) && yarn start

test:
	cd tests && ./gradlew test

publish: build
	. "${NVM_DIR}/nvm.sh" && nvm use $(NVM) && yarn run deploy
