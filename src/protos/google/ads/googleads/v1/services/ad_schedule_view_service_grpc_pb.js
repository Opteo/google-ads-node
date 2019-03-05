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
var google_ads_googleads_v1_services_ad_schedule_view_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_schedule_view_service_pb.js');
var google_ads_googleads_v1_resources_ad_schedule_view_pb = require('../../../../../google/ads/googleads/v1/resources/ad_schedule_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_AdScheduleView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_ad_schedule_view_pb.AdScheduleView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.AdScheduleView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_AdScheduleView(buffer_arg) {
  return google_ads_googleads_v1_resources_ad_schedule_view_pb.AdScheduleView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetAdScheduleViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_schedule_view_service_pb.GetAdScheduleViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetAdScheduleViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetAdScheduleViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_schedule_view_service_pb.GetAdScheduleViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch ad schedule views.
var AdScheduleViewServiceService = exports.AdScheduleViewServiceService = {
  // Returns the requested ad schedule view in full detail.
  getAdScheduleView: {
    path: '/google.ads.googleads.v1.services.AdScheduleViewService/GetAdScheduleView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_schedule_view_service_pb.GetAdScheduleViewRequest,
    responseType: google_ads_googleads_v1_resources_ad_schedule_view_pb.AdScheduleView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetAdScheduleViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetAdScheduleViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_AdScheduleView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_AdScheduleView,
  },
};

exports.AdScheduleViewServiceClient = grpc.makeGenericClientConstructor(AdScheduleViewServiceService);
