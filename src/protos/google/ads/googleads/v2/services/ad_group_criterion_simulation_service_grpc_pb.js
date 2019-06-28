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
var google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb = require('../../../../../google/ads/googleads/v2/services/ad_group_criterion_simulation_service_pb.js');
var google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb = require('../../../../../google/ads/googleads/v2/resources/ad_group_criterion_simulation_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_AdGroupCriterionSimulation(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.AdGroupCriterionSimulation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_AdGroupCriterionSimulation(buffer_arg) {
  return google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAdGroupCriterionSimulationRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb.GetAdGroupCriterionSimulationRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAdGroupCriterionSimulationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAdGroupCriterionSimulationRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb.GetAdGroupCriterionSimulationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the AdGroupCriterionSimulation service.
//
// Service to fetch ad group criterion simulations.
var AdGroupCriterionSimulationServiceService = exports.AdGroupCriterionSimulationServiceService = {
  // Returns the requested ad group criterion simulation in full detail.
  getAdGroupCriterionSimulation: {
    path: '/google.ads.googleads.v2.services.AdGroupCriterionSimulationService/GetAdGroupCriterionSimulation',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_criterion_simulation_service_pb.GetAdGroupCriterionSimulationRequest,
    responseType: google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAdGroupCriterionSimulationRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAdGroupCriterionSimulationRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_AdGroupCriterionSimulation,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_AdGroupCriterionSimulation,
  },
};

exports.AdGroupCriterionSimulationServiceClient = grpc.makeGenericClientConstructor(AdGroupCriterionSimulationServiceService);
