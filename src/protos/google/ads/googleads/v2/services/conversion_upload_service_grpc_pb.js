// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
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
//
'use strict';
var grpc = require('grpc');
var google_ads_googleads_v2_services_conversion_upload_service_pb = require('../../../../../google/ads/googleads/v2/services/conversion_upload_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_services_UploadCallConversionsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_conversion_upload_service_pb.UploadCallConversionsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.UploadCallConversionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_UploadCallConversionsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_conversion_upload_service_pb.UploadCallConversionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_UploadCallConversionsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_conversion_upload_service_pb.UploadCallConversionsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.UploadCallConversionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_UploadCallConversionsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_conversion_upload_service_pb.UploadCallConversionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_UploadClickConversionsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_conversion_upload_service_pb.UploadClickConversionsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.UploadClickConversionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_UploadClickConversionsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_conversion_upload_service_pb.UploadClickConversionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_UploadClickConversionsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_conversion_upload_service_pb.UploadClickConversionsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.UploadClickConversionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_UploadClickConversionsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_conversion_upload_service_pb.UploadClickConversionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to upload conversions.
var ConversionUploadServiceService = exports.ConversionUploadServiceService = {
  // Processes the given click conversions.
  uploadClickConversions: {
    path: '/google.ads.googleads.v2.services.ConversionUploadService/UploadClickConversions',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_conversion_upload_service_pb.UploadClickConversionsRequest,
    responseType: google_ads_googleads_v2_services_conversion_upload_service_pb.UploadClickConversionsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_UploadClickConversionsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_UploadClickConversionsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_UploadClickConversionsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_UploadClickConversionsResponse,
  },
  // Processes the given call conversions.
  uploadCallConversions: {
    path: '/google.ads.googleads.v2.services.ConversionUploadService/UploadCallConversions',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_conversion_upload_service_pb.UploadCallConversionsRequest,
    responseType: google_ads_googleads_v2_services_conversion_upload_service_pb.UploadCallConversionsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_UploadCallConversionsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_UploadCallConversionsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_UploadCallConversionsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_UploadCallConversionsResponse,
  },
};

exports.ConversionUploadServiceClient = grpc.makeGenericClientConstructor(ConversionUploadServiceService);
