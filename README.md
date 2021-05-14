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
    <img src="https://img.shields.io/badge/google%20ads-v6-009688.svg?style=flat-square">
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

1. Fetch the latest changes in https://github.com/Opteo/gax-nodejs.
2. Update the google-gax dependency to the latest version in `package.json`.
3. Update `GOOGLE_ADS_VERSION` in the Makefile to the latest version.
4. Run `yarn install` to get the latest google gax protos.
5. Run `make protos` to compile the protos.
6. Run `yarn prepare`.
7. Run `yarn test` to make sure everything worked.
8. Double check that any files that should have been updated have been.
9. Make a pull request, get it approved and merged into `master`.
10. Publish to npm.
