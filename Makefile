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