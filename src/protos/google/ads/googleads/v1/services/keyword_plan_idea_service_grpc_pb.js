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
var google_ads_googleads_v1_services_keyword_plan_idea_service_pb = require('../../../../../google/ads/googleads/v1/services/keyword_plan_idea_service_pb.js');
var google_ads_googleads_v1_common_keyword_plan_common_pb = require('../../../../../google/ads/googleads/v1/common/keyword_plan_common_pb.js');
var google_ads_googleads_v1_enums_keyword_plan_network_pb = require('../../../../../google/ads/googleads/v1/enums/keyword_plan_network_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_ads_googleads_v1_services_GenerateKeywordIdeaResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GenerateKeywordIdeaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GenerateKeywordIdeaResponse(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GenerateKeywordIdeasRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GenerateKeywordIdeasRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GenerateKeywordIdeasRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the keyword plan idea service.
//
// Service to generate keyword ideas.
var KeywordPlanIdeaServiceService = exports.KeywordPlanIdeaServiceService = {
  // Returns a list of keyword ideas.
  generateKeywordIdeas: {
    path: '/google.ads.googleads.v1.services.KeywordPlanIdeaService/GenerateKeywordIdeas',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeasRequest,
    responseType: google_ads_googleads_v1_services_keyword_plan_idea_service_pb.GenerateKeywordIdeaResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_GenerateKeywordIdeasRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GenerateKeywordIdeasRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_GenerateKeywordIdeaResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_GenerateKeywordIdeaResponse,
  },
};

exports.KeywordPlanIdeaServiceClient = grpc.makeGenericClientConstructor(KeywordPlanIdeaServiceService);
