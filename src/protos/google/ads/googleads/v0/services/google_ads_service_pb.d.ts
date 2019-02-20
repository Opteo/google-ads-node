// package: google.ads.googleads.v0.services
// file: google/ads/googleads/v0/services/google_ads_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v0_common_metrics_pb from "../../../../../google/ads/googleads/v0/common/metrics_pb";
import * as google_ads_googleads_v0_common_segments_pb from "../../../../../google/ads/googleads/v0/common/segments_pb";
import * as google_ads_googleads_v0_resources_account_budget_pb from "../../../../../google/ads/googleads/v0/resources/account_budget_pb";
import * as google_ads_googleads_v0_resources_account_budget_proposal_pb from "../../../../../google/ads/googleads/v0/resources/account_budget_proposal_pb";
import * as google_ads_googleads_v0_resources_ad_group_pb from "../../../../../google/ads/googleads/v0/resources/ad_group_pb";
import * as google_ads_googleads_v0_resources_ad_group_ad_pb from "../../../../../google/ads/googleads/v0/resources/ad_group_ad_pb";
import * as google_ads_googleads_v0_resources_ad_group_audience_view_pb from "../../../../../google/ads/googleads/v0/resources/ad_group_audience_view_pb";
import * as google_ads_googleads_v0_resources_ad_group_bid_modifier_pb from "../../../../../google/ads/googleads/v0/resources/ad_group_bid_modifier_pb";
import * as google_ads_googleads_v0_resources_ad_group_criterion_pb from "../../../../../google/ads/googleads/v0/resources/ad_group_criterion_pb";
import * as google_ads_googleads_v0_resources_ad_group_feed_pb from "../../../../../google/ads/googleads/v0/resources/ad_group_feed_pb";
import * as google_ads_googleads_v0_resources_ad_schedule_view_pb from "../../../../../google/ads/googleads/v0/resources/ad_schedule_view_pb";
import * as google_ads_googleads_v0_resources_age_range_view_pb from "../../../../../google/ads/googleads/v0/resources/age_range_view_pb";
import * as google_ads_googleads_v0_resources_bidding_strategy_pb from "../../../../../google/ads/googleads/v0/resources/bidding_strategy_pb";
import * as google_ads_googleads_v0_resources_billing_setup_pb from "../../../../../google/ads/googleads/v0/resources/billing_setup_pb";
import * as google_ads_googleads_v0_resources_campaign_pb from "../../../../../google/ads/googleads/v0/resources/campaign_pb";
import * as google_ads_googleads_v0_resources_campaign_audience_view_pb from "../../../../../google/ads/googleads/v0/resources/campaign_audience_view_pb";
import * as google_ads_googleads_v0_resources_campaign_bid_modifier_pb from "../../../../../google/ads/googleads/v0/resources/campaign_bid_modifier_pb";
import * as google_ads_googleads_v0_resources_campaign_budget_pb from "../../../../../google/ads/googleads/v0/resources/campaign_budget_pb";
import * as google_ads_googleads_v0_resources_campaign_criterion_pb from "../../../../../google/ads/googleads/v0/resources/campaign_criterion_pb";
import * as google_ads_googleads_v0_resources_campaign_feed_pb from "../../../../../google/ads/googleads/v0/resources/campaign_feed_pb";
import * as google_ads_googleads_v0_resources_campaign_shared_set_pb from "../../../../../google/ads/googleads/v0/resources/campaign_shared_set_pb";
import * as google_ads_googleads_v0_resources_carrier_constant_pb from "../../../../../google/ads/googleads/v0/resources/carrier_constant_pb";
import * as google_ads_googleads_v0_resources_change_status_pb from "../../../../../google/ads/googleads/v0/resources/change_status_pb";
import * as google_ads_googleads_v0_resources_conversion_action_pb from "../../../../../google/ads/googleads/v0/resources/conversion_action_pb";
import * as google_ads_googleads_v0_resources_customer_pb from "../../../../../google/ads/googleads/v0/resources/customer_pb";
import * as google_ads_googleads_v0_resources_customer_client_pb from "../../../../../google/ads/googleads/v0/resources/customer_client_pb";
import * as google_ads_googleads_v0_resources_customer_client_link_pb from "../../../../../google/ads/googleads/v0/resources/customer_client_link_pb";
import * as google_ads_googleads_v0_resources_customer_feed_pb from "../../../../../google/ads/googleads/v0/resources/customer_feed_pb";
import * as google_ads_googleads_v0_resources_customer_manager_link_pb from "../../../../../google/ads/googleads/v0/resources/customer_manager_link_pb";
import * as google_ads_googleads_v0_resources_display_keyword_view_pb from "../../../../../google/ads/googleads/v0/resources/display_keyword_view_pb";
import * as google_ads_googleads_v0_resources_feed_pb from "../../../../../google/ads/googleads/v0/resources/feed_pb";
import * as google_ads_googleads_v0_resources_feed_item_pb from "../../../../../google/ads/googleads/v0/resources/feed_item_pb";
import * as google_ads_googleads_v0_resources_feed_mapping_pb from "../../../../../google/ads/googleads/v0/resources/feed_mapping_pb";
import * as google_ads_googleads_v0_resources_gender_view_pb from "../../../../../google/ads/googleads/v0/resources/gender_view_pb";
import * as google_ads_googleads_v0_resources_geo_target_constant_pb from "../../../../../google/ads/googleads/v0/resources/geo_target_constant_pb";
import * as google_ads_googleads_v0_resources_hotel_group_view_pb from "../../../../../google/ads/googleads/v0/resources/hotel_group_view_pb";
import * as google_ads_googleads_v0_resources_hotel_performance_view_pb from "../../../../../google/ads/googleads/v0/resources/hotel_performance_view_pb";
import * as google_ads_googleads_v0_resources_keyword_plan_pb from "../../../../../google/ads/googleads/v0/resources/keyword_plan_pb";
import * as google_ads_googleads_v0_resources_keyword_plan_ad_group_pb from "../../../../../google/ads/googleads/v0/resources/keyword_plan_ad_group_pb";
import * as google_ads_googleads_v0_resources_keyword_plan_campaign_pb from "../../../../../google/ads/googleads/v0/resources/keyword_plan_campaign_pb";
import * as google_ads_googleads_v0_resources_keyword_plan_keyword_pb from "../../../../../google/ads/googleads/v0/resources/keyword_plan_keyword_pb";
import * as google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb from "../../../../../google/ads/googleads/v0/resources/keyword_plan_negative_keyword_pb";
import * as google_ads_googleads_v0_resources_keyword_view_pb from "../../../../../google/ads/googleads/v0/resources/keyword_view_pb";
import * as google_ads_googleads_v0_resources_language_constant_pb from "../../../../../google/ads/googleads/v0/resources/language_constant_pb";
import * as google_ads_googleads_v0_resources_managed_placement_view_pb from "../../../../../google/ads/googleads/v0/resources/managed_placement_view_pb";
import * as google_ads_googleads_v0_resources_media_file_pb from "../../../../../google/ads/googleads/v0/resources/media_file_pb";
import * as google_ads_googleads_v0_resources_mobile_app_category_constant_pb from "../../../../../google/ads/googleads/v0/resources/mobile_app_category_constant_pb";
import * as google_ads_googleads_v0_resources_mobile_device_constant_pb from "../../../../../google/ads/googleads/v0/resources/mobile_device_constant_pb";
import * as google_ads_googleads_v0_resources_operating_system_version_constant_pb from "../../../../../google/ads/googleads/v0/resources/operating_system_version_constant_pb";
import * as google_ads_googleads_v0_resources_parental_status_view_pb from "../../../../../google/ads/googleads/v0/resources/parental_status_view_pb";
import * as google_ads_googleads_v0_resources_product_group_view_pb from "../../../../../google/ads/googleads/v0/resources/product_group_view_pb";
import * as google_ads_googleads_v0_resources_recommendation_pb from "../../../../../google/ads/googleads/v0/resources/recommendation_pb";
import * as google_ads_googleads_v0_resources_remarketing_action_pb from "../../../../../google/ads/googleads/v0/resources/remarketing_action_pb";
import * as google_ads_googleads_v0_resources_search_term_view_pb from "../../../../../google/ads/googleads/v0/resources/search_term_view_pb";
import * as google_ads_googleads_v0_resources_shared_criterion_pb from "../../../../../google/ads/googleads/v0/resources/shared_criterion_pb";
import * as google_ads_googleads_v0_resources_shared_set_pb from "../../../../../google/ads/googleads/v0/resources/shared_set_pb";
import * as google_ads_googleads_v0_resources_topic_constant_pb from "../../../../../google/ads/googleads/v0/resources/topic_constant_pb";
import * as google_ads_googleads_v0_resources_topic_view_pb from "../../../../../google/ads/googleads/v0/resources/topic_view_pb";
import * as google_ads_googleads_v0_resources_user_interest_pb from "../../../../../google/ads/googleads/v0/resources/user_interest_pb";
import * as google_ads_googleads_v0_resources_user_list_pb from "../../../../../google/ads/googleads/v0/resources/user_list_pb";
import * as google_ads_googleads_v0_resources_video_pb from "../../../../../google/ads/googleads/v0/resources/video_pb";
import * as google_ads_googleads_v0_services_ad_group_ad_service_pb from "../../../../../google/ads/googleads/v0/services/ad_group_ad_service_pb";
import * as google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb from "../../../../../google/ads/googleads/v0/services/ad_group_bid_modifier_service_pb";
import * as google_ads_googleads_v0_services_ad_group_criterion_service_pb from "../../../../../google/ads/googleads/v0/services/ad_group_criterion_service_pb";
import * as google_ads_googleads_v0_services_ad_group_service_pb from "../../../../../google/ads/googleads/v0/services/ad_group_service_pb";
import * as google_ads_googleads_v0_services_bidding_strategy_service_pb from "../../../../../google/ads/googleads/v0/services/bidding_strategy_service_pb";
import * as google_ads_googleads_v0_services_campaign_bid_modifier_service_pb from "../../../../../google/ads/googleads/v0/services/campaign_bid_modifier_service_pb";
import * as google_ads_googleads_v0_services_campaign_budget_service_pb from "../../../../../google/ads/googleads/v0/services/campaign_budget_service_pb";
import * as google_ads_googleads_v0_services_campaign_criterion_service_pb from "../../../../../google/ads/googleads/v0/services/campaign_criterion_service_pb";
import * as google_ads_googleads_v0_services_campaign_service_pb from "../../../../../google/ads/googleads/v0/services/campaign_service_pb";
import * as google_ads_googleads_v0_services_campaign_shared_set_service_pb from "../../../../../google/ads/googleads/v0/services/campaign_shared_set_service_pb";
import * as google_ads_googleads_v0_services_conversion_action_service_pb from "../../../../../google/ads/googleads/v0/services/conversion_action_service_pb";
import * as google_ads_googleads_v0_services_shared_criterion_service_pb from "../../../../../google/ads/googleads/v0/services/shared_criterion_service_pb";
import * as google_ads_googleads_v0_services_shared_set_service_pb from "../../../../../google/ads/googleads/v0/services/shared_set_service_pb";
import * as google_ads_googleads_v0_services_user_list_service_pb from "../../../../../google/ads/googleads/v0/services/user_list_service_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class SearchGoogleAdsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getQuery(): string;
  setQuery(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsRequest): SearchGoogleAdsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGoogleAdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsRequest;
  static deserializeBinaryFromReader(message: SearchGoogleAdsRequest, reader: jspb.BinaryReader): SearchGoogleAdsRequest;
}

