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
var google_ads_googleads_v2_services_campaign_audience_view_service_pb = require('../../../../../google/ads/googleads/v2/services/campaign_audience_view_service_pb.js');
var google_ads_googleads_v2_resources_campaign_audience_view_pb = require('../../../../../google/ads/googleads/v2/resources/campaign_audience_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_CampaignAudienceView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.CampaignAudienceView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_CampaignAudienceView(buffer_arg) {
  return google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetCampaignAudienceViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_campaign_audience_view_service_pb.GetCampaignAudienceViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetCampaignAudienceViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetCampaignAudienceViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_campaign_audience_view_service_pb.GetCampaignAudienceViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Campaign Audience View service.
//
// Service to manage campaign audience views.
var CampaignAudienceViewServiceService = exports.CampaignAudienceViewServiceService = {
  // Returns the requested campaign audience view in full detail.
  getCampaignAudienceView: {
    path: '/google.ads.googleads.v2.services.CampaignAudienceViewService/GetCampaignAudienceView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_campaign_audience_view_service_pb.GetCampaignAudienceViewRequest,
    responseType: google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetCampaignAudienceViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetCampaignAudienceViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_CampaignAudienceView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_CampaignAudienceView,
  },
};

exports.CampaignAudienceViewServiceClient = grpc.makeGenericClientConstructor(CampaignAudienceViewServiceService);
