# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.14.0"></a>
# [1.14.0](https://github.com/opteo/google-ads-node/compare/v1.13.9...v1.14.0) (2019-11-21)


### Bug Fixes

* **types:** Fixed bid_modifier field definition for Campaing Criterion ([2047a2a](https://github.com/opteo/google-ads-node/commit/2047a2a))
* include new log interfaces in default exports ([6bc732c](https://github.com/opteo/google-ads-node/commit/6bc732c))


### Features

* **client:** added preventMutations option to prevent mutable requests ([#32](https://github.com/opteo/google-ads-node/issues/32)) ([d62dfa5](https://github.com/opteo/google-ads-node/commit/d62dfa5))
* **logging:** added logging interceptor and module ([#33](https://github.com/opteo/google-ads-node/issues/33)) ([18babe2](https://github.com/opteo/google-ads-node/commit/18babe2))



<a name="1.13.9"></a>
## [1.13.9](https://github.com/opteo/google-ads-node/compare/v1.13.8...v1.13.9) (2019-10-22)


### Bug Fixes

* **parsing:** parse key/value fields such as url_custom_parameters correctly ([#29](https://github.com/opteo/google-ads-node/issues/29)) ([f5349d9](https://github.com/opteo/google-ads-node/commit/f5349d9))



<a name="1.13.8"></a>
## [1.13.8](https://github.com/opteo/google-ads-node/compare/v1.13.7...v1.13.8) (2019-09-30)


### Bug Fixes

* **deps:** moved lodash.snakecase to a prod dependency ([aea8e19](https://github.com/opteo/google-ads-node/commit/aea8e19))



<a name="1.13.7"></a>
## [1.13.7](https://github.com/opteo/google-ads-node/compare/v1.13.5...v1.13.7) (2019-09-24)


### Bug Fixes

* **utils:** parse fields such as userList correctly ([#23](https://github.com/opteo/google-ads-node/issues/23)) ([6510dca](https://github.com/opteo/google-ads-node/commit/6510dca))



<a name="1.13.5"></a>
## [1.13.5](https://github.com/opteo/google-ads-node/compare/v1.13.4...v1.13.5) (2019-08-29)


### Bug Fixes

* **build:** allow usage in projects with { esModuleInterop: false } in tsconfig ([5ec5d6e](https://github.com/opteo/google-ads-node/commit/5ec5d6e))
* **parsing:** avoid returning undefined values when field are unset in response ([0794bbf](https://github.com/opteo/google-ads-node/commit/0794bbf))



<a name="1.13.4"></a>
## [1.13.4](https://github.com/opteo/google-ads-node/compare/v1.13.3...v1.13.4) (2019-08-14)


### Bug Fixes

* **parsing:** parse reporting objects correctly even when fields not specified in fieldMask (such as ad_group_ad.policy_summary) ([ebad895](https://github.com/opteo/google-ads-node/commit/ebad895))



<a name="1.13.3"></a>
## [1.13.3](https://github.com/opteo/google-ads-node/compare/v1.13.2...v1.13.3) (2019-07-16)


### Bug Fixes

* **scripts:** structures initialisation ordering fix ([#20](https://github.com/opteo/google-ads-node/issues/20)) ([f688780](https://github.com/opteo/google-ads-node/commit/f688780))
* **struct:** recompiled with order fixes from [#20](https://github.com/opteo/google-ads-node/issues/20) ([60da418](https://github.com/opteo/google-ads-node/commit/60da418))



<a name="1.13.2"></a>
## [1.13.2](https://github.com/opteo/google-ads-node/compare/v1.13.1...v1.13.2) (2019-07-11)


### Bug Fixes

* **interceptor:** deserialize partial failure errors when using parseResults option ([29df5bd](https://github.com/opteo/google-ads-node/commit/29df5bd))



<a name="1.13.1"></a>
## [1.13.1](https://github.com/opteo/google-ads-node/compare/v1.13.0...v1.13.1) (2019-07-08)


### Bug Fixes

* **utils:** correctly parse deeply nested array values ([db4ce46](https://github.com/opteo/google-ads-node/commit/db4ce46))



<a name="1.13.0"></a>
# [1.13.0](https://github.com/opteo/google-ads-node/compare/v1.12.3...v1.13.0) (2019-06-28)


### Features

* **api:** updated to google ads v2.0.0 ([7ea3fe2](https://github.com/opteo/google-ads-node/commit/7ea3fe2))



<a name="1.12.3"></a>
## [1.12.3](https://github.com/opteo/google-ads-node/compare/v1.12.2...v1.12.3) (2019-06-14)



<a name="1.12.2"></a>
## [1.12.2](https://github.com/opteo/google-ads-node/compare/v1.12.1...v1.12.2) (2019-06-14)


### Bug Fixes

* **types:** Fixed fields with numbers such as headline_part1 ([515eb6b](https://github.com/opteo/google-ads-node/commit/515eb6b))



<a name="1.12.1"></a>
## [1.12.1](https://github.com/opteo/google-ads-node/compare/v1.12.0...v1.12.1) (2019-06-06)


### Bug Fixes

* **client:** fix the error handling message when refresh token missed ([76519aa](https://github.com/opteo/google-ads-node/commit/76519aa))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/opteo/google-ads-node/compare/v1.11.1...v1.12.0) (2019-05-24)


### Features

* **api:** updated to google ads v1.3.0 ([4fae69a](https://github.com/opteo/google-ads-node/commit/4fae69a))



<a name="1.11.1"></a>
## [1.11.1](https://github.com/opteo/google-ads-node/compare/v1.11.0...v1.11.1) (2019-05-21)


### Bug Fixes

* compile enum structures at compile time for use in buildResource ([601235b](https://github.com/opteo/google-ads-node/commit/601235b))
* **client:** unroll enums correctly with structure file in buildResource method ([267a417](https://github.com/opteo/google-ads-node/commit/267a417))
* **grpc:** allow messages over 4MB ([baa8646](https://github.com/opteo/google-ads-node/commit/baa8646))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/opteo/google-ads-node/compare/v1.10.1...v1.11.0) (2019-05-03)


### Bug Fixes

* **types:** removed unused directory ([050ff98](https://github.com/opteo/google-ads-node/commit/050ff98))


### Features

* **api:** updated to google ads v1.2.0 ([#10](https://github.com/opteo/google-ads-node/issues/10)) ([83e565a](https://github.com/opteo/google-ads-node/commit/83e565a))



<a name="1.10.1"></a>
## [1.10.1](https://github.com/opteo/google-ads-node/compare/v1.10.0...v1.10.1) (2019-05-02)


### Bug Fixes

* **client:** correctly build deeply nested grpc resource ([6249209](https://github.com/opteo/google-ads-node/commit/6249209))



<a name="1.10.0"></a>
# [1.10.0](https://github.com/opteo/google-ads-node/compare/v1.9.0...v1.10.0) (2019-04-26)


### Features

* **client:** support for loading client options from configuration file ([857ab85](https://github.com/opteo/google-ads-node/commit/857ab85))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/opteo/google-ads-node/compare/v1.8.3...v1.9.0) (2019-04-17)


### Bug Fixes

* **utils:** make sure getErrorLocationPath doesn't throw on undefined location ([ffec7a1](https://github.com/opteo/google-ads-node/commit/ffec7a1))


### Features

* **interceptor:** added bad field location to error response metadata ([562cd2c](https://github.com/opteo/google-ads-node/commit/562cd2c))
* **utils:** added getErrorLocationPath for parsing field error locations ([734d995](https://github.com/opteo/google-ads-node/commit/734d995))



<a name="1.8.3"></a>
## [1.8.3](https://github.com/opteo/google-ads-node/compare/v1.8.2...v1.8.3) (2019-04-16)


### Bug Fixes

* linting in various files ([b9ea3dd](https://github.com/opteo/google-ads-node/commit/b9ea3dd))
* **utils:** use lodash camelcase converter when building grpc resources ([e0ac7af](https://github.com/opteo/google-ads-node/commit/e0ac7af))



<a name="1.8.2"></a>
## [1.8.2](https://github.com/opteo/google-ads-node/compare/v1.8.1...v1.8.2) (2019-04-12)


### Bug Fixes

* **utils:** ensure all possible enums are converted back to the correct format ([36d0da8](https://github.com/opteo/google-ads-node/commit/36d0da8))



<a name="1.8.1"></a>
## [1.8.1](https://github.com/opteo/google-ads-node/compare/v1.8.0...v1.8.1) (2019-04-08)


### Bug Fixes

* **utils:** handle array-type fields correctly for getFieldMask method ([bb1154e](https://github.com/opteo/google-ads-node/commit/bb1154e))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/opteo/google-ads-node/compare/v1.7.2...v1.8.0) (2019-04-02)


### Features

* **api:** updated to google ads api v1.1.0 ([b2e7a4f](https://github.com/opteo/google-ads-node/commit/b2e7a4f))



<a name="1.7.2"></a>
## [1.7.2](https://github.com/opteo/google-ads-node/compare/v1.7.1...v1.7.2) (2019-04-02)



<a name="1.7.1"></a>
## [1.7.1](https://github.com/opteo/google-ads-node/compare/v1.7.0...v1.7.1) (2019-04-01)


### Bug Fixes

* **utils:** correctly translate nested enum path ([3462cc7](https://github.com/opteo/google-ads-node/commit/3462cc7))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/opteo/google-ads-node/compare/v1.6.0...v1.7.0) (2019-03-26)


### Bug Fixes

* **interceptor:** add enum error codes to error metadata ([bd08481](https://github.com/opteo/google-ads-node/commit/bd08481))
* **scripts:** generate error enums as well ([fddac65](https://github.com/opteo/google-ads-node/commit/fddac65))


### Features

* **examples:** added new examples directory + first reporting example ([15a5051](https://github.com/opteo/google-ads-node/commit/15a5051))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/opteo/google-ads-node/compare/v1.5.0...v1.6.0) (2019-03-22)


### Features

* **client:** added support for building request types from plain object ([e47625f](https://github.com/opteo/google-ads-node/commit/e47625f))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/opteo/google-ads-node/compare/v1.4.4...v1.5.0) (2019-03-22)


### Features

* **client:** added async access token getter to client options ([3df5bd8](https://github.com/opteo/google-ads-node/commit/3df5bd8))
* **docs:** added documentation on the accessTokenGetter option ([9488744](https://github.com/opteo/google-ads-node/commit/9488744))



<a name="1.4.4"></a>
## [1.4.4](https://github.com/opteo/google-ads-node/compare/v1.4.3...v1.4.4) (2019-03-21)


### Bug Fixes

* **fields:** another invalid field ([4b01154](https://github.com/opteo/google-ads-node/commit/4b01154))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/opteo/google-ads-node/compare/v1.4.2...v1.4.3) (2019-03-21)


### Bug Fixes

* **fields:** temporarily remove fields which cause internal api errors ([b5ac79f](https://github.com/opteo/google-ads-node/commit/b5ac79f))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/opteo/google-ads-node/compare/v1.4.1...v1.4.2) (2019-03-21)


### Bug Fixes

* **fields:** include selectable with fields in resource field types ([57e2fe9](https://github.com/opteo/google-ads-node/commit/57e2fe9))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/opteo/google-ads-node/compare/v1.4.0...v1.4.1) (2019-03-20)


### Bug Fixes

* **fields:** make sure unselectable fields are added to field types ([448f02f](https://github.com/opteo/google-ads-node/commit/448f02f))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/opteo/google-ads-node/compare/v1.3.3...v1.4.0) (2019-03-18)


### Bug Fixes

* **interceptors:** cleanup of error interceptor + use google ads error pb ([e4cbe86](https://github.com/opteo/google-ads-node/commit/e4cbe86))
* **utils:** added enum check when converting objects to pb format ([2ad04a1](https://github.com/opteo/google-ads-node/commit/2ad04a1))
* **utils:** ensure resource names are normal strings and not a protobuf string instance ([37a2087](https://github.com/opteo/google-ads-node/commit/37a2087))


### Features

* **utils:** added getFieldMask method to generate FieldMask instance from resource object ([73a289e](https://github.com/opteo/google-ads-node/commit/73a289e))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/opteo/google-ads-node/compare/v1.3.2...v1.3.3) (2019-03-15)


### Bug Fixes

* **fields:** use snakecase for resource field value definitions ([c370960](https://github.com/opteo/google-ads-node/commit/c370960))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/opteo/google-ads-node/compare/v1.3.1...v1.3.2) (2019-03-15)


### Bug Fixes

* **parsing:** remove undefined properties even if they're defined in the field mask ([8a6ccea](https://github.com/opteo/google-ads-node/commit/8a6ccea))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/opteo/google-ads-node/compare/v1.3.0...v1.3.1) (2019-03-15)


### Bug Fixes

* **fields:** ignore const names ([b5bdc14](https://github.com/opteo/google-ads-node/commit/b5bdc14))
* **fields:** more types and minor changes to fields ([538b3d5](https://github.com/opteo/google-ads-node/commit/538b3d5))
* **tslint:** ignore variable name constraint ([990777d](https://github.com/opteo/google-ads-node/commit/990777d))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/opteo/google-ads-node/compare/v1.2.0...v1.3.0) (2019-03-14)


### Bug Fixes

* **utils:** minor linting changes ([b1b69a6](https://github.com/opteo/google-ads-node/commit/b1b69a6))


### Features

* **client:** added new buildResource method for translating objects to protobufs ([aededa6](https://github.com/opteo/google-ads-node/commit/aededa6))
* **fields:** added script for generating google ads field types ([f56719f](https://github.com/opteo/google-ads-node/commit/f56719f))
* **makefile:** copy pbjs generated resources to protos when compiling ([e964833](https://github.com/opteo/google-ads-node/commit/e964833))
* **package:** new dependencies ([c10223b](https://github.com/opteo/google-ads-node/commit/c10223b))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/opteo/google-ads-node/compare/v1.1.1...v1.2.0) (2019-03-11)


### Bug Fixes

* **parsing:** minor fixes for different api response cases ([17322c6](https://github.com/opteo/google-ads-node/commit/17322c6))
* **utils:** make sure list field names don't have grpc added postfix ([4d5aaa2](https://github.com/opteo/google-ads-node/commit/4d5aaa2))


### Features

* **protos:** added custom pb to ts compiler ([eb4cb77](https://github.com/opteo/google-ads-node/commit/eb4cb77))



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
