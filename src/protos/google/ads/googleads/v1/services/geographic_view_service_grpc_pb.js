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
var google_ads_googleads_v1_services_geographic_view_service_pb = require('../../../../../google/ads/googleads/v1/services/geographic_view_service_pb.js');
var google_ads_googleads_v1_resources_geographic_view_pb = require('../../../../../google/ads/googleads/v1/resources/geographic_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_GeographicView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_geographic_view_pb.GeographicView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.GeographicView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_GeographicView(buffer_arg) {
  return google_ads_googleads_v1_resources_geographic_view_pb.GeographicView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetGeographicViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_geographic_view_service_pb.GetGeographicViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetGeographicViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetGeographicViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_geographic_view_service_pb.GetGeographicViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the GeographicViewService.
//
// Service to manage geographic views.
var GeographicViewServiceService = exports.GeographicViewServiceService = {
  // Returns the requested geographic view in full detail.
  getGeographicView: {
    path: '/google.ads.googleads.v1.services.GeographicViewService/GetGeographicView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_geographic_view_service_pb.GetGeographicViewRequest,
    responseType: google_ads_googleads_v1_resources_geographic_view_pb.GeographicView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetGeographicViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetGeographicViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_GeographicView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_GeographicView,
  },
};

exports.GeographicViewServiceClient = grpc.makeGenericClientConstructor(GeographicViewServiceService);
