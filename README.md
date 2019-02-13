> ⚠️ **Caution: This project is still under heavy development.**

# google-ads-node

| Google Ads API version 	| [`v0_7_0`](https://developers.google.com/google-ads/api/docs/release-notes#070_2019-01-30) |
|-|:-:|
| Build | [![CircleCI](https://circleci.com/gh/opteo/google-ads-nodes.svg?style=shield)](https://circleci.com/gh/opteo/google-ads-node) |
| Release | ![Release](https://img.shields.io/github/release/opteo/google-ads-node.svg) |



This library is a minimal, low-level implementation for calling the Google Ads API with gRPC Protocol Buffers. For a more feature complete and easier to use library, try our [Javascript client library](https://github.com/opteo/google-ads-api).

## Installation
```bash
$ yarn add google-ads-node
```

## Example

## Contributing

### Protocol Buffers
To update the Google Ads API version, the latest proto files (in the `googleapis` submodule) must be compiled.

#### Requirements:
  - [Protoc compiler](https://github.com/protocolbuffers/protobuf) installed on your machine and added to your `$PATH`
  - Latest dependencies installed. Make sure to use `yarn install` since some dependencies require a C++ compilation step
  
1. Navigate into the `googleapis/` submodule and updated with `git pull`.

2. Run `make protos` to compile the `*.proto` files

3. The new compiled proto files should now be in `src/protos/`, under the `google/ads/googleads/v0/` path.
