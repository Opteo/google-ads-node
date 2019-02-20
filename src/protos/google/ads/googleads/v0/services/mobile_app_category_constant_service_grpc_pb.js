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
var google_ads_googleads_v0_services_mobile_app_category_constant_service_pb = require('../../../../../google/ads/googleads/v0/services/mobile_app_category_constant_service_pb.js');
var google_ads_googleads_v0_resources_mobile_app_category_constant_pb = require('../../../../../google/ads/googleads/v0/resources/mobile_app_category_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_MobileAppCategoryConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.MobileAppCategoryConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_MobileAppCategoryConstant(buffer_arg) {
  return google_ads_googleads_v0_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetMobileAppCategoryConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetMobileAppCategoryConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetMobileAppCategoryConstantRequest(buffer_arg) {
  return google_ads_googleads_v0_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch mobile app category constants.
var MobileAppCategoryConstantServiceService = exports.MobileAppCategoryConstantServiceService = {
  // Returns the requested mobile app category constant.
  getMobileAppCategoryConstant: {
    path: '/google.ads.googleads.v0.services.MobileAppCategoryConstantService/GetMobileAppCategoryConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_mobile_app_category_constant_service_pb.GetMobileAppCategoryConstantRequest,
    responseType: google_ads_googleads_v0_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetMobileAppCategoryConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetMobileAppCategoryConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_MobileAppCategoryConstant,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_MobileAppCategoryConstant,
  },
};

exports.MobileAppCategoryConstantServiceClient = grpc.makeGenericClientConstructor(MobileAppCategoryConstantServiceService);
