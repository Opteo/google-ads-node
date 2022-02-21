<p align="center">
  <a href="https://github.com/opteo/google-ads-node">
    Google Ads Node
  </a>
</p>

<p align="center">
  Google Ads API client library for Node.js
</p>
<!-- &circle-token=ab3cda2c83e0a13712c96c088871e16ead2b78c7 -->

<p align="center">
  <a href="https://developers.google.com/google-ads/api/docs/release-notes">
    <img src="https://img.shields.io/badge/google%20ads-v10-009688.svg?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/google-ads-node">
    <img src="https://img.shields.io/npm/v/google-ads-node.svg?style=flat-square">
  </a>
  <a>
    <img src="https://img.shields.io/npm/dm/google-ads-node.svg?style=flat-square">
    </a>
</p>

<p align="center">
  <a href="https://opteo.com">
    <img src="https://app.opteo.com/icons/logo.svg">
  </a>
</p>

## ⚠️ Warning ⚠️

You're probably looking for our easy-to-use Google Ads API client library [google-ads-api](https://github.com/opteo/google-ads-api).

This library (google-ads-node) is the compiled output of the experimental [Google Ads API Bazel build files](https://github.com/googleapis/googleapis/tree/master/google/ads/googleads#build-files-experimental), and will require some work to use as a standalone library, for which we currently provide no documentation.

## Install

```
npm install google-ads-node
```

## Standalone

_Documentation for this will be released soon_

## Upgrading API Versions

1. Fetch the latest changes in [Opteo/gax-nodejs](https://github.com/Opteo/gax-nodejs).
1. Update the official google-gax dependency to the latest version in `package.json`.
1. Update `GOOGLE_ADS_VERSION` in the Makefile to the latest version (if required).
1. Run `make protos` to pull in the new protos and compile them.
1. If upgrading to a new major version delete the old version folders from `package/googleads-nodejs/protos/google/ads/googleads/{OLD_VERSION}`, `package/googleads-nodejs/src/{OLD_VERSION}` and `package/googleads-nodejs/samples/generated/{OLD_VERSION}`.
1. Run `yarn` to prepare the package and install the latest dependencies.
1. Run `yarn test` to make sure everything worked (you may need to update the version numbers here).
1. Double check that any files that should have been updated have been.
1. Update the readme to reflect the new Google Ads API version number
1. Make a pull request, get it approved and merged into `master`.
1. Publish to npm.
