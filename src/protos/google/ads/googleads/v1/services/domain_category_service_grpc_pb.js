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
var google_ads_googleads_v1_services_domain_category_service_pb = require('../../../../../google/ads/googleads/v1/services/domain_category_service_pb.js');
var google_ads_googleads_v1_resources_domain_category_pb = require('../../../../../google/ads/googleads/v1/resources/domain_category_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_DomainCategory(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_domain_category_pb.DomainCategory)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.DomainCategory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_DomainCategory(buffer_arg) {
  return google_ads_googleads_v1_resources_domain_category_pb.DomainCategory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetDomainCategoryRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_domain_category_service_pb.GetDomainCategoryRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetDomainCategoryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetDomainCategoryRequest(buffer_arg) {
  return google_ads_googleads_v1_services_domain_category_service_pb.GetDomainCategoryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch domain categories.
var DomainCategoryServiceService = exports.DomainCategoryServiceService = {
  // Returns the requested domain category.
  getDomainCategory: {
    path: '/google.ads.googleads.v1.services.DomainCategoryService/GetDomainCategory',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_domain_category_service_pb.GetDomainCategoryRequest,
    responseType: google_ads_googleads_v1_resources_domain_category_pb.DomainCategory,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetDomainCategoryRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetDomainCategoryRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_DomainCategory,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_DomainCategory,
  },
};

exports.DomainCategoryServiceClient = grpc.makeGenericClientConstructor(DomainCategoryServiceService);