export namespace SearchGoogleAdsRequest {
  export type AsObject = {
    customerId: string,
    query: string,
    pageToken: string,
    pageSize: number,
    validateOnly: boolean,
  }
}

export class SearchGoogleAdsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<GoogleAdsRow>;
  setResultsList(value: Array<GoogleAdsRow>): void;
  addResults(value?: GoogleAdsRow, index?: number): GoogleAdsRow;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  getTotalResultsCount(): number;
  setTotalResultsCount(value: number): void;

  hasFieldMask(): boolean;
  clearFieldMask(): void;
  getFieldMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setFieldMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchGoogleAdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchGoogleAdsResponse): SearchGoogleAdsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchGoogleAdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchGoogleAdsResponse;
  static deserializeBinaryFromReader(message: SearchGoogleAdsResponse, reader: jspb.BinaryReader): SearchGoogleAdsResponse;
}

export namespace SearchGoogleAdsResponse {
  export type AsObject = {
    resultsList: Array<GoogleAdsRow.AsObject>,
    nextPageToken: string,
    totalResultsCount: number,
    fieldMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GoogleAdsRow extends jspb.Message {
  hasAccountBudget(): boolean;
  clearAccountBudget(): void;
  getAccountBudget(): google_ads_googleads_v0_resources_account_budget_pb.AccountBudget | undefined;
  setAccountBudget(value?: google_ads_googleads_v0_resources_account_budget_pb.AccountBudget): void;

  hasAccountBudgetProposal(): boolean;
  clearAccountBudgetProposal(): void;
  getAccountBudgetProposal(): google_ads_googleads_v0_resources_account_budget_proposal_pb.AccountBudgetProposal | undefined;
  setAccountBudgetProposal(value?: google_ads_googleads_v0_resources_account_budget_proposal_pb.AccountBudgetProposal): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_ads_googleads_v0_resources_ad_group_pb.AdGroup | undefined;
  setAdGroup(value?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup): void;

  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;
  getAdGroupAd(): google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd | undefined;
  setAdGroupAd(value?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd): void;

  hasAdGroupAudienceView(): boolean;
  clearAdGroupAudienceView(): void;
  getAdGroupAudienceView(): google_ads_googleads_v0_resources_ad_group_audience_view_pb.AdGroupAudienceView | undefined;
  setAdGroupAudienceView(value?: google_ads_googleads_v0_resources_ad_group_audience_view_pb.AdGroupAudienceView): void;

  hasAdGroupBidModifier(): boolean;
  clearAdGroupBidModifier(): void;
  getAdGroupBidModifier(): google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setAdGroupBidModifier(value?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): void;

  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;
  getAdGroupCriterion(): google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setAdGroupCriterion(value?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion): void;

  hasAdGroupFeed(): boolean;
  clearAdGroupFeed(): void;
  getAdGroupFeed(): google_ads_googleads_v0_resources_ad_group_feed_pb.AdGroupFeed | undefined;
  setAdGroupFeed(value?: google_ads_googleads_v0_resources_ad_group_feed_pb.AdGroupFeed): void;

  hasAgeRangeView(): boolean;
  clearAgeRangeView(): void;
  getAgeRangeView(): google_ads_googleads_v0_resources_age_range_view_pb.AgeRangeView | undefined;
  setAgeRangeView(value?: google_ads_googleads_v0_resources_age_range_view_pb.AgeRangeView): void;

  hasAdScheduleView(): boolean;
  clearAdScheduleView(): void;
  getAdScheduleView(): google_ads_googleads_v0_resources_ad_schedule_view_pb.AdScheduleView | undefined;
  setAdScheduleView(value?: google_ads_googleads_v0_resources_ad_schedule_view_pb.AdScheduleView): void;

  hasBiddingStrategy(): boolean;
  clearBiddingStrategy(): void;
  getBiddingStrategy(): google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setBiddingStrategy(value?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy): void;

  hasBillingSetup(): boolean;
  clearBillingSetup(): void;
  getBillingSetup(): google_ads_googleads_v0_resources_billing_setup_pb.BillingSetup | undefined;
  setBillingSetup(value?: google_ads_googleads_v0_resources_billing_setup_pb.BillingSetup): void;

  hasCampaignBudget(): boolean;
  clearCampaignBudget(): void;
  getCampaignBudget(): google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget | undefined;
  setCampaignBudget(value?: google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_ads_googleads_v0_resources_campaign_pb.Campaign | undefined;
  setCampaign(value?: google_ads_googleads_v0_resources_campaign_pb.Campaign): void;

  hasCampaignAudienceView(): boolean;
  clearCampaignAudienceView(): void;
  getCampaignAudienceView(): google_ads_googleads_v0_resources_campaign_audience_view_pb.CampaignAudienceView | undefined;
  setCampaignAudienceView(value?: google_ads_googleads_v0_resources_campaign_audience_view_pb.CampaignAudienceView): void;

  hasCampaignBidModifier(): boolean;
  clearCampaignBidModifier(): void;
  getCampaignBidModifier(): google_ads_googleads_v0_resources_campaign_bid_modifier_pb.CampaignBidModifier | undefined;
  setCampaignBidModifier(value?: google_ads_googleads_v0_resources_campaign_bid_modifier_pb.CampaignBidModifier): void;

  hasCampaignCriterion(): boolean;
  clearCampaignCriterion(): void;
  getCampaignCriterion(): google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setCampaignCriterion(value?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion): void;

  hasCampaignFeed(): boolean;
  clearCampaignFeed(): void;
  getCampaignFeed(): google_ads_googleads_v0_resources_campaign_feed_pb.CampaignFeed | undefined;
  setCampaignFeed(value?: google_ads_googleads_v0_resources_campaign_feed_pb.CampaignFeed): void;

  hasCampaignSharedSet(): boolean;
  clearCampaignSharedSet(): void;
  getCampaignSharedSet(): google_ads_googleads_v0_resources_campaign_shared_set_pb.CampaignSharedSet | undefined;
  setCampaignSharedSet(value?: google_ads_googleads_v0_resources_campaign_shared_set_pb.CampaignSharedSet): void;

  hasCarrierConstant(): boolean;
  clearCarrierConstant(): void;
  getCarrierConstant(): google_ads_googleads_v0_resources_carrier_constant_pb.CarrierConstant | undefined;
  setCarrierConstant(value?: google_ads_googleads_v0_resources_carrier_constant_pb.CarrierConstant): void;

  hasChangeStatus(): boolean;
  clearChangeStatus(): void;
  getChangeStatus(): google_ads_googleads_v0_resources_change_status_pb.ChangeStatus | undefined;
  setChangeStatus(value?: google_ads_googleads_v0_resources_change_status_pb.ChangeStatus): void;

  hasConversionAction(): boolean;
  clearConversionAction(): void;
  getConversionAction(): google_ads_googleads_v0_resources_conversion_action_pb.ConversionAction | undefined;
  setConversionAction(value?: google_ads_googleads_v0_resources_conversion_action_pb.ConversionAction): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): google_ads_googleads_v0_resources_customer_pb.Customer | undefined;
  setCustomer(value?: google_ads_googleads_v0_resources_customer_pb.Customer): void;

  hasCustomerManagerLink(): boolean;
  clearCustomerManagerLink(): void;
  getCustomerManagerLink(): google_ads_googleads_v0_resources_customer_manager_link_pb.CustomerManagerLink | undefined;
  setCustomerManagerLink(value?: google_ads_googleads_v0_resources_customer_manager_link_pb.CustomerManagerLink): void;

  hasCustomerClientLink(): boolean;
  clearCustomerClientLink(): void;
  getCustomerClientLink(): google_ads_googleads_v0_resources_customer_client_link_pb.CustomerClientLink | undefined;
  setCustomerClientLink(value?: google_ads_googleads_v0_resources_customer_client_link_pb.CustomerClientLink): void;

  hasCustomerClient(): boolean;
  clearCustomerClient(): void;
  getCustomerClient(): google_ads_googleads_v0_resources_customer_client_pb.CustomerClient | undefined;
  setCustomerClient(value?: google_ads_googleads_v0_resources_customer_client_pb.CustomerClient): void;

  hasCustomerFeed(): boolean;
  clearCustomerFeed(): void;
  getCustomerFeed(): google_ads_googleads_v0_resources_customer_feed_pb.CustomerFeed | undefined;
  setCustomerFeed(value?: google_ads_googleads_v0_resources_customer_feed_pb.CustomerFeed): void;

  hasDisplayKeywordView(): boolean;
  clearDisplayKeywordView(): void;
  getDisplayKeywordView(): google_ads_googleads_v0_resources_display_keyword_view_pb.DisplayKeywordView | undefined;
  setDisplayKeywordView(value?: google_ads_googleads_v0_resources_display_keyword_view_pb.DisplayKeywordView): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_ads_googleads_v0_resources_feed_pb.Feed | undefined;
  setFeed(value?: google_ads_googleads_v0_resources_feed_pb.Feed): void;

  hasFeedItem(): boolean;
  clearFeedItem(): void;
  getFeedItem(): google_ads_googleads_v0_resources_feed_item_pb.FeedItem | undefined;
  setFeedItem(value?: google_ads_googleads_v0_resources_feed_item_pb.FeedItem): void;

  hasFeedMapping(): boolean;
  clearFeedMapping(): void;
  getFeedMapping(): google_ads_googleads_v0_resources_feed_mapping_pb.FeedMapping | undefined;
  setFeedMapping(value?: google_ads_googleads_v0_resources_feed_mapping_pb.FeedMapping): void;

  hasGenderView(): boolean;
  clearGenderView(): void;
  getGenderView(): google_ads_googleads_v0_resources_gender_view_pb.GenderView | undefined;
  setGenderView(value?: google_ads_googleads_v0_resources_gender_view_pb.GenderView): void;

  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;
  getGeoTargetConstant(): google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant | undefined;
  setGeoTargetConstant(value?: google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant): void;

  hasHotelGroupView(): boolean;
  clearHotelGroupView(): void;
  getHotelGroupView(): google_ads_googleads_v0_resources_hotel_group_view_pb.HotelGroupView | undefined;
  setHotelGroupView(value?: google_ads_googleads_v0_resources_hotel_group_view_pb.HotelGroupView): void;

  hasHotelPerformanceView(): boolean;
  clearHotelPerformanceView(): void;
  getHotelPerformanceView(): google_ads_googleads_v0_resources_hotel_performance_view_pb.HotelPerformanceView | undefined;
  setHotelPerformanceView(value?: google_ads_googleads_v0_resources_hotel_performance_view_pb.HotelPerformanceView): void;

  hasKeywordView(): boolean;
  clearKeywordView(): void;
  getKeywordView(): google_ads_googleads_v0_resources_keyword_view_pb.KeywordView | undefined;
  setKeywordView(value?: google_ads_googleads_v0_resources_keyword_view_pb.KeywordView): void;

  hasKeywordPlan(): boolean;
  clearKeywordPlan(): void;
  getKeywordPlan(): google_ads_googleads_v0_resources_keyword_plan_pb.KeywordPlan | undefined;
  setKeywordPlan(value?: google_ads_googleads_v0_resources_keyword_plan_pb.KeywordPlan): void;

  hasKeywordPlanCampaign(): boolean;
  clearKeywordPlanCampaign(): void;
  getKeywordPlanCampaign(): google_ads_googleads_v0_resources_keyword_plan_campaign_pb.KeywordPlanCampaign | undefined;
  setKeywordPlanCampaign(value?: google_ads_googleads_v0_resources_keyword_plan_campaign_pb.KeywordPlanCampaign): void;

  hasKeywordPlanNegativeKeyword(): boolean;
  clearKeywordPlanNegativeKeyword(): void;
  getKeywordPlanNegativeKeyword(): google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword | undefined;
  setKeywordPlanNegativeKeyword(value?: google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword): void;

  hasKeywordPlanAdGroup(): boolean;
  clearKeywordPlanAdGroup(): void;
  getKeywordPlanAdGroup(): google_ads_googleads_v0_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup | undefined;
  setKeywordPlanAdGroup(value?: google_ads_googleads_v0_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup): void;

  hasKeywordPlanKeyword(): boolean;
  clearKeywordPlanKeyword(): void;
  getKeywordPlanKeyword(): google_ads_googleads_v0_resources_keyword_plan_keyword_pb.KeywordPlanKeyword | undefined;
  setKeywordPlanKeyword(value?: google_ads_googleads_v0_resources_keyword_plan_keyword_pb.KeywordPlanKeyword): void;

  hasLanguageConstant(): boolean;
  clearLanguageConstant(): void;
  getLanguageConstant(): google_ads_googleads_v0_resources_language_constant_pb.LanguageConstant | undefined;
  setLanguageConstant(value?: google_ads_googleads_v0_resources_language_constant_pb.LanguageConstant): void;

  hasManagedPlacementView(): boolean;
  clearManagedPlacementView(): void;
  getManagedPlacementView(): google_ads_googleads_v0_resources_managed_placement_view_pb.ManagedPlacementView | undefined;
  setManagedPlacementView(value?: google_ads_googleads_v0_resources_managed_placement_view_pb.ManagedPlacementView): void;

  hasMediaFile(): boolean;
  clearMediaFile(): void;
  getMediaFile(): google_ads_googleads_v0_resources_media_file_pb.MediaFile | undefined;
  setMediaFile(value?: google_ads_googleads_v0_resources_media_file_pb.MediaFile): void;

  hasMobileAppCategoryConstant(): boolean;
  clearMobileAppCategoryConstant(): void;
  getMobileAppCategoryConstant(): google_ads_googleads_v0_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant | undefined;
  setMobileAppCategoryConstant(value?: google_ads_googleads_v0_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant): void;

  hasMobileDeviceConstant(): boolean;
  clearMobileDeviceConstant(): void;
  getMobileDeviceConstant(): google_ads_googleads_v0_resources_mobile_device_constant_pb.MobileDeviceConstant | undefined;
  setMobileDeviceConstant(value?: google_ads_googleads_v0_resources_mobile_device_constant_pb.MobileDeviceConstant): void;

  hasOperatingSystemVersionConstant(): boolean;
  clearOperatingSystemVersionConstant(): void;
  getOperatingSystemVersionConstant(): google_ads_googleads_v0_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant | undefined;
  setOperatingSystemVersionConstant(value?: google_ads_googleads_v0_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant): void;

  hasParentalStatusView(): boolean;
  clearParentalStatusView(): void;
  getParentalStatusView(): google_ads_googleads_v0_resources_parental_status_view_pb.ParentalStatusView | undefined;
  setParentalStatusView(value?: google_ads_googleads_v0_resources_parental_status_view_pb.ParentalStatusView): void;

  hasProductGroupView(): boolean;
  clearProductGroupView(): void;
  getProductGroupView(): google_ads_googleads_v0_resources_product_group_view_pb.ProductGroupView | undefined;
  setProductGroupView(value?: google_ads_googleads_v0_resources_product_group_view_pb.ProductGroupView): void;

  hasRecommendation(): boolean;
  clearRecommendation(): void;
  getRecommendation(): google_ads_googleads_v0_resources_recommendation_pb.Recommendation | undefined;
  setRecommendation(value?: google_ads_googleads_v0_resources_recommendation_pb.Recommendation): void;

  hasSearchTermView(): boolean;
  clearSearchTermView(): void;
  getSearchTermView(): google_ads_googleads_v0_resources_search_term_view_pb.SearchTermView | undefined;
  setSearchTermView(value?: google_ads_googleads_v0_resources_search_term_view_pb.SearchTermView): void;

  hasSharedCriterion(): boolean;
  clearSharedCriterion(): void;
  getSharedCriterion(): google_ads_googleads_v0_resources_shared_criterion_pb.SharedCriterion | undefined;
  setSharedCriterion(value?: google_ads_googleads_v0_resources_shared_criterion_pb.SharedCriterion): void;

  hasSharedSet(): boolean;
  clearSharedSet(): void;
  getSharedSet(): google_ads_googleads_v0_resources_shared_set_pb.SharedSet | undefined;
  setSharedSet(value?: google_ads_googleads_v0_resources_shared_set_pb.SharedSet): void;

  hasTopicView(): boolean;
  clearTopicView(): void;
  getTopicView(): google_ads_googleads_v0_resources_topic_view_pb.TopicView | undefined;
  setTopicView(value?: google_ads_googleads_v0_resources_topic_view_pb.TopicView): void;

  hasUserInterest(): boolean;
  clearUserInterest(): void;
  getUserInterest(): google_ads_googleads_v0_resources_user_interest_pb.UserInterest | undefined;
  setUserInterest(value?: google_ads_googleads_v0_resources_user_interest_pb.UserInterest): void;

  hasUserList(): boolean;
  clearUserList(): void;
  getUserList(): google_ads_googleads_v0_resources_user_list_pb.UserList | undefined;
  setUserList(value?: google_ads_googleads_v0_resources_user_list_pb.UserList): void;

  hasRemarketingAction(): boolean;
  clearRemarketingAction(): void;
  getRemarketingAction(): google_ads_googleads_v0_resources_remarketing_action_pb.RemarketingAction | undefined;
  setRemarketingAction(value?: google_ads_googleads_v0_resources_remarketing_action_pb.RemarketingAction): void;

  hasTopicConstant(): boolean;
  clearTopicConstant(): void;
  getTopicConstant(): google_ads_googleads_v0_resources_topic_constant_pb.TopicConstant | undefined;
  setTopicConstant(value?: google_ads_googleads_v0_resources_topic_constant_pb.TopicConstant): void;

  hasVideo(): boolean;
  clearVideo(): void;
  getVideo(): google_ads_googleads_v0_resources_video_pb.Video | undefined;
  setVideo(value?: google_ads_googleads_v0_resources_video_pb.Video): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): google_ads_googleads_v0_common_metrics_pb.Metrics | undefined;
  setMetrics(value?: google_ads_googleads_v0_common_metrics_pb.Metrics): void;

  hasSegments(): boolean;
  clearSegments(): void;
  getSegments(): google_ads_googleads_v0_common_segments_pb.Segments | undefined;
  setSegments(value?: google_ads_googleads_v0_common_segments_pb.Segments): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsRow.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsRow): GoogleAdsRow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsRow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsRow;
  static deserializeBinaryFromReader(message: GoogleAdsRow, reader: jspb.BinaryReader): GoogleAdsRow;
}

