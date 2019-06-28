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
var google_ads_googleads_v2_services_customer_label_service_pb = require('../../../../../google/ads/googleads/v2/services/customer_label_service_pb.js');
var google_ads_googleads_v2_resources_customer_label_pb = require('../../../../../google/ads/googleads/v2/resources/customer_label_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_CustomerLabel(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.CustomerLabel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_CustomerLabel(buffer_arg) {
  return google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetCustomerLabelRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_customer_label_service_pb.GetCustomerLabelRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetCustomerLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetCustomerLabelRequest(buffer_arg) {
  return google_ads_googleads_v2_services_customer_label_service_pb.GetCustomerLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateCustomerLabelsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateCustomerLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateCustomerLabelsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateCustomerLabelsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateCustomerLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateCustomerLabelsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Customer Label service.
//
// Service to manage labels on customers.
var CustomerLabelServiceService = exports.CustomerLabelServiceService = {
  // Returns the requested customer-label relationship in full detail.
  getCustomerLabel: {
    path: '/google.ads.googleads.v2.services.CustomerLabelService/GetCustomerLabel',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_customer_label_service_pb.GetCustomerLabelRequest,
    responseType: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetCustomerLabelRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetCustomerLabelRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_CustomerLabel,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_CustomerLabel,
  },
  // Creates and removes customer-label relationships.
  // Operation statuses are returned.
  mutateCustomerLabels: {
    path: '/google.ads.googleads.v2.services.CustomerLabelService/MutateCustomerLabels',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelsRequest,
    responseType: google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateCustomerLabelsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateCustomerLabelsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateCustomerLabelsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateCustomerLabelsResponse,
  },
};

exports.CustomerLabelServiceClient = grpc.makeGenericClientConstructor(CustomerLabelServiceService);
