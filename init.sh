#!/bin/bash

# install dependencies + compile proto files in sub package
cd package/googleads-nodejs
npm install 

# remove large auto-generated tests we don't need
rm -rf build/test build/system-test 

# copy the build up to the main package directory
cp -r build ../../