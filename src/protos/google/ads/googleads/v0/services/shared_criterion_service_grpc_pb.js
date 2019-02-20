// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC.
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
var google_ads_googleads_v0_services_shared_criterion_service_pb = require('../../../../../google/ads/googleads/v0/services/shared_criterion_service_pb.js');
var google_ads_googleads_v0_resources_shared_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/shared_criterion_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_SharedCriterion(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_shared_criterion_pb.SharedCriterion)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.SharedCriterion');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_SharedCriterion(buffer_arg) {
  return google_ads_googleads_v0_resources_shared_criterion_pb.SharedCriterion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetSharedCriterionRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_shared_criterion_service_pb.GetSharedCriterionRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetSharedCriterionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetSharedCriterionRequest(buffer_arg) {
  return google_ads_googleads_v0_services_shared_criterion_service_pb.GetSharedCriterionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateSharedCriteriaRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriteriaRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateSharedCriteriaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateSharedCriteriaRequest(buffer_arg) {
  return google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriteriaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateSharedCriteriaResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriteriaResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateSharedCriteriaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateSharedCriteriaResponse(buffer_arg) {
  return google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriteriaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage shared criteria.
var SharedCriterionServiceService = exports.SharedCriterionServiceService = {
  // Returns the requested shared criterion in full detail.
  getSharedCriterion: {
    path: '/google.ads.googleads.v0.services.SharedCriterionService/GetSharedCriterion',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_shared_criterion_service_pb.GetSharedCriterionRequest,
    responseType: google_ads_googleads_v0_resources_shared_criterion_pb.SharedCriterion,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetSharedCriterionRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetSharedCriterionRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_SharedCriterion,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_SharedCriterion,
  },
  // Creates or removes shared criteria. Operation statuses are returned.
  mutateSharedCriteria: {
    path: '/google.ads.googleads.v0.services.SharedCriterionService/MutateSharedCriteria',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriteriaRequest,
    responseType: google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriteriaResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateSharedCriteriaRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateSharedCriteriaRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateSharedCriteriaResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateSharedCriteriaResponse,
  },
};

exports.SharedCriterionServiceClient = grpc.makeGenericClientConstructor(SharedCriterionServiceService);