export namespace GoogleAdsRow {
  export type AsObject = {
    accountBudget?: google_ads_googleads_v0_resources_account_budget_pb.AccountBudget.AsObject,
    accountBudgetProposal?: google_ads_googleads_v0_resources_account_budget_proposal_pb.AccountBudgetProposal.AsObject,
    adGroup?: google_ads_googleads_v0_resources_ad_group_pb.AdGroup.AsObject,
    adGroupAd?: google_ads_googleads_v0_resources_ad_group_ad_pb.AdGroupAd.AsObject,
    adGroupAudienceView?: google_ads_googleads_v0_resources_ad_group_audience_view_pb.AdGroupAudienceView.AsObject,
    adGroupBidModifier?: google_ads_googleads_v0_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    adGroupCriterion?: google_ads_googleads_v0_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    adGroupFeed?: google_ads_googleads_v0_resources_ad_group_feed_pb.AdGroupFeed.AsObject,
    ageRangeView?: google_ads_googleads_v0_resources_age_range_view_pb.AgeRangeView.AsObject,
    adScheduleView?: google_ads_googleads_v0_resources_ad_schedule_view_pb.AdScheduleView.AsObject,
    biddingStrategy?: google_ads_googleads_v0_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    billingSetup?: google_ads_googleads_v0_resources_billing_setup_pb.BillingSetup.AsObject,
    campaignBudget?: google_ads_googleads_v0_resources_campaign_budget_pb.CampaignBudget.AsObject,
    campaign?: google_ads_googleads_v0_resources_campaign_pb.Campaign.AsObject,
    campaignAudienceView?: google_ads_googleads_v0_resources_campaign_audience_view_pb.CampaignAudienceView.AsObject,
    campaignBidModifier?: google_ads_googleads_v0_resources_campaign_bid_modifier_pb.CampaignBidModifier.AsObject,
    campaignCriterion?: google_ads_googleads_v0_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    campaignFeed?: google_ads_googleads_v0_resources_campaign_feed_pb.CampaignFeed.AsObject,
    campaignSharedSet?: google_ads_googleads_v0_resources_campaign_shared_set_pb.CampaignSharedSet.AsObject,
    carrierConstant?: google_ads_googleads_v0_resources_carrier_constant_pb.CarrierConstant.AsObject,
    changeStatus?: google_ads_googleads_v0_resources_change_status_pb.ChangeStatus.AsObject,
    conversionAction?: google_ads_googleads_v0_resources_conversion_action_pb.ConversionAction.AsObject,
    customer?: google_ads_googleads_v0_resources_customer_pb.Customer.AsObject,
    customerManagerLink?: google_ads_googleads_v0_resources_customer_manager_link_pb.CustomerManagerLink.AsObject,
    customerClientLink?: google_ads_googleads_v0_resources_customer_client_link_pb.CustomerClientLink.AsObject,
    customerClient?: google_ads_googleads_v0_resources_customer_client_pb.CustomerClient.AsObject,
    customerFeed?: google_ads_googleads_v0_resources_customer_feed_pb.CustomerFeed.AsObject,
    displayKeywordView?: google_ads_googleads_v0_resources_display_keyword_view_pb.DisplayKeywordView.AsObject,
    feed?: google_ads_googleads_v0_resources_feed_pb.Feed.AsObject,
    feedItem?: google_ads_googleads_v0_resources_feed_item_pb.FeedItem.AsObject,
    feedMapping?: google_ads_googleads_v0_resources_feed_mapping_pb.FeedMapping.AsObject,
    genderView?: google_ads_googleads_v0_resources_gender_view_pb.GenderView.AsObject,
    geoTargetConstant?: google_ads_googleads_v0_resources_geo_target_constant_pb.GeoTargetConstant.AsObject,
    hotelGroupView?: google_ads_googleads_v0_resources_hotel_group_view_pb.HotelGroupView.AsObject,
    hotelPerformanceView?: google_ads_googleads_v0_resources_hotel_performance_view_pb.HotelPerformanceView.AsObject,
    keywordView?: google_ads_googleads_v0_resources_keyword_view_pb.KeywordView.AsObject,
    keywordPlan?: google_ads_googleads_v0_resources_keyword_plan_pb.KeywordPlan.AsObject,
    keywordPlanCampaign?: google_ads_googleads_v0_resources_keyword_plan_campaign_pb.KeywordPlanCampaign.AsObject,
    keywordPlanNegativeKeyword?: google_ads_googleads_v0_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword.AsObject,
    keywordPlanAdGroup?: google_ads_googleads_v0_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup.AsObject,
    keywordPlanKeyword?: google_ads_googleads_v0_resources_keyword_plan_keyword_pb.KeywordPlanKeyword.AsObject,
    languageConstant?: google_ads_googleads_v0_resources_language_constant_pb.LanguageConstant.AsObject,
    managedPlacementView?: google_ads_googleads_v0_resources_managed_placement_view_pb.ManagedPlacementView.AsObject,
    mediaFile?: google_ads_googleads_v0_resources_media_file_pb.MediaFile.AsObject,
    mobileAppCategoryConstant?: google_ads_googleads_v0_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant.AsObject,
    mobileDeviceConstant?: google_ads_googleads_v0_resources_mobile_device_constant_pb.MobileDeviceConstant.AsObject,
    operatingSystemVersionConstant?: google_ads_googleads_v0_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant.AsObject,
    parentalStatusView?: google_ads_googleads_v0_resources_parental_status_view_pb.ParentalStatusView.AsObject,
    productGroupView?: google_ads_googleads_v0_resources_product_group_view_pb.ProductGroupView.AsObject,
    recommendation?: google_ads_googleads_v0_resources_recommendation_pb.Recommendation.AsObject,
    searchTermView?: google_ads_googleads_v0_resources_search_term_view_pb.SearchTermView.AsObject,
    sharedCriterion?: google_ads_googleads_v0_resources_shared_criterion_pb.SharedCriterion.AsObject,
    sharedSet?: google_ads_googleads_v0_resources_shared_set_pb.SharedSet.AsObject,
    topicView?: google_ads_googleads_v0_resources_topic_view_pb.TopicView.AsObject,
    userInterest?: google_ads_googleads_v0_resources_user_interest_pb.UserInterest.AsObject,
    userList?: google_ads_googleads_v0_resources_user_list_pb.UserList.AsObject,
    remarketingAction?: google_ads_googleads_v0_resources_remarketing_action_pb.RemarketingAction.AsObject,
    topicConstant?: google_ads_googleads_v0_resources_topic_constant_pb.TopicConstant.AsObject,
    video?: google_ads_googleads_v0_resources_video_pb.Video.AsObject,
    metrics?: google_ads_googleads_v0_common_metrics_pb.Metrics.AsObject,
    segments?: google_ads_googleads_v0_common_segments_pb.Segments.AsObject,
  }
}

