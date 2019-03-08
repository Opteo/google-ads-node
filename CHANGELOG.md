# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.1.2"></a>
## [1.1.2](https://github.com/opteo/google-ads-node/compare/v1.1.1...v1.1.2) (2019-03-08)


### Bug Fixes

* **parsing:** minor fixes for different api response cases ([17322c6](https://github.com/opteo/google-ads-node/commit/17322c6))



<a name="1.1.1"></a>
## [1.1.1](https://github.com/opteo/google-ads-node/compare/v1.1.0...v1.1.1) (2019-03-08)


### Bug Fixes

* **utils:** support for parsing call results without field mask ([6bdae0b](https://github.com/opteo/google-ads-node/commit/6bdae0b))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/opteo/google-ads-node/compare/v1.0.0...v1.1.0) (2019-03-06)


### Bug Fixes

* **enums:** prevent enums from being explicitly exported by default ([6a37c62](https://github.com/opteo/google-ads-node/commit/6a37c62))


### Features

* **enums:** generate static enums for use without grpc ([008cdda](https://github.com/opteo/google-ads-node/commit/008cdda))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/opteo/google-ads-node/compare/v0.1.3...v1.0.0) (2019-03-05)


### Bug Fixes

* **npm:** ignore googleapis submodule in published builds ([9863662](https://github.com/opteo/google-ads-node/commit/9863662))
* **utils.spec:** removed empty test for now ([f8f008d](https://github.com/opteo/google-ads-node/commit/f8f008d))


### Features

* **all:** updated constants and imports to use ads v1 ([afb611d](https://github.com/opteo/google-ads-node/commit/afb611d))
* **client:** added parseResults setting to client options ([54c8d67](https://github.com/opteo/google-ads-node/commit/54c8d67))
* **client:** gprc service methods now support promises ([69ec558](https://github.com/opteo/google-ads-node/commit/69ec558))
* **docs:** added documentation on loading services ([5b37e8b](https://github.com/opteo/google-ads-node/commit/5b37e8b))
* **docs:** added information about result parsing ([5d4a8f0](https://github.com/opteo/google-ads-node/commit/5d4a8f0))
* **docs:** added minor comments to example ([2b604ab](https://github.com/opteo/google-ads-node/commit/2b604ab))
* **docs:** bump gads label ([4cf165a](https://github.com/opteo/google-ads-node/commit/4cf165a))
* **docs:** cleanup + badge crazy ([bb29c6e](https://github.com/opteo/google-ads-node/commit/bb29c6e))
* **docs:** minor documentation updates ([eca2b7f](https://github.com/opteo/google-ads-node/commit/eca2b7f))
* **docs:** updated example to use promises ([d586d51](https://github.com/opteo/google-ads-node/commit/d586d51))
* **googleapis:** updated googleapis to include ads/v1 ([b88957f](https://github.com/opteo/google-ads-node/commit/b88957f))
* **interceptor:** added ResponseParsingInterceptor to format gRPC results when specified ([a43bf17](https://github.com/opteo/google-ads-node/commit/a43bf17))
* **protos:** added new v1 compiled protos ([91cb05f](https://github.com/opteo/google-ads-node/commit/91cb05f))
* **protos:** generate warning readme on proto compilation ([a325f41](https://github.com/opteo/google-ads-node/commit/a325f41))
* **services:** added new v1 services ([91f7604](https://github.com/opteo/google-ads-node/commit/91f7604))
* **types:** added new v1 types ([d3b0633](https://github.com/opteo/google-ads-node/commit/d3b0633))
* **utils:** added formatCallResults to optionally parse gRPC results ([013c037](https://github.com/opteo/google-ads-node/commit/013c037))
* **utils:** added grpc response parsing ([391a8cb](https://github.com/opteo/google-ads-node/commit/391a8cb))


### BREAKING CHANGES

* **protos:** removed support for v0



<a name="0.1.3"></a>
## [0.1.3](https://github.com/opteo/google-ads-node/compare/v0.1.2...v0.1.3) (2019-02-25)


### Bug Fixes

* **configs:** generate ts declaration files ([879e814](https://github.com/opteo/google-ads-node/commit/879e814))
* **services:** ignore type errors for proto services ([ef5fd76](https://github.com/opteo/google-ads-node/commit/ef5fd76))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/opteo/google-ads-node/compare/v0.1.1...v0.1.2) (2019-02-21)


### Bug Fixes

* explicit export ([d5d5502](https://github.com/opteo/google-ads-node/commit/d5d5502))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/opteo/google-ads-node/compare/v0.1.0...v0.1.1) (2019-02-21)



<a name="0.1.0"></a>
# 0.1.0 (2019-02-21)


### Bug Fixes

* always get last message in error parsing ([d41f469](https://github.com/opteo/google-ads-node/commit/d41f469))
* circleci status badge ([1bfcbd6](https://github.com/opteo/google-ads-node/commit/1bfcbd6))
* dependency reorganisation ([b8b9116](https://github.com/opteo/google-ads-node/commit/b8b9116))
* ensure node-gyp is installed on circleci ([94f07ea](https://github.com/opteo/google-ads-node/commit/94f07ea))
* grpc-tools version bump to fix internal node-pre-gyp error ([8d468f2](https://github.com/opteo/google-ads-node/commit/8d468f2))
* ignore proto compilation on circleci for now ([8ddf0f1](https://github.com/opteo/google-ads-node/commit/8ddf0f1))
* linting + cleanup ([3c48332](https://github.com/opteo/google-ads-node/commit/3c48332))
* minor credential changes ([d08a941](https://github.com/opteo/google-ads-node/commit/d08a941))
* removed coverage from circleci ([8491785](https://github.com/opteo/google-ads-node/commit/8491785))
* updated error handling interceptor ([c977c9a](https://github.com/opteo/google-ads-node/commit/c977c9a))
* yarn installation ([d8b4f58](https://github.com/opteo/google-ads-node/commit/d8b4f58))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/opteo/google-ads-node/compare/v1.1.2...v0.1.0) (2019-02-12)



<a name="1.1.2"></a>
## 1.1.2 (2019-02-12)
