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
var google_ads_googleads_v2_services_ad_service_pb = require('../../../../../google/ads/googleads/v2/services/ad_service_pb.js');
var google_ads_googleads_v2_resources_ad_pb = require('../../../../../google/ads/googleads/v2/resources/ad_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_Ad(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_ad_pb.Ad)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.Ad');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_Ad(buffer_arg) {
  return google_ads_googleads_v2_resources_ad_pb.Ad.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAdRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_service_pb.GetAdRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAdRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_service_pb.GetAdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_service_pb.MutateAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_service_pb.MutateAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_service_pb.MutateAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_ad_service_pb.MutateAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the  Ad service.
//
// Service to manage ads.
var AdServiceService = exports.AdServiceService = {
  // Returns the requested ad in full detail.
  getAd: {
    path: '/google.ads.googleads.v2.services.AdService/GetAd',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_service_pb.GetAdRequest,
    responseType: google_ads_googleads_v2_resources_ad_pb.Ad,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAdRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAdRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_Ad,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_Ad,
  },
  // Updates ads. Operation statuses are returned.
  mutateAds: {
    path: '/google.ads.googleads.v2.services.AdService/MutateAds',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_service_pb.MutateAdsRequest,
    responseType: google_ads_googleads_v2_services_ad_service_pb.MutateAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdsResponse,
  },
};

exports.AdServiceClient = grpc.makeGenericClientConstructor(AdServiceService);
