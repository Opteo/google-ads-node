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
var google_ads_googleads_v1_services_location_view_service_pb = require('../../../../../google/ads/googleads/v1/services/location_view_service_pb.js');
var google_ads_googleads_v1_resources_location_view_pb = require('../../../../../google/ads/googleads/v1/resources/location_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_LocationView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_location_view_pb.LocationView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.LocationView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_LocationView(buffer_arg) {
  return google_ads_googleads_v1_resources_location_view_pb.LocationView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetLocationViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_location_view_service_pb.GetLocationViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetLocationViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetLocationViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_location_view_service_pb.GetLocationViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Location View service.
//
// Service to fetch location views.
var LocationViewServiceService = exports.LocationViewServiceService = {
  // Returns the requested location view in full detail.
  getLocationView: {
    path: '/google.ads.googleads.v1.services.LocationViewService/GetLocationView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_location_view_service_pb.GetLocationViewRequest,
    responseType: google_ads_googleads_v1_resources_location_view_pb.LocationView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetLocationViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetLocationViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_LocationView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_LocationView,
  },
};

exports.LocationViewServiceClient = grpc.makeGenericClientConstructor(LocationViewServiceService);
