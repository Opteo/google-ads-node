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
var google_ads_googleads_v1_services_campaign_criterion_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_criterion_service_pb.js');
var google_ads_googleads_v1_resources_campaign_criterion_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_criterion_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_CampaignCriterion(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CampaignCriterion');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CampaignCriterion(buffer_arg) {
  return google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCampaignCriterionRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_criterion_service_pb.GetCampaignCriterionRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCampaignCriterionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCampaignCriterionRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_criterion_service_pb.GetCampaignCriterionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignCriteriaRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignCriteriaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignCriteriaRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignCriteriaResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignCriteriaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignCriteriaResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Campaign Criterion service.
//
// Service to manage campaign criteria.
var CampaignCriterionServiceService = exports.CampaignCriterionServiceService = {
  // Returns the requested criterion in full detail.
  getCampaignCriterion: {
    path: '/google.ads.googleads.v1.services.CampaignCriterionService/GetCampaignCriterion',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_criterion_service_pb.GetCampaignCriterionRequest,
    responseType: google_ads_googleads_v1_resources_campaign_criterion_pb.CampaignCriterion,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCampaignCriterionRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCampaignCriterionRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CampaignCriterion,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CampaignCriterion,
  },
  // Creates, updates, or removes criteria. Operation statuses are returned.
  mutateCampaignCriteria: {
    path: '/google.ads.googleads.v1.services.CampaignCriterionService/MutateCampaignCriteria',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaRequest,
    responseType: google_ads_googleads_v1_services_campaign_criterion_service_pb.MutateCampaignCriteriaResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignCriteriaRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignCriteriaRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignCriteriaResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignCriteriaResponse,
  },
};

exports.CampaignCriterionServiceClient = grpc.makeGenericClientConstructor(CampaignCriterionServiceService);
