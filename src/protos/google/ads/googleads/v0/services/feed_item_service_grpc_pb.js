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
var google_ads_googleads_v0_services_feed_item_service_pb = require('../../../../../google/ads/googleads/v0/services/feed_item_service_pb.js');
var google_ads_googleads_v0_resources_feed_item_pb = require('../../../../../google/ads/googleads/v0/resources/feed_item_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_FeedItem(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_feed_item_pb.FeedItem)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.FeedItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_FeedItem(buffer_arg) {
  return google_ads_googleads_v0_resources_feed_item_pb.FeedItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetFeedItemRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_feed_item_service_pb.GetFeedItemRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetFeedItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetFeedItemRequest(buffer_arg) {
  return google_ads_googleads_v0_services_feed_item_service_pb.GetFeedItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateFeedItemsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_feed_item_service_pb.MutateFeedItemsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateFeedItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateFeedItemsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_feed_item_service_pb.MutateFeedItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateFeedItemsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_feed_item_service_pb.MutateFeedItemsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateFeedItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateFeedItemsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_feed_item_service_pb.MutateFeedItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage feed items.
var FeedItemServiceService = exports.FeedItemServiceService = {
  // Returns the requested feed item in full detail.
  getFeedItem: {
    path: '/google.ads.googleads.v0.services.FeedItemService/GetFeedItem',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_feed_item_service_pb.GetFeedItemRequest,
    responseType: google_ads_googleads_v0_resources_feed_item_pb.FeedItem,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetFeedItemRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetFeedItemRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_FeedItem,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_FeedItem,
  },
  // Creates, updates, or removes feed items. Operation statuses are
  // returned.
  mutateFeedItems: {
    path: '/google.ads.googleads.v0.services.FeedItemService/MutateFeedItems',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_feed_item_service_pb.MutateFeedItemsRequest,
    responseType: google_ads_googleads_v0_services_feed_item_service_pb.MutateFeedItemsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateFeedItemsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateFeedItemsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateFeedItemsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateFeedItemsResponse,
  },
};

exports.FeedItemServiceClient = grpc.makeGenericClientConstructor(FeedItemServiceService);
