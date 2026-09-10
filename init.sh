#!/bin/bash

set -e

cd package/googleads-nodejs

# get current version from Makefile and remove any old version folders
CURRENT_VERSION=$(awk -F'=' '/^GOOGLE_ADS_VERSION=/ {print $2}' ../../Makefile | tr -d '[:space:]')

if [ -z "$CURRENT_VERSION" ]; then
  echo "Error: Could not determine current version from Makefile." >&2
  exit 1
fi

CURRENT_VERSION_NUM=$(echo "$CURRENT_VERSION" | tr -d 'v')
PREVIOUS_VERSION_NUM=$((CURRENT_VERSION_NUM - 1))
PREVIOUS_VERSION="v${PREVIOUS_VERSION_NUM}"

echo "Removing $PREVIOUS_VERSION directories..."
rm -rf "src/$PREVIOUS_VERSION" "protos/google/ads/googleads/$PREVIOUS_VERSION" "samples/generated/$PREVIOUS_VERSION" "build/src/$PREVIOUS_VERSION" "build/protos/google/ads/googleads/$PREVIOUS_VERSION"

# install dependencies + compile proto files in sub package
npm install

# remove large auto-generated tests we don't need
rm -rf build/test build/system-test

# copy the build up to the main package directory
rm -rf ../../build
cp -r build ../../