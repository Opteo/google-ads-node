<p align="center">
  <a href="https://github.com/opteo/google-ads-node">
    Google Ads Node
  </a>
</p>

<p align="center">
  Google Ads API client library for Node.js
</p>

<p align="center">
  <a href="https://developers.google.com/google-ads/api/docs/release-notes">
    <img src="https://img.shields.io/badge/google%20ads-v17-009688.svg?style=flat-square">
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
    <img src="https://app.opteo.com/favicon.png" width="90" height="90">
  </a>
</p>

## ⚠️ Warning ⚠️

You're probably looking for our easy-to-use Google Ads API client library [google-ads-api](https://github.com/opteo/google-ads-api).

This library (google-ads-node) is the compiled output of the experimental [Google Ads API Bazel build files](https://github.com/googleapis/googleapis/tree/master/google/ads/googleads#build-files-experimental), and will require some work to use as a standalone library, for which we currently provide no documentation.

## Install

```
npm install google-ads-node
```

## Upgrading API Versions

1. Update to the latest `gapic-tools` version in `/package/googleads-nodejs/package.json`.
1. Update to the latest `google-gax` version in `/package/googleads-nodejs/package.json` & `/package.json`.
1. Update `GOOGLE_ADS_VERSION` in the Makefile to the latest version (if required).
1. Run `make protos` to pull in the new protos and compile them. This command will take around 10 minutes. There are often errors here that need to be fixed due to changes in bazel, the docker image, or the protos themselves. Fix these errors as they come up.
1. If upgrading to a new major version delete the old version folders from `package/googleads-nodejs/protos/google/ads/googleads/{OLD_VERSION}`, `package/googleads-nodejs/src/{OLD_VERSION}` and `package/googleads-nodejs/samples/generated/{OLD_VERSION}`.
1. Run `yarn` to prepare the package and install the latest dependencies.
1. You may find that the tsc build fails because of camelcase issues. If so, make sure that the `compile-protos` command in `/package/googleads-nodejs/package.json` includes all required arguments, like so: `compileProtos --keep-case --force-number src`
1. Update any references to old version numbers in `tests/protos.js`.
1. Run `yarn test` to make sure everything worked.
1. Double check that any files that should have been updated have been.
1. Update the readme to reflect the new Google Ads API version number
1. Make a pull request, get it approved and merged into `master`.
1. Publish to npm.
