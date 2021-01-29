# Google Ads API version
# This only needs changing for major versions e.g. v6 -> v7
GOOGLE_ADS_VERSION=v6

BUNDLE=googleads-nodejs.tar.gz
BAZEL_OUT=${PWD}/bazel/${BUNDLE}
BAZEL_BUILD=/go/googleapis/bazel-bin/google/ads/googleads/${GOOGLE_ADS_VERSION}/${BUNDLE}

protos: clean build copy extract

extract:
	rm -rf package && mkdir package
	tar -xvzf ${BAZEL_OUT} -C package
	cd package/googleads-nodejs && \
		npm uninstall google-gax && \
		npm install opteo/gax-nodejs && \
		rm -rf test/ system-test/

	# horrible hack but no easy way to resolve this
	# requires preventing request parameters being compiled to snakeCase
	# in this dependency: https://github.com/googleapis/gapic-generator-typescript/blob/master/templates/typescript_gapic/src/%24version/%24service_client.ts.njk
	# i will personally buy a beer to whoever can solve this, good luck.
	sed -i 's/request.resourceName/request.resource_name/' package/googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts
	sed -i 's/request.customerId/request.customer_id/' package/googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts
	sed -i 's/request.keywordPlan/request.keyword_plan/' package/googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts
	sed -i 's/request.campaignExperiment/request.campaign_experiment/' package/googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts
	sed -i 's/request.campaignDraft/request.campaign_draft/' package/googleads-nodejs/src/${GOOGLE_ADS_VERSION}/*.ts

copy: clean build
	docker create --name gads opteo/google-ads-temp
	docker cp gads:${BAZEL_BUILD} ${BAZEL_OUT}
	docker rm gads
	chmod 700 ${BAZEL_OUT}
	@echo "Bazel compiled protos output at ${BAZEL_OUT}"

build:
	docker build \
		--build-arg GOOGLE_ADS_VERSION=${GOOGLE_ADS_VERSION} \
		-t opteo/google-ads-temp .

clean:
	rm -rf bazel && mkdir bazel

.PHONY: protos