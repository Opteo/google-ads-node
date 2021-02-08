#!/bin/bash

# install dependencies + compile proto files in sub package
cd package/googleads-nodejs
npm install 

# remove large auto-generated tests we don't need
rm -rf build/test build/system-test 

# copy the build up to the main package directory
cp -r build ../../

# horrible hack to prevent long.js from being removed
# please suggest a better solution if you know how
cd ../../
sed -i '.bak' '/var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;/a \
$util.Long = null; \
' build/protos/protos.js