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
var google_ads_googleads_v0_services_feed_mapping_service_pb = require('../../../../../google/ads/googleads/v0/services/feed_mapping_service_pb.js');
var google_ads_googleads_v0_resources_feed_mapping_pb = require('../../../../../google/ads/googleads/v0/resources/feed_mapping_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_FeedMapping(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_feed_mapping_pb.FeedMapping)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.FeedMapping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_FeedMapping(buffer_arg) {
  return google_ads_googleads_v0_resources_feed_mapping_pb.FeedMapping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetFeedMappingRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_feed_mapping_service_pb.GetFeedMappingRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetFeedMappingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetFeedMappingRequest(buffer_arg) {
  return google_ads_googleads_v0_services_feed_mapping_service_pb.GetFeedMappingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateFeedMappingsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_feed_mapping_service_pb.MutateFeedMappingsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateFeedMappingsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateFeedMappingsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_feed_mapping_service_pb.MutateFeedMappingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateFeedMappingsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_feed_mapping_service_pb.MutateFeedMappingsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateFeedMappingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateFeedMappingsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_feed_mapping_service_pb.MutateFeedMappingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage feed mappings.
var FeedMappingServiceService = exports.FeedMappingServiceService = {
  // Returns the requested feed mapping in full detail.
  getFeedMapping: {
    path: '/google.ads.googleads.v0.services.FeedMappingService/GetFeedMapping',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_feed_mapping_service_pb.GetFeedMappingRequest,
    responseType: google_ads_googleads_v0_resources_feed_mapping_pb.FeedMapping,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetFeedMappingRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetFeedMappingRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_FeedMapping,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_FeedMapping,
  },
  // Creates or removes feed mappings. Operation statuses are
  // returned.
  mutateFeedMappings: {
    path: '/google.ads.googleads.v0.services.FeedMappingService/MutateFeedMappings',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_feed_mapping_service_pb.MutateFeedMappingsRequest,
    responseType: google_ads_googleads_v0_services_feed_mapping_service_pb.MutateFeedMappingsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateFeedMappingsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateFeedMappingsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateFeedMappingsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateFeedMappingsResponse,
  },
};

exports.FeedMappingServiceClient = grpc.makeGenericClientConstructor(FeedMappingServiceService);
