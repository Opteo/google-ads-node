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
var google_ads_googleads_v1_services_user_interest_service_pb = require('../../../../../google/ads/googleads/v1/services/user_interest_service_pb.js');
var google_ads_googleads_v1_resources_user_interest_pb = require('../../../../../google/ads/googleads/v1/resources/user_interest_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_UserInterest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_user_interest_pb.UserInterest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.UserInterest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_UserInterest(buffer_arg) {
  return google_ads_googleads_v1_resources_user_interest_pb.UserInterest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetUserInterestRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_user_interest_service_pb.GetUserInterestRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetUserInterestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetUserInterestRequest(buffer_arg) {
  return google_ads_googleads_v1_services_user_interest_service_pb.GetUserInterestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch Google Ads User Interest.
var UserInterestServiceService = exports.UserInterestServiceService = {
  // Returns the requested user interest in full detail
  getUserInterest: {
    path: '/google.ads.googleads.v1.services.UserInterestService/GetUserInterest',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_user_interest_service_pb.GetUserInterestRequest,
    responseType: google_ads_googleads_v1_resources_user_interest_pb.UserInterest,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetUserInterestRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetUserInterestRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_UserInterest,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_UserInterest,
  },
};

exports.UserInterestServiceClient = grpc.makeGenericClientConstructor(UserInterestServiceService);
