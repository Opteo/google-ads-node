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
var google_ads_googleads_v1_services_keyword_plan_keyword_service_pb = require('../../../../../google/ads/googleads/v1/services/keyword_plan_keyword_service_pb.js');
var google_ads_googleads_v1_resources_keyword_plan_keyword_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_plan_keyword_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_KeywordPlanKeyword(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.KeywordPlanKeyword');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_KeywordPlanKeyword(buffer_arg) {
  return google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetKeywordPlanKeywordRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.GetKeywordPlanKeywordRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetKeywordPlanKeywordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetKeywordPlanKeywordRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.GetKeywordPlanKeywordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateKeywordPlanKeywordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateKeywordPlanKeywordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage Keyword Plan ad group keywords.
var KeywordPlanKeywordServiceService = exports.KeywordPlanKeywordServiceService = {
  // Returns the requested Keyword Plan keyword in full detail.
  getKeywordPlanKeyword: {
    path: '/google.ads.googleads.v1.services.KeywordPlanKeywordService/GetKeywordPlanKeyword',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.GetKeywordPlanKeywordRequest,
    responseType: google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetKeywordPlanKeywordRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetKeywordPlanKeywordRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_KeywordPlanKeyword,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_KeywordPlanKeyword,
  },
  // Creates, updates, or removes Keyword Plan keywords. Operation statuses are
  // returned.
  mutateKeywordPlanKeywords: {
    path: '/google.ads.googleads.v1.services.KeywordPlanKeywordService/MutateKeywordPlanKeywords',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsRequest,
    responseType: google_ads_googleads_v1_services_keyword_plan_keyword_service_pb.MutateKeywordPlanKeywordsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateKeywordPlanKeywordsResponse,
  },
};

exports.KeywordPlanKeywordServiceClient = grpc.makeGenericClientConstructor(KeywordPlanKeywordServiceService);
