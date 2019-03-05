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
var google_ads_googleads_v1_services_product_group_view_service_pb = require('../../../../../google/ads/googleads/v1/services/product_group_view_service_pb.js');
var google_ads_googleads_v1_resources_product_group_view_pb = require('../../../../../google/ads/googleads/v1/resources/product_group_view_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_ProductGroupView(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_product_group_view_pb.ProductGroupView)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.ProductGroupView');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_ProductGroupView(buffer_arg) {
  return google_ads_googleads_v1_resources_product_group_view_pb.ProductGroupView.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetProductGroupViewRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_product_group_view_service_pb.GetProductGroupViewRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetProductGroupViewRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetProductGroupViewRequest(buffer_arg) {
  return google_ads_googleads_v1_services_product_group_view_service_pb.GetProductGroupViewRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage product group views.
var ProductGroupViewServiceService = exports.ProductGroupViewServiceService = {
  // Returns the requested product group view in full detail.
  getProductGroupView: {
    path: '/google.ads.googleads.v1.services.ProductGroupViewService/GetProductGroupView',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_product_group_view_service_pb.GetProductGroupViewRequest,
    responseType: google_ads_googleads_v1_resources_product_group_view_pb.ProductGroupView,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetProductGroupViewRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetProductGroupViewRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_ProductGroupView,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_ProductGroupView,
  },
};

exports.ProductGroupViewServiceClient = grpc.makeGenericClientConstructor(ProductGroupViewServiceService);