export class MutateGoogleAdsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearMutateOperationsList(): void;
  getMutateOperationsList(): Array<MutateOperation>;
  setMutateOperationsList(value: Array<MutateOperation>): void;
  addMutateOperations(value?: MutateOperation, index?: number): MutateOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateGoogleAdsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateGoogleAdsRequest): MutateGoogleAdsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateGoogleAdsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateGoogleAdsRequest;
  static deserializeBinaryFromReader(message: MutateGoogleAdsRequest, reader: jspb.BinaryReader): MutateGoogleAdsRequest;
}

export namespace MutateGoogleAdsRequest {
  export type AsObject = {
    customerId: string,
    mutateOperationsList: Array<MutateOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class MutateGoogleAdsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearMutateOperationResponsesList(): void;
  getMutateOperationResponsesList(): Array<MutateOperationResponse>;
  setMutateOperationResponsesList(value: Array<MutateOperationResponse>): void;
  addMutateOperationResponses(value?: MutateOperationResponse, index?: number): MutateOperationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateGoogleAdsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateGoogleAdsResponse): MutateGoogleAdsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateGoogleAdsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateGoogleAdsResponse;
  static deserializeBinaryFromReader(message: MutateGoogleAdsResponse, reader: jspb.BinaryReader): MutateGoogleAdsResponse;
}

