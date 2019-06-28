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
var google_ads_googleads_v2_services_merchant_center_link_service_pb = require('../../../../../google/ads/googleads/v2/services/merchant_center_link_service_pb.js');
var google_ads_googleads_v2_resources_merchant_center_link_pb = require('../../../../../google/ads/googleads/v2/resources/merchant_center_link_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_MerchantCenterLink(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.MerchantCenterLink');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_MerchantCenterLink(buffer_arg) {
  return google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetMerchantCenterLinkRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_merchant_center_link_service_pb.GetMerchantCenterLinkRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetMerchantCenterLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetMerchantCenterLinkRequest(buffer_arg) {
  return google_ads_googleads_v2_services_merchant_center_link_service_pb.GetMerchantCenterLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_ListMerchantCenterLinksRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_merchant_center_link_service_pb.ListMerchantCenterLinksRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListMerchantCenterLinksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListMerchantCenterLinksRequest(buffer_arg) {
  return google_ads_googleads_v2_services_merchant_center_link_service_pb.ListMerchantCenterLinksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_ListMerchantCenterLinksResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_merchant_center_link_service_pb.ListMerchantCenterLinksResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListMerchantCenterLinksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListMerchantCenterLinksResponse(buffer_arg) {
  return google_ads_googleads_v2_services_merchant_center_link_service_pb.ListMerchantCenterLinksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_merchant_center_link_service_pb.MutateMerchantCenterLinkRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateMerchantCenterLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkRequest(buffer_arg) {
  return google_ads_googleads_v2_services_merchant_center_link_service_pb.MutateMerchantCenterLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_merchant_center_link_service_pb.MutateMerchantCenterLinkResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateMerchantCenterLinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkResponse(buffer_arg) {
  return google_ads_googleads_v2_services_merchant_center_link_service_pb.MutateMerchantCenterLinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the MerchantCenterLink service.
//
// This service allows management of links between Google Ads and Google
// Merchant Center.
var MerchantCenterLinkServiceService = exports.MerchantCenterLinkServiceService = {
  // Returns Merchant Center links available tor this customer.
  listMerchantCenterLinks: {
    path: '/google.ads.googleads.v2.services.MerchantCenterLinkService/ListMerchantCenterLinks',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_merchant_center_link_service_pb.ListMerchantCenterLinksRequest,
    responseType: google_ads_googleads_v2_services_merchant_center_link_service_pb.ListMerchantCenterLinksResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_ListMerchantCenterLinksRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_ListMerchantCenterLinksRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_ListMerchantCenterLinksResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_ListMerchantCenterLinksResponse,
  },
  // Returns the Merchant Center link in full detail.
  getMerchantCenterLink: {
    path: '/google.ads.googleads.v2.services.MerchantCenterLinkService/GetMerchantCenterLink',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_merchant_center_link_service_pb.GetMerchantCenterLinkRequest,
    responseType: google_ads_googleads_v2_resources_merchant_center_link_pb.MerchantCenterLink,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetMerchantCenterLinkRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetMerchantCenterLinkRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_MerchantCenterLink,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_MerchantCenterLink,
  },
  // Updates status or removes a Merchant Center link.
  mutateMerchantCenterLink: {
    path: '/google.ads.googleads.v2.services.MerchantCenterLinkService/MutateMerchantCenterLink',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_merchant_center_link_service_pb.MutateMerchantCenterLinkRequest,
    responseType: google_ads_googleads_v2_services_merchant_center_link_service_pb.MutateMerchantCenterLinkResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateMerchantCenterLinkResponse,
  },
};

exports.MerchantCenterLinkServiceClient = grpc.makeGenericClientConstructor(MerchantCenterLinkServiceService);
