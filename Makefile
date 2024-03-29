.PHONY: tests

.DEFAULT_GOAL := help

.PHONY: help
help: ## Display this help section
	@echo ""
	@echo "\033[0;34m    Velo Payments - Node Client (\033[1;34mvelo-payments\033[0;34m) \033[0m"
	@echo ""
	@echo "    To dynamically generate the NodeJS client based on a spec issue the following command."
	@echo "    You can specify the spec by replacing the url parameter"
	@echo ""
	@echo "\033[92m    make client WORKING_SPEC=https://raw.githubusercontent.com/velopaymentsapi/VeloOpenApi/master/spec/openapi.yaml \033[0m"
	@echo ""
	@echo "     *** Available Targets ***"
	@echo ""
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "    \033[36m%-38s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""

version: ## Parse (via docker) spec file passed in WORKING_SPEC variable to print the version
	@docker run -i --rm mikefarah/yq:3 sh -c "apk -q add curl && curl -s $$WORKING_SPEC -o /tmp/oa3.yaml;  yq r /tmp/oa3.yaml info.version" 2>&1

oa3config: ## Set version on the openapi generator config to value of the VERSION variable
	sed -i.bak 's/"projectVersion": ".*"/"projectVersion": "${VERSION}"/g' oa3-config.json && rm oa3-config.json.bak

sdkversion:
	@docker run -i stedolan/jq <oa3-config.json -r '.projectVersion'

clean: ## Remove files & directories that are auto created by generator cli
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

generate: ## Run (via docker) generator cli against a spec file passed in WORKING_SPEC variable to create files
	docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli generate \
		-i $$WORKING_SPEC \
		-g javascript \
		-o /local \
		--global-property=skipFormModel=false \
		-c /local/oa3-config.json

trim: ## Remove unused files that are auto geneated
	- rm -Rf .openapi-generator
	- rm .openapi-generator-ignore
	- rm .travis.yml
	- rm git_push.sh

adjustments: ## Update the auto generated README.md with Velo info
	echo "import ApiClient from '../ApiClient';" >> OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.js
	echo "export default class OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged {" >> OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.js
	echo "	static constructFromObject(object) {" >> OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.js
	echo "		return object;" >> OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.js
	echo "	}" >> OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.js
	echo "}" >> OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.js
	mv OneOfPingPaymentStatusChangedPaymentRejectedOrReturnedOnboardingStatusChangedPayableStatusChangedPayeeDetailsChangedDebitStatusChanged.js src/model/

	# adjust package.json
	sed -i.bak 's/"main": "src\/index.js"/"main": "dist\/index.js", "repository": {"type": "git","url": "git+ssh:\/\/git@github.com\/velopaymentsapi\/velo-node.git"}/' package.json && rm package.json.bak
	sed -i.bak 's/"prepare": "npm run build",/"prepare": "npm run build", "clean": "rm \-rf dist \&\& mkdir dist",/' package.json && rm package.json.bak
	sed -i.bak 's/mocha --require/nyc --reporter=text mocha --require/' package.json && rm package.json.bak
	sed -i.bak 's/"devDependencies": {/"devDependencies": { "nyc": "^15.0.0",/' package.json && rm package.json.bak
	sed -i.bak 's/babel src -d dist/npm run clean \&\& babel src --out-dir dist/' package.json && rm package.json.bak

	# adjust README.md
	sed -i.bak '1s/.*/# JavaScript client for Velo/' README.md && rm README.md.bak
	sed -i.bak '2s/.*/[![License](https:\/\/img.shields.io\/badge\/License-Apache%202.0-blue.svg)](https:\/\/opensource.org\/licenses\/Apache-2.0) [![npm version](https:\/\/badge.fury.io\/js\/velo-payments.svg)](https:\/\/badge.fury.io\/js\/velo-payments) \\/' README.md && rm README.md.bak
	sed -i.bak '3s/.*/This library provides a JavaScript client that simplifies interactions with the Velo Payments API. For full details covering the API visit our docs at [Velo Payments APIs](https:\/\/apidocs.velopayments.com). Note: some of the Velo API calls which require authorization via an access token, see the full docs on how to configure./' README.md && rm README.md.bak
	sed -i.bak '4d' README.md && rm README.md.bak
	sed -i.bak '25,64d' README.md && rm README.md.bak
	sed -i.bak '12,17d' README.md && rm README.md.bak

rcnaming: ## 
	$(eval RC_REVISION="$(shell make WORKING_SPEC=${WORKING_SPEC} version)")
	@echo "${RC_REVISION}-beta.${RC_BUILD}"

client: clean generate trim adjustments ## Generate sdk via cli

tests: ## Run (via docker) tests using supplied variables KEY, SECRET, PAYOR, APIURL
	rm -Rf test/model
	cp tests/api/* test/api/
	docker build -t=velo-sdk-node-tests .
	docker run -t -e KEY=${KEY} -e SECRET=${SECRET} -e PAYOR=${PAYOR} -e APIURL=${APIURL} -e APITOKEN="" velo-sdk-node-tests npm test 
