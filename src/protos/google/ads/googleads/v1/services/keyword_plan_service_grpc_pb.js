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
var google_ads_googleads_v1_services_keyword_plan_service_pb = require('../../../../../google/ads/googleads/v1/services/keyword_plan_service_pb.js');
var google_ads_googleads_v1_common_keyword_plan_common_pb = require('../../../../../google/ads/googleads/v1/common/keyword_plan_common_pb.js');
var google_ads_googleads_v1_resources_keyword_plan_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_plan_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_KeywordPlan(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.KeywordPlan');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_KeywordPlan(buffer_arg) {
  return google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GenerateForecastMetricsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GenerateForecastMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GenerateForecastMetricsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GenerateForecastMetricsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GenerateForecastMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GenerateForecastMetricsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GenerateHistoricalMetricsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GenerateHistoricalMetricsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetKeywordPlanRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_service_pb.GetKeywordPlanRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetKeywordPlanRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetKeywordPlanRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_service_pb.GetKeywordPlanRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateKeywordPlansRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateKeywordPlansRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateKeywordPlansRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateKeywordPlansResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateKeywordPlansResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateKeywordPlansResponse(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage keyword plans.
var KeywordPlanServiceService = exports.KeywordPlanServiceService = {
  // Returns the requested plan in full detail.
  getKeywordPlan: {
    path: '/google.ads.googleads.v1.services.KeywordPlanService/GetKeywordPlan',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_plan_service_pb.GetKeywordPlanRequest,
    responseType: google_ads_googleads_v1_resources_keyword_plan_pb.KeywordPlan,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetKeywordPlanRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetKeywordPlanRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_KeywordPlan,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_KeywordPlan,
  },
  // Creates, updates, or removes keyword plans. Operation statuses are
  // returned.
  mutateKeywordPlans: {
    path: '/google.ads.googleads.v1.services.KeywordPlanService/MutateKeywordPlans',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansRequest,
    responseType: google_ads_googleads_v1_services_keyword_plan_service_pb.MutateKeywordPlansResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateKeywordPlansRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateKeywordPlansRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateKeywordPlansResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateKeywordPlansResponse,
  },
  // Returns the requested Keyword Plan forecasts.
  generateForecastMetrics: {
    path: '/google.ads.googleads.v1.services.KeywordPlanService/GenerateForecastMetrics',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsRequest,
    responseType: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateForecastMetricsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_GenerateForecastMetricsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GenerateForecastMetricsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_GenerateForecastMetricsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_GenerateForecastMetricsResponse,
  },
  // Returns the requested Keyword Plan historical metrics.
  generateHistoricalMetrics: {
    path: '/google.ads.googleads.v1.services.KeywordPlanService/GenerateHistoricalMetrics',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsRequest,
    responseType: google_ads_googleads_v1_services_keyword_plan_service_pb.GenerateHistoricalMetricsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_GenerateHistoricalMetricsResponse,
  },
};

exports.KeywordPlanServiceClient = grpc.makeGenericClientConstructor(KeywordPlanServiceService);
