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
var google_ads_googleads_v2_services_hotel_performance_view_service_pb = require('../../../../../google/ads/googleads/v2/services/hotel_performance_view_service_pb.js');
var google_ads_googleads_v2_resources_hotel_performance_view_pb = require('../../../../../google/ads/googleads/v2/resources/hotel_performance_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_HotelPerformanceView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.HotelPerformanceView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_HotelPerformanceView(buffer_arg) {
  return google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetHotelPerformanceViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_hotel_performance_view_service_pb.GetHotelPerformanceViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetHotelPerformanceViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetHotelPerformanceViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_hotel_performance_view_service_pb.GetHotelPerformanceViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Hotel Performance View Service.
//
// Service to manage Hotel Performance Views.
var HotelPerformanceViewServiceService = exports.HotelPerformanceViewServiceService = {
  // Returns the requested Hotel Performance View in full detail.
  getHotelPerformanceView: {
    path: '/google.ads.googleads.v2.services.HotelPerformanceViewService/GetHotelPerformanceView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_hotel_performance_view_service_pb.GetHotelPerformanceViewRequest,
    responseType: google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetHotelPerformanceViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetHotelPerformanceViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_HotelPerformanceView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_HotelPerformanceView,
  },
};

exports.HotelPerformanceViewServiceClient = grpc.makeGenericClientConstructor(HotelPerformanceViewServiceService);
