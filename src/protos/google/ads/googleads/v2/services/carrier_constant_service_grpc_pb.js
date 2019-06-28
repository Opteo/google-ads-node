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
var google_ads_googleads_v2_services_carrier_constant_service_pb = require('../../../../../google/ads/googleads/v2/services/carrier_constant_service_pb.js');
var google_ads_googleads_v2_resources_carrier_constant_pb = require('../../../../../google/ads/googleads/v2/resources/carrier_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_CarrierConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.CarrierConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_CarrierConstant(buffer_arg) {
  return google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetCarrierConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_carrier_constant_service_pb.GetCarrierConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetCarrierConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetCarrierConstantRequest(buffer_arg) {
  return google_ads_googleads_v2_services_carrier_constant_service_pb.GetCarrierConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the carrier constant service.
//
// Service to fetch carrier constants.
var CarrierConstantServiceService = exports.CarrierConstantServiceService = {
  // Returns the requested carrier constant in full detail.
  getCarrierConstant: {
    path: '/google.ads.googleads.v2.services.CarrierConstantService/GetCarrierConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_carrier_constant_service_pb.GetCarrierConstantRequest,
    responseType: google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetCarrierConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetCarrierConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_CarrierConstant,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_CarrierConstant,
  },
};

exports.CarrierConstantServiceClient = grpc.makeGenericClientConstructor(CarrierConstantServiceService);
