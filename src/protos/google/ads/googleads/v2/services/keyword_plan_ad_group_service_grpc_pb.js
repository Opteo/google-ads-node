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
var google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb = require('../../../../../google/ads/googleads/v2/services/keyword_plan_ad_group_service_pb.js');
var google_ads_googleads_v2_resources_keyword_plan_ad_group_pb = require('../../../../../google/ads/googleads/v2/resources/keyword_plan_ad_group_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_KeywordPlanAdGroup(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.KeywordPlanAdGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_KeywordPlanAdGroup(buffer_arg) {
  return google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetKeywordPlanAdGroupRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetKeywordPlanAdGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetKeywordPlanAdGroupRequest(buffer_arg) {
  return google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateKeywordPlanAdGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateKeywordPlanAdGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the keyword plan ad group service.
//
// Service to manage Keyword Plan ad groups.
var KeywordPlanAdGroupServiceService = exports.KeywordPlanAdGroupServiceService = {
  // Returns the requested Keyword Plan ad group in full detail.
  getKeywordPlanAdGroup: {
    path: '/google.ads.googleads.v2.services.KeywordPlanAdGroupService/GetKeywordPlanAdGroup',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.GetKeywordPlanAdGroupRequest,
    responseType: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetKeywordPlanAdGroupRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetKeywordPlanAdGroupRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_KeywordPlanAdGroup,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_KeywordPlanAdGroup,
  },
  // Creates, updates, or removes Keyword Plan ad groups. Operation statuses are
  // returned.
  mutateKeywordPlanAdGroups: {
    path: '/google.ads.googleads.v2.services.KeywordPlanAdGroupService/MutateKeywordPlanAdGroups',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsRequest,
    responseType: google_ads_googleads_v2_services_keyword_plan_ad_group_service_pb.MutateKeywordPlanAdGroupsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateKeywordPlanAdGroupsResponse,
  },
};

exports.KeywordPlanAdGroupServiceClient = grpc.makeGenericClientConstructor(KeywordPlanAdGroupServiceService);
