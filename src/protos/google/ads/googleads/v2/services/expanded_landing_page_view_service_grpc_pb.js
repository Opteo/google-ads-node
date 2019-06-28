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
var google_ads_googleads_v2_services_expanded_landing_page_view_service_pb = require('../../../../../google/ads/googleads/v2/services/expanded_landing_page_view_service_pb.js');
var google_ads_googleads_v2_resources_expanded_landing_page_view_pb = require('../../../../../google/ads/googleads/v2/resources/expanded_landing_page_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_ExpandedLandingPageView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.ExpandedLandingPageView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_ExpandedLandingPageView(buffer_arg) {
  return google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetExpandedLandingPageViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetExpandedLandingPageViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetExpandedLandingPageViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the expanded landing page view service.
//
// Service to fetch expanded landing page views.
var ExpandedLandingPageViewServiceService = exports.ExpandedLandingPageViewServiceService = {
  // Returns the requested expanded landing page view in full detail.
  getExpandedLandingPageView: {
    path: '/google.ads.googleads.v2.services.ExpandedLandingPageViewService/GetExpandedLandingPageView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_expanded_landing_page_view_service_pb.GetExpandedLandingPageViewRequest,
    responseType: google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetExpandedLandingPageViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetExpandedLandingPageViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_ExpandedLandingPageView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_ExpandedLandingPageView,
  },
};

exports.ExpandedLandingPageViewServiceClient = grpc.makeGenericClientConstructor(ExpandedLandingPageViewServiceService);
