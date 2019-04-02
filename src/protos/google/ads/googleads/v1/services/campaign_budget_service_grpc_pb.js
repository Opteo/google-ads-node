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
var google_ads_googleads_v1_services_campaign_budget_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_budget_service_pb.js');
var google_ads_googleads_v1_resources_campaign_budget_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_budget_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_CampaignBudget(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_campaign_budget_pb.CampaignBudget)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CampaignBudget');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CampaignBudget(buffer_arg) {
  return google_ads_googleads_v1_resources_campaign_budget_pb.CampaignBudget.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCampaignBudgetRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_budget_service_pb.GetCampaignBudgetRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCampaignBudgetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCampaignBudgetRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_budget_service_pb.GetCampaignBudgetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignBudgetsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignBudgetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignBudgetsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignBudgetsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignBudgetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignBudgetsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Campaign Budget service.
//
// Service to manage campaign budgets.
var CampaignBudgetServiceService = exports.CampaignBudgetServiceService = {
  // Returns the requested Campaign Budget in full detail.
  getCampaignBudget: {
    path: '/google.ads.googleads.v1.services.CampaignBudgetService/GetCampaignBudget',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_budget_service_pb.GetCampaignBudgetRequest,
    responseType: google_ads_googleads_v1_resources_campaign_budget_pb.CampaignBudget,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCampaignBudgetRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCampaignBudgetRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CampaignBudget,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CampaignBudget,
  },
  // Creates, updates, or removes campaign budgets. Operation statuses are
  // returned.
  mutateCampaignBudgets: {
    path: '/google.ads.googleads.v1.services.CampaignBudgetService/MutateCampaignBudgets',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_budget_service_pb.MutateCampaignBudgetsRequest,
    responseType: google_ads_googleads_v1_services_campaign_budget_service_pb.MutateCampaignBudgetsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignBudgetsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignBudgetsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignBudgetsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignBudgetsResponse,
  },
};

exports.CampaignBudgetServiceClient = grpc.makeGenericClientConstructor(CampaignBudgetServiceService);
