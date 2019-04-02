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
var google_ads_googleads_v1_services_detail_placement_view_service_pb = require('../../../../../google/ads/googleads/v1/services/detail_placement_view_service_pb.js');
var google_ads_googleads_v1_resources_detail_placement_view_pb = require('../../../../../google/ads/googleads/v1/resources/detail_placement_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_DetailPlacementView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_detail_placement_view_pb.DetailPlacementView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.DetailPlacementView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_DetailPlacementView(buffer_arg) {
  return google_ads_googleads_v1_resources_detail_placement_view_pb.DetailPlacementView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetDetailPlacementViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetDetailPlacementViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetDetailPlacementViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Detail Placement View service.
//
// Service to fetch Detail Placement views.
var DetailPlacementViewServiceService = exports.DetailPlacementViewServiceService = {
  // Returns the requested Detail Placement view in full detail.
  getDetailPlacementView: {
    path: '/google.ads.googleads.v1.services.DetailPlacementViewService/GetDetailPlacementView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_detail_placement_view_service_pb.GetDetailPlacementViewRequest,
    responseType: google_ads_googleads_v1_resources_detail_placement_view_pb.DetailPlacementView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetDetailPlacementViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetDetailPlacementViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_DetailPlacementView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_DetailPlacementView,
  },
};

exports.DetailPlacementViewServiceClient = grpc.makeGenericClientConstructor(DetailPlacementViewServiceService);
