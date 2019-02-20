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
var google_ads_googleads_v0_services_billing_setup_service_pb = require('../../../../../google/ads/googleads/v0/services/billing_setup_service_pb.js');
var google_ads_googleads_v0_resources_billing_setup_pb = require('../../../../../google/ads/googleads/v0/resources/billing_setup_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_BillingSetup(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_billing_setup_pb.BillingSetup)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.BillingSetup');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_BillingSetup(buffer_arg) {
  return google_ads_googleads_v0_resources_billing_setup_pb.BillingSetup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetBillingSetupRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_billing_setup_service_pb.GetBillingSetupRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetBillingSetupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetBillingSetupRequest(buffer_arg) {
  return google_ads_googleads_v0_services_billing_setup_service_pb.GetBillingSetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateBillingSetupRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_billing_setup_service_pb.MutateBillingSetupRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateBillingSetupRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateBillingSetupRequest(buffer_arg) {
  return google_ads_googleads_v0_services_billing_setup_service_pb.MutateBillingSetupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateBillingSetupResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_billing_setup_service_pb.MutateBillingSetupResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateBillingSetupResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateBillingSetupResponse(buffer_arg) {
  return google_ads_googleads_v0_services_billing_setup_service_pb.MutateBillingSetupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service for designating the business entity responsible for accrued costs.
//
// A billing setup is associated with a Payments account.  Billing-related
// activity for all billing setups associated with a particular Payments account
// will appear on a single invoice generated monthly.
//
// Mutates:
// The REMOVE operation cancels a pending billing setup.
// The CREATE operation creates a new billing setup.
var BillingSetupServiceService = exports.BillingSetupServiceService = {
  // Returns a billing setup.
  getBillingSetup: {
    path: '/google.ads.googleads.v0.services.BillingSetupService/GetBillingSetup',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_billing_setup_service_pb.GetBillingSetupRequest,
    responseType: google_ads_googleads_v0_resources_billing_setup_pb.BillingSetup,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetBillingSetupRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetBillingSetupRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_BillingSetup,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_BillingSetup,
  },
  // Creates a billing setup, or cancels an existing billing setup.
  mutateBillingSetup: {
    path: '/google.ads.googleads.v0.services.BillingSetupService/MutateBillingSetup',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_billing_setup_service_pb.MutateBillingSetupRequest,
    responseType: google_ads_googleads_v0_services_billing_setup_service_pb.MutateBillingSetupResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateBillingSetupRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateBillingSetupRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateBillingSetupResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateBillingSetupResponse,
  },
};

exports.BillingSetupServiceClient = grpc.makeGenericClientConstructor(BillingSetupServiceService);
