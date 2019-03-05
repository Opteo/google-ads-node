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
var google_ads_googleads_v1_services_ad_group_feed_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_feed_service_pb.js');
var google_ads_googleads_v1_resources_ad_group_feed_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_feed_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_AdGroupFeed(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.AdGroupFeed');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_AdGroupFeed(buffer_arg) {
  return google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetAdGroupFeedRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_feed_service_pb.GetAdGroupFeedRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetAdGroupFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetAdGroupFeedRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_feed_service_pb.GetAdGroupFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAdGroupFeedsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAdGroupFeedsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAdGroupFeedsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAdGroupFeedsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAdGroupFeedsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAdGroupFeedsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage ad group feeds.
var AdGroupFeedServiceService = exports.AdGroupFeedServiceService = {
  // Returns the requested ad group feed in full detail.
  getAdGroupFeed: {
    path: '/google.ads.googleads.v1.services.AdGroupFeedService/GetAdGroupFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_group_feed_service_pb.GetAdGroupFeedRequest,
    responseType: google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetAdGroupFeedRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetAdGroupFeedRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_AdGroupFeed,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_AdGroupFeed,
  },
  // Creates, updates, or removes ad group feeds. Operation statuses are
  // returned.
  mutateAdGroupFeeds: {
    path: '/google.ads.googleads.v1.services.AdGroupFeedService/MutateAdGroupFeeds',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsRequest,
    responseType: google_ads_googleads_v1_services_ad_group_feed_service_pb.MutateAdGroupFeedsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateAdGroupFeedsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateAdGroupFeedsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateAdGroupFeedsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateAdGroupFeedsResponse,
  },
};

exports.AdGroupFeedServiceClient = grpc.makeGenericClientConstructor(AdGroupFeedServiceService);
