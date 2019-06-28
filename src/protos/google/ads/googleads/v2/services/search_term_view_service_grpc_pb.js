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
var google_ads_googleads_v2_services_search_term_view_service_pb = require('../../../../../google/ads/googleads/v2/services/search_term_view_service_pb.js');
var google_ads_googleads_v2_resources_search_term_view_pb = require('../../../../../google/ads/googleads/v2/resources/search_term_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_SearchTermView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.SearchTermView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_SearchTermView(buffer_arg) {
  return google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetSearchTermViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_search_term_view_service_pb.GetSearchTermViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetSearchTermViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetSearchTermViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_search_term_view_service_pb.GetSearchTermViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Search Term View service.
//
// Service to manage search term views.
var SearchTermViewServiceService = exports.SearchTermViewServiceService = {
  // Returns the attributes of the requested search term view.
  getSearchTermView: {
    path: '/google.ads.googleads.v2.services.SearchTermViewService/GetSearchTermView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_search_term_view_service_pb.GetSearchTermViewRequest,
    responseType: google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetSearchTermViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetSearchTermViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_SearchTermView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_SearchTermView,
  },
};

exports.SearchTermViewServiceClient = grpc.makeGenericClientConstructor(SearchTermViewServiceService);
