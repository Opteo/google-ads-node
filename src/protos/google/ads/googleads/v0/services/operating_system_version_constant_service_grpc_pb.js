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
var google_ads_googleads_v0_services_operating_system_version_constant_service_pb = require('../../../../../google/ads/googleads/v0/services/operating_system_version_constant_service_pb.js');
var google_ads_googleads_v0_resources_operating_system_version_constant_pb = require('../../../../../google/ads/googleads/v0/resources/operating_system_version_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_OperatingSystemVersionConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.OperatingSystemVersionConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_OperatingSystemVersionConstant(buffer_arg) {
  return google_ads_googleads_v0_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetOperatingSystemVersionConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_operating_system_version_constant_service_pb.GetOperatingSystemVersionConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetOperatingSystemVersionConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetOperatingSystemVersionConstantRequest(buffer_arg) {
  return google_ads_googleads_v0_services_operating_system_version_constant_service_pb.GetOperatingSystemVersionConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch Operating System Version constants.
var OperatingSystemVersionConstantServiceService = exports.OperatingSystemVersionConstantServiceService = {
  // Returns the requested OS version constant in full detail.
  getOperatingSystemVersionConstant: {
    path: '/google.ads.googleads.v0.services.OperatingSystemVersionConstantService/GetOperatingSystemVersionConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_operating_system_version_constant_service_pb.GetOperatingSystemVersionConstantRequest,
    responseType: google_ads_googleads_v0_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetOperatingSystemVersionConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetOperatingSystemVersionConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_OperatingSystemVersionConstant,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_OperatingSystemVersionConstant,
  },
};

exports.OperatingSystemVersionConstantServiceClient = grpc.makeGenericClientConstructor(OperatingSystemVersionConstantServiceService);
