# Google Ads API version
ADS_VERSION=v3
PROTO_ROOT_DIR=googleapis/

DOCKER_IMAGE=opteo/google-ads-node
DOCKER_CONTAINER=gads-node-temp

protos: docker-build docker-run clean copy-ts-files copy-protos docker-kill-container fields

# If you want to inspect all content from the container, use this command
debug-protos: docker-build docker-run copy-all

docker-build:
	docker build . -t $(DOCKER_IMAGE)

docker-run:
	docker rm -f $(DOCKER_CONTAINER) || true
	docker run \
		--name $(DOCKER_CONTAINER) \
		-e GOOGLE_ADS_VERSION=$(ADS_VERSION) \
		$(DOCKER_IMAGE)

docker-kill-container:
	docker rm -f $(DOCKER_CONTAINER)

clean:
	rm -rf src/lib/protos
	mkdir -p src/lib/protos

copy-ts-files:
	docker cp $(DOCKER_CONTAINER):/usr/local/gads/compiled-ts-files ./src/lib/
	mv ./src/lib/compiled-ts-files/* ./src/lib/

copy-protos:
	docker cp $(DOCKER_CONTAINER):/usr/local/gads/compiled-protos/ ./src/protos
	docker cp $(DOCKER_CONTAINER):/usr/local/gads/compiled-resources.js ./src/protos/compiled-resources.js
	rm -rf ./src/protos/compiled-protos

copy-all:
	docker cp $(DOCKER_CONTAINER):/usr/local/gads .

fields:
	yarn build
	node ./scripts/generate-fields.js
	prettier --write ./src/lib/fields.ts

# TODO: Handle this inside scripts/compile.sh (low priority)
api-diff:
	# Make sure to specify the previous version here
	rm -rf diff/ && mkdir diff/
	# Previous version
	cd $(PROTO_ROOT_DIR)google/ads/googleads/v2/ && ls **/*.proto > ../../../../../diff/prev-protos.txt
	# Current version
	cd $(PROTO_ROOT_DIR)google/ads/googleads/$(ADS_VERSION)/ && ls **/*.proto > ../../../../../diff/current-protos.txt
	echo "Generated API version diffs"

.PHONY: protos debug-protos