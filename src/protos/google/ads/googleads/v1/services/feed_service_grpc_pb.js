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
var google_ads_googleads_v1_services_feed_service_pb = require('../../../../../google/ads/googleads/v1/services/feed_service_pb.js');
var google_ads_googleads_v1_resources_feed_pb = require('../../../../../google/ads/googleads/v1/resources/feed_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_Feed(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_feed_pb.Feed)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.Feed');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_Feed(buffer_arg) {
  return google_ads_googleads_v1_resources_feed_pb.Feed.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetFeedRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_feed_service_pb.GetFeedRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetFeedRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetFeedRequest(buffer_arg) {
  return google_ads_googleads_v1_services_feed_service_pb.GetFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateFeedsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_feed_service_pb.MutateFeedsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateFeedsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateFeedsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_feed_service_pb.MutateFeedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateFeedsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_feed_service_pb.MutateFeedsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateFeedsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateFeedsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_feed_service_pb.MutateFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage feeds.
var FeedServiceService = exports.FeedServiceService = {
  // Returns the requested feed in full detail.
  getFeed: {
    path: '/google.ads.googleads.v1.services.FeedService/GetFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_feed_service_pb.GetFeedRequest,
    responseType: google_ads_googleads_v1_resources_feed_pb.Feed,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetFeedRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetFeedRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_Feed,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_Feed,
  },
  // Creates, updates, or removes feeds. Operation statuses are
  // returned.
  mutateFeeds: {
    path: '/google.ads.googleads.v1.services.FeedService/MutateFeeds',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_feed_service_pb.MutateFeedsRequest,
    responseType: google_ads_googleads_v1_services_feed_service_pb.MutateFeedsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateFeedsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateFeedsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateFeedsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateFeedsResponse,
  },
};

exports.FeedServiceClient = grpc.makeGenericClientConstructor(FeedServiceService);
