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
var google_ads_googleads_v1_services_keyword_view_service_pb = require('../../../../../google/ads/googleads/v1/services/keyword_view_service_pb.js');
var google_ads_googleads_v1_resources_keyword_view_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_KeywordView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_keyword_view_pb.KeywordView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.KeywordView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_KeywordView(buffer_arg) {
  return google_ads_googleads_v1_resources_keyword_view_pb.KeywordView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetKeywordViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_keyword_view_service_pb.GetKeywordViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetKeywordViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetKeywordViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_keyword_view_service_pb.GetKeywordViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Keyword View service.
//
// Service to manage keyword views.
var KeywordViewServiceService = exports.KeywordViewServiceService = {
  // Returns the requested keyword view in full detail.
  getKeywordView: {
    path: '/google.ads.googleads.v1.services.KeywordViewService/GetKeywordView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_keyword_view_service_pb.GetKeywordViewRequest,
    responseType: google_ads_googleads_v1_resources_keyword_view_pb.KeywordView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetKeywordViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetKeywordViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_KeywordView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_KeywordView,
  },
};

exports.KeywordViewServiceClient = grpc.makeGenericClientConstructor(KeywordViewServiceService);
