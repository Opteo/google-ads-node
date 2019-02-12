# Google Ads API version
ADS_VERSION=v0

# Proto plugin paths
PROTOC_GEN_TS_PATH=./node_modules/.bin/protoc-gen-ts

# Proto directories
PROTO_ROOT_DIR=googleapis/
PROTO_SRC_DIR=google/ads/googleads/$(ADS_VERSION)/**/*.proto
PROTO_SRC_DEPENDENCIES=google/**/*.proto

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR=protos

.SILENT protos: clean
	# Compile depedency protos
	# Temporary workaround for https://github.com/protocolbuffers/protobuf/issues/5318
	for file in $(PROTO_ROOT_DIR)$(PROTO_SRC_DIR_2); do \
		@echo "converting proto $$(basename $$file)"; \
		protoc \
			-I=$(PROTO_ROOT_DIR) \
			--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
			--plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin \
			--grpc_out=${OUT_DIR} \
			--js_out="import_style=commonjs,binary:${OUT_DIR}" \
			--ts_out="${OUT_DIR}" \
			$$file; \
	done; \

	# Compile Google Ads protos
	for file in $(PROTO_ROOT_DIR)$(PROTO_SRC_DIR); do \
		@echo "converting dependency proto $$(basename $$file)"; \
		protoc \
			-I=$(PROTO_ROOT_DIR) \
			--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
			--plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin \
			--grpc_out=${OUT_DIR} \
			--js_out="import_style=commonjs,binary:${OUT_DIR}" \
			--ts_out="${OUT_DIR}" \
			$$file; \
	done; \

clean:
	rm -rf protos/*
	mkdir -p protos

.PHONY: protos