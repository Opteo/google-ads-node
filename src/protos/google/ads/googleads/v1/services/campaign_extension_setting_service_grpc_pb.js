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
var google_ads_googleads_v1_services_campaign_extension_setting_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_extension_setting_service_pb.js');
var google_ads_googleads_v1_resources_campaign_extension_setting_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_extension_setting_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_CampaignExtensionSetting(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_campaign_extension_setting_pb.CampaignExtensionSetting)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CampaignExtensionSetting');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CampaignExtensionSetting(buffer_arg) {
  return google_ads_googleads_v1_resources_campaign_extension_setting_pb.CampaignExtensionSetting.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCampaignExtensionSettingRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_extension_setting_service_pb.GetCampaignExtensionSettingRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCampaignExtensionSettingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCampaignExtensionSettingRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_extension_setting_service_pb.GetCampaignExtensionSettingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignExtensionSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignExtensionSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the CampaignExtensionSetting service.
//
// Service to manage campaign extension settings.
var CampaignExtensionSettingServiceService = exports.CampaignExtensionSettingServiceService = {
  // Returns the requested campaign extension setting in full detail.
  getCampaignExtensionSetting: {
    path: '/google.ads.googleads.v1.services.CampaignExtensionSettingService/GetCampaignExtensionSetting',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_extension_setting_service_pb.GetCampaignExtensionSettingRequest,
    responseType: google_ads_googleads_v1_resources_campaign_extension_setting_pb.CampaignExtensionSetting,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCampaignExtensionSettingRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCampaignExtensionSettingRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CampaignExtensionSetting,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CampaignExtensionSetting,
  },
  // Creates, updates, or removes campaign extension settings. Operation
  // statuses are returned.
  mutateCampaignExtensionSettings: {
    path: '/google.ads.googleads.v1.services.CampaignExtensionSettingService/MutateCampaignExtensionSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsRequest,
    responseType: google_ads_googleads_v1_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignExtensionSettingsResponse,
  },
};

exports.CampaignExtensionSettingServiceClient = grpc.makeGenericClientConstructor(CampaignExtensionSettingServiceService);
