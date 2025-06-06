#!/bin/bash

set -e

# install dependencies + compile proto files in sub package
cd package/googleads-nodejs
npm install

# get current version from Makefile and remove any old version folders
CURRENT_VERSION=$(awk -F'=' '/^GOOGLE_ADS_VERSION=/ {print $2}' ../../Makefile | tr -d '[:space:]')

if [ -z "$CURRENT_VERSION" ]; then
  echo "Error: Could not determine current version from Makefile." >&2
  exit 1
fi

CURRENT_VERSION_NUM=$(echo "$CURRENT_VERSION" | tr -d 'v')
PREVIOUS_VERSION_NUM=$((CURRENT_VERSION_NUM - 1))
PREVIOUS_VERSION="v${PREVIOUS_VERSION_NUM}"

echo "Searching for old version directories to remove ($PREVIOUS_VERSION)..."
DIRECTORIES_TO_DELETE=$(find . -type d -name "${PREVIOUS_VERSION}")

if [ -z "$DIRECTORIES_TO_DELETE" ]; then
  echo "No old version directories found."
else
  echo "Found and deleting the following directories:"
  echo "$DIRECTORIES_TO_DELETE"
  echo "$DIRECTORIES_TO_DELETE" | xargs rm -rf
fi

# remove large auto-generated tests we don't need
rm -rf build/test build/system-test

# copy the build up to the main package directory
cp -r build ../../