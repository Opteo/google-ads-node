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
var google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_criterion_simulation_service_pb.js');
var google_ads_googleads_v1_resources_campaign_criterion_simulation_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_criterion_simulation_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_CampaignCriterionSimulation(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CampaignCriterionSimulation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CampaignCriterionSimulation(buffer_arg) {
  return google_ads_googleads_v1_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCampaignCriterionSimulationRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb.GetCampaignCriterionSimulationRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCampaignCriterionSimulationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCampaignCriterionSimulationRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb.GetCampaignCriterionSimulationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the CampaignCriterionSimulation service.
//
// Service to fetch campaign criterion simulations.
var CampaignCriterionSimulationServiceService = exports.CampaignCriterionSimulationServiceService = {
  // Returns the requested campaign criterion simulation in full detail.
  getCampaignCriterionSimulation: {
    path: '/google.ads.googleads.v1.services.CampaignCriterionSimulationService/GetCampaignCriterionSimulation',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_criterion_simulation_service_pb.GetCampaignCriterionSimulationRequest,
    responseType: google_ads_googleads_v1_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCampaignCriterionSimulationRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCampaignCriterionSimulationRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CampaignCriterionSimulation,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CampaignCriterionSimulation,
  },
};

exports.CampaignCriterionSimulationServiceClient = grpc.makeGenericClientConstructor(CampaignCriterionSimulationServiceService);
