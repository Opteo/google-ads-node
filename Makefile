# Google Ads API version
ADS_VERSION=v0

# Proto plugin paths
PROTOC_GEN_TS_PATH=./node_modules/.bin/protoc-gen-ts
PROTOC_GEN_GRPC_PATH=./node_modules/grpc-tools/bin/grpc_node_plugin

# Proto directories
PROTO_ROOT_DIR=googleapis/
PROTO_SRC_DIR=google/ads/googleads/$(ADS_VERSION)/**/*.proto
PROTO_SRC_DEPENDENCIES=google/**/*.proto

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR=src/protos

.SILENT: protos

protos: clean compile-protos
	echo "finished all"

compile-protos:
	# Compile depedency protos
	# Temporary workaround for https://github.com/protocolbuffers/protobuf/issues/5318
	for file in $(PROTO_ROOT_DIR)$(PROTO_SRC_DEPENDENCIES); do \
		echo "converting dependency proto $$(basename $$file)"; \
		protoc \
			-I=$(PROTO_ROOT_DIR) \
			--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
			--plugin=protoc-gen-grpc=$(PROTOC_GEN_GRPC_PATH) \
			--grpc_out=${OUT_DIR} \
			--js_out="import_style=commonjs,binary:${OUT_DIR}" \
			--ts_out="${OUT_DIR}" \
			$$file; \
	done; \

	# Compile Google Ads protos
	for file in $(PROTO_ROOT_DIR)$(PROTO_SRC_DIR); do \
		echo "converting proto $$(basename $$file)"; \
		protoc \
 			-I=$(PROTO_ROOT_DIR) \
 			--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
 			--plugin=protoc-gen-grpc=$(PROTOC_GEN_GRPC_PATH) \
 			--grpc_out=${OUT_DIR} \
 			--js_out="import_style=commonjs,binary:${OUT_DIR}" \
 			--ts_out="${OUT_DIR}" \
 			$$file; \
	done; \

	# Compile missing depdencies
	protoc -I=$(PROTO_ROOT_DIR) \
		--plugin=protoc-gen-ts=${PROTOC_GEN_TS_PATH} \
		--plugin=protoc-gen-grpc=$(PROTOC_GEN_GRPC_PATH) \
		--grpc_out=${OUT_DIR} \
		--js_out="import_style=commonjs,binary:${OUT_DIR}" \
		--ts_out="${OUT_DIR}" \
		$(PROTO_ROOT_DIR)google/api/experimental/*.proto \

clean:
	rm -rf $(OUT_DIR)/*
	mkdir -p $(OUT_DIR)

.PHONY: protos