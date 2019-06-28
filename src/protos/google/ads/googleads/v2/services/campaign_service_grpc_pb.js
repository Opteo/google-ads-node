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
var google_ads_googleads_v2_services_campaign_service_pb = require('../../../../../google/ads/googleads/v2/services/campaign_service_pb.js');
var google_ads_googleads_v2_resources_campaign_pb = require('../../../../../google/ads/googleads/v2/resources/campaign_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_Campaign(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_campaign_pb.Campaign)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.Campaign');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_Campaign(buffer_arg) {
  return google_ads_googleads_v2_resources_campaign_pb.Campaign.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetCampaignRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_campaign_service_pb.GetCampaignRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetCampaignRequest(buffer_arg) {
  return google_ads_googleads_v2_services_campaign_service_pb.GetCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateCampaignsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateCampaignsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateCampaignsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateCampaignsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateCampaignsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateCampaignsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Campaign service.
//
// Service to manage campaigns.
var CampaignServiceService = exports.CampaignServiceService = {
  // Returns the requested campaign in full detail.
  getCampaign: {
    path: '/google.ads.googleads.v2.services.CampaignService/GetCampaign',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_campaign_service_pb.GetCampaignRequest,
    responseType: google_ads_googleads_v2_resources_campaign_pb.Campaign,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetCampaignRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetCampaignRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_Campaign,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_Campaign,
  },
  // Creates, updates, or removes campaigns. Operation statuses are returned.
  mutateCampaigns: {
    path: '/google.ads.googleads.v2.services.CampaignService/MutateCampaigns',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignsRequest,
    responseType: google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateCampaignsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateCampaignsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateCampaignsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateCampaignsResponse,
  },
};

exports.CampaignServiceClient = grpc.makeGenericClientConstructor(CampaignServiceService);
