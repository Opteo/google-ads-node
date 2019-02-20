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
var google_ads_googleads_v0_services_campaign_feed_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_feed_service_pb.js');
var google_ads_googleads_v0_resources_campaign_feed_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_feed_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_CampaignFeed(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_campaign_feed_pb.CampaignFeed)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.CampaignFeed');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_CampaignFeed(buffer_arg) {
  return google_ads_googleads_v0_resources_campaign_feed_pb.CampaignFeed.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetCampaignFeedRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_feed_service_pb.GetCampaignFeedRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetCampaignFeedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetCampaignFeedRequest(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_feed_service_pb.GetCampaignFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCampaignFeedsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_feed_service_pb.MutateCampaignFeedsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCampaignFeedsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCampaignFeedsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_feed_service_pb.MutateCampaignFeedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCampaignFeedsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_campaign_feed_service_pb.MutateCampaignFeedsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCampaignFeedsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCampaignFeedsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_campaign_feed_service_pb.MutateCampaignFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage campaign feeds.
var CampaignFeedServiceService = exports.CampaignFeedServiceService = {
  // Returns the requested campaign feed in full detail.
  getCampaignFeed: {
    path: '/google.ads.googleads.v0.services.CampaignFeedService/GetCampaignFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_campaign_feed_service_pb.GetCampaignFeedRequest,
    responseType: google_ads_googleads_v0_resources_campaign_feed_pb.CampaignFeed,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetCampaignFeedRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetCampaignFeedRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_CampaignFeed,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_CampaignFeed,
  },
  // Creates, updates, or removes campaign feeds. Operation statuses are
  // returned.
  mutateCampaignFeeds: {
    path: '/google.ads.googleads.v0.services.CampaignFeedService/MutateCampaignFeeds',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_campaign_feed_service_pb.MutateCampaignFeedsRequest,
    responseType: google_ads_googleads_v0_services_campaign_feed_service_pb.MutateCampaignFeedsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateCampaignFeedsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateCampaignFeedsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateCampaignFeedsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateCampaignFeedsResponse,
  },
};

exports.CampaignFeedServiceClient = grpc.makeGenericClientConstructor(CampaignFeedServiceService);
