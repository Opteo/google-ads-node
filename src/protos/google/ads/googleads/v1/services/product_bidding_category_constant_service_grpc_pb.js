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
var google_ads_googleads_v1_services_product_bidding_category_constant_service_pb = require('../../../../../google/ads/googleads/v1/services/product_bidding_category_constant_service_pb.js');
var google_ads_googleads_v1_resources_product_bidding_category_constant_pb = require('../../../../../google/ads/googleads/v1/resources/product_bidding_category_constant_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_ProductBiddingCategoryConstant(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.ProductBiddingCategoryConstant');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_ProductBiddingCategoryConstant(buffer_arg) {
  return google_ads_googleads_v1_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetProductBiddingCategoryConstantRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_product_bidding_category_constant_service_pb.GetProductBiddingCategoryConstantRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetProductBiddingCategoryConstantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetProductBiddingCategoryConstantRequest(buffer_arg) {
  return google_ads_googleads_v1_services_product_bidding_category_constant_service_pb.GetProductBiddingCategoryConstantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Product Bidding Category constant service
//
// Service to fetch Product Bidding Categories.
var ProductBiddingCategoryConstantServiceService = exports.ProductBiddingCategoryConstantServiceService = {
  // Returns the requested Product Bidding Category in full detail.
  getProductBiddingCategoryConstant: {
    path: '/google.ads.googleads.v1.services.ProductBiddingCategoryConstantService/GetProductBiddingCategoryConstant',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_product_bidding_category_constant_service_pb.GetProductBiddingCategoryConstantRequest,
    responseType: google_ads_googleads_v1_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetProductBiddingCategoryConstantRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetProductBiddingCategoryConstantRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_ProductBiddingCategoryConstant,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_ProductBiddingCategoryConstant,
  },
};

exports.ProductBiddingCategoryConstantServiceClient = grpc.makeGenericClientConstructor(ProductBiddingCategoryConstantServiceService);
