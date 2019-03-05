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
var google_ads_googleads_v1_services_user_list_service_pb = require('../../../../../google/ads/googleads/v1/services/user_list_service_pb.js');
var google_ads_googleads_v1_resources_user_list_pb = require('../../../../../google/ads/googleads/v1/resources/user_list_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_UserList(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_user_list_pb.UserList)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.UserList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_UserList(buffer_arg) {
  return google_ads_googleads_v1_resources_user_list_pb.UserList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetUserListRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_user_list_service_pb.GetUserListRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetUserListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetUserListRequest(buffer_arg) {
  return google_ads_googleads_v1_services_user_list_service_pb.GetUserListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateUserListsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_user_list_service_pb.MutateUserListsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateUserListsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateUserListsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_user_list_service_pb.MutateUserListsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateUserListsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_user_list_service_pb.MutateUserListsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateUserListsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateUserListsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_user_list_service_pb.MutateUserListsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage user lists.
var UserListServiceService = exports.UserListServiceService = {
  // Returns the requested user list.
  getUserList: {
    path: '/google.ads.googleads.v1.services.UserListService/GetUserList',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_user_list_service_pb.GetUserListRequest,
    responseType: google_ads_googleads_v1_resources_user_list_pb.UserList,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetUserListRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetUserListRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_UserList,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_UserList,
  },
  // Creates or updates user lists. Operation statuses are returned.
  mutateUserLists: {
    path: '/google.ads.googleads.v1.services.UserListService/MutateUserLists',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_user_list_service_pb.MutateUserListsRequest,
    responseType: google_ads_googleads_v1_services_user_list_service_pb.MutateUserListsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateUserListsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateUserListsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateUserListsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateUserListsResponse,
  },
};

exports.UserListServiceClient = grpc.makeGenericClientConstructor(UserListServiceService);
