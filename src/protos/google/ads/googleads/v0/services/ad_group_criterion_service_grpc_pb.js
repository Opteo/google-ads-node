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
var google_ads_googleads_v0_services_ad_group_criterion_service_pb = require('../../../../../google/ads/googleads/v0/services/ad_group_criterion_service_pb.js');
var google_ads_googleads_v0_resources_ad_group_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_AdGroupCriterion(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.AdGroupCriterion');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_AdGroupCriterion(buffer_arg) {
  return google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetAdGroupCriterionRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetAdGroupCriterionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetAdGroupCriterionRequest(buffer_arg) {
  return google_ads_googleads_v0_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateAdGroupCriteriaRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaRequest(buffer_arg) {
  return google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateAdGroupCriteriaResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaResponse(buffer_arg) {
  return google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage ad group criteria.
var AdGroupCriterionServiceService = exports.AdGroupCriterionServiceService = {
  // Returns the requested criterion in full detail.
  getAdGroupCriterion: {
    path: '/google.ads.googleads.v0.services.AdGroupCriterionService/GetAdGroupCriterion',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_ad_group_criterion_service_pb.GetAdGroupCriterionRequest,
    responseType: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetAdGroupCriterionRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetAdGroupCriterionRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_AdGroupCriterion,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_AdGroupCriterion,
  },
  // Creates, updates, or removes criteria. Operation statuses are returned.
  mutateAdGroupCriteria: {
    path: '/google.ads.googleads.v0.services.AdGroupCriterionService/MutateAdGroupCriteria',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaRequest,
    responseType: google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriteriaResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateAdGroupCriteriaResponse,
  },
};

exports.AdGroupCriterionServiceClient = grpc.makeGenericClientConstructor(AdGroupCriterionServiceService);
