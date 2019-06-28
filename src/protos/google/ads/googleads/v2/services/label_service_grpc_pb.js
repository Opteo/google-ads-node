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
var google_ads_googleads_v2_services_label_service_pb = require('../../../../../google/ads/googleads/v2/services/label_service_pb.js');
var google_ads_googleads_v2_resources_label_pb = require('../../../../../google/ads/googleads/v2/resources/label_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_Label(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_label_pb.Label)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.Label');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_Label(buffer_arg) {
  return google_ads_googleads_v2_resources_label_pb.Label.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetLabelRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_label_service_pb.GetLabelRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetLabelRequest(buffer_arg) {
  return google_ads_googleads_v2_services_label_service_pb.GetLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateLabelsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_label_service_pb.MutateLabelsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateLabelsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_label_service_pb.MutateLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateLabelsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_label_service_pb.MutateLabelsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateLabelsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_label_service_pb.MutateLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage labels.
var LabelServiceService = exports.LabelServiceService = {
  // Returns the requested label in full detail.
  getLabel: {
    path: '/google.ads.googleads.v2.services.LabelService/GetLabel',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_label_service_pb.GetLabelRequest,
    responseType: google_ads_googleads_v2_resources_label_pb.Label,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetLabelRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetLabelRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_Label,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_Label,
  },
  // Creates, updates, or removes labels. Operation statuses are returned.
  mutateLabels: {
    path: '/google.ads.googleads.v2.services.LabelService/MutateLabels',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_label_service_pb.MutateLabelsRequest,
    responseType: google_ads_googleads_v2_services_label_service_pb.MutateLabelsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateLabelsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateLabelsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateLabelsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateLabelsResponse,
  },
};

exports.LabelServiceClient = grpc.makeGenericClientConstructor(LabelServiceService);
