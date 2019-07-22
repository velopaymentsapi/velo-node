help:
	@echo ""
	@echo "\033[0;34m    Velo Payments - Node Client (\033[1;34mvelo-payments\033[0;34m) \033[0m"
	@echo ""
	@echo "    To dynamically generate the node client based on a spec issue the following command."
	@echo "    You can specify the spec by replacing the url parameter"
	@echo ""
	@echo "\033[92m    make WORKING_SPEC=https://raw.githubusercontent.com/velopaymentsapi/VeloOpenApi/master/spec/openapi.yaml client \033[0m"
	@echo ""

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

node-client:
	docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i $$WORKING_SPEC \
		-g javascript \
		-o /local

trim:
	rm -Rf .openapi-generator
	rm .openapi-generator-ignore
	rm .travis.yml
	rm git_push.sh

info:
	sed -i.bak 's/"name": "velo_payments_ap_is"/"name": "velo-payments"/' package.json && rm package.json.bak
	sed -i.bak 's/"main": "src\/index.js"/"main": "dist\/index.js", "repository": {"type": "git","url": "git+ssh:\/\/git@github.com\/velopaymentsapi\/velo-node.git"}/' package.json && rm package.json.bak
	sed -i.bak 's/"test": "mocha/"clean": "rm \-rf dist \&\& mkdir dist", "build": "npm run clean \&\& babel src \-\-out\-dir dist", "test": "mocha/' package.json && rm package.json.bak
	grep -rl 'velo_payments_ap_is' ./docs | xargs sed -i.bak 's/velo_payments_ap_is/velo-payments/'
	rm -Rf ./docs/*.bak
	sed -i.bak 's/velo_payments_ap_is/velo-payments/' README.md && rm README.md.bak
	sed -i.bak '1s/# velo/# JavaScript client for Velo/' README.md && rm README.md.bak
	sed -i.bak '2s/.*/This library provides a JavaScript client that simplifies interactions with the Velo Payments API. For full details covering the API visit our docs at [Velo Payments APIs](https:\/\/apidocs.velopayments.com). Note: some of the Velo API calls which require authorization via an access token, see the full docs on how to configure./' README.md && rm README.md.bak
	sed -i.bak '3s/.*//' README.md && rm README.md.bak
	sed -i.bak '4d' README.md && rm README.md.bak
	sed -i.bak '25,64d' README.md && rm README.md.bak
	sed -i.bak '12,17d' README.md && rm README.md.bak

client: clean node-client trim info
	npm i
	npm run build
	rm -Rf node_modules