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
var google_ads_googleads_v2_services_campaign_label_service_pb = require('../../../../../google/ads/googleads/v2/services/campaign_label_service_pb.js');
var google_ads_googleads_v2_resources_campaign_label_pb = require('../../../../../google/ads/googleads/v2/resources/campaign_label_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_CampaignLabel(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.CampaignLabel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_CampaignLabel(buffer_arg) {
  return google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetCampaignLabelRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_campaign_label_service_pb.GetCampaignLabelRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetCampaignLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetCampaignLabelRequest(buffer_arg) {
  return google_ads_googleads_v2_services_campaign_label_service_pb.GetCampaignLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateCampaignLabelsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateCampaignLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateCampaignLabelsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateCampaignLabelsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateCampaignLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateCampaignLabelsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Campaign Label service.
//
// Service to manage labels on campaigns.
var CampaignLabelServiceService = exports.CampaignLabelServiceService = {
  // Returns the requested campaign-label relationship in full detail.
  getCampaignLabel: {
    path: '/google.ads.googleads.v2.services.CampaignLabelService/GetCampaignLabel',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_campaign_label_service_pb.GetCampaignLabelRequest,
    responseType: google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetCampaignLabelRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetCampaignLabelRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_CampaignLabel,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_CampaignLabel,
  },
  // Creates and removes campaign-label relationships.
  // Operation statuses are returned.
  mutateCampaignLabels: {
    path: '/google.ads.googleads.v2.services.CampaignLabelService/MutateCampaignLabels',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsRequest,
    responseType: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateCampaignLabelsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateCampaignLabelsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateCampaignLabelsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateCampaignLabelsResponse,
  },
};

exports.CampaignLabelServiceClient = grpc.makeGenericClientConstructor(CampaignLabelServiceService);
