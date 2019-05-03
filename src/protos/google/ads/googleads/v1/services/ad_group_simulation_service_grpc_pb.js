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
var google_ads_googleads_v1_services_ad_group_simulation_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_simulation_service_pb.js');
var google_ads_googleads_v1_resources_ad_group_simulation_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_simulation_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_AdGroupSimulation(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_ad_group_simulation_pb.AdGroupSimulation)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.AdGroupSimulation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_AdGroupSimulation(buffer_arg) {
  return google_ads_googleads_v1_resources_ad_group_simulation_pb.AdGroupSimulation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetAdGroupSimulationRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetAdGroupSimulationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetAdGroupSimulationRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the AdGroupSimulation service.
//
// Service to fetch ad group simulations.
var AdGroupSimulationServiceService = exports.AdGroupSimulationServiceService = {
  // Returns the requested ad group simulation in full detail.
  getAdGroupSimulation: {
    path: '/google.ads.googleads.v1.services.AdGroupSimulationService/GetAdGroupSimulation',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_group_simulation_service_pb.GetAdGroupSimulationRequest,
    responseType: google_ads_googleads_v1_resources_ad_group_simulation_pb.AdGroupSimulation,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetAdGroupSimulationRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetAdGroupSimulationRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_AdGroupSimulation,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_AdGroupSimulation,
  },
};

exports.AdGroupSimulationServiceClient = grpc.makeGenericClientConstructor(AdGroupSimulationServiceService);
