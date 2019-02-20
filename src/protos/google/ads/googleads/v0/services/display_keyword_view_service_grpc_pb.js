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
var google_ads_googleads_v0_services_display_keyword_view_service_pb = require('../../../../../google/ads/googleads/v0/services/display_keyword_view_service_pb.js');
var google_ads_googleads_v0_resources_display_keyword_view_pb = require('../../../../../google/ads/googleads/v0/resources/display_keyword_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_DisplayKeywordView(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_display_keyword_view_pb.DisplayKeywordView)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.DisplayKeywordView');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_DisplayKeywordView(buffer_arg) {
  return google_ads_googleads_v0_resources_display_keyword_view_pb.DisplayKeywordView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetDisplayKeywordViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetDisplayKeywordViewRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetDisplayKeywordViewRequest(buffer_arg) {
  return google_ads_googleads_v0_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage display keyword views.
var DisplayKeywordViewServiceService = exports.DisplayKeywordViewServiceService = {
  // Returns the requested display keyword view in full detail.
  getDisplayKeywordView: {
    path: '/google.ads.googleads.v0.services.DisplayKeywordViewService/GetDisplayKeywordView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_display_keyword_view_service_pb.GetDisplayKeywordViewRequest,
    responseType: google_ads_googleads_v0_resources_display_keyword_view_pb.DisplayKeywordView,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetDisplayKeywordViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetDisplayKeywordViewRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_DisplayKeywordView,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_DisplayKeywordView,
  },
};

exports.DisplayKeywordViewServiceClient = grpc.makeGenericClientConstructor(DisplayKeywordViewServiceService);
