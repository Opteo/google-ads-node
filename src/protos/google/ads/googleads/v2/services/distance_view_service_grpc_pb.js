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
var google_ads_googleads_v2_services_distance_view_service_pb = require('../../../../../google/ads/googleads/v2/services/distance_view_service_pb.js');
var google_ads_googleads_v2_resources_distance_view_pb = require('../../../../../google/ads/googleads/v2/resources/distance_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_DistanceView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_distance_view_pb.DistanceView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.DistanceView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_DistanceView(buffer_arg) {
  return google_ads_googleads_v2_resources_distance_view_pb.DistanceView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetDistanceViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_distance_view_service_pb.GetDistanceViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetDistanceViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetDistanceViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_distance_view_service_pb.GetDistanceViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Distance View service.
//
// Service to fetch distance views.
var DistanceViewServiceService = exports.DistanceViewServiceService = {
  // Returns the attributes of the requested distance view.
  getDistanceView: {
    path: '/google.ads.googleads.v2.services.DistanceViewService/GetDistanceView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_distance_view_service_pb.GetDistanceViewRequest,
    responseType: google_ads_googleads_v2_resources_distance_view_pb.DistanceView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetDistanceViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetDistanceViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_DistanceView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_DistanceView,
  },
};

exports.DistanceViewServiceClient = grpc.makeGenericClientConstructor(DistanceViewServiceService);
