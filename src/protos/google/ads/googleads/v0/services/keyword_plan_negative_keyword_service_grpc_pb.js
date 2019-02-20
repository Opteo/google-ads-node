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
var google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb = require('../../../../../google/ads/googleads/v0/services/keyword_plan_negative_keyword_service_pb.js');
var google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_plan_negative_keyword_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_KeywordPlanNegativeKeyword(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.KeywordPlanNegativeKeyword');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_KeywordPlanNegativeKeyword(buffer_arg) {
  return google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetKeywordPlanNegativeKeywordRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.GetKeywordPlanNegativeKeywordRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetKeywordPlanNegativeKeywordRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetKeywordPlanNegativeKeywordRequest(buffer_arg) {
  return google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.GetKeywordPlanNegativeKeywordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.MutateKeywordPlanNegativeKeywordsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateKeywordPlanNegativeKeywordsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.MutateKeywordPlanNegativeKeywordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.MutateKeywordPlanNegativeKeywordsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateKeywordPlanNegativeKeywordsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.MutateKeywordPlanNegativeKeywordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage Keyword Plan negative keywords.
var KeywordPlanNegativeKeywordServiceService = exports.KeywordPlanNegativeKeywordServiceService = {
  // Returns the requested plan in full detail.
  getKeywordPlanNegativeKeyword: {
    path: '/google.ads.googleads.v0.services.KeywordPlanNegativeKeywordService/GetKeywordPlanNegativeKeyword',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.GetKeywordPlanNegativeKeywordRequest,
    responseType: google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetKeywordPlanNegativeKeywordRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetKeywordPlanNegativeKeywordRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_KeywordPlanNegativeKeyword,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_KeywordPlanNegativeKeyword,
  },
  // Creates, updates, or removes Keyword Plan negative keywords. Operation
  // statuses are returned.
  mutateKeywordPlanNegativeKeywords: {
    path: '/google.ads.googleads.v0.services.KeywordPlanNegativeKeywordService/MutateKeywordPlanNegativeKeywords',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.MutateKeywordPlanNegativeKeywordsRequest,
    responseType: google_ads_googleads_v0_services_keyword_plan_negative_keyword_service_pb.MutateKeywordPlanNegativeKeywordsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateKeywordPlanNegativeKeywordsResponse,
  },
};

exports.KeywordPlanNegativeKeywordServiceClient = grpc.makeGenericClientConstructor(KeywordPlanNegativeKeywordServiceService);