export namespace MutateGoogleAdsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    mutateOperationResponsesList: Array<MutateOperationResponse.AsObject>,
  }
}

export class MutateOperation extends jspb.Message {
  hasAdGroupAdOperation(): boolean;
  clearAdGroupAdOperation(): void;
  getAdGroupAdOperation(): google_ads_googleads_v0_services_ad_group_ad_service_pb.AdGroupAdOperation | undefined;
  setAdGroupAdOperation(value?: google_ads_googleads_v0_services_ad_group_ad_service_pb.AdGroupAdOperation): void;

  hasAdGroupBidModifierOperation(): boolean;
  clearAdGroupBidModifierOperation(): void;
  getAdGroupBidModifierOperation(): google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation | undefined;
  setAdGroupBidModifierOperation(value?: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation): void;

  hasAdGroupCriterionOperation(): boolean;
  clearAdGroupCriterionOperation(): void;
  getAdGroupCriterionOperation(): google_ads_googleads_v0_services_ad_group_criterion_service_pb.AdGroupCriterionOperation | undefined;
  setAdGroupCriterionOperation(value?: google_ads_googleads_v0_services_ad_group_criterion_service_pb.AdGroupCriterionOperation): void;

  hasAdGroupOperation(): boolean;
  clearAdGroupOperation(): void;
  getAdGroupOperation(): google_ads_googleads_v0_services_ad_group_service_pb.AdGroupOperation | undefined;
  setAdGroupOperation(value?: google_ads_googleads_v0_services_ad_group_service_pb.AdGroupOperation): void;

