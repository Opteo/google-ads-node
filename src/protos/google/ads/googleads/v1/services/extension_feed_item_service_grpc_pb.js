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
var google_ads_googleads_v1_services_extension_feed_item_service_pb = require('../../../../../google/ads/googleads/v1/services/extension_feed_item_service_pb.js');
var google_ads_googleads_v1_resources_extension_feed_item_pb = require('../../../../../google/ads/googleads/v1/resources/extension_feed_item_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_ads_googleads_v1_resources_ExtensionFeedItem(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.ExtensionFeedItem');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_ExtensionFeedItem(buffer_arg) {
  return google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetExtensionFeedItemRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetExtensionFeedItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetExtensionFeedItemRequest(buffer_arg) {
  return google_ads_googleads_v1_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateExtensionFeedItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateExtensionFeedItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage extension feed items.
var ExtensionFeedItemServiceService = exports.ExtensionFeedItemServiceService = {
  // Returns the requested extension feed item in full detail.
  getExtensionFeedItem: {
    path: '/google.ads.googleads.v1.services.ExtensionFeedItemService/GetExtensionFeedItem',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_extension_feed_item_service_pb.GetExtensionFeedItemRequest,
    responseType: google_ads_googleads_v1_resources_extension_feed_item_pb.ExtensionFeedItem,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetExtensionFeedItemRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetExtensionFeedItemRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_ExtensionFeedItem,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_ExtensionFeedItem,
  },
  // Creates, updates, or removes extension feed items. Operation
  // statuses are returned.
  mutateExtensionFeedItems: {
    path: '/google.ads.googleads.v1.services.ExtensionFeedItemService/MutateExtensionFeedItems',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_extension_feed_item_service_pb.MutateExtensionFeedItemsRequest,
    responseType: google_ads_googleads_v1_services_extension_feed_item_service_pb.MutateExtensionFeedItemsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateExtensionFeedItemsResponse,
  },
};

exports.ExtensionFeedItemServiceClient = grpc.makeGenericClientConstructor(ExtensionFeedItemServiceService);
