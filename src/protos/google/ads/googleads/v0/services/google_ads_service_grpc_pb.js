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
var google_ads_googleads_v0_services_google_ads_service_pb = require('../../../../../google/ads/googleads/v0/services/google_ads_service_pb.js');
var google_ads_googleads_v0_common_metrics_pb = require('../../../../../google/ads/googleads/v0/common/metrics_pb.js');
var google_ads_googleads_v0_common_segments_pb = require('../../../../../google/ads/googleads/v0/common/segments_pb.js');
var google_ads_googleads_v0_resources_account_budget_pb = require('../../../../../google/ads/googleads/v0/resources/account_budget_pb.js');
var google_ads_googleads_v0_resources_account_budget_proposal_pb = require('../../../../../google/ads/googleads/v0/resources/account_budget_proposal_pb.js');
var google_ads_googleads_v0_resources_ad_group_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_pb.js');
var google_ads_googleads_v0_resources_ad_group_ad_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_ad_pb.js');
var google_ads_googleads_v0_resources_ad_group_audience_view_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_audience_view_pb.js');
var google_ads_googleads_v0_resources_ad_group_bid_modifier_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_bid_modifier_pb.js');
var google_ads_googleads_v0_resources_ad_group_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb.js');
var google_ads_googleads_v0_resources_ad_group_feed_pb = require('../../../../../google/ads/googleads/v0/resources/ad_group_feed_pb.js');
var google_ads_googleads_v0_resources_ad_schedule_view_pb = require('../../../../../google/ads/googleads/v0/resources/ad_schedule_view_pb.js');
var google_ads_googleads_v0_resources_age_range_view_pb = require('../../../../../google/ads/googleads/v0/resources/age_range_view_pb.js');
var google_ads_googleads_v0_resources_bidding_strategy_pb = require('../../../../../google/ads/googleads/v0/resources/bidding_strategy_pb.js');
var google_ads_googleads_v0_resources_billing_setup_pb = require('../../../../../google/ads/googleads/v0/resources/billing_setup_pb.js');
var google_ads_googleads_v0_resources_campaign_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_pb.js');
var google_ads_googleads_v0_resources_campaign_audience_view_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_audience_view_pb.js');
var google_ads_googleads_v0_resources_campaign_bid_modifier_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_bid_modifier_pb.js');
var google_ads_googleads_v0_resources_campaign_budget_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_budget_pb.js');
var google_ads_googleads_v0_resources_campaign_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_criterion_pb.js');
var google_ads_googleads_v0_resources_campaign_feed_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_feed_pb.js');
var google_ads_googleads_v0_resources_campaign_shared_set_pb = require('../../../../../google/ads/googleads/v0/resources/campaign_shared_set_pb.js');
var google_ads_googleads_v0_resources_carrier_constant_pb = require('../../../../../google/ads/googleads/v0/resources/carrier_constant_pb.js');
var google_ads_googleads_v0_resources_change_status_pb = require('../../../../../google/ads/googleads/v0/resources/change_status_pb.js');
var google_ads_googleads_v0_resources_conversion_action_pb = require('../../../../../google/ads/googleads/v0/resources/conversion_action_pb.js');
var google_ads_googleads_v0_resources_customer_pb = require('../../../../../google/ads/googleads/v0/resources/customer_pb.js');
var google_ads_googleads_v0_resources_customer_client_pb = require('../../../../../google/ads/googleads/v0/resources/customer_client_pb.js');
var google_ads_googleads_v0_resources_customer_client_link_pb = require('../../../../../google/ads/googleads/v0/resources/customer_client_link_pb.js');
var google_ads_googleads_v0_resources_customer_feed_pb = require('../../../../../google/ads/googleads/v0/resources/customer_feed_pb.js');
var google_ads_googleads_v0_resources_customer_manager_link_pb = require('../../../../../google/ads/googleads/v0/resources/customer_manager_link_pb.js');
var google_ads_googleads_v0_resources_display_keyword_view_pb = require('../../../../../google/ads/googleads/v0/resources/display_keyword_view_pb.js');
var google_ads_googleads_v0_resources_feed_pb = require('../../../../../google/ads/googleads/v0/resources/feed_pb.js');
var google_ads_googleads_v0_resources_feed_item_pb = require('../../../../../google/ads/googleads/v0/resources/feed_item_pb.js');
var google_ads_googleads_v0_resources_feed_mapping_pb = require('../../../../../google/ads/googleads/v0/resources/feed_mapping_pb.js');
var google_ads_googleads_v0_resources_gender_view_pb = require('../../../../../google/ads/googleads/v0/resources/gender_view_pb.js');
var google_ads_googleads_v0_resources_geo_target_constant_pb = require('../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb.js');
var google_ads_googleads_v0_resources_hotel_group_view_pb = require('../../../../../google/ads/googleads/v0/resources/hotel_group_view_pb.js');
var google_ads_googleads_v0_resources_hotel_performance_view_pb = require('../../../../../google/ads/googleads/v0/resources/hotel_performance_view_pb.js');
var google_ads_googleads_v0_resources_keyword_plan_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_plan_pb.js');
var google_ads_googleads_v0_resources_keyword_plan_ad_group_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_plan_ad_group_pb.js');
var google_ads_googleads_v0_resources_keyword_plan_campaign_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_plan_campaign_pb.js');
var google_ads_googleads_v0_resources_keyword_plan_keyword_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_plan_keyword_pb.js');
var google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_plan_negative_keyword_pb.js');
var google_ads_googleads_v0_resources_keyword_view_pb = require('../../../../../google/ads/googleads/v0/resources/keyword_view_pb.js');
var google_ads_googleads_v0_resources_language_constant_pb = require('../../../../../google/ads/googleads/v0/resources/language_constant_pb.js');
var google_ads_googleads_v0_resources_managed_placement_view_pb = require('../../../../../google/ads/googleads/v0/resources/managed_placement_view_pb.js');
var google_ads_googleads_v0_resources_media_file_pb = require('../../../../../google/ads/googleads/v0/resources/media_file_pb.js');
var google_ads_googleads_v0_resources_mobile_app_category_constant_pb = require('../../../../../google/ads/googleads/v0/resources/mobile_app_category_constant_pb.js');
var google_ads_googleads_v0_resources_mobile_device_constant_pb = require('../../../../../google/ads/googleads/v0/resources/mobile_device_constant_pb.js');
var google_ads_googleads_v0_resources_operating_system_version_constant_pb = require('../../../../../google/ads/googleads/v0/resources/operating_system_version_constant_pb.js');
var google_ads_googleads_v0_resources_parental_status_view_pb = require('../../../../../google/ads/googleads/v0/resources/parental_status_view_pb.js');
var google_ads_googleads_v0_resources_product_group_view_pb = require('../../../../../google/ads/googleads/v0/resources/product_group_view_pb.js');
var google_ads_googleads_v0_resources_recommendation_pb = require('../../../../../google/ads/googleads/v0/resources/recommendation_pb.js');
var google_ads_googleads_v0_resources_remarketing_action_pb = require('../../../../../google/ads/googleads/v0/resources/remarketing_action_pb.js');
var google_ads_googleads_v0_resources_search_term_view_pb = require('../../../../../google/ads/googleads/v0/resources/search_term_view_pb.js');
var google_ads_googleads_v0_resources_shared_criterion_pb = require('../../../../../google/ads/googleads/v0/resources/shared_criterion_pb.js');
var google_ads_googleads_v0_resources_shared_set_pb = require('../../../../../google/ads/googleads/v0/resources/shared_set_pb.js');
var google_ads_googleads_v0_resources_topic_constant_pb = require('../../../../../google/ads/googleads/v0/resources/topic_constant_pb.js');
var google_ads_googleads_v0_resources_topic_view_pb = require('../../../../../google/ads/googleads/v0/resources/topic_view_pb.js');
var google_ads_googleads_v0_resources_user_interest_pb = require('../../../../../google/ads/googleads/v0/resources/user_interest_pb.js');
var google_ads_googleads_v0_resources_user_list_pb = require('../../../../../google/ads/googleads/v0/resources/user_list_pb.js');
var google_ads_googleads_v0_resources_video_pb = require('../../../../../google/ads/googleads/v0/resources/video_pb.js');
var google_ads_googleads_v0_services_ad_group_ad_service_pb = require('../../../../../google/ads/googleads/v0/services/ad_group_ad_service_pb.js');
var google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb = require('../../../../../google/ads/googleads/v0/services/ad_group_bid_modifier_service_pb.js');
var google_ads_googleads_v0_services_ad_group_criterion_service_pb = require('../../../../../google/ads/googleads/v0/services/ad_group_criterion_service_pb.js');
var google_ads_googleads_v0_services_ad_group_service_pb = require('../../../../../google/ads/googleads/v0/services/ad_group_service_pb.js');
var google_ads_googleads_v0_services_bidding_strategy_service_pb = require('../../../../../google/ads/googleads/v0/services/bidding_strategy_service_pb.js');
var google_ads_googleads_v0_services_campaign_bid_modifier_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_bid_modifier_service_pb.js');
var google_ads_googleads_v0_services_campaign_budget_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_budget_service_pb.js');
var google_ads_googleads_v0_services_campaign_criterion_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_criterion_service_pb.js');
var google_ads_googleads_v0_services_campaign_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_service_pb.js');
var google_ads_googleads_v0_services_campaign_shared_set_service_pb = require('../../../../../google/ads/googleads/v0/services/campaign_shared_set_service_pb.js');
var google_ads_googleads_v0_services_conversion_action_service_pb = require('../../../../../google/ads/googleads/v0/services/conversion_action_service_pb.js');
var google_ads_googleads_v0_services_shared_criterion_service_pb = require('../../../../../google/ads/googleads/v0/services/shared_criterion_service_pb.js');
var google_ads_googleads_v0_services_shared_set_service_pb = require('../../../../../google/ads/googleads/v0/services/shared_set_service_pb.js');
var google_ads_googleads_v0_services_user_list_service_pb = require('../../../../../google/ads/googleads/v0/services/user_list_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v0_services_MutateGoogleAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_google_ads_service_pb.MutateGoogleAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateGoogleAdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateGoogleAdsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_google_ads_service_pb.MutateGoogleAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_MutateGoogleAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_google_ads_service_pb.MutateGoogleAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.MutateGoogleAdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_MutateGoogleAdsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_google_ads_service_pb.MutateGoogleAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_SearchGoogleAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.SearchGoogleAdsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_SearchGoogleAdsRequest(buffer_arg) {
  return google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v0_services_SearchGoogleAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v0.services.SearchGoogleAdsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v0_services_SearchGoogleAdsResponse(buffer_arg) {
  return google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service to fetch data and metrics across resources.
var GoogleAdsServiceService = exports.GoogleAdsServiceService = {
  // Returns all rows that match the search query.
  search: {
    path: '/google.ads.googleads.v0.services.GoogleAdsService/Search',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsRequest,
    responseType: google_ads_googleads_v0_services_google_ads_service_pb.SearchGoogleAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_SearchGoogleAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_SearchGoogleAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_SearchGoogleAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_SearchGoogleAdsResponse,
  },
  // Creates, updates, or removes resources. Operation statuses are returned.
  mutate: {
    path: '/google.ads.googleads.v0.services.GoogleAdsService/Mutate',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v0_services_google_ads_service_pb.MutateGoogleAdsRequest,
    responseType: google_ads_googleads_v0_services_google_ads_service_pb.MutateGoogleAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v0_services_MutateGoogleAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v0_services_MutateGoogleAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v0_services_MutateGoogleAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v0_services_MutateGoogleAdsResponse,
  },
};

exports.GoogleAdsServiceClient = grpc.makeGenericClientConstructor(GoogleAdsServiceService);
