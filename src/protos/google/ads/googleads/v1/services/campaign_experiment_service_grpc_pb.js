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
var google_ads_googleads_v1_services_campaign_experiment_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_experiment_service_pb.js');
var google_ads_googleads_v1_resources_campaign_experiment_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_experiment_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_CampaignExperiment(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.CampaignExperiment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_CampaignExperiment(buffer_arg) {
  return google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_CreateCampaignExperimentRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.CreateCampaignExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_CreateCampaignExperimentRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_EndCampaignExperimentRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.EndCampaignExperimentRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.EndCampaignExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_EndCampaignExperimentRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.EndCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetCampaignExperimentRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.GetCampaignExperimentRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetCampaignExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetCampaignExperimentRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.GetCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GraduateCampaignExperimentRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GraduateCampaignExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GraduateCampaignExperimentRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GraduateCampaignExperimentResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GraduateCampaignExperimentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GraduateCampaignExperimentResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListCampaignExperimentAsyncErrorsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListCampaignExperimentAsyncErrorsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignExperimentsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignExperimentsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignExperimentsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateCampaignExperimentsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateCampaignExperimentsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateCampaignExperimentsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_PromoteCampaignExperimentRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.PromoteCampaignExperimentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_PromoteCampaignExperimentRequest(buffer_arg) {
  return google_ads_googleads_v1_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Campaign Experiment service.
//
// CampaignExperimentService manages the life cycle of campaign experiments.
// It is used to create new experiments from drafts, modify experiment
// properties, promote changes in an experiment back to its base campaign,
// graduate experiments into new stand-alone campaigns, and to remove an
// experiment.
//
// An experiment consists of two variants or arms - the base campaign and the
// experiment campaign, directing a fixed share of traffic to each arm.
// A campaign experiment is created from a draft of changes to the base campaign
// and will be a snapshot of changes in the draft at the time of creation.
var CampaignExperimentServiceService = exports.CampaignExperimentServiceService = {
  // Returns the requested campaign experiment in full detail.
  getCampaignExperiment: {
    path: '/google.ads.googleads.v1.services.CampaignExperimentService/GetCampaignExperiment',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_experiment_service_pb.GetCampaignExperimentRequest,
    responseType: google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetCampaignExperimentRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetCampaignExperimentRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_CampaignExperiment,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_CampaignExperiment,
  },
  // Creates a campaign experiment based on a campaign draft. The draft campaign
  // will be forked into a real campaign (called the experiment campaign) that
  // will begin serving ads if successfully created.
  //
  // The campaign experiment is created immediately with status INITIALIZING.
  // This method return a long running operation that tracks the forking of the
  // draft campaign. If the forking fails, a list of errors can be retrieved
  // using the ListCampaignExperimentAsyncErrors method. The operation's
  // metadata will be a StringValue containing the resource name of the created
  // campaign experiment.
  createCampaignExperiment: {
    path: '/google.ads.googleads.v1.services.CampaignExperimentService/CreateCampaignExperiment',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_experiment_service_pb.CreateCampaignExperimentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_ads_googleads_v1_services_CreateCampaignExperimentRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_CreateCampaignExperimentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Updates campaign experiments. Operation statuses are returned.
  mutateCampaignExperiments: {
    path: '/google.ads.googleads.v1.services.CampaignExperimentService/MutateCampaignExperiments',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_experiment_service_pb.MutateCampaignExperimentsRequest,
    responseType: google_ads_googleads_v1_services_campaign_experiment_service_pb.MutateCampaignExperimentsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignExperimentsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignExperimentsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateCampaignExperimentsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateCampaignExperimentsResponse,
  },
  // Graduates a campaign experiment to a full campaign. The base and experiment
  // campaigns will start running independently with their own budgets.
  graduateCampaignExperiment: {
    path: '/google.ads.googleads.v1.services.CampaignExperimentService/GraduateCampaignExperiment',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_experiment_service_pb.GraduateCampaignExperimentRequest,
    responseType: google_ads_googleads_v1_services_campaign_experiment_service_pb.GraduateCampaignExperimentResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_GraduateCampaignExperimentRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GraduateCampaignExperimentRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_GraduateCampaignExperimentResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_GraduateCampaignExperimentResponse,
  },
  // Promotes the changes in a experiment campaign back to the base campaign.
  //
  // The campaign experiment is updated immediately with status PROMOTING.
  // This method return a long running operation that tracks the promoting of
  // the experiment campaign. If the promoting fails, a list of errors can be
  // retrieved using the ListCampaignExperimentAsyncErrors method.
  promoteCampaignExperiment: {
    path: '/google.ads.googleads.v1.services.CampaignExperimentService/PromoteCampaignExperiment',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_experiment_service_pb.PromoteCampaignExperimentRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_ads_googleads_v1_services_PromoteCampaignExperimentRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_PromoteCampaignExperimentRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Immediately ends a campaign experiment, changing the experiment's scheduled
  // end date and without waiting for end of day. End date is updated to be the
  // time of the request.
  endCampaignExperiment: {
    path: '/google.ads.googleads.v1.services.CampaignExperimentService/EndCampaignExperiment',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_experiment_service_pb.EndCampaignExperimentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_ads_googleads_v1_services_EndCampaignExperimentRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_EndCampaignExperimentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Returns all errors that occurred during CampaignExperiment create or
  // promote (whichever occurred last).
  // Supports standard list paging.
  listCampaignExperimentAsyncErrors: {
    path: '/google.ads.googleads.v1.services.CampaignExperimentService/ListCampaignExperimentAsyncErrors',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsRequest,
    responseType: google_ads_googleads_v1_services_campaign_experiment_service_pb.ListCampaignExperimentAsyncErrorsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_ListCampaignExperimentAsyncErrorsResponse,
  },
};

exports.CampaignExperimentServiceClient = grpc.makeGenericClientConstructor(CampaignExperimentServiceService);
