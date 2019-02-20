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
var google_ads_googleads_v0_services_campaign_shared_set_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_shared_set_service_pb.js');
var google_ads_googleads_v0_resources_campaign_shared_set_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_shared_set_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_CampaignSharedSet(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_campaign_shared_set_pb.CampaignSharedSet)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.CampaignSharedSet');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_CampaignSharedSet(buffer_arg) {
  return google_ads_googleads_v0_resources_campaign_shared_set_pb.CampaignSharedSet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetCampaignSharedSetRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_shared_set_service_pb.GetCampaignSharedSetRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetCampaignSharedSetRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetCampaignSharedSetRequest(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_shared_set_service_pb.GetCampaignSharedSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCampaignSharedSetsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCampaignSharedSetsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage campaign shared sets.
var CampaignSharedSetServiceService = exports.CampaignSharedSetServiceService = {
  // Returns the requested campaign shared set in full detail.
  getCampaignSharedSet: {
    path: '/google.ads.googleads.v0.services.CampaignSharedSetService/GetCampaignSharedSet',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_campaign_shared_set_service_pb.GetCampaignSharedSetRequest,
    responseType: google_ads_googleads_v0_resources_campaign_shared_set_pb.CampaignSharedSet,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetCampaignSharedSetRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetCampaignSharedSetRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_CampaignSharedSet,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_CampaignSharedSet,
  },
  // Creates or removes campaign shared sets. Operation statuses are returned.
  mutateCampaignSharedSets: {
    path: '/google.ads.googleads.v0.services.CampaignSharedSetService/MutateCampaignSharedSets',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsRequest,
    responseType: google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateCampaignSharedSetsResponse,
  },
};

exports.CampaignSharedSetServiceClient = grpc.makeGenericClientConstructor(CampaignSharedSetServiceService);
