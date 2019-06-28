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
var google_ads_googleads_v2_services_ad_group_label_service_pb = require('../../../../../google/ads/googleads/v2/services/ad_group_label_service_pb.js');
var google_ads_googleads_v2_resources_ad_group_label_pb = require('../../../../../google/ads/googleads/v2/resources/ad_group_label_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_AdGroupLabel(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.AdGroupLabel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_AdGroupLabel(buffer_arg) {
  return google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAdGroupLabelRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_label_service_pb.GetAdGroupLabelRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAdGroupLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAdGroupLabelRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_label_service_pb.GetAdGroupLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdGroupLabelsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdGroupLabelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdGroupLabelsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAdGroupLabelsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAdGroupLabelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAdGroupLabelsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Ad Group Label service.
//
// Service to manage labels on ad groups.
var AdGroupLabelServiceService = exports.AdGroupLabelServiceService = {
  // Returns the requested ad group label in full detail.
  getAdGroupLabel: {
    path: '/google.ads.googleads.v2.services.AdGroupLabelService/GetAdGroupLabel',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_label_service_pb.GetAdGroupLabelRequest,
    responseType: google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAdGroupLabelRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAdGroupLabelRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_AdGroupLabel,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_AdGroupLabel,
  },
  // Creates and removes ad group labels.
  // Operation statuses are returned.
  mutateAdGroupLabels: {
    path: '/google.ads.googleads.v2.services.AdGroupLabelService/MutateAdGroupLabels',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelsRequest,
    responseType: google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateAdGroupLabelsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdGroupLabelsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateAdGroupLabelsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateAdGroupLabelsResponse,
  },
};

exports.AdGroupLabelServiceClient = grpc.makeGenericClientConstructor(AdGroupLabelServiceService);