  hasBiddingStrategyOperation(): boolean;
  clearBiddingStrategyOperation(): void;
  getBiddingStrategyOperation(): google_ads_googleads_v0_services_bidding_strategy_service_pb.BiddingStrategyOperation | undefined;
  setBiddingStrategyOperation(value?: google_ads_googleads_v0_services_bidding_strategy_service_pb.BiddingStrategyOperation): void;

  hasCampaignBidModifierOperation(): boolean;
  clearCampaignBidModifierOperation(): void;
  getCampaignBidModifierOperation(): google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation | undefined;
  setCampaignBidModifierOperation(value?: google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation): void;

  hasCampaignBudgetOperation(): boolean;
  clearCampaignBudgetOperation(): void;
  getCampaignBudgetOperation(): google_ads_googleads_v0_services_campaign_budget_service_pb.CampaignBudgetOperation | undefined;
  setCampaignBudgetOperation(value?: google_ads_googleads_v0_services_campaign_budget_service_pb.CampaignBudgetOperation): void;

  hasCampaignOperation(): boolean;
  clearCampaignOperation(): void;
  getCampaignOperation(): google_ads_googleads_v0_services_campaign_service_pb.CampaignOperation | undefined;
  setCampaignOperation(value?: google_ads_googleads_v0_services_campaign_service_pb.CampaignOperation): void;

