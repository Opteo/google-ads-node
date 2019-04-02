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
var google_ads_googleads_v1_services_customer_service_pb = require('../../../../../google/ads/googleads/v1/services/customer_service_pb.js');
var google_ads_googleads_v1_resources_customer_pb = require('../../../../../google/ads/googleads/v1/resources/customer_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_google_ads_googleads_v1_resources_Customer(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_customer_pb.Customer)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.Customer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_Customer(buffer_arg) {
  return google_ads_googleads_v1_resources_customer_pb.Customer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_CreateCustomerClientRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.CreateCustomerClientRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_CreateCustomerClientRequest(buffer_arg) {
  return google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_CreateCustomerClientResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.CreateCustomerClientResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_CreateCustomerClientResponse(buffer_arg) {
  return google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCustomerRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_service_pb.GetCustomerRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCustomerRequest(buffer_arg) {
  return google_ads_googleads_v1_services_customer_service_pb.GetCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListAccessibleCustomersRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListAccessibleCustomersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListAccessibleCustomersRequest(buffer_arg) {
  return google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListAccessibleCustomersResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListAccessibleCustomersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListAccessibleCustomersResponse(buffer_arg) {
  return google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCustomerRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_service_pb.MutateCustomerRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCustomerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCustomerRequest(buffer_arg) {
  return google_ads_googleads_v1_services_customer_service_pb.MutateCustomerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCustomerResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_customer_service_pb.MutateCustomerResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCustomerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCustomerResponse(buffer_arg) {
  return google_ads_googleads_v1_services_customer_service_pb.MutateCustomerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Customer service.
//
// Service to manage customers.
var CustomerServiceService = exports.CustomerServiceService = {
  // Returns the requested customer in full detail.
  getCustomer: {
    path: '/google.ads.googleads.v1.services.CustomerService/GetCustomer',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_customer_service_pb.GetCustomerRequest,
    responseType: google_ads_googleads_v1_resources_customer_pb.Customer,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCustomerRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCustomerRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_Customer,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_Customer,
  },
  // Updates a customer. Operation statuses are returned.
  mutateCustomer: {
    path: '/google.ads.googleads.v1.services.CustomerService/MutateCustomer',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_customer_service_pb.MutateCustomerRequest,
    responseType: google_ads_googleads_v1_services_customer_service_pb.MutateCustomerResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCustomerRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCustomerRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCustomerResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCustomerResponse,
  },
  // Returns resource names of customers directly accessible by the
  // user authenticating the call.
  listAccessibleCustomers: {
    path: '/google.ads.googleads.v1.services.CustomerService/ListAccessibleCustomers',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersRequest,
    responseType: google_ads_googleads_v1_services_customer_service_pb.ListAccessibleCustomersResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_ListAccessibleCustomersRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_ListAccessibleCustomersRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_ListAccessibleCustomersResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_ListAccessibleCustomersResponse,
  },
  // Creates a new client under manager. The new client customer is returned.
  createCustomerClient: {
    path: '/google.ads.googleads.v1.services.CustomerService/CreateCustomerClient',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientRequest,
    responseType: google_ads_googleads_v1_services_customer_service_pb.CreateCustomerClientResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_CreateCustomerClientRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_CreateCustomerClientRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_CreateCustomerClientResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_CreateCustomerClientResponse,
  },
};

exports.CustomerServiceClient = grpc.makeGenericClientConstructor(CustomerServiceService);
