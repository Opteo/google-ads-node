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
var google_ads_googleads_v2_services_shopping_performance_view_service_pb = require('../../../../../google/ads/googleads/v2/services/shopping_performance_view_service_pb.js');
var google_ads_googleads_v2_resources_shopping_performance_view_pb = require('../../../../../google/ads/googleads/v2/resources/shopping_performance_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_resources_ShoppingPerformanceView(arg) {
  if (!(arg instanceof google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.resources.ShoppingPerformanceView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_resources_ShoppingPerformanceView(buffer_arg) {
  return google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GetShoppingPerformanceViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GetShoppingPerformanceViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GetShoppingPerformanceViewRequest(buffer_arg) {
  return google_ads_googleads_v2_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the ShoppingPerformanceView service.
//
// Service to fetch Shopping performance views.
var ShoppingPerformanceViewServiceService = exports.ShoppingPerformanceViewServiceService = {
  // Returns the requested Shopping performance view in full detail.
  getShoppingPerformanceView: {
    path: '/google.ads.googleads.v2.services.ShoppingPerformanceViewService/GetShoppingPerformanceView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_shopping_performance_view_service_pb.GetShoppingPerformanceViewRequest,
    responseType: google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView,
    requestSerialize: serialize_google_ads_googleads_v2_services_GetShoppingPerformanceViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GetShoppingPerformanceViewRequest,
    responseSerialize: serialize_google_ads_googleads_v2_resources_ShoppingPerformanceView,
    responseDeserialize: deserialize_google_ads_googleads_v2_resources_ShoppingPerformanceView,
  },
};

exports.ShoppingPerformanceViewServiceClient = grpc.makeGenericClientConstructor(ShoppingPerformanceViewServiceService);
