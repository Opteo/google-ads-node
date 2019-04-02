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
var google_ads_googleads_v1_services_ad_group_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_service_pb.js');
var google_ads_googleads_v1_resources_ad_group_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_AdGroup(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_ad_group_pb.AdGroup)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.AdGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_AdGroup(buffer_arg) {
  return google_ads_googleads_v1_resources_ad_group_pb.AdGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetAdGroupRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_service_pb.GetAdGroupRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetAdGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetAdGroupRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_service_pb.GetAdGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAdGroupsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAdGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAdGroupsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAdGroupsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAdGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAdGroupsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Ad Group service.
//
// Service to manage ad groups.
var AdGroupServiceService = exports.AdGroupServiceService = {
  // Returns the requested ad group in full detail.
  getAdGroup: {
    path: '/google.ads.googleads.v1.services.AdGroupService/GetAdGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_group_service_pb.GetAdGroupRequest,
    responseType: google_ads_googleads_v1_resources_ad_group_pb.AdGroup,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetAdGroupRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetAdGroupRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_AdGroup,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_AdGroup,
  },
  // Creates, updates, or removes ad groups. Operation statuses are returned.
  mutateAdGroups: {
    path: '/google.ads.googleads.v1.services.AdGroupService/MutateAdGroups',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsRequest,
    responseType: google_ads_googleads_v1_services_ad_group_service_pb.MutateAdGroupsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateAdGroupsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateAdGroupsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateAdGroupsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateAdGroupsResponse,
  },
};

exports.AdGroupServiceClient = grpc.makeGenericClientConstructor(AdGroupServiceService);
