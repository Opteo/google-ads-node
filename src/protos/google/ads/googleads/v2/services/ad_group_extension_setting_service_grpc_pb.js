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
var google_ads_googleads_v2_services_ad_group_extension_setting_service_pb = require('../../../../../google/ads/googleads/v2/services/ad_group_extension_setting_service_pb.js');
var google_ads_googleads_v2_resources_ad_group_extension_setting_pb = require('../../../../../google/ads/googleads/v2/resources/ad_group_extension_setting_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_AdGroupExtensionSetting(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.AdGroupExtensionSetting');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_AdGroupExtensionSetting(buffer_arg) {
  return google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAdGroupExtensionSettingRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.GetAdGroupExtensionSettingRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAdGroupExtensionSettingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAdGroupExtensionSettingRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.GetAdGroupExtensionSettingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdGroupExtensionSettingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdGroupExtensionSettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the AdGroupExtensionSetting service.
//
// Service to manage ad group extension settings.
var AdGroupExtensionSettingServiceService = exports.AdGroupExtensionSettingServiceService = {
  // Returns the requested ad group extension setting in full detail.
  getAdGroupExtensionSetting: {
    path: '/google.ads.googleads.v2.services.AdGroupExtensionSettingService/GetAdGroupExtensionSetting',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.GetAdGroupExtensionSettingRequest,
    responseType: google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAdGroupExtensionSettingRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAdGroupExtensionSettingRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_AdGroupExtensionSetting,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_AdGroupExtensionSetting,
  },
  // Creates, updates, or removes ad group extension settings. Operation
  // statuses are returned.
  mutateAdGroupExtensionSettings: {
    path: '/google.ads.googleads.v2.services.AdGroupExtensionSettingService/MutateAdGroupExtensionSettings',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsRequest,
    responseType: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdGroupExtensionSettingsResponse,
  },
};

exports.AdGroupExtensionSettingServiceClient = grpc.makeGenericClientConstructor(AdGroupExtensionSettingServiceService);
