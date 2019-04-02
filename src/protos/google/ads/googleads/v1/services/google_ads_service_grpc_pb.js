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
var google_ads_googleads_v1_services_google_ads_service_pb = require('../../../../../google/ads/googleads/v1/services/google_ads_service_pb.js');
var google_ads_googleads_v1_common_metrics_pb = require('../../../../../google/ads/googleads/v1/common/metrics_pb.js');
var google_ads_googleads_v1_common_segments_pb = require('../../../../../google/ads/googleads/v1/common/segments_pb.js');
var google_ads_googleads_v1_resources_account_budget_pb = require('../../../../../google/ads/googleads/v1/resources/account_budget_pb.js');
var google_ads_googleads_v1_resources_account_budget_proposal_pb = require('../../../../../google/ads/googleads/v1/resources/account_budget_proposal_pb.js');
var google_ads_googleads_v1_resources_ad_group_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_pb.js');
var google_ads_googleads_v1_resources_ad_group_ad_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_ad_pb.js');
var google_ads_googleads_v1_resources_ad_group_ad_label_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_ad_label_pb.js');
var google_ads_googleads_v1_resources_ad_group_audience_view_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_audience_view_pb.js');
var google_ads_googleads_v1_resources_ad_group_bid_modifier_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_bid_modifier_pb.js');
var google_ads_googleads_v1_resources_ad_group_criterion_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_criterion_pb.js');
var google_ads_googleads_v1_resources_ad_group_criterion_label_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_criterion_label_pb.js');
var google_ads_googleads_v1_resources_ad_group_extension_setting_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_extension_setting_pb.js');
var google_ads_googleads_v1_resources_ad_group_feed_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_feed_pb.js');
var google_ads_googleads_v1_resources_ad_group_label_pb = require('../../../../../google/ads/googleads/v1/resources/ad_group_label_pb.js');
var google_ads_googleads_v1_resources_ad_schedule_view_pb = require('../../../../../google/ads/googleads/v1/resources/ad_schedule_view_pb.js');
var google_ads_googleads_v1_resources_age_range_view_pb = require('../../../../../google/ads/googleads/v1/resources/age_range_view_pb.js');
var google_ads_googleads_v1_resources_asset_pb = require('../../../../../google/ads/googleads/v1/resources/asset_pb.js');
var google_ads_googleads_v1_resources_bidding_strategy_pb = require('../../../../../google/ads/googleads/v1/resources/bidding_strategy_pb.js');
var google_ads_googleads_v1_resources_billing_setup_pb = require('../../../../../google/ads/googleads/v1/resources/billing_setup_pb.js');
var google_ads_googleads_v1_resources_campaign_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_pb.js');
var google_ads_googleads_v1_resources_campaign_audience_view_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_audience_view_pb.js');
var google_ads_googleads_v1_resources_campaign_bid_modifier_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_bid_modifier_pb.js');
var google_ads_googleads_v1_resources_campaign_budget_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_budget_pb.js');
var google_ads_googleads_v1_resources_campaign_criterion_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_criterion_pb.js');
var google_ads_googleads_v1_resources_campaign_extension_setting_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_extension_setting_pb.js');
var google_ads_googleads_v1_resources_campaign_feed_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_feed_pb.js');
var google_ads_googleads_v1_resources_campaign_label_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_label_pb.js');
var google_ads_googleads_v1_resources_campaign_shared_set_pb = require('../../../../../google/ads/googleads/v1/resources/campaign_shared_set_pb.js');
var google_ads_googleads_v1_resources_carrier_constant_pb = require('../../../../../google/ads/googleads/v1/resources/carrier_constant_pb.js');
var google_ads_googleads_v1_resources_change_status_pb = require('../../../../../google/ads/googleads/v1/resources/change_status_pb.js');
var google_ads_googleads_v1_resources_click_view_pb = require('../../../../../google/ads/googleads/v1/resources/click_view_pb.js');
var google_ads_googleads_v1_resources_conversion_action_pb = require('../../../../../google/ads/googleads/v1/resources/conversion_action_pb.js');
var google_ads_googleads_v1_resources_custom_interest_pb = require('../../../../../google/ads/googleads/v1/resources/custom_interest_pb.js');
var google_ads_googleads_v1_resources_customer_pb = require('../../../../../google/ads/googleads/v1/resources/customer_pb.js');
var google_ads_googleads_v1_resources_customer_client_pb = require('../../../../../google/ads/googleads/v1/resources/customer_client_pb.js');
var google_ads_googleads_v1_resources_customer_client_link_pb = require('../../../../../google/ads/googleads/v1/resources/customer_client_link_pb.js');
var google_ads_googleads_v1_resources_customer_extension_setting_pb = require('../../../../../google/ads/googleads/v1/resources/customer_extension_setting_pb.js');
var google_ads_googleads_v1_resources_customer_feed_pb = require('../../../../../google/ads/googleads/v1/resources/customer_feed_pb.js');
var google_ads_googleads_v1_resources_customer_label_pb = require('../../../../../google/ads/googleads/v1/resources/customer_label_pb.js');
var google_ads_googleads_v1_resources_customer_manager_link_pb = require('../../../../../google/ads/googleads/v1/resources/customer_manager_link_pb.js');
var google_ads_googleads_v1_resources_customer_negative_criterion_pb = require('../../../../../google/ads/googleads/v1/resources/customer_negative_criterion_pb.js');
var google_ads_googleads_v1_resources_detail_placement_view_pb = require('../../../../../google/ads/googleads/v1/resources/detail_placement_view_pb.js');
var google_ads_googleads_v1_resources_display_keyword_view_pb = require('../../../../../google/ads/googleads/v1/resources/display_keyword_view_pb.js');
var google_ads_googleads_v1_resources_domain_category_pb = require('../../../../../google/ads/googleads/v1/resources/domain_category_pb.js');
var google_ads_googleads_v1_resources_dynamic_search_ads_search_term_view_pb = require('../../../../../google/ads/googleads/v1/resources/dynamic_search_ads_search_term_view_pb.js');
var google_ads_googleads_v1_resources_extension_feed_item_pb = require('../../../../../google/ads/googleads/v1/resources/extension_feed_item_pb.js');
var google_ads_googleads_v1_resources_feed_pb = require('../../../../../google/ads/googleads/v1/resources/feed_pb.js');
var google_ads_googleads_v1_resources_feed_item_pb = require('../../../../../google/ads/googleads/v1/resources/feed_item_pb.js');
var google_ads_googleads_v1_resources_feed_item_target_pb = require('../../../../../google/ads/googleads/v1/resources/feed_item_target_pb.js');
var google_ads_googleads_v1_resources_feed_mapping_pb = require('../../../../../google/ads/googleads/v1/resources/feed_mapping_pb.js');
var google_ads_googleads_v1_resources_feed_placeholder_view_pb = require('../../../../../google/ads/googleads/v1/resources/feed_placeholder_view_pb.js');
var google_ads_googleads_v1_resources_gender_view_pb = require('../../../../../google/ads/googleads/v1/resources/gender_view_pb.js');
var google_ads_googleads_v1_resources_geo_target_constant_pb = require('../../../../../google/ads/googleads/v1/resources/geo_target_constant_pb.js');
var google_ads_googleads_v1_resources_geographic_view_pb = require('../../../../../google/ads/googleads/v1/resources/geographic_view_pb.js');
var google_ads_googleads_v1_resources_group_placement_view_pb = require('../../../../../google/ads/googleads/v1/resources/group_placement_view_pb.js');
var google_ads_googleads_v1_resources_hotel_group_view_pb = require('../../../../../google/ads/googleads/v1/resources/hotel_group_view_pb.js');
var google_ads_googleads_v1_resources_hotel_performance_view_pb = require('../../../../../google/ads/googleads/v1/resources/hotel_performance_view_pb.js');
var google_ads_googleads_v1_resources_keyword_plan_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_plan_pb.js');
var google_ads_googleads_v1_resources_keyword_plan_ad_group_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_plan_ad_group_pb.js');
var google_ads_googleads_v1_resources_keyword_plan_campaign_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_plan_campaign_pb.js');
var google_ads_googleads_v1_resources_keyword_plan_keyword_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_plan_keyword_pb.js');
var google_ads_googleads_v1_resources_keyword_plan_negative_keyword_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_plan_negative_keyword_pb.js');
var google_ads_googleads_v1_resources_keyword_view_pb = require('../../../../../google/ads/googleads/v1/resources/keyword_view_pb.js');
var google_ads_googleads_v1_resources_label_pb = require('../../../../../google/ads/googleads/v1/resources/label_pb.js');
var google_ads_googleads_v1_resources_language_constant_pb = require('../../../../../google/ads/googleads/v1/resources/language_constant_pb.js');
var google_ads_googleads_v1_resources_location_view_pb = require('../../../../../google/ads/googleads/v1/resources/location_view_pb.js');
var google_ads_googleads_v1_resources_managed_placement_view_pb = require('../../../../../google/ads/googleads/v1/resources/managed_placement_view_pb.js');
var google_ads_googleads_v1_resources_media_file_pb = require('../../../../../google/ads/googleads/v1/resources/media_file_pb.js');
var google_ads_googleads_v1_resources_mobile_app_category_constant_pb = require('../../../../../google/ads/googleads/v1/resources/mobile_app_category_constant_pb.js');
var google_ads_googleads_v1_resources_mobile_device_constant_pb = require('../../../../../google/ads/googleads/v1/resources/mobile_device_constant_pb.js');
var google_ads_googleads_v1_resources_operating_system_version_constant_pb = require('../../../../../google/ads/googleads/v1/resources/operating_system_version_constant_pb.js');
var google_ads_googleads_v1_resources_parental_status_view_pb = require('../../../../../google/ads/googleads/v1/resources/parental_status_view_pb.js');
var google_ads_googleads_v1_resources_product_bidding_category_constant_pb = require('../../../../../google/ads/googleads/v1/resources/product_bidding_category_constant_pb.js');
var google_ads_googleads_v1_resources_product_group_view_pb = require('../../../../../google/ads/googleads/v1/resources/product_group_view_pb.js');
var google_ads_googleads_v1_resources_recommendation_pb = require('../../../../../google/ads/googleads/v1/resources/recommendation_pb.js');
var google_ads_googleads_v1_resources_remarketing_action_pb = require('../../../../../google/ads/googleads/v1/resources/remarketing_action_pb.js');
var google_ads_googleads_v1_resources_search_term_view_pb = require('../../../../../google/ads/googleads/v1/resources/search_term_view_pb.js');
var google_ads_googleads_v1_resources_shared_criterion_pb = require('../../../../../google/ads/googleads/v1/resources/shared_criterion_pb.js');
var google_ads_googleads_v1_resources_shared_set_pb = require('../../../../../google/ads/googleads/v1/resources/shared_set_pb.js');
var google_ads_googleads_v1_resources_shopping_performance_view_pb = require('../../../../../google/ads/googleads/v1/resources/shopping_performance_view_pb.js');
var google_ads_googleads_v1_resources_topic_constant_pb = require('../../../../../google/ads/googleads/v1/resources/topic_constant_pb.js');
var google_ads_googleads_v1_resources_topic_view_pb = require('../../../../../google/ads/googleads/v1/resources/topic_view_pb.js');
var google_ads_googleads_v1_resources_user_interest_pb = require('../../../../../google/ads/googleads/v1/resources/user_interest_pb.js');
var google_ads_googleads_v1_resources_user_list_pb = require('../../../../../google/ads/googleads/v1/resources/user_list_pb.js');
var google_ads_googleads_v1_resources_video_pb = require('../../../../../google/ads/googleads/v1/resources/video_pb.js');
var google_ads_googleads_v1_services_ad_group_ad_label_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_ad_label_service_pb.js');
var google_ads_googleads_v1_services_ad_group_ad_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_ad_service_pb.js');
var google_ads_googleads_v1_services_ad_group_bid_modifier_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_bid_modifier_service_pb.js');
var google_ads_googleads_v1_services_ad_group_criterion_label_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_criterion_label_service_pb.js');
var google_ads_googleads_v1_services_ad_group_criterion_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_criterion_service_pb.js');
var google_ads_googleads_v1_services_ad_group_extension_setting_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_extension_setting_service_pb.js');
var google_ads_googleads_v1_services_ad_group_feed_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_feed_service_pb.js');
var google_ads_googleads_v1_services_ad_group_label_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_label_service_pb.js');
var google_ads_googleads_v1_services_ad_group_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_group_service_pb.js');
var google_ads_googleads_v1_services_ad_parameter_service_pb = require('../../../../../google/ads/googleads/v1/services/ad_parameter_service_pb.js');
var google_ads_googleads_v1_services_asset_service_pb = require('../../../../../google/ads/googleads/v1/services/asset_service_pb.js');
var google_ads_googleads_v1_services_bidding_strategy_service_pb = require('../../../../../google/ads/googleads/v1/services/bidding_strategy_service_pb.js');
var google_ads_googleads_v1_services_campaign_bid_modifier_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_bid_modifier_service_pb.js');
var google_ads_googleads_v1_services_campaign_budget_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_budget_service_pb.js');
var google_ads_googleads_v1_services_campaign_criterion_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_criterion_service_pb.js');
var google_ads_googleads_v1_services_campaign_extension_setting_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_extension_setting_service_pb.js');
var google_ads_googleads_v1_services_campaign_feed_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_feed_service_pb.js');
var google_ads_googleads_v1_services_campaign_label_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_label_service_pb.js');
var google_ads_googleads_v1_services_campaign_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_service_pb.js');
var google_ads_googleads_v1_services_campaign_shared_set_service_pb = require('../../../../../google/ads/googleads/v1/services/campaign_shared_set_service_pb.js');
var google_ads_googleads_v1_services_conversion_action_service_pb = require('../../../../../google/ads/googleads/v1/services/conversion_action_service_pb.js');
var google_ads_googleads_v1_services_customer_extension_setting_service_pb = require('../../../../../google/ads/googleads/v1/services/customer_extension_setting_service_pb.js');
var google_ads_googleads_v1_services_customer_feed_service_pb = require('../../../../../google/ads/googleads/v1/services/customer_feed_service_pb.js');
var google_ads_googleads_v1_services_customer_label_service_pb = require('../../../../../google/ads/googleads/v1/services/customer_label_service_pb.js');
var google_ads_googleads_v1_services_customer_negative_criterion_service_pb = require('../../../../../google/ads/googleads/v1/services/customer_negative_criterion_service_pb.js');
var google_ads_googleads_v1_services_customer_service_pb = require('../../../../../google/ads/googleads/v1/services/customer_service_pb.js');
var google_ads_googleads_v1_services_extension_feed_item_service_pb = require('../../../../../google/ads/googleads/v1/services/extension_feed_item_service_pb.js');
var google_ads_googleads_v1_services_feed_item_service_pb = require('../../../../../google/ads/googleads/v1/services/feed_item_service_pb.js');
var google_ads_googleads_v1_services_feed_item_target_service_pb = require('../../../../../google/ads/googleads/v1/services/feed_item_target_service_pb.js');
var google_ads_googleads_v1_services_feed_mapping_service_pb = require('../../../../../google/ads/googleads/v1/services/feed_mapping_service_pb.js');
var google_ads_googleads_v1_services_feed_service_pb = require('../../../../../google/ads/googleads/v1/services/feed_service_pb.js');
var google_ads_googleads_v1_services_label_service_pb = require('../../../../../google/ads/googleads/v1/services/label_service_pb.js');
var google_ads_googleads_v1_services_media_file_service_pb = require('../../../../../google/ads/googleads/v1/services/media_file_service_pb.js');
var google_ads_googleads_v1_services_remarketing_action_service_pb = require('../../../../../google/ads/googleads/v1/services/remarketing_action_service_pb.js');
var google_ads_googleads_v1_services_shared_criterion_service_pb = require('../../../../../google/ads/googleads/v1/services/shared_criterion_service_pb.js');
var google_ads_googleads_v1_services_shared_set_service_pb = require('../../../../../google/ads/googleads/v1/services/shared_set_service_pb.js');
var google_ads_googleads_v1_services_user_list_service_pb = require('../../../../../google/ads/googleads/v1/services/user_list_service_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_rpc_status_pb = require('../../../../../google/rpc/status_pb.js');

function serialize_google_ads_googleads_v1_services_MutateGoogleAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateGoogleAdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateGoogleAdsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_MutateGoogleAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.MutateGoogleAdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_MutateGoogleAdsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_SearchGoogleAdsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.SearchGoogleAdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_SearchGoogleAdsRequest(buffer_arg) {
  return google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v1_services_SearchGoogleAdsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v1.services.SearchGoogleAdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v1_services_SearchGoogleAdsResponse(buffer_arg) {
  return google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the GoogleAdsService.
//
// Service to fetch data and metrics across resources.
var GoogleAdsServiceService = exports.GoogleAdsServiceService = {
  // Returns all rows that match the search query.
  search: {
    path: '/google.ads.googleads.v1.services.GoogleAdsService/Search',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsRequest,
    responseType: google_ads_googleads_v1_services_google_ads_service_pb.SearchGoogleAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_SearchGoogleAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_SearchGoogleAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_SearchGoogleAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_SearchGoogleAdsResponse,
  },
  // Creates, updates, or removes resources. Operation statuses are returned.
  mutate: {
    path: '/google.ads.googleads.v1.services.GoogleAdsService/Mutate',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsRequest,
    responseType: google_ads_googleads_v1_services_google_ads_service_pb.MutateGoogleAdsResponse,
    requestSerialize: serialize_google_ads_googleads_v1_services_MutateGoogleAdsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v1_services_MutateGoogleAdsRequest,
    responseSerialize: serialize_google_ads_googleads_v1_services_MutateGoogleAdsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v1_services_MutateGoogleAdsResponse,
  },
};

exports.GoogleAdsServiceClient = grpc.makeGenericClientConstructor(GoogleAdsServiceService);
