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
var google_ads_googleads_v0_services_ad_group_audience_view_service_pb = require('../../../../../google/ads/googleads/v0/services/ad_group_audience_view_service_pb.js');
var google_ads_googleads_v0_resources_ad_group_audience_view_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_audience_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_AdGroupAudienceView(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_ad_group_audience_view_pb.AdGroupAudienceView)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.AdGroupAudienceView');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_AdGroupAudienceView(buffer_arg) {
  return google_ads_googleads_v0_resources_ad_group_audience_view_pb.AdGroupAudienceView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetAdGroupAudienceViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetAdGroupAudienceViewRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetAdGroupAudienceViewRequest(buffer_arg) {
  return google_ads_googleads_v0_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage ad group audience views.
var AdGroupAudienceViewServiceService = exports.AdGroupAudienceViewServiceService = {
  // Returns the requested ad group audience view in full detail.
  getAdGroupAudienceView: {
    path: '/google.ads.googleads.v0.services.AdGroupAudienceViewService/GetAdGroupAudienceView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_ad_group_audience_view_service_pb.GetAdGroupAudienceViewRequest,
    responseType: google_ads_googleads_v0_resources_ad_group_audience_view_pb.AdGroupAudienceView,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetAdGroupAudienceViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetAdGroupAudienceViewRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_AdGroupAudienceView,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_AdGroupAudienceView,
  },
};

exports.AdGroupAudienceViewServiceClient = grpc.makeGenericClientConstructor(AdGroupAudienceViewServiceService);
