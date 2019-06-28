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
var google_ads_googleads_v2_services_bidding_strategy_service_pb = require('../../../../../google/ads/googleads/v2/services/bidding_strategy_service_pb.js');
var google_ads_googleads_v2_resources_bidding_strategy_pb = require('../../../../../google/ads/googleads/v2/resources/bidding_strategy_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_BiddingStrategy(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.BiddingStrategy');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_BiddingStrategy(buffer_arg) {
  return google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetBiddingStrategyRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_bidding_strategy_service_pb.GetBiddingStrategyRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetBiddingStrategyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetBiddingStrategyRequest(buffer_arg) {
  return google_ads_googleads_v2_services_bidding_strategy_service_pb.GetBiddingStrategyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateBiddingStrategiesRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateBiddingStrategiesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateBiddingStrategiesRequest(buffer_arg) {
  return google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateBiddingStrategiesResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateBiddingStrategiesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateBiddingStrategiesResponse(buffer_arg) {
  return google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Bidding Strategy service.
//
// Service to manage bidding strategies.
var BiddingStrategyServiceService = exports.BiddingStrategyServiceService = {
  // Returns the requested bidding strategy in full detail.
  getBiddingStrategy: {
    path: '/google.ads.googleads.v2.services.BiddingStrategyService/GetBiddingStrategy',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_bidding_strategy_service_pb.GetBiddingStrategyRequest,
    responseType: google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetBiddingStrategyRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetBiddingStrategyRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_BiddingStrategy,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_BiddingStrategy,
  },
  // Creates, updates, or removes bidding strategies. Operation statuses are
  // returned.
  mutateBiddingStrategies: {
    path: '/google.ads.googleads.v2.services.BiddingStrategyService/MutateBiddingStrategies',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategiesRequest,
    responseType: google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategiesResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateBiddingStrategiesRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateBiddingStrategiesRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateBiddingStrategiesResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateBiddingStrategiesResponse,
  },
};

exports.BiddingStrategyServiceClient = grpc.makeGenericClientConstructor(BiddingStrategyServiceService);
