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
var google_ads_googleads_v0_services_mobile_device_constant_service_pb = require('../../../../../google/ads/googleads/v0/services/mobile_device_constant_service_pb.js');
var google_ads_googleads_v0_resources_mobile_device_constant_pb = require('../../../../../google/ads/googleads/v0/resources/mobile_device_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_MobileDeviceConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_mobile_device_constant_pb.MobileDeviceConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.MobileDeviceConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_MobileDeviceConstant(buffer_arg) {
  return google_ads_googleads_v0_resources_mobile_device_constant_pb.MobileDeviceConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetMobileDeviceConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetMobileDeviceConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetMobileDeviceConstantRequest(buffer_arg) {
  return google_ads_googleads_v0_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch mobile device constants.
var MobileDeviceConstantServiceService = exports.MobileDeviceConstantServiceService = {
  // Returns the requested mobile device constant in full detail.
  getMobileDeviceConstant: {
    path: '/google.ads.googleads.v0.services.MobileDeviceConstantService/GetMobileDeviceConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_mobile_device_constant_service_pb.GetMobileDeviceConstantRequest,
    responseType: google_ads_googleads_v0_resources_mobile_device_constant_pb.MobileDeviceConstant,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetMobileDeviceConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetMobileDeviceConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_MobileDeviceConstant,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_MobileDeviceConstant,
  },
};

exports.MobileDeviceConstantServiceClient = grpc.makeGenericClientConstructor(MobileDeviceConstantServiceService);
