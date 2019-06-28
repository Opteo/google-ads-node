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
var google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb = require('../../../../../google/ads/googleads/v2/services/ad_group_ad_asset_view_service_pb.js');
var google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb = require('../../../../../google/ads/googleads/v2/resources/ad_group_ad_asset_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_AdGroupAdAssetView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.AdGroupAdAssetView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_AdGroupAdAssetView(buffer_arg) {
  return google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAdGroupAdAssetViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAdGroupAdAssetViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAdGroupAdAssetViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the ad group ad asset view service.
//
// Service to fetch ad group ad asset views.
var AdGroupAdAssetViewServiceService = exports.AdGroupAdAssetViewServiceService = {
  // Returns the requested ad group ad asset view in full detail.
  getAdGroupAdAssetView: {
    path: '/google.ads.googleads.v2.services.AdGroupAdAssetViewService/GetAdGroupAdAssetView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_ad_asset_view_service_pb.GetAdGroupAdAssetViewRequest,
    responseType: google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAdGroupAdAssetViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAdGroupAdAssetViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_AdGroupAdAssetView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_AdGroupAdAssetView,
  },
};

exports.AdGroupAdAssetViewServiceClient = grpc.makeGenericClientConstructor(AdGroupAdAssetViewServiceService);
