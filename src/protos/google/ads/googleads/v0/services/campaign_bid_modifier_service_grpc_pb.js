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
var google_ads_googleads_v0_services_campaign_bid_modifier_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_bid_modifier_service_pb.js');
var google_ads_googleads_v0_resources_campaign_bid_modifier_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_bid_modifier_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_CampaignBidModifier(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_campaign_bid_modifier_pb.CampaignBidModifier)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.CampaignBidModifier');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_CampaignBidModifier(buffer_arg) {
  return google_ads_googleads_v0_resources_campaign_bid_modifier_pb.CampaignBidModifier.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetCampaignBidModifierRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.GetCampaignBidModifierRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetCampaignBidModifierRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetCampaignBidModifierRequest(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.GetCampaignBidModifierRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCampaignBidModifiersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersRequest(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCampaignBidModifiersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersResponse(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage campaign bid modifiers.
var CampaignBidModifierServiceService = exports.CampaignBidModifierServiceService = {
  // Returns the requested campaign bid modifier in full detail.
  getCampaignBidModifier: {
    path: '/google.ads.googleads.v0.services.CampaignBidModifierService/GetCampaignBidModifier',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.GetCampaignBidModifierRequest,
    responseType: google_ads_googleads_v0_resources_campaign_bid_modifier_pb.CampaignBidModifier,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetCampaignBidModifierRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetCampaignBidModifierRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_CampaignBidModifier,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_CampaignBidModifier,
  },
  // Creates, updates, or removes campaign bid modifiers.
  // Operation statuses are returned.
  mutateCampaignBidModifiers: {
    path: '/google.ads.googleads.v0.services.CampaignBidModifierService/MutateCampaignBidModifiers',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersRequest,
    responseType: google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifiersResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateCampaignBidModifiersResponse,
  },
};

exports.CampaignBidModifierServiceClient = grpc.makeGenericClientConstructor(CampaignBidModifierServiceService);
