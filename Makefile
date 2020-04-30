# Google Ads API version
ADS_VERSION=v3
PROTO_ROOT_DIR=googleapis/

DOCKER_IMAGE=opteo/google-ads-node
DOCKER_CONTAINER=gads-node-temp

protos: docker-build docker-run clean copy-ts-files copy-protos
	docker rm -f $(DOCKER_CONTAINER)

docker-build:
	docker build . -t $(DOCKER_IMAGE)

docker-run:
	docker rm -f $(DOCKER_CONTAINER)
	docker run \
		--name $(DOCKER_CONTAINER) \
		-e GOOGLE_ADS_VERSION=$(ADS_VERSION) \
		$(DOCKER_IMAGE)

clean:
	rm -rf ./src/lib/protos
	mkdir -p protos

copy-ts-files:
	docker cp $(DOCKER_CONTAINER):/usr/local/gads/compiled-ts-files ./src/lib/
	mv ./src/lib/compiled-ts-files/* ./src/lib/

copy-protos:
	docker cp $(DOCKER_CONTAINER):/usr/local/gads/compiled-protos/ ./src/protos
	docker cp $(DOCKER_CONTAINER):/usr/local/gads/compiled-resources.js ./src/protos/compiled-resources.js

fields:
	yarn build
	node ./scripts/generate-fields.js
	prettier --write ./src/lib/fields.ts

minify:
	echo "compressing protobufjs definitions";
	uglifyjs src/protos/compiled-resources.js -o src/protos/compiled-resources.js --compress

	for file in $(OUT_DIR)/google/ads/googleads/$(ADS_VERSION)/**/*.js; do \
		echo "compressing $$(basename $$file)"; \
		uglifyjs $$file -o $$file --compress; \
	done; \

	for file in $(OUT_DIR)/google/**/*.js; do \
		echo "compressing $$(basename $$file)"; \
		uglifyjs $$file -o $$file --compress; \
	done; \

	echo "removing empty files";
	find src/protos/ -size 0 -delete

	echo "finished compressing protos";

api-diff:
	# Make sure to specify the previous version here
	rm -rf diff/ && mkdir diff/
	# Previous version
	cd $(PROTO_ROOT_DIR)google/ads/googleads/v2/ && ls **/*.proto > ../../../../../diff/prev-protos.txt
	# Current version
	cd $(PROTO_ROOT_DIR)google/ads/googleads/$(ADS_VERSION)/ && ls **/*.proto > ../../../../../diff/current-protos.txt
	echo "Generated API version diffs"