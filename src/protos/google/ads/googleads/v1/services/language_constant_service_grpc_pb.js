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
var google_ads_googleads_v1_services_language_constant_service_pb = require('../../../../../google/ads/googleads/v1/services/language_constant_service_pb.js');
var google_ads_googleads_v1_resources_language_constant_pb = require('../../../../../google/ads/googleads/v1/resources/language_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_LanguageConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_language_constant_pb.LanguageConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.LanguageConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_LanguageConstant(buffer_arg) {
  return google_ads_googleads_v1_resources_language_constant_pb.LanguageConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetLanguageConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_language_constant_service_pb.GetLanguageConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetLanguageConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetLanguageConstantRequest(buffer_arg) {
  return google_ads_googleads_v1_services_language_constant_service_pb.GetLanguageConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch language constants.
var LanguageConstantServiceService = exports.LanguageConstantServiceService = {
  // Returns the requested language constant.
  getLanguageConstant: {
    path: '/google.ads.googleads.v1.services.LanguageConstantService/GetLanguageConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_language_constant_service_pb.GetLanguageConstantRequest,
    responseType: google_ads_googleads_v1_resources_language_constant_pb.LanguageConstant,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetLanguageConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetLanguageConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_LanguageConstant,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_LanguageConstant,
  },
};

exports.LanguageConstantServiceClient = grpc.makeGenericClientConstructor(LanguageConstantServiceService);
