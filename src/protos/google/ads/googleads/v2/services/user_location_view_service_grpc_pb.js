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
var google_ads_googleads_v2_services_user_location_view_service_pb = require('../../../../../google/ads/googleads/v2/services/user_location_view_service_pb.js');
var google_ads_googleads_v2_resources_user_location_view_pb = require('../../../../../google/ads/googleads/v2/resources/user_location_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_UserLocationView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.UserLocationView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_UserLocationView(buffer_arg) {
  return google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetUserLocationViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_user_location_view_service_pb.GetUserLocationViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetUserLocationViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetUserLocationViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_user_location_view_service_pb.GetUserLocationViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the UserLocationView service.
//
// Service to manage user location views.
var UserLocationViewServiceService = exports.UserLocationViewServiceService = {
  // Returns the requested user location view in full detail.
  getUserLocationView: {
    path: '/google.ads.googleads.v2.services.UserLocationViewService/GetUserLocationView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_user_location_view_service_pb.GetUserLocationViewRequest,
    responseType: google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetUserLocationViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetUserLocationViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_UserLocationView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_UserLocationView,
  },
};

exports.UserLocationViewServiceClient = grpc.makeGenericClientConstructor(UserLocationViewServiceService);
