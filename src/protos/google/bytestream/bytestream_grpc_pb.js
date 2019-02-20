// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var google_bytestream_bytestream_pb = require('../../google/bytestream/bytestream_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_bytestream_QueryWriteStatusRequest(arg) {
  if (!(arg instanceof google_bytestream_bytestream_pb.QueryWriteStatusRequest)) {
    throw new Error('Expected argument of type google.bytestream.QueryWriteStatusRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bytestream_QueryWriteStatusRequest(buffer_arg) {
  return google_bytestream_bytestream_pb.QueryWriteStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bytestream_QueryWriteStatusResponse(arg) {
  if (!(arg instanceof google_bytestream_bytestream_pb.QueryWriteStatusResponse)) {
    throw new Error('Expected argument of type google.bytestream.QueryWriteStatusResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bytestream_QueryWriteStatusResponse(buffer_arg) {
  return google_bytestream_bytestream_pb.QueryWriteStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bytestream_ReadRequest(arg) {
  if (!(arg instanceof google_bytestream_bytestream_pb.ReadRequest)) {
    throw new Error('Expected argument of type google.bytestream.ReadRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bytestream_ReadRequest(buffer_arg) {
  return google_bytestream_bytestream_pb.ReadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bytestream_ReadResponse(arg) {
  if (!(arg instanceof google_bytestream_bytestream_pb.ReadResponse)) {
    throw new Error('Expected argument of type google.bytestream.ReadResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bytestream_ReadResponse(buffer_arg) {
  return google_bytestream_bytestream_pb.ReadResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bytestream_WriteRequest(arg) {
  if (!(arg instanceof google_bytestream_bytestream_pb.WriteRequest)) {
    throw new Error('Expected argument of type google.bytestream.WriteRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bytestream_WriteRequest(buffer_arg) {
  return google_bytestream_bytestream_pb.WriteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_bytestream_WriteResponse(arg) {
  if (!(arg instanceof google_bytestream_bytestream_pb.WriteResponse)) {
    throw new Error('Expected argument of type google.bytestream.WriteResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_bytestream_WriteResponse(buffer_arg) {
  return google_bytestream_bytestream_pb.WriteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// #### Introduction
//
// The Byte Stream API enables a client to read and write a stream of bytes to
// and from a resource. Resources have names, and these names are supplied in
// the API calls below to identify the resource that is being read from or
// written to.
//
// All implementations of the Byte Stream API export the interface defined here:
//
// * `Read()`: Reads the contents of a resource.
//
// * `Write()`: Writes the contents of a resource. The client can call `Write()`
//   multiple times with the same resource and can check the status of the write
//   by calling `QueryWriteStatus()`.
//
// #### Service parameters and metadata
//
// The ByteStream API provides no direct way to access/modify any metadata
// associated with the resource.
//
// #### Errors
//
// The errors returned by the service are in the Google canonical error space.
var ByteStreamService = exports.ByteStreamService = {
  // `Read()` is used to retrieve the contents of a resource as a sequence
  // of bytes. The bytes are returned in a sequence of responses, and the
  // responses are delivered as the results of a server-side streaming RPC.
  read: {
    path: '/google.bytestream.ByteStream/Read',
    requestStream: false,
    responseStream: true,
    requestType: google_bytestream_bytestream_pb.ReadRequest,
    responseType: google_bytestream_bytestream_pb.ReadResponse,
    requestSerialize: serialize_google_bytestream_ReadRequest,
    requestDeserialize: deserialize_google_bytestream_ReadRequest,
    responseSerialize: serialize_google_bytestream_ReadResponse,
    responseDeserialize: deserialize_google_bytestream_ReadResponse,
  },
  // `Write()` is used to send the contents of a resource as a sequence of
  // bytes. The bytes are sent in a sequence of request protos of a client-side
  // streaming RPC.
  //
  // A `Write()` action is resumable. If there is an error or the connection is
  // broken during the `Write()`, the client should check the status of the
  // `Write()` by calling `QueryWriteStatus()` and continue writing from the
  // returned `committed_size`. This may be less than the amount of data the
  // client previously sent.
  //
  // Calling `Write()` on a resource name that was previously written and
  // finalized could cause an error, depending on whether the underlying service
  // allows over-writing of previously written resources.
  //
  // When the client closes the request channel, the service will respond with
  // a `WriteResponse`. The service will not view the resource as `complete`
  // until the client has sent a `WriteRequest` with `finish_write` set to
  // `true`. Sending any requests on a stream after sending a request with
  // `finish_write` set to `true` will cause an error. The client **should**
  // check the `WriteResponse` it receives to determine how much data the
  // service was able to commit and whether the service views the resource as
  // `complete` or not.
  write: {
    path: '/google.bytestream.ByteStream/Write',
    requestStream: true,
    responseStream: false,
    requestType: google_bytestream_bytestream_pb.WriteRequest,
    responseType: google_bytestream_bytestream_pb.WriteResponse,
    requestSerialize: serialize_google_bytestream_WriteRequest,
    requestDeserialize: deserialize_google_bytestream_WriteRequest,
    responseSerialize: serialize_google_bytestream_WriteResponse,
    responseDeserialize: deserialize_google_bytestream_WriteResponse,
  },
  // `QueryWriteStatus()` is used to find the `committed_size` for a resource
  // that is being written, which can then be used as the `write_offset` for
  // the next `Write()` call.
  //
  // If the resource does not exist (i.e., the resource has been deleted, or the
  // first `Write()` has not yet reached the service), this method returns the
  // error `NOT_FOUND`.
  //
  // The client **may** call `QueryWriteStatus()` at any time to determine how
  // much data has been processed for this resource. This is useful if the
  // client is buffering data and needs to know which data can be safely
  // evicted. For any sequence of `QueryWriteStatus()` calls for a given
  // resource name, the sequence of returned `committed_size` values will be
  // non-decreasing.
  queryWriteStatus: {
    path: '/google.bytestream.ByteStream/QueryWriteStatus',
    requestStream: false,
    responseStream: false,
    requestType: google_bytestream_bytestream_pb.QueryWriteStatusRequest,
    responseType: google_bytestream_bytestream_pb.QueryWriteStatusResponse,
    requestSerialize: serialize_google_bytestream_QueryWriteStatusRequest,
    requestDeserialize: deserialize_google_bytestream_QueryWriteStatusRequest,
    responseSerialize: serialize_google_bytestream_QueryWriteStatusResponse,
    responseDeserialize: deserialize_google_bytestream_QueryWriteStatusResponse,
  },
};

exports.ByteStreamClient = grpc.makeGenericClientConstructor(ByteStreamService);
