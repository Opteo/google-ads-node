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
var google_ads_googleads_v1_services_conversion_action_service_pb = require('../../../../../google/ads/googleads/v1/services/conversion_action_service_pb.js');
var google_ads_googleads_v1_resources_conversion_action_pb = require('../../../../../google/ads/googleads/v1/resources/conversion_action_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_ConversionAction(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.ConversionAction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_ConversionAction(buffer_arg) {
  return google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetConversionActionRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_conversion_action_service_pb.GetConversionActionRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetConversionActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetConversionActionRequest(buffer_arg) {
  return google_ads_googleads_v1_services_conversion_action_service_pb.GetConversionActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateConversionActionsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_conversion_action_service_pb.MutateConversionActionsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateConversionActionsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateConversionActionsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_conversion_action_service_pb.MutateConversionActionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateConversionActionsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_conversion_action_service_pb.MutateConversionActionsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateConversionActionsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateConversionActionsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_conversion_action_service_pb.MutateConversionActionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Conversion Action service.
//
// Service to manage conversion actions.
var ConversionActionServiceService = exports.ConversionActionServiceService = {
  // Returns the requested conversion action.
  getConversionAction: {
    path: '/google.ads.googleads.v1.services.ConversionActionService/GetConversionAction',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_conversion_action_service_pb.GetConversionActionRequest,
    responseType: google_ads_googleads_v1_resources_conversion_action_pb.ConversionAction,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetConversionActionRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetConversionActionRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_ConversionAction,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_ConversionAction,
  },
  // Creates, updates or removes conversion actions. Operation statuses are
  // returned.
  mutateConversionActions: {
    path: '/google.ads.googleads.v1.services.ConversionActionService/MutateConversionActions',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_conversion_action_service_pb.MutateConversionActionsRequest,
    responseType: google_ads_googleads_v1_services_conversion_action_service_pb.MutateConversionActionsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateConversionActionsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateConversionActionsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateConversionActionsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateConversionActionsResponse,
  },
};

exports.ConversionActionServiceClient = grpc.makeGenericClientConstructor(ConversionActionServiceService);
