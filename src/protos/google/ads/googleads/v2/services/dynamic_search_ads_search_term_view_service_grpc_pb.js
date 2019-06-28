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
var google_ads_googleads_v2_services_dynamic_search_ads_search_term_view_service_pb = require('../../../../../google/ads/googleads/v2/services/dynamic_search_ads_search_term_view_service_pb.js');
var google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb = require('../../../../../google/ads/googleads/v2/resources/dynamic_search_ads_search_term_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_DynamicSearchAdsSearchTermView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.DynamicSearchAdsSearchTermView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_DynamicSearchAdsSearchTermView(buffer_arg) {
  return google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetDynamicSearchAdsSearchTermViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_dynamic_search_ads_search_term_view_service_pb.GetDynamicSearchAdsSearchTermViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetDynamicSearchAdsSearchTermViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetDynamicSearchAdsSearchTermViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_dynamic_search_ads_search_term_view_service_pb.GetDynamicSearchAdsSearchTermViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Dynamic Search Ads Search Term View service.
//
// Service to fetch dynamic search ads views.
var DynamicSearchAdsSearchTermViewServiceService = exports.DynamicSearchAdsSearchTermViewServiceService = {
  // Returns the requested dynamic search ads search term view in full detail.
  getDynamicSearchAdsSearchTermView: {
    path: '/google.ads.googleads.v2.services.DynamicSearchAdsSearchTermViewService/GetDynamicSearchAdsSearchTermView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_dynamic_search_ads_search_term_view_service_pb.GetDynamicSearchAdsSearchTermViewRequest,
    responseType: google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetDynamicSearchAdsSearchTermViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetDynamicSearchAdsSearchTermViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_DynamicSearchAdsSearchTermView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_DynamicSearchAdsSearchTermView,
  },
};

exports.DynamicSearchAdsSearchTermViewServiceClient = grpc.makeGenericClientConstructor(DynamicSearchAdsSearchTermViewServiceService);
