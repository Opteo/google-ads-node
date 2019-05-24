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
var google_ads_googleads_v1_services_campaign_draft_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_draft_service_pb.js');
var google_ads_googleads_v1_resources_campaign_draft_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_draft_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_CampaignDraft(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CampaignDraft');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CampaignDraft(buffer_arg) {
  return google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCampaignDraftRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_draft_service_pb.GetCampaignDraftRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCampaignDraftRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCampaignDraftRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_draft_service_pb.GetCampaignDraftRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListCampaignDraftAsyncErrorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListCampaignDraftAsyncErrorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignDraftsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignDraftsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignDraftsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignDraftsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignDraftsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignDraftsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_PromoteCampaignDraftRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_draft_service_pb.PromoteCampaignDraftRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.PromoteCampaignDraftRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_PromoteCampaignDraftRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_draft_service_pb.PromoteCampaignDraftRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Campaign Draft service.
//
// Service to manage campaign drafts.
var CampaignDraftServiceService = exports.CampaignDraftServiceService = {
  // Returns the requested campaign draft in full detail.
  getCampaignDraft: {
    path: '/google.ads.googleads.v1.services.CampaignDraftService/GetCampaignDraft',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_draft_service_pb.GetCampaignDraftRequest,
    responseType: google_ads_googleads_v1_resources_campaign_draft_pb.CampaignDraft,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCampaignDraftRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCampaignDraftRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CampaignDraft,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CampaignDraft,
  },
  // Creates, updates, or removes campaign drafts. Operation statuses are
  // returned.
  mutateCampaignDrafts: {
    path: '/google.ads.googleads.v1.services.CampaignDraftService/MutateCampaignDrafts',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsRequest,
    responseType: google_ads_googleads_v1_services_campaign_draft_service_pb.MutateCampaignDraftsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignDraftsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignDraftsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignDraftsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignDraftsResponse,
  },
  // Promotes the changes in a draft back to the base campaign.
  //
  // This method returns a Long Running Operation (LRO) indicating if the
  // Promote is done. Use [Operations.GetOperation] to poll the LRO until it
  // is done. Only a done status is returned in the response. See the status
  // in the Campaign Draft resource to determine if the promotion was
  // successful. If the LRO failed, use
  // [CampaignDraftService.ListCampaignDraftAsyncErrors][google.ads.googleads.v1.services.CampaignDraftService.ListCampaignDraftAsyncErrors] to view the list of
  // error reasons.
  promoteCampaignDraft: {
    path: '/google.ads.googleads.v1.services.CampaignDraftService/PromoteCampaignDraft',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_draft_service_pb.PromoteCampaignDraftRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_ads_googleads_v1_services_PromoteCampaignDraftRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_PromoteCampaignDraftRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Returns all errors that occurred during CampaignDraft promote. Throws an
  // error if called before campaign draft is promoted.
  // Supports standard list paging.
  listCampaignDraftAsyncErrors: {
    path: '/google.ads.googleads.v1.services.CampaignDraftService/ListCampaignDraftAsyncErrors',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsRequest,
    responseType: google_ads_googleads_v1_services_campaign_draft_service_pb.ListCampaignDraftAsyncErrorsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_ListCampaignDraftAsyncErrorsResponse,
  },
};

exports.CampaignDraftServiceClient = grpc.makeGenericClientConstructor(CampaignDraftServiceService);
