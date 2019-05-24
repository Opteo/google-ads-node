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
var google_ads_googleads_v1_services_asset_service_pb = require('../../../../../google/ads/googleads/v1/services/asset_service_pb.js');
var google_ads_googleads_v1_resources_asset_pb = require('../../../../../google/ads/googleads/v1/resources/asset_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v1_resources_Asset(arg) {
  if (!(arg instanceof google_ads_googleads_v1_resources_asset_pb.Asset)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.resources.Asset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_resources_Asset(buffer_arg) {
  return google_ads_googleads_v1_resources_asset_pb.Asset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_GetAssetRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_asset_service_pb.GetAssetRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.GetAssetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_GetAssetRequest(buffer_arg) {
  return google_ads_googleads_v1_services_asset_service_pb.GetAssetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAssetsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_asset_service_pb.MutateAssetsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAssetsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_asset_service_pb.MutateAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateAssetsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_asset_service_pb.MutateAssetsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateAssetsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateAssetsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_asset_service_pb.MutateAssetsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Asset service.
//
// Service to manage assets. Asset types can be created with AssetService are
// YoutubeVideoAsset, MediaBundleAsset and ImageAsset. TextAsset should be
// created with Ad inline.
var AssetServiceService = exports.AssetServiceService = {
  // Returns the requested asset in full detail.
  getAsset: {
    path: '/google.ads.googleads.v1.services.AssetService/GetAsset',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_asset_service_pb.GetAssetRequest,
    responseType: google_ads_googleads_v1_resources_asset_pb.Asset,
    requestSerialize: serialize_google_ads_googleads_v1_services_GetAssetRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_GetAssetRequest,
    responseSerialize: serialize_google_ads_googleads_v1_resources_Asset,
    responseDeserialize: deserialize_google_ads_googleads_v1_resources_Asset,
  },
  // Creates assets. Operation statuses are returned.
  mutateAssets: {
    path: '/google.ads.googleads.v1.services.AssetService/MutateAssets',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_asset_service_pb.MutateAssetsRequest,
    responseType: google_ads_googleads_v1_services_asset_service_pb.MutateAssetsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateAssetsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateAssetsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateAssetsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateAssetsResponse,
  },
};

exports.AssetServiceClient = grpc.makeGenericClientConstructor(AssetServiceService);
