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
var google_ads_googleads_v1_services_customer_negative_criterion_service_pb = require('../../../../../google/ads/googleads/v1/services/customer_negative_criterion_service_pb.js');
var google_ads_googleads_v1_resources_customer_negative_criterion_pb = require('../../../../../google/ads/googleads/v1/resources/customer_negative_criterion_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_CustomerNegativeCriterion(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CustomerNegativeCriterion');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CustomerNegativeCriterion(buffer_arg) {
  return google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCustomerNegativeCriterionRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_negative_criterion_service_pb.GetCustomerNegativeCriterionRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCustomerNegativeCriterionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCustomerNegativeCriterionRequest(buffer_arg) {
  return google_ads_googleads_v1_services_customer_negative_criterion_service_pb.GetCustomerNegativeCriterionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCustomerNegativeCriteriaRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaRequest(buffer_arg) {
  return google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCustomerNegativeCriteriaResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaResponse(buffer_arg) {
  return google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Customer Negative Criterion service.
//
// Service to manage customer negative criteria.
var CustomerNegativeCriterionServiceService = exports.CustomerNegativeCriterionServiceService = {
  // Returns the requested criterion in full detail.
  getCustomerNegativeCriterion: {
    path: '/google.ads.googleads.v1.services.CustomerNegativeCriterionService/GetCustomerNegativeCriterion',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.GetCustomerNegativeCriterionRequest,
    responseType: google_ads_googleads_v1_resources_customer_negative_criterion_pb.CustomerNegativeCriterion,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCustomerNegativeCriterionRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCustomerNegativeCriterionRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CustomerNegativeCriterion,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CustomerNegativeCriterion,
  },
  // Creates or removes criteria. Operation statuses are returned.
  mutateCustomerNegativeCriteria: {
    path: '/google.ads.googleads.v1.services.CustomerNegativeCriterionService/MutateCustomerNegativeCriteria',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaRequest,
    responseType: google_ads_googleads_v1_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCustomerNegativeCriteriaResponse,
  },
};

exports.CustomerNegativeCriterionServiceClient = grpc.makeGenericClientConstructor(CustomerNegativeCriterionServiceService);
