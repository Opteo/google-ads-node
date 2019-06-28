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
var google_ads_googleads_v2_services_ad_parameter_service_pb = require('../../../../../google/ads/googleads/v2/services/ad_parameter_service_pb.js');
var google_ads_googleads_v2_resources_ad_parameter_pb = require('../../../../../google/ads/googleads/v2/resources/ad_parameter_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_AdParameter(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.AdParameter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_AdParameter(buffer_arg) {
  return google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAdParameterRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_parameter_service_pb.GetAdParameterRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAdParameterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAdParameterRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_parameter_service_pb.GetAdParameterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdParametersRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParametersRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdParametersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdParametersRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParametersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdParametersResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParametersResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdParametersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdParametersResponse(buffer_arg) {
  return google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParametersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Ad Parameter service.
//
// Service to manage ad parameters.
var AdParameterServiceService = exports.AdParameterServiceService = {
  // Returns the requested ad parameter in full detail.
  getAdParameter: {
    path: '/google.ads.googleads.v2.services.AdParameterService/GetAdParameter',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_parameter_service_pb.GetAdParameterRequest,
    responseType: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAdParameterRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAdParameterRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_AdParameter,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_AdParameter,
  },
  // Creates, updates, or removes ad parameters. Operation statuses are
  // returned.
  mutateAdParameters: {
    path: '/google.ads.googleads.v2.services.AdParameterService/MutateAdParameters',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParametersRequest,
    responseType: google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParametersResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateAdParametersRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdParametersRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateAdParametersResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdParametersResponse,
  },
};

exports.AdParameterServiceClient = grpc.makeGenericClientConstructor(AdParameterServiceService);
