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
var google_ads_googleads_v1_services_custom_interest_service_pb = require('../../../../../google/ads/googleads/v1/services/custom_interest_service_pb.js');
var google_ads_googleads_v1_resources_custom_interest_pb = require('../../../../../google/ads/googleads/v1/resources/custom_interest_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_ads_googleads_v1_resources_CustomInterest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_custom_interest_pb.CustomInterest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CustomInterest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CustomInterest(buffer_arg) {
  return google_ads_googleads_v1_resources_custom_interest_pb.CustomInterest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCustomInterestRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_custom_interest_service_pb.GetCustomInterestRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCustomInterestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCustomInterestRequest(buffer_arg) {
  return google_ads_googleads_v1_services_custom_interest_service_pb.GetCustomInterestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCustomInterestsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_custom_interest_service_pb.MutateCustomInterestsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCustomInterestsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCustomInterestsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_custom_interest_service_pb.MutateCustomInterestsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCustomInterestsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_custom_interest_service_pb.MutateCustomInterestsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCustomInterestsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCustomInterestsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_custom_interest_service_pb.MutateCustomInterestsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Custom Interest service.
//
// Service to manage custom interests.
var CustomInterestServiceService = exports.CustomInterestServiceService = {
  // Returns the requested custom interest in full detail.
  getCustomInterest: {
    path: '/google.ads.googleads.v1.services.CustomInterestService/GetCustomInterest',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_custom_interest_service_pb.GetCustomInterestRequest,
    responseType: google_ads_googleads_v1_resources_custom_interest_pb.CustomInterest,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCustomInterestRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCustomInterestRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CustomInterest,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CustomInterest,
  },
  // Creates or updates custom interests. Operation statuses are returned.
  mutateCustomInterests: {
    path: '/google.ads.googleads.v1.services.CustomInterestService/MutateCustomInterests',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_custom_interest_service_pb.MutateCustomInterestsRequest,
    responseType: google_ads_googleads_v1_services_custom_interest_service_pb.MutateCustomInterestsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCustomInterestsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCustomInterestsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCustomInterestsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCustomInterestsResponse,
  },
};

exports.CustomInterestServiceClient = grpc.makeGenericClientConstructor(CustomInterestServiceService);
