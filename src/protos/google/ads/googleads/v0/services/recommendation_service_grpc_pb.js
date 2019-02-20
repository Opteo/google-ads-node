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
var google_ads_googleads_v0_services_recommendation_service_pb = require('../../../../../google/ads/googleads/v0/services/recommendation_service_pb.js');
var google_ads_googleads_v0_enums_keyword_match_type_pb = require('../../../../../google/ads/googleads/v0/enums/keyword_match_type_pb.js');
var google_ads_googleads_v0_resources_ad_pb = require('../../../../../google/ads/googleads/v0/resources/ad_pb.js');
var google_ads_googleads_v0_resources_recommendation_pb = require('../../../../../google/ads/googleads/v0/resources/recommendation_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_Recommendation(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_recommendation_pb.Recommendation)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.Recommendation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_Recommendation(buffer_arg) {
  return google_ads_googleads_v0_resources_recommendation_pb.Recommendation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_ApplyRecommendationRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.ApplyRecommendationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_ApplyRecommendationRequest(buffer_arg) {
  return google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_ApplyRecommendationResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.ApplyRecommendationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_ApplyRecommendationResponse(buffer_arg) {
  return google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_DismissRecommendationRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_recommendation_service_pb.DismissRecommendationRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.DismissRecommendationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_DismissRecommendationRequest(buffer_arg) {
  return google_ads_googleads_v0_services_recommendation_service_pb.DismissRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_DismissRecommendationResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_recommendation_service_pb.DismissRecommendationResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.DismissRecommendationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_DismissRecommendationResponse(buffer_arg) {
  return google_ads_googleads_v0_services_recommendation_service_pb.DismissRecommendationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetRecommendationRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_recommendation_service_pb.GetRecommendationRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetRecommendationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetRecommendationRequest(buffer_arg) {
  return google_ads_googleads_v0_services_recommendation_service_pb.GetRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage recommendations.
var RecommendationServiceService = exports.RecommendationServiceService = {
  // Returns the requested recommendation in full detail.
  getRecommendation: {
    path: '/google.ads.googleads.v0.services.RecommendationService/GetRecommendation',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_recommendation_service_pb.GetRecommendationRequest,
    responseType: google_ads_googleads_v0_resources_recommendation_pb.Recommendation,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetRecommendationRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetRecommendationRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_Recommendation,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_Recommendation,
  },
  // Applies given recommendations with corresponding apply parameters.
  applyRecommendation: {
    path: '/google.ads.googleads.v0.services.RecommendationService/ApplyRecommendation',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationRequest,
    responseType: google_ads_googleads_v0_services_recommendation_service_pb.ApplyRecommendationResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_ApplyRecommendationRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_ApplyRecommendationRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_ApplyRecommendationResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_ApplyRecommendationResponse,
  },
  // Dismisses given recommendations.
  dismissRecommendation: {
    path: '/google.ads.googleads.v0.services.RecommendationService/DismissRecommendation',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_recommendation_service_pb.DismissRecommendationRequest,
    responseType: google_ads_googleads_v0_services_recommendation_service_pb.DismissRecommendationResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_DismissRecommendationRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_DismissRecommendationRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_DismissRecommendationResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_DismissRecommendationResponse,
  },
};

exports.RecommendationServiceClient = grpc.makeGenericClientConstructor(RecommendationServiceService);
