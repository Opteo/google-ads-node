// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC.
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
var google_ads_googleads_v0_services_video_service_pb = require('../../../../../google/ads/googleads/v0/services/video_service_pb.js');
var google_ads_googleads_v0_resources_video_pb = require('../../../../../google/ads/googleads/v0/resources/video_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');

function serialize_google_ads_googleads_v0_resources_Video(arg) {
  if (!(arg instanceof google_ads_googleads_v0_resources_video_pb.Video)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.resources.Video');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_resources_Video(buffer_arg) {
  return google_ads_googleads_v0_resources_video_pb.Video.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_GetVideoRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_video_service_pb.GetVideoRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.GetVideoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_GetVideoRequest(buffer_arg) {
  return google_ads_googleads_v0_services_video_service_pb.GetVideoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to manage videos.
var VideoServiceService = exports.VideoServiceService = {
  // Returns the requested video in full detail.
  getVideo: {
    path: '/google.ads.googleads.v0.services.VideoService/GetVideo',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_video_service_pb.GetVideoRequest,
    responseType: google_ads_googleads_v0_resources_video_pb.Video,
    requestSerialize: serialize_google_ads_googleads_v0_services_GetVideoRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_GetVideoRequest,
    responseSerialize: serialize_google_ads_googleads_v0_resources_Video,
    responseDeserialize: deserialize_google_ads_googleads_v0_resources_Video,
  },
};

exports.VideoServiceClient = grpc.makeGenericClientConstructor(VideoServiceService);
