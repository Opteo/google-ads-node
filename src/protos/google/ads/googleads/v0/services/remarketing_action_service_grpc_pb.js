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
var google_ads_googleads_v0_services_remarketing_action_service_pb = require('../../../../../google/ads/googleads/v0/services/remarketing_action_service_pb.js');
var google_ads_googleads_v0_resources_remarketing_action_pb = require('../../../../../google/ads/googleads/v0/resources/remarketing_action_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_resources_RemarketingAction(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_remarketing_action_pb.RemarketingAction)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.RemarketingAction');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_RemarketingAction(buffer_arg) {
  return google_ads_googleads_v0_resources_remarketing_action_pb.RemarketingAction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetRemarketingActionRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_remarketing_action_service_pb.GetRemarketingActionRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetRemarketingActionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetRemarketingActionRequest(buffer_arg) {
  return google_ads_googleads_v0_services_remarketing_action_service_pb.GetRemarketingActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateRemarketingActionsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_remarketing_action_service_pb.MutateRemarketingActionsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateRemarketingActionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateRemarketingActionsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_remarketing_action_service_pb.MutateRemarketingActionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateRemarketingActionsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_remarketing_action_service_pb.MutateRemarketingActionsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateRemarketingActionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateRemarketingActionsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_remarketing_action_service_pb.MutateRemarketingActionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage remarketing actions.
var RemarketingActionServiceService = exports.RemarketingActionServiceService = {
  // Returns the requested remarketing action in full detail.
  getRemarketingAction: {
    path: '/google.ads.googleads.v0.services.RemarketingActionService/GetRemarketingAction',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_remarketing_action_service_pb.GetRemarketingActionRequest,
    responseType: google_ads_googleads_v0_resources_remarketing_action_pb.RemarketingAction,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetRemarketingActionRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetRemarketingActionRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_RemarketingAction,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_RemarketingAction,
  },
  // Creates or updates remarketing actions. Operation statuses are returned.
  mutateRemarketingActions: {
    path: '/google.ads.googleads.v0.services.RemarketingActionService/MutateRemarketingActions',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_remarketing_action_service_pb.MutateRemarketingActionsRequest,
    responseType: google_ads_googleads_v0_services_remarketing_action_service_pb.MutateRemarketingActionsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateRemarketingActionsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateRemarketingActionsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateRemarketingActionsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateRemarketingActionsResponse,
  },
};

exports.RemarketingActionServiceClient = grpc.makeGenericClientConstructor(RemarketingActionServiceService);
