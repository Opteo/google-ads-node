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
var google_ads_googleads_v1_services_age_range_view_service_pb = require('../../../../../google/ads/googleads/v1/services/age_range_view_service_pb.js');
var google_ads_googleads_v1_resources_age_range_view_pb = require('../../../../../google/ads/googleads/v1/resources/age_range_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_AgeRangeView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_age_range_view_pb.AgeRangeView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.AgeRangeView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_AgeRangeView(buffer_arg) {
  return google_ads_googleads_v1_resources_age_range_view_pb.AgeRangeView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetAgeRangeViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_age_range_view_service_pb.GetAgeRangeViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetAgeRangeViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetAgeRangeViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_age_range_view_service_pb.GetAgeRangeViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage age range views.
var AgeRangeViewServiceService = exports.AgeRangeViewServiceService = {
  // Returns the requested age range view in full detail.
  getAgeRangeView: {
    path: '/google.ads.googleads.v1.services.AgeRangeViewService/GetAgeRangeView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_age_range_view_service_pb.GetAgeRangeViewRequest,
    responseType: google_ads_googleads_v1_resources_age_range_view_pb.AgeRangeView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetAgeRangeViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetAgeRangeViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_AgeRangeView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_AgeRangeView,
  },
};

exports.AgeRangeViewServiceClient = grpc.makeGenericClientConstructor(AgeRangeViewServiceService);
