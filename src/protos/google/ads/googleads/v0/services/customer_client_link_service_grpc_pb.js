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
var google_ads_googleads_v0_services_customer_client_link_service_pb = require('../../../../../google/ads/googleads/v0/services/customer_client_link_service_pb.js');
var google_ads_googleads_v0_resources_customer_client_link_pb = require('../../../../../google/ads/googleads/v0/resources/customer_client_link_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_ads_googleads_v0_resources_CustomerClientLink(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_customer_client_link_pb.CustomerClientLink)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.CustomerClientLink');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_CustomerClientLink(buffer_arg) {
  return google_ads_googleads_v0_resources_customer_client_link_pb.CustomerClientLink.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetCustomerClientLinkRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_customer_client_link_service_pb.GetCustomerClientLinkRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetCustomerClientLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetCustomerClientLinkRequest(buffer_arg) {
  return google_ads_googleads_v0_services_customer_client_link_service_pb.GetCustomerClientLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCustomerClientLinkRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCustomerClientLinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCustomerClientLinkRequest(buffer_arg) {
  return google_ads_googleads_v0_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateCustomerClientLinkResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateCustomerClientLinkResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateCustomerClientLinkResponse(buffer_arg) {
  return google_ads_googleads_v0_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage customer client links.
var CustomerClientLinkServiceService = exports.CustomerClientLinkServiceService = {
  // Returns the requested CustomerClientLink in full detail.
  getCustomerClientLink: {
    path: '/google.ads.googleads.v0.services.CustomerClientLinkService/GetCustomerClientLink',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_customer_client_link_service_pb.GetCustomerClientLinkRequest,
    responseType: google_ads_googleads_v0_resources_customer_client_link_pb.CustomerClientLink,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetCustomerClientLinkRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetCustomerClientLinkRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_CustomerClientLink,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_CustomerClientLink,
  },
  // Creates or updates a customer client link. Operation statuses are returned.
  mutateCustomerClientLink: {
    path: '/google.ads.googleads.v0.services.CustomerClientLinkService/MutateCustomerClientLink',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_customer_client_link_service_pb.MutateCustomerClientLinkRequest,
    responseType: google_ads_googleads_v0_services_customer_client_link_service_pb.MutateCustomerClientLinkResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateCustomerClientLinkRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateCustomerClientLinkRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateCustomerClientLinkResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateCustomerClientLinkResponse,
  },
};

exports.CustomerClientLinkServiceClient = grpc.makeGenericClientConstructor(CustomerClientLinkServiceService);
