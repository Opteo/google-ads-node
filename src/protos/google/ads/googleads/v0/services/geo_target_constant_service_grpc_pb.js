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
var google_ads_googleads_v0_services_geo_target_constant_service_pb = require('../../../../../google/ads/googleads/v0/services/geo_target_constant_service_pb.js');
var google_ads_googleads_v0_resources_geo_target_constant_pb = require('../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_ads_googleads_v0_resources_GeoTargetConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.GeoTargetConstant');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_GeoTargetConstant(buffer_arg) {
  return google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetGeoTargetConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetGeoTargetConstantRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetGeoTargetConstantRequest(buffer_arg) {
  return google_ads_googleads_v0_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.SuggestGeoTargetConstantsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.SuggestGeoTargetConstantsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch geo target constants.
var GeoTargetConstantServiceService = exports.GeoTargetConstantServiceService = {
  // Returns the requested geo target constant in full detail.
  getGeoTargetConstant: {
    path: '/google.ads.googleads.v0.services.GeoTargetConstantService/GetGeoTargetConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_geo_target_constant_service_pb.GetGeoTargetConstantRequest,
    responseType: google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetGeoTargetConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetGeoTargetConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_GeoTargetConstant,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_GeoTargetConstant,
  },
  // Returns GeoTargetConstant suggestions by location name or by resource name.
  suggestGeoTargetConstants: {
    path: '/google.ads.googleads.v0.services.GeoTargetConstantService/SuggestGeoTargetConstants',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsRequest,
    responseType: google_ads_googleads_v0_services_geo_target_constant_service_pb.SuggestGeoTargetConstantsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_SuggestGeoTargetConstantsResponse,
  },
};

exports.GeoTargetConstantServiceClient = grpc.makeGenericClientConstructor(GeoTargetConstantServiceService);