  hasCampaignSharedSetOperation(): boolean;
  clearCampaignSharedSetOperation(): void;
  getCampaignSharedSetOperation(): google_ads_googleads_v0_services_campaign_shared_set_service_pb.CampaignSharedSetOperation | undefined;
  setCampaignSharedSetOperation(value?: google_ads_googleads_v0_services_campaign_shared_set_service_pb.CampaignSharedSetOperation): void;

  hasConversionActionOperation(): boolean;
  clearConversionActionOperation(): void;
  getConversionActionOperation(): google_ads_googleads_v0_services_conversion_action_service_pb.ConversionActionOperation | undefined;
  setConversionActionOperation(value?: google_ads_googleads_v0_services_conversion_action_service_pb.ConversionActionOperation): void;

  hasCampaignCriterionOperation(): boolean;
  clearCampaignCriterionOperation(): void;
  getCampaignCriterionOperation(): google_ads_googleads_v0_services_campaign_criterion_service_pb.CampaignCriterionOperation | undefined;
  setCampaignCriterionOperation(value?: google_ads_googleads_v0_services_campaign_criterion_service_pb.CampaignCriterionOperation): void;

  hasSharedCriterionOperation(): boolean;
  clearSharedCriterionOperation(): void;
  getSharedCriterionOperation(): google_ads_googleads_v0_services_shared_criterion_service_pb.SharedCriterionOperation | undefined;
  setSharedCriterionOperation(value?: google_ads_googleads_v0_services_shared_criterion_service_pb.SharedCriterionOperation): void;

  hasSharedSetOperation(): boolean;
  clearSharedSetOperation(): void;
  getSharedSetOperation(): google_ads_googleads_v0_services_shared_set_service_pb.SharedSetOperation | undefined;
  setSharedSetOperation(value?: google_ads_googleads_v0_services_shared_set_service_pb.SharedSetOperation): void;

  hasUserListOperation(): boolean;
  clearUserListOperation(): void;
  getUserListOperation(): google_ads_googleads_v0_services_user_list_service_pb.UserListOperation | undefined;
  setUserListOperation(value?: google_ads_googleads_v0_services_user_list_service_pb.UserListOperation): void;

  getOperationCase(): MutateOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateOperation.AsObject;
  static toObject(includeInstance: boolean, msg: MutateOperation): MutateOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateOperation;
  static deserializeBinaryFromReader(message: MutateOperation, reader: jspb.BinaryReader): MutateOperation;
}

export namespace MutateOperation {
  export type AsObject = {
    adGroupAdOperation?: google_ads_googleads_v0_services_ad_group_ad_service_pb.AdGroupAdOperation.AsObject,
    adGroupBidModifierOperation?: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation.AsObject,
    adGroupCriterionOperation?: google_ads_googleads_v0_services_ad_group_criterion_service_pb.AdGroupCriterionOperation.AsObject,
    adGroupOperation?: google_ads_googleads_v0_services_ad_group_service_pb.AdGroupOperation.AsObject,
    biddingStrategyOperation?: google_ads_googleads_v0_services_bidding_strategy_service_pb.BiddingStrategyOperation.AsObject,
    campaignBidModifierOperation?: google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation.AsObject,
    campaignBudgetOperation?: google_ads_googleads_v0_services_campaign_budget_service_pb.CampaignBudgetOperation.AsObject,
    campaignOperation?: google_ads_googleads_v0_services_campaign_service_pb.CampaignOperation.AsObject,
    campaignSharedSetOperation?: google_ads_googleads_v0_services_campaign_shared_set_service_pb.CampaignSharedSetOperation.AsObject,
    conversionActionOperation?: google_ads_googleads_v0_services_conversion_action_service_pb.ConversionActionOperation.AsObject,
    campaignCriterionOperation?: google_ads_googleads_v0_services_campaign_criterion_service_pb.CampaignCriterionOperation.AsObject,
    sharedCriterionOperation?: google_ads_googleads_v0_services_shared_criterion_service_pb.SharedCriterionOperation.AsObject,
    sharedSetOperation?: google_ads_googleads_v0_services_shared_set_service_pb.SharedSetOperation.AsObject,
    userListOperation?: google_ads_googleads_v0_services_user_list_service_pb.UserListOperation.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    AD_GROUP_AD_OPERATION = 1,
    AD_GROUP_BID_MODIFIER_OPERATION = 2,
    AD_GROUP_CRITERION_OPERATION = 3,
    AD_GROUP_OPERATION = 5,
    BIDDING_STRATEGY_OPERATION = 6,
    CAMPAIGN_BID_MODIFIER_OPERATION = 7,
    CAMPAIGN_BUDGET_OPERATION = 8,
    CAMPAIGN_OPERATION = 10,
    CAMPAIGN_SHARED_SET_OPERATION = 11,
    CONVERSION_ACTION_OPERATION = 12,
    CAMPAIGN_CRITERION_OPERATION = 13,
    SHARED_CRITERION_OPERATION = 14,
    SHARED_SET_OPERATION = 15,
    USER_LIST_OPERATION = 16,
  }
}

