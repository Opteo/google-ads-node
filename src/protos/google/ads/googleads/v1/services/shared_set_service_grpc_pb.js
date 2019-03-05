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
var google_ads_googleads_v1_services_shared_set_service_pb = require('../../../../../google/ads/googleads/v1/services/shared_set_service_pb.js');
var google_ads_googleads_v1_resources_shared_set_pb = require('../../../../../google/ads/googleads/v1/resources/shared_set_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_SharedSet(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_shared_set_pb.SharedSet)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.SharedSet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_SharedSet(buffer_arg) {
  return google_ads_googleads_v1_resources_shared_set_pb.SharedSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetSharedSetRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetSharedSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetSharedSetRequest(buffer_arg) {
  return google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateSharedSetsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateSharedSetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateSharedSetsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateSharedSetsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateSharedSetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateSharedSetsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage shared sets.
var SharedSetServiceService = exports.SharedSetServiceService = {
  // Returns the requested shared set in full detail.
  getSharedSet: {
    path: '/google.ads.googleads.v1.services.SharedSetService/GetSharedSet',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_shared_set_service_pb.GetSharedSetRequest,
    responseType: google_ads_googleads_v1_resources_shared_set_pb.SharedSet,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetSharedSetRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetSharedSetRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_SharedSet,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_SharedSet,
  },
  // Creates, updates, or removes shared sets. Operation statuses are returned.
  mutateSharedSets: {
    path: '/google.ads.googleads.v1.services.SharedSetService/MutateSharedSets',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsRequest,
    responseType: google_ads_googleads_v1_services_shared_set_service_pb.MutateSharedSetsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateSharedSetsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateSharedSetsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateSharedSetsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateSharedSetsResponse,
  },
};

exports.SharedSetServiceClient = grpc.makeGenericClientConstructor(SharedSetServiceService);
