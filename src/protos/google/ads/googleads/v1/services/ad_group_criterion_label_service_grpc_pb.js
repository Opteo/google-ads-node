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
var google_ads_googleads_v1_services_ad_group_criterion_label_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_criterion_label_service_pb.js');
var google_ads_googleads_v1_resources_ad_group_criterion_label_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_criterion_label_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_AdGroupCriterionLabel(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.AdGroupCriterionLabel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_AdGroupCriterionLabel(buffer_arg) {
  return google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetAdGroupCriterionLabelRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.GetAdGroupCriterionLabelRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetAdGroupCriterionLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetAdGroupCriterionLabelRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.GetAdGroupCriterionLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAdGroupCriterionLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAdGroupCriterionLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Ad Group Criterion Label service.
//
// Service to manage labels on ad group criteria.
var AdGroupCriterionLabelServiceService = exports.AdGroupCriterionLabelServiceService = {
  // Returns the requested ad group criterion label in full detail.
  getAdGroupCriterionLabel: {
    path: '/google.ads.googleads.v1.services.AdGroupCriterionLabelService/GetAdGroupCriterionLabel',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.GetAdGroupCriterionLabelRequest,
    responseType: google_ads_googleads_v1_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetAdGroupCriterionLabelRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetAdGroupCriterionLabelRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_AdGroupCriterionLabel,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_AdGroupCriterionLabel,
  },
  // Creates and removes ad group criterion labels.
  // Operation statuses are returned.
  mutateAdGroupCriterionLabels: {
    path: '/google.ads.googleads.v1.services.AdGroupCriterionLabelService/MutateAdGroupCriterionLabels',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsRequest,
    responseType: google_ads_googleads_v1_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateAdGroupCriterionLabelsResponse,
  },
};

exports.AdGroupCriterionLabelServiceClient = grpc.makeGenericClientConstructor(AdGroupCriterionLabelServiceService);