export class MutateOperationResponse extends jspb.Message {
  hasAdGroupAdResult(): boolean;
  clearAdGroupAdResult(): void;
  getAdGroupAdResult(): google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdResult | undefined;
  setAdGroupAdResult(value?: google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdResult): void;

  hasAdGroupBidModifierResult(): boolean;
  clearAdGroupBidModifierResult(): void;
  getAdGroupBidModifierResult(): google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult | undefined;
  setAdGroupBidModifierResult(value?: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult): void;

  hasAdGroupCriterionResult(): boolean;
  clearAdGroupCriterionResult(): void;
  getAdGroupCriterionResult(): google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult | undefined;
  setAdGroupCriterionResult(value?: google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult): void;

  hasAdGroupResult(): boolean;
  clearAdGroupResult(): void;
  getAdGroupResult(): google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupResult | undefined;
  setAdGroupResult(value?: google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupResult): void;

  hasBiddingStrategyResult(): boolean;
  clearBiddingStrategyResult(): void;
  getBiddingStrategyResult(): google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategyResult | undefined;
  setBiddingStrategyResult(value?: google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategyResult): void;

  hasCampaignBidModifierResult(): boolean;
  clearCampaignBidModifierResult(): void;
  getCampaignBidModifierResult(): google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult | undefined;
  setCampaignBidModifierResult(value?: google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult): void;

  hasCampaignBudgetResult(): boolean;
  clearCampaignBudgetResult(): void;
  getCampaignBudgetResult(): google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetResult | undefined;
  setCampaignBudgetResult(value?: google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetResult): void;

  hasCampaignResult(): boolean;
  clearCampaignResult(): void;
  getCampaignResult(): google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignResult | undefined;
  setCampaignResult(value?: google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignResult): void;

  hasCampaignSharedSetResult(): boolean;
  clearCampaignSharedSetResult(): void;
  getCampaignSharedSetResult(): google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult | undefined;
  setCampaignSharedSetResult(value?: google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult): void;

  hasConversionActionResult(): boolean;
  clearConversionActionResult(): void;
  getConversionActionResult(): google_ads_googleads_v0_services_conversion_action_service_pb.MutateConversionActionResult | undefined;
  setConversionActionResult(value?: google_ads_googleads_v0_services_conversion_action_service_pb.MutateConversionActionResult): void;

  hasCampaignCriterionResult(): boolean;
  clearCampaignCriterionResult(): void;
  getCampaignCriterionResult(): google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriterionResult | undefined;
  setCampaignCriterionResult(value?: google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriterionResult): void;

  hasSharedCriterionResult(): boolean;
  clearSharedCriterionResult(): void;
  getSharedCriterionResult(): google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriterionResult | undefined;
  setSharedCriterionResult(value?: google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriterionResult): void;

  hasSharedSetResult(): boolean;
  clearSharedSetResult(): void;
  getSharedSetResult(): google_ads_googleads_v0_services_shared_set_service_pb.MutateSharedSetResult | undefined;
  setSharedSetResult(value?: google_ads_googleads_v0_services_shared_set_service_pb.MutateSharedSetResult): void;

  hasUserListResult(): boolean;
  clearUserListResult(): void;
  getUserListResult(): google_ads_googleads_v0_services_user_list_service_pb.MutateUserListResult | undefined;
  setUserListResult(value?: google_ads_googleads_v0_services_user_list_service_pb.MutateUserListResult): void;

  getResponseCase(): MutateOperationResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateOperationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateOperationResponse): MutateOperationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateOperationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateOperationResponse;
  static deserializeBinaryFromReader(message: MutateOperationResponse, reader: jspb.BinaryReader): MutateOperationResponse;
}

export namespace MutateOperationResponse {
  export type AsObject = {
    adGroupAdResult?: google_ads_googleads_v0_services_ad_group_ad_service_pb.MutateAdGroupAdResult.AsObject,
    adGroupBidModifierResult?: google_ads_googleads_v0_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult.AsObject,
    adGroupCriterionResult?: google_ads_googleads_v0_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult.AsObject,
    adGroupResult?: google_ads_googleads_v0_services_ad_group_service_pb.MutateAdGroupResult.AsObject,
    biddingStrategyResult?: google_ads_googleads_v0_services_bidding_strategy_service_pb.MutateBiddingStrategyResult.AsObject,
    campaignBidModifierResult?: google_ads_googleads_v0_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult.AsObject,
    campaignBudgetResult?: google_ads_googleads_v0_services_campaign_budget_service_pb.MutateCampaignBudgetResult.AsObject,
    campaignResult?: google_ads_googleads_v0_services_campaign_service_pb.MutateCampaignResult.AsObject,
    campaignSharedSetResult?: google_ads_googleads_v0_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult.AsObject,
    conversionActionResult?: google_ads_googleads_v0_services_conversion_action_service_pb.MutateConversionActionResult.AsObject,
    campaignCriterionResult?: google_ads_googleads_v0_services_campaign_criterion_service_pb.MutateCampaignCriterionResult.AsObject,
    sharedCriterionResult?: google_ads_googleads_v0_services_shared_criterion_service_pb.MutateSharedCriterionResult.AsObject,
    sharedSetResult?: google_ads_googleads_v0_services_shared_set_service_pb.MutateSharedSetResult.AsObject,
    userListResult?: google_ads_googleads_v0_services_user_list_service_pb.MutateUserListResult.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    AD_GROUP_AD_RESULT = 1,
    AD_GROUP_BID_MODIFIER_RESULT = 2,
    AD_GROUP_CRITERION_RESULT = 3,
    AD_GROUP_RESULT = 5,
    BIDDING_STRATEGY_RESULT = 6,
    CAMPAIGN_BID_MODIFIER_RESULT = 7,
    CAMPAIGN_BUDGET_RESULT = 8,
    CAMPAIGN_RESULT = 10,
    CAMPAIGN_SHARED_SET_RESULT = 11,
    CONVERSION_ACTION_RESULT = 12,
    CAMPAIGN_CRITERION_RESULT = 13,
    SHARED_CRITERION_RESULT = 14,
    SHARED_SET_RESULT = 15,
    USER_LIST_RESULT = 16,
  }
}

