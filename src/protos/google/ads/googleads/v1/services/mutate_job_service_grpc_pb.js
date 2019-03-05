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
var google_ads_googleads_v1_services_mutate_job_service_pb = require('../../../../../google/ads/googleads/v1/services/mutate_job_service_pb.js');
var google_ads_googleads_v1_resources_mutate_job_pb = require('../../../../../google/ads/googleads/v1/resources/mutate_job_pb.js');
var google_ads_googleads_v1_services_google_ads_service_pb = require('../../../../../google/ads/googleads/v1/services/google_ads_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../../../../../google/longrunning/operations_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_resources_MutateJob(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_mutate_job_pb.MutateJob)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.MutateJob');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_MutateJob(buffer_arg) {
  return google_ads_googleads_v1_resources_mutate_job_pb.MutateJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_AddMutateJobOperationsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.AddMutateJobOperationsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.AddMutateJobOperationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_AddMutateJobOperationsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.AddMutateJobOperationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_AddMutateJobOperationsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.AddMutateJobOperationsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.AddMutateJobOperationsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_AddMutateJobOperationsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.AddMutateJobOperationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_CreateMutateJobRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.CreateMutateJobRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.CreateMutateJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_CreateMutateJobRequest(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.CreateMutateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_CreateMutateJobResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.CreateMutateJobResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.CreateMutateJobResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_CreateMutateJobResponse(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.CreateMutateJobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetMutateJobRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.GetMutateJobRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetMutateJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetMutateJobRequest(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.GetMutateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListMutateJobResultsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.ListMutateJobResultsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListMutateJobResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListMutateJobResultsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.ListMutateJobResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_ListMutateJobResultsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.ListMutateJobResultsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.ListMutateJobResultsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_ListMutateJobResultsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.ListMutateJobResultsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_RunMutateJobRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_mutate_job_service_pb.RunMutateJobRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.RunMutateJobRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_RunMutateJobRequest(buffer_arg) {
  return google_ads_googleads_v1_services_mutate_job_service_pb.RunMutateJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// Service to manage mutate jobs.
var MutateJobServiceService = exports.MutateJobServiceService = {
  // Creates a mutate job.
  createMutateJob: {
    path: '/google.ads.googleads.v1.services.MutateJobService/CreateMutateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_mutate_job_service_pb.CreateMutateJobRequest,
    responseType: google_ads_googleads_v1_services_mutate_job_service_pb.CreateMutateJobResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_CreateMutateJobRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_CreateMutateJobRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_CreateMutateJobResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_CreateMutateJobResponse,
  },
  // Returns the mutate job.
  getMutateJob: {
    path: '/google.ads.googleads.v1.services.MutateJobService/GetMutateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_mutate_job_service_pb.GetMutateJobRequest,
    responseType: google_ads_googleads_v1_resources_mutate_job_pb.MutateJob,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetMutateJobRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetMutateJobRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_MutateJob,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_MutateJob,
  },
  // Returns the results of the mutate job. The job must be done.
  // Supports standard list paging.
  listMutateJobResults: {
    path: '/google.ads.googleads.v1.services.MutateJobService/ListMutateJobResults',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_mutate_job_service_pb.ListMutateJobResultsRequest,
    responseType: google_ads_googleads_v1_services_mutate_job_service_pb.ListMutateJobResultsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_ListMutateJobResultsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_ListMutateJobResultsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_ListMutateJobResultsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_ListMutateJobResultsResponse,
  },
  // Runs the mutate job.
  //
  // The Operation.metadata field type is MutateJobMetadata. When finished, the
  // long running operation will not contain errors or a response. Instead, use
  // ListMutateJobResults to get the results of the job.
  runMutateJob: {
    path: '/google.ads.googleads.v1.services.MutateJobService/RunMutateJob',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_mutate_job_service_pb.RunMutateJobRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_ads_googleads_v1_services_RunMutateJobRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_RunMutateJobRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Add operations to the mutate job.
  addMutateJobOperations: {
    path: '/google.ads.googleads.v1.services.MutateJobService/AddMutateJobOperations',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_mutate_job_service_pb.AddMutateJobOperationsRequest,
    responseType: google_ads_googleads_v1_services_mutate_job_service_pb.AddMutateJobOperationsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_AddMutateJobOperationsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_AddMutateJobOperationsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_AddMutateJobOperationsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_AddMutateJobOperationsResponse,
  },
};

exports.MutateJobServiceClient = grpc.makeGenericClientConstructor(MutateJobServiceService);
