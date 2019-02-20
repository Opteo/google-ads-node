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
var google_ads_googleads_v0_services_keyword_plan_campaign_service_pb = require('../../../../../google/ads/googleads/v0/services/keyword_plan_campaign_service_pb.js');
var google_ads_googleads_v0_resources_keyword_plan_campaign_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_plan_campaign_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_KeywordPlanCampaign(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_keyword_plan_campaign_pb.KeywordPlanCampaign)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.KeywordPlanCampaign');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_KeywordPlanCampaign(buffer_arg) {
  return google_ads_googleads_v0_resources_keyword_plan_campaign_pb.KeywordPlanCampaign.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetKeywordPlanCampaignRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.GetKeywordPlanCampaignRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetKeywordPlanCampaignRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetKeywordPlanCampaignRequest(buffer_arg) {
  return google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.GetKeywordPlanCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateKeywordPlanCampaignsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateKeywordPlanCampaignsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage Keyword Plan campaigns.
var KeywordPlanCampaignServiceService = exports.KeywordPlanCampaignServiceService = {
  // Returns the requested Keyword Plan campaign in full detail.
  getKeywordPlanCampaign: {
    path: '/google.ads.googleads.v0.services.KeywordPlanCampaignService/GetKeywordPlanCampaign',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.GetKeywordPlanCampaignRequest,
    responseType: google_ads_googleads_v0_resources_keyword_plan_campaign_pb.KeywordPlanCampaign,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetKeywordPlanCampaignRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetKeywordPlanCampaignRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_KeywordPlanCampaign,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_KeywordPlanCampaign,
  },
  // Creates, updates, or removes Keyword Plan campaigns. Operation statuses are
  // returned.
  mutateKeywordPlanCampaigns: {
    path: '/google.ads.googleads.v0.services.KeywordPlanCampaignService/MutateKeywordPlanCampaigns',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsRequest,
    responseType: google_ads_googleads_v0_services_keyword_plan_campaign_service_pb.MutateKeywordPlanCampaignsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateKeywordPlanCampaignsResponse,
  },
};

exports.KeywordPlanCampaignServiceClient = grpc.makeGenericClientConstructor(KeywordPlanCampaignServiceService);
