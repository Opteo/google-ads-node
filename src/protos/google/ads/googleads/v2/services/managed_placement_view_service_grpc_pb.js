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
var google_ads_googleads_v2_services_managed_placement_view_service_pb = require('../../../../../google/ads/googleads/v2/services/managed_placement_view_service_pb.js');
var google_ads_googleads_v2_resources_managed_placement_view_pb = require('../../../../../google/ads/googleads/v2/resources/managed_placement_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_ManagedPlacementView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.ManagedPlacementView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_ManagedPlacementView(buffer_arg) {
  return google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetManagedPlacementViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetManagedPlacementViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetManagedPlacementViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Managed Placement View service.
//
// Service to manage Managed Placement views.
var ManagedPlacementViewServiceService = exports.ManagedPlacementViewServiceService = {
  // Returns the requested Managed Placement view in full detail.
  getManagedPlacementView: {
    path: '/google.ads.googleads.v2.services.ManagedPlacementViewService/GetManagedPlacementView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_managed_placement_view_service_pb.GetManagedPlacementViewRequest,
    responseType: google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetManagedPlacementViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetManagedPlacementViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_ManagedPlacementView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_ManagedPlacementView,
  },
};

exports.ManagedPlacementViewServiceClient = grpc.makeGenericClientConstructor(ManagedPlacementViewServiceService);
