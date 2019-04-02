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
var google_ads_googleads_v1_services_gender_view_service_pb = require('../../../../../google/ads/googleads/v1/services/gender_view_service_pb.js');
var google_ads_googleads_v1_resources_gender_view_pb = require('../../../../../google/ads/googleads/v1/resources/gender_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_GenderView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_gender_view_pb.GenderView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.GenderView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_GenderView(buffer_arg) {
  return google_ads_googleads_v1_resources_gender_view_pb.GenderView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetGenderViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_gender_view_service_pb.GetGenderViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetGenderViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetGenderViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_gender_view_service_pb.GetGenderViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Gender View service.
//
// Service to manage gender views.
var GenderViewServiceService = exports.GenderViewServiceService = {
  // Returns the requested gender view in full detail.
  getGenderView: {
    path: '/google.ads.googleads.v1.services.GenderViewService/GetGenderView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_gender_view_service_pb.GetGenderViewRequest,
    responseType: google_ads_googleads_v1_resources_gender_view_pb.GenderView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetGenderViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetGenderViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_GenderView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_GenderView,
  },
};

exports.GenderViewServiceClient = grpc.makeGenericClientConstructor(GenderViewServiceService);
