.PHONY: tests

help:
	@echo ""
	@echo "\033[0;34m    Velo Payments - Node Client (\033[1;34mvelo-payments\033[0;34m) \033[0m"
	@echo ""
	@echo "    To dynamically generate the node client based on a spec issue the following command."
	@echo "    You can specify the spec by replacing the url parameter"
	@echo ""
	@echo "\033[92m    make WORKING_SPEC=https://raw.githubusercontent.com/velopaymentsapi/VeloOpenApi/master/spec/openapi.yaml client \033[0m"
	@echo ""

version:
	@docker run -i --rm mikefarah/yq sh -c "apk -q add curl && curl -s $$WORKING_SPEC -o /tmp/oa3.yaml;  yq r /tmp/oa3.yaml info.version" 2>&1

oa3config:
	sed -i.bak 's/"projectVersion": ".*"/"projectVersion": "${VERSION}"/g' oa3-config.json && rm oa3-config.json.bak

clean:
	rm -Rf dist
	rm -Rf docs
	rm -Rf src
	rm -Rf test
	rm -Rf node_modules
	rm -f .babelrc
	rm -f mocha.opts
	rm -f package-lock.json
	rm -f package.json
	rm -f README.md

generate:
	docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i $$WORKING_SPEC \
		-g javascript \
		-o /local \
		-c /local/oa3-config.json

trim:
	- rm -Rf .openapi-generator
	- rm .openapi-generator-ignore
	- rm .travis.yml
	- rm git_push.sh

info:
	# adjustments for generated files
	echo "import ApiClient from '../ApiClient';" >> OneOfstringstring.js
	echo "export default class OneOfstringstring {" >> OneOfstringstring.js
	echo "	static constructFromObject(object) {" >> OneOfstringstring.js
	echo "		return object;" >> OneOfstringstring.js
	echo "	}" >> OneOfstringstring.js
	echo "}" >> OneOfstringstring.js
	mv OneOfstringstring.js src/model/

	echo "import ApiClient from '../ApiClient';" >> OneOfdatestring.js
	echo "export default class OneOfdatestring {" >> OneOfdatestring.js
	echo "	static constructFromObject(object) {" >> OneOfdatestring.js
	echo "		return object;" >> OneOfdatestring.js
	echo "	}" >> OneOfdatestring.js
	echo "}" >> OneOfdatestring.js
	mv OneOfdatestring.js src/model/

	# adjust package.json
	sed -i.bak 's/"main": "src\/index.js"/"main": "dist\/index.js", "repository": {"type": "git","url": "git+ssh:\/\/git@github.com\/velopaymentsapi\/velo-node.git"}/' package.json && rm package.json.bak
	sed -i.bak 's/"test": "mocha/"clean": "rm \-rf dist \&\& mkdir dist", "build": "npm run clean \&\& babel src \-\-out\-dir dist", "test": "mocha/' package.json && rm package.json.bak
	# sed -i.bak 's/register --recursive/register tests\/**\/*.js --recursive/' package.json && rm package.json.bak
	sed -i.bak 's/mocha --require/nyc --reporter=text mocha --require/' package.json && rm package.json.bak
	sed -i.bak 's/"devDependencies": {/"devDependencies": { "nyc": "^15.0.0",/' package.json && rm package.json.bak
	
	# adjust README.md
	sed -i.bak '1s/.*/# JavaScript client for Velo/' README.md && rm README.md.bak
	sed -i.bak '2s/.*/[![License](https:\/\/img.shields.io\/badge\/License-Apache%202.0-blue.svg)](https:\/\/opensource.org\/licenses\/Apache-2.0) [![npm version](https:\/\/badge.fury.io\/js\/velo-payments.svg)](https:\/\/badge.fury.io\/js\/velo-payments) [![CircleCI](https:\/\/circleci.com\/gh\/velopaymentsapi\/velo-node.svg?style=svg)](https:\/\/circleci.com\/gh\/velopaymentsapi\/velo-node)\\/' README.md && rm README.md.bak
	sed -i.bak '3s/.*/This library provides a JavaScript client that simplifies interactions with the Velo Payments API. For full details covering the API visit our docs at [Velo Payments APIs](https:\/\/apidocs.velopayments.com). Note: some of the Velo API calls which require authorization via an access token, see the full docs on how to configure./' README.md && rm README.md.bak
	sed -i.bak '4d' README.md && rm README.md.bak
	sed -i.bak '25,64d' README.md && rm README.md.bak
	sed -i.bak '12,17d' README.md && rm README.md.bak

build_client:
	npm i
	npm run build
	rm -Rf node_modules

client: clean generate trim info build_client

tests:
	# TODO: test/model since generated model tests are empty remove for now
	rm -Rf test/model
	# overwrite the generated test stubs
	cp tests/api/* test/api/
	docker build -t=client-node-tests .
	docker run -t -v $(PWD):/usr/src/app -e KEY=${KEY} -e SECRET=${SECRET} -e PAYOR=${PAYOR} -e APITOKEN="" client-node-tests npm run test

commit:
	sed -i.bak 's/"version": ".*"/"version": "${VERSION}"/g' package.json && rm package.json.bak
	git add --all
	git commit -am 'bump version to ${VERSION}'
	git push --set-upstream origin master

build:
	@echo "Client lib already built in the /dist dir."

publish:
	git tag $(VERSION)
	git push origin tag $(VERSION)
	npm i
	npm publish
	rm -Rf node_modules
