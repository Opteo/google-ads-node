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
var google_ads_googleads_v2_services_paid_organic_search_term_view_service_pb = require('../../../../../google/ads/googleads/v2/services/paid_organic_search_term_view_service_pb.js');
var google_ads_googleads_v2_resources_paid_organic_search_term_view_pb = require('../../../../../google/ads/googleads/v2/resources/paid_organic_search_term_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_PaidOrganicSearchTermView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.PaidOrganicSearchTermView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_PaidOrganicSearchTermView(buffer_arg) {
  return google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetPaidOrganicSearchTermViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_paid_organic_search_term_view_service_pb.GetPaidOrganicSearchTermViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetPaidOrganicSearchTermViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetPaidOrganicSearchTermViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_paid_organic_search_term_view_service_pb.GetPaidOrganicSearchTermViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Paid Organic Search Term View service.
//
// Service to fetch paid organic search term views.
var PaidOrganicSearchTermViewServiceService = exports.PaidOrganicSearchTermViewServiceService = {
  // Returns the requested paid organic search term view in full detail.
  getPaidOrganicSearchTermView: {
    path: '/google.ads.googleads.v2.services.PaidOrganicSearchTermViewService/GetPaidOrganicSearchTermView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_paid_organic_search_term_view_service_pb.GetPaidOrganicSearchTermViewRequest,
    responseType: google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetPaidOrganicSearchTermViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetPaidOrganicSearchTermViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_PaidOrganicSearchTermView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_PaidOrganicSearchTermView,
  },
};

exports.PaidOrganicSearchTermViewServiceClient = grpc.makeGenericClientConstructor(PaidOrganicSearchTermViewServiceService);
