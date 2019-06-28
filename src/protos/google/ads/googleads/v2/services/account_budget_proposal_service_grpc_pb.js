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
var google_ads_googleads_v2_services_account_budget_proposal_service_pb = require('../../../../../google/ads/googleads/v2/services/account_budget_proposal_service_pb.js');
var google_ads_googleads_v2_resources_account_budget_proposal_pb = require('../../../../../google/ads/googleads/v2/resources/account_budget_proposal_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_AccountBudgetProposal(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.AccountBudgetProposal');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_AccountBudgetProposal(buffer_arg) {
  return google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetAccountBudgetProposalRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_account_budget_proposal_service_pb.GetAccountBudgetProposalRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetAccountBudgetProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetAccountBudgetProposalRequest(buffer_arg) {
  return google_ads_googleads_v2_services_account_budget_proposal_service_pb.GetAccountBudgetProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAccountBudgetProposalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalRequest(buffer_arg) {
  return google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.MutateAccountBudgetProposalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalResponse(buffer_arg) {
  return google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the AccountBudgetProposal service.
//
// A service for managing account-level budgets via proposals.
//
// A proposal is a request to create a new budget or make changes to an
// existing one.
//
// Reads for account-level budgets managed by these proposals will be
// supported in a future version. Until then, please use the
// BudgetOrderService from the AdWords API. Learn more at
// https://developers.google.com/adwords/api/docs/guides/budget-order
//
// Mutates:
// The CREATE operation creates a new proposal.
// UPDATE operations aren't supported.
// The REMOVE operation cancels a pending proposal.
var AccountBudgetProposalServiceService = exports.AccountBudgetProposalServiceService = {
  // Returns an account-level budget proposal in full detail.
  getAccountBudgetProposal: {
    path: '/google.ads.googleads.v2.services.AccountBudgetProposalService/GetAccountBudgetProposal',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_account_budget_proposal_service_pb.GetAccountBudgetProposalRequest,
    responseType: google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetAccountBudgetProposalRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetAccountBudgetProposalRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_AccountBudgetProposal,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_AccountBudgetProposal,
  },
  // Creates, updates, or removes account budget proposals.  Operation statuses
  // are returned.
  mutateAccountBudgetProposal: {
    path: '/google.ads.googleads.v2.services.AccountBudgetProposalService/MutateAccountBudgetProposal',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalRequest,
    responseType: google_ads_googleads_v2_services_account_budget_proposal_service_pb.MutateAccountBudgetProposalResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_MutateAccountBudgetProposalResponse,
  },
};

exports.AccountBudgetProposalServiceClient = grpc.makeGenericClientConstructor(AccountBudgetProposalServiceService);
