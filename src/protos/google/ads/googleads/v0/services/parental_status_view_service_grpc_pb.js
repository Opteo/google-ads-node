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
var google_ads_googleads_v0_services_parental_status_view_service_pb = require('../../../../../google/ads/googleads/v0/services/parental_status_view_service_pb.js');
var google_ads_googleads_v0_resources_parental_status_view_pb = require('../../../../../google/ads/googleads/v0/resources/parental_status_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_ParentalStatusView(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_parental_status_view_pb.ParentalStatusView)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.ParentalStatusView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_ParentalStatusView(buffer_arg) {
  return google_ads_googleads_v0_resources_parental_status_view_pb.ParentalStatusView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetParentalStatusViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_parental_status_view_service_pb.GetParentalStatusViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetParentalStatusViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetParentalStatusViewRequest(buffer_arg) {
  return google_ads_googleads_v0_services_parental_status_view_service_pb.GetParentalStatusViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage parental status views.
var ParentalStatusViewServiceService = exports.ParentalStatusViewServiceService = {
  // Returns the requested parental status view in full detail.
  getParentalStatusView: {
    path: '/google.ads.googleads.v0.services.ParentalStatusViewService/GetParentalStatusView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_parental_status_view_service_pb.GetParentalStatusViewRequest,
    responseType: google_ads_googleads_v0_resources_parental_status_view_pb.ParentalStatusView,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetParentalStatusViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetParentalStatusViewRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_ParentalStatusView,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_ParentalStatusView,
  },
};

exports.ParentalStatusViewServiceClient = grpc.makeGenericClientConstructor(ParentalStatusViewServiceService);
