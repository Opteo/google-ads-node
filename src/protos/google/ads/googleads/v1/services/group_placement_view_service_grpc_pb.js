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
var google_ads_googleads_v1_services_group_placement_view_service_pb = require('../../../../../google/ads/googleads/v1/services/group_placement_view_service_pb.js');
var google_ads_googleads_v1_resources_group_placement_view_pb = require('../../../../../google/ads/googleads/v1/resources/group_placement_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_GroupPlacementView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_group_placement_view_pb.GroupPlacementView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.GroupPlacementView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_GroupPlacementView(buffer_arg) {
  return google_ads_googleads_v1_resources_group_placement_view_pb.GroupPlacementView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetGroupPlacementViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_group_placement_view_service_pb.GetGroupPlacementViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetGroupPlacementViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetGroupPlacementViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_group_placement_view_service_pb.GetGroupPlacementViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Group Placement View service.
//
// Service to fetch Group Placement views.
var GroupPlacementViewServiceService = exports.GroupPlacementViewServiceService = {
  // Returns the requested Group Placement view in full detail.
  getGroupPlacementView: {
    path: '/google.ads.googleads.v1.services.GroupPlacementViewService/GetGroupPlacementView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_group_placement_view_service_pb.GetGroupPlacementViewRequest,
    responseType: google_ads_googleads_v1_resources_group_placement_view_pb.GroupPlacementView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetGroupPlacementViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetGroupPlacementViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_GroupPlacementView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_GroupPlacementView,
  },
};

exports.GroupPlacementViewServiceClient = grpc.makeGenericClientConstructor(GroupPlacementViewServiceService);
