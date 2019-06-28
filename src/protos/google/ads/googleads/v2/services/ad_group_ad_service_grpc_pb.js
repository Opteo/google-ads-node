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
var google_ads_googleads_v2_services_ad_group_ad_service_pb = require('../../../../../google/ads/googleads/v2/services/ad_group_ad_service_pb.js');
var google_ads_googleads_v2_common_policy_pb = require('../../../../../google/ads/googleads/v2/common/policy_pb.js');
var google_ads_googleads_v2_resources_ad_group_ad_pb = require('../../../../../google/ads/googleads/v2/resources/ad_group_ad_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_AdGroupAd(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.AdGroupAd');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_AdGroupAd(buffer_arg) {
  return google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAdGroupAdRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_ad_service_pb.GetAdGroupAdRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAdGroupAdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAdGroupAdRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_ad_service_pb.GetAdGroupAdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdGroupAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdGroupAdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdGroupAdsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdGroupAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdGroupAdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdGroupAdsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Ad Group Ad service.
//
// Service to manage ads in an ad group.
var AdGroupAdServiceService = exports.AdGroupAdServiceService = {
  // Returns the requested ad in full detail.
  getAdGroupAd: {
    path: '/google.ads.googleads.v2.services.AdGroupAdService/GetAdGroupAd',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_ad_service_pb.GetAdGroupAdRequest,
    responseType: google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAdGroupAdRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAdGroupAdRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_AdGroupAd,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_AdGroupAd,
  },
  // Creates, updates, or removes ads. Operation statuses are returned.
  mutateAdGroupAds: {
    path: '/google.ads.googleads.v2.services.AdGroupAdService/MutateAdGroupAds',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdsRequest,
    responseType: google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateAdGroupAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdGroupAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateAdGroupAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdGroupAdsResponse,
  },
};

exports.AdGroupAdServiceClient = grpc.makeGenericClientConstructor(AdGroupAdServiceService);
