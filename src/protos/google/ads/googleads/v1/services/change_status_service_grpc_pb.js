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
var google_ads_googleads_v1_services_change_status_service_pb = require('../../../../../google/ads/googleads/v1/services/change_status_service_pb.js');
var google_ads_googleads_v1_resources_change_status_pb = require('../../../../../google/ads/googleads/v1/resources/change_status_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_ChangeStatus(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_change_status_pb.ChangeStatus)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.ChangeStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_ChangeStatus(buffer_arg) {
  return google_ads_googleads_v1_resources_change_status_pb.ChangeStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetChangeStatusRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_change_status_service_pb.GetChangeStatusRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetChangeStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetChangeStatusRequest(buffer_arg) {
  return google_ads_googleads_v1_services_change_status_service_pb.GetChangeStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Change Status service.
//
// Service to fetch change statuses.
var ChangeStatusServiceService = exports.ChangeStatusServiceService = {
  // Returns the requested change status in full detail.
  getChangeStatus: {
    path: '/google.ads.googleads.v1.services.ChangeStatusService/GetChangeStatus',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_change_status_service_pb.GetChangeStatusRequest,
    responseType: google_ads_googleads_v1_resources_change_status_pb.ChangeStatus,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetChangeStatusRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetChangeStatusRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_ChangeStatus,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_ChangeStatus,
  },
};

exports.ChangeStatusServiceClient = grpc.makeGenericClientConstructor(ChangeStatusServiceService);
