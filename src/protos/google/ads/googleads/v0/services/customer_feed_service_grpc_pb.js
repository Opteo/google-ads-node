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
var google_ads_googleads_v0_services_customer_feed_service_pb = require('../../../../../google/ads/googleads/v0/services/customer_feed_service_pb.js');
var google_ads_googleads_v0_resources_customer_feed_pb = require('../../../../../google/ads/googleads/v0/resources/customer_feed_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_CustomerFeed(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_customer_feed_pb.CustomerFeed)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.CustomerFeed');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_CustomerFeed(buffer_arg) {
  return google_ads_googleads_v0_resources_customer_feed_pb.CustomerFeed.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetCustomerFeedRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_customer_feed_service_pb.GetCustomerFeedRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetCustomerFeedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetCustomerFeedRequest(buffer_arg) {
  return google_ads_googleads_v0_services_customer_feed_service_pb.GetCustomerFeedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCustomerFeedsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_customer_feed_service_pb.MutateCustomerFeedsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCustomerFeedsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCustomerFeedsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_customer_feed_service_pb.MutateCustomerFeedsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCustomerFeedsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_customer_feed_service_pb.MutateCustomerFeedsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCustomerFeedsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCustomerFeedsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_customer_feed_service_pb.MutateCustomerFeedsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage customer feeds.
var CustomerFeedServiceService = exports.CustomerFeedServiceService = {
  // Returns the requested customer feed in full detail.
  getCustomerFeed: {
    path: '/google.ads.googleads.v0.services.CustomerFeedService/GetCustomerFeed',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_customer_feed_service_pb.GetCustomerFeedRequest,
    responseType: google_ads_googleads_v0_resources_customer_feed_pb.CustomerFeed,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetCustomerFeedRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetCustomerFeedRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_CustomerFeed,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_CustomerFeed,
  },
  // Creates, updates, or removes customer feeds. Operation statuses are
  // returned.
  mutateCustomerFeeds: {
    path: '/google.ads.googleads.v0.services.CustomerFeedService/MutateCustomerFeeds',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_customer_feed_service_pb.MutateCustomerFeedsRequest,
    responseType: google_ads_googleads_v0_services_customer_feed_service_pb.MutateCustomerFeedsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateCustomerFeedsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateCustomerFeedsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateCustomerFeedsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateCustomerFeedsResponse,
  },
};

exports.CustomerFeedServiceClient = grpc.makeGenericClientConstructor(CustomerFeedServiceService);
