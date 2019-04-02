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
var google_ads_googleads_v1_services_hotel_group_view_service_pb = require('../../../../../google/ads/googleads/v1/services/hotel_group_view_service_pb.js');
var google_ads_googleads_v1_resources_hotel_group_view_pb = require('../../../../../google/ads/googleads/v1/resources/hotel_group_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_HotelGroupView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_hotel_group_view_pb.HotelGroupView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.HotelGroupView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_HotelGroupView(buffer_arg) {
  return google_ads_googleads_v1_resources_hotel_group_view_pb.HotelGroupView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetHotelGroupViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_hotel_group_view_service_pb.GetHotelGroupViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetHotelGroupViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetHotelGroupViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_hotel_group_view_service_pb.GetHotelGroupViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Hotel Group View Service.
//
// Service to manage Hotel Group Views.
var HotelGroupViewServiceService = exports.HotelGroupViewServiceService = {
  // Returns the requested Hotel Group View in full detail.
  getHotelGroupView: {
    path: '/google.ads.googleads.v1.services.HotelGroupViewService/GetHotelGroupView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_hotel_group_view_service_pb.GetHotelGroupViewRequest,
    responseType: google_ads_googleads_v1_resources_hotel_group_view_pb.HotelGroupView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetHotelGroupViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetHotelGroupViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_HotelGroupView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_HotelGroupView,
  },
};

exports.HotelGroupViewServiceClient = grpc.makeGenericClientConstructor(HotelGroupViewServiceService);
