// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/google_ads_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_metrics_pb from "../../../../../google/ads/googleads/v2/common/metrics_pb";
import * as google_ads_googleads_v2_common_segments_pb from "../../../../../google/ads/googleads/v2/common/segments_pb";
import * as google_ads_googleads_v2_resources_account_budget_pb from "../../../../../google/ads/googleads/v2/resources/account_budget_pb";
import * as google_ads_googleads_v2_resources_account_budget_proposal_pb from "../../../../../google/ads/googleads/v2/resources/account_budget_proposal_pb";
import * as google_ads_googleads_v2_resources_ad_group_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_pb";
import * as google_ads_googleads_v2_resources_ad_group_ad_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_ad_pb";
import * as google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_ad_asset_view_pb";
import * as google_ads_googleads_v2_resources_ad_group_ad_label_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_ad_label_pb";
import * as google_ads_googleads_v2_resources_ad_group_audience_view_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_audience_view_pb";
import * as google_ads_googleads_v2_resources_ad_group_bid_modifier_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_bid_modifier_pb";
import * as google_ads_googleads_v2_resources_ad_group_criterion_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_criterion_pb";
import * as google_ads_googleads_v2_resources_ad_group_criterion_label_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_criterion_label_pb";
import * as google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_criterion_simulation_pb";
import * as google_ads_googleads_v2_resources_ad_group_extension_setting_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_extension_setting_pb";
import * as google_ads_googleads_v2_resources_ad_group_feed_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_feed_pb";
import * as google_ads_googleads_v2_resources_ad_group_label_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_label_pb";
import * as google_ads_googleads_v2_resources_ad_group_simulation_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_simulation_pb";
import * as google_ads_googleads_v2_resources_ad_parameter_pb from "../../../../../google/ads/googleads/v2/resources/ad_parameter_pb";
import * as google_ads_googleads_v2_resources_ad_schedule_view_pb from "../../../../../google/ads/googleads/v2/resources/ad_schedule_view_pb";
import * as google_ads_googleads_v2_resources_age_range_view_pb from "../../../../../google/ads/googleads/v2/resources/age_range_view_pb";
import * as google_ads_googleads_v2_resources_asset_pb from "../../../../../google/ads/googleads/v2/resources/asset_pb";
import * as google_ads_googleads_v2_resources_bidding_strategy_pb from "../../../../../google/ads/googleads/v2/resources/bidding_strategy_pb";
import * as google_ads_googleads_v2_resources_billing_setup_pb from "../../../../../google/ads/googleads/v2/resources/billing_setup_pb";
import * as google_ads_googleads_v2_resources_campaign_pb from "../../../../../google/ads/googleads/v2/resources/campaign_pb";
import * as google_ads_googleads_v2_resources_campaign_audience_view_pb from "../../../../../google/ads/googleads/v2/resources/campaign_audience_view_pb";
import * as google_ads_googleads_v2_resources_campaign_bid_modifier_pb from "../../../../../google/ads/googleads/v2/resources/campaign_bid_modifier_pb";
import * as google_ads_googleads_v2_resources_campaign_budget_pb from "../../../../../google/ads/googleads/v2/resources/campaign_budget_pb";
import * as google_ads_googleads_v2_resources_campaign_criterion_pb from "../../../../../google/ads/googleads/v2/resources/campaign_criterion_pb";
import * as google_ads_googleads_v2_resources_campaign_criterion_simulation_pb from "../../../../../google/ads/googleads/v2/resources/campaign_criterion_simulation_pb";
import * as google_ads_googleads_v2_resources_campaign_draft_pb from "../../../../../google/ads/googleads/v2/resources/campaign_draft_pb";
import * as google_ads_googleads_v2_resources_campaign_experiment_pb from "../../../../../google/ads/googleads/v2/resources/campaign_experiment_pb";
import * as google_ads_googleads_v2_resources_campaign_extension_setting_pb from "../../../../../google/ads/googleads/v2/resources/campaign_extension_setting_pb";
import * as google_ads_googleads_v2_resources_campaign_feed_pb from "../../../../../google/ads/googleads/v2/resources/campaign_feed_pb";
import * as google_ads_googleads_v2_resources_campaign_label_pb from "../../../../../google/ads/googleads/v2/resources/campaign_label_pb";
import * as google_ads_googleads_v2_resources_campaign_shared_set_pb from "../../../../../google/ads/googleads/v2/resources/campaign_shared_set_pb";
import * as google_ads_googleads_v2_resources_carrier_constant_pb from "../../../../../google/ads/googleads/v2/resources/carrier_constant_pb";
import * as google_ads_googleads_v2_resources_change_status_pb from "../../../../../google/ads/googleads/v2/resources/change_status_pb";
import * as google_ads_googleads_v2_resources_click_view_pb from "../../../../../google/ads/googleads/v2/resources/click_view_pb";
import * as google_ads_googleads_v2_resources_conversion_action_pb from "../../../../../google/ads/googleads/v2/resources/conversion_action_pb";
import * as google_ads_googleads_v2_resources_custom_interest_pb from "../../../../../google/ads/googleads/v2/resources/custom_interest_pb";
import * as google_ads_googleads_v2_resources_customer_pb from "../../../../../google/ads/googleads/v2/resources/customer_pb";
import * as google_ads_googleads_v2_resources_customer_client_pb from "../../../../../google/ads/googleads/v2/resources/customer_client_pb";
import * as google_ads_googleads_v2_resources_customer_client_link_pb from "../../../../../google/ads/googleads/v2/resources/customer_client_link_pb";
import * as google_ads_googleads_v2_resources_customer_extension_setting_pb from "../../../../../google/ads/googleads/v2/resources/customer_extension_setting_pb";
import * as google_ads_googleads_v2_resources_customer_feed_pb from "../../../../../google/ads/googleads/v2/resources/customer_feed_pb";
import * as google_ads_googleads_v2_resources_customer_label_pb from "../../../../../google/ads/googleads/v2/resources/customer_label_pb";
import * as google_ads_googleads_v2_resources_customer_manager_link_pb from "../../../../../google/ads/googleads/v2/resources/customer_manager_link_pb";
import * as google_ads_googleads_v2_resources_customer_negative_criterion_pb from "../../../../../google/ads/googleads/v2/resources/customer_negative_criterion_pb";
import * as google_ads_googleads_v2_resources_detail_placement_view_pb from "../../../../../google/ads/googleads/v2/resources/detail_placement_view_pb";
import * as google_ads_googleads_v2_resources_display_keyword_view_pb from "../../../../../google/ads/googleads/v2/resources/display_keyword_view_pb";
import * as google_ads_googleads_v2_resources_distance_view_pb from "../../../../../google/ads/googleads/v2/resources/distance_view_pb";
import * as google_ads_googleads_v2_resources_domain_category_pb from "../../../../../google/ads/googleads/v2/resources/domain_category_pb";
import * as google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb from "../../../../../google/ads/googleads/v2/resources/dynamic_search_ads_search_term_view_pb";
import * as google_ads_googleads_v2_resources_expanded_landing_page_view_pb from "../../../../../google/ads/googleads/v2/resources/expanded_landing_page_view_pb";
import * as google_ads_googleads_v2_resources_extension_feed_item_pb from "../../../../../google/ads/googleads/v2/resources/extension_feed_item_pb";
import * as google_ads_googleads_v2_resources_feed_pb from "../../../../../google/ads/googleads/v2/resources/feed_pb";
import * as google_ads_googleads_v2_resources_feed_item_pb from "../../../../../google/ads/googleads/v2/resources/feed_item_pb";
import * as google_ads_googleads_v2_resources_feed_item_target_pb from "../../../../../google/ads/googleads/v2/resources/feed_item_target_pb";
import * as google_ads_googleads_v2_resources_feed_mapping_pb from "../../../../../google/ads/googleads/v2/resources/feed_mapping_pb";
import * as google_ads_googleads_v2_resources_feed_placeholder_view_pb from "../../../../../google/ads/googleads/v2/resources/feed_placeholder_view_pb";
import * as google_ads_googleads_v2_resources_gender_view_pb from "../../../../../google/ads/googleads/v2/resources/gender_view_pb";
import * as google_ads_googleads_v2_resources_geo_target_constant_pb from "../../../../../google/ads/googleads/v2/resources/geo_target_constant_pb";
import * as google_ads_googleads_v2_resources_geographic_view_pb from "../../../../../google/ads/googleads/v2/resources/geographic_view_pb";
import * as google_ads_googleads_v2_resources_group_placement_view_pb from "../../../../../google/ads/googleads/v2/resources/group_placement_view_pb";
import * as google_ads_googleads_v2_resources_hotel_group_view_pb from "../../../../../google/ads/googleads/v2/resources/hotel_group_view_pb";
import * as google_ads_googleads_v2_resources_hotel_performance_view_pb from "../../../../../google/ads/googleads/v2/resources/hotel_performance_view_pb";
import * as google_ads_googleads_v2_resources_keyword_plan_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_pb";
import * as google_ads_googleads_v2_resources_keyword_plan_ad_group_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_ad_group_pb";
import * as google_ads_googleads_v2_resources_keyword_plan_campaign_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_campaign_pb";
import * as google_ads_googleads_v2_resources_keyword_plan_keyword_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_keyword_pb";
import * as google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_negative_keyword_pb";
import * as google_ads_googleads_v2_resources_keyword_view_pb from "../../../../../google/ads/googleads/v2/resources/keyword_view_pb";
import * as google_ads_googleads_v2_resources_label_pb from "../../../../../google/ads/googleads/v2/resources/label_pb";
import * as google_ads_googleads_v2_resources_landing_page_view_pb from "../../../../../google/ads/googleads/v2/resources/landing_page_view_pb";
import * as google_ads_googleads_v2_resources_language_constant_pb from "../../../../../google/ads/googleads/v2/resources/language_constant_pb";
import * as google_ads_googleads_v2_resources_location_view_pb from "../../../../../google/ads/googleads/v2/resources/location_view_pb";
import * as google_ads_googleads_v2_resources_managed_placement_view_pb from "../../../../../google/ads/googleads/v2/resources/managed_placement_view_pb";
import * as google_ads_googleads_v2_resources_media_file_pb from "../../../../../google/ads/googleads/v2/resources/media_file_pb";
import * as google_ads_googleads_v2_resources_mobile_app_category_constant_pb from "../../../../../google/ads/googleads/v2/resources/mobile_app_category_constant_pb";
import * as google_ads_googleads_v2_resources_mobile_device_constant_pb from "../../../../../google/ads/googleads/v2/resources/mobile_device_constant_pb";
import * as google_ads_googleads_v2_resources_mutate_job_pb from "../../../../../google/ads/googleads/v2/resources/mutate_job_pb";
import * as google_ads_googleads_v2_resources_operating_system_version_constant_pb from "../../../../../google/ads/googleads/v2/resources/operating_system_version_constant_pb";
import * as google_ads_googleads_v2_resources_paid_organic_search_term_view_pb from "../../../../../google/ads/googleads/v2/resources/paid_organic_search_term_view_pb";
import * as google_ads_googleads_v2_resources_parental_status_view_pb from "../../../../../google/ads/googleads/v2/resources/parental_status_view_pb";
import * as google_ads_googleads_v2_resources_product_bidding_category_constant_pb from "../../../../../google/ads/googleads/v2/resources/product_bidding_category_constant_pb";
import * as google_ads_googleads_v2_resources_product_group_view_pb from "../../../../../google/ads/googleads/v2/resources/product_group_view_pb";
import * as google_ads_googleads_v2_resources_recommendation_pb from "../../../../../google/ads/googleads/v2/resources/recommendation_pb";
import * as google_ads_googleads_v2_resources_remarketing_action_pb from "../../../../../google/ads/googleads/v2/resources/remarketing_action_pb";
import * as google_ads_googleads_v2_resources_search_term_view_pb from "../../../../../google/ads/googleads/v2/resources/search_term_view_pb";
import * as google_ads_googleads_v2_resources_shared_criterion_pb from "../../../../../google/ads/googleads/v2/resources/shared_criterion_pb";
import * as google_ads_googleads_v2_resources_shared_set_pb from "../../../../../google/ads/googleads/v2/resources/shared_set_pb";
import * as google_ads_googleads_v2_resources_shopping_performance_view_pb from "../../../../../google/ads/googleads/v2/resources/shopping_performance_view_pb";
import * as google_ads_googleads_v2_resources_topic_constant_pb from "../../../../../google/ads/googleads/v2/resources/topic_constant_pb";
import * as google_ads_googleads_v2_resources_topic_view_pb from "../../../../../google/ads/googleads/v2/resources/topic_view_pb";
import * as google_ads_googleads_v2_resources_user_interest_pb from "../../../../../google/ads/googleads/v2/resources/user_interest_pb";
import * as google_ads_googleads_v2_resources_user_list_pb from "../../../../../google/ads/googleads/v2/resources/user_list_pb";
import * as google_ads_googleads_v2_resources_user_location_view_pb from "../../../../../google/ads/googleads/v2/resources/user_location_view_pb";
import * as google_ads_googleads_v2_resources_video_pb from "../../../../../google/ads/googleads/v2/resources/video_pb";
import * as google_ads_googleads_v2_services_ad_group_ad_label_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_ad_label_service_pb";
import * as google_ads_googleads_v2_services_ad_group_ad_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_ad_service_pb";
import * as google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_bid_modifier_service_pb";
import * as google_ads_googleads_v2_services_ad_group_criterion_label_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_criterion_label_service_pb";
import * as google_ads_googleads_v2_services_ad_group_criterion_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_criterion_service_pb";
import * as google_ads_googleads_v2_services_ad_group_extension_setting_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_extension_setting_service_pb";
import * as google_ads_googleads_v2_services_ad_group_feed_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_feed_service_pb";
import * as google_ads_googleads_v2_services_ad_group_label_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_label_service_pb";
import * as google_ads_googleads_v2_services_ad_group_service_pb from "../../../../../google/ads/googleads/v2/services/ad_group_service_pb";
import * as google_ads_googleads_v2_services_ad_parameter_service_pb from "../../../../../google/ads/googleads/v2/services/ad_parameter_service_pb";
import * as google_ads_googleads_v2_services_asset_service_pb from "../../../../../google/ads/googleads/v2/services/asset_service_pb";
import * as google_ads_googleads_v2_services_bidding_strategy_service_pb from "../../../../../google/ads/googleads/v2/services/bidding_strategy_service_pb";
import * as google_ads_googleads_v2_services_campaign_bid_modifier_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_bid_modifier_service_pb";
import * as google_ads_googleads_v2_services_campaign_budget_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_budget_service_pb";
import * as google_ads_googleads_v2_services_campaign_criterion_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_criterion_service_pb";
import * as google_ads_googleads_v2_services_campaign_draft_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_draft_service_pb";
import * as google_ads_googleads_v2_services_campaign_experiment_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_experiment_service_pb";
import * as google_ads_googleads_v2_services_campaign_extension_setting_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_extension_setting_service_pb";
import * as google_ads_googleads_v2_services_campaign_feed_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_feed_service_pb";
import * as google_ads_googleads_v2_services_campaign_label_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_label_service_pb";
import * as google_ads_googleads_v2_services_campaign_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_service_pb";
import * as google_ads_googleads_v2_services_campaign_shared_set_service_pb from "../../../../../google/ads/googleads/v2/services/campaign_shared_set_service_pb";
import * as google_ads_googleads_v2_services_conversion_action_service_pb from "../../../../../google/ads/googleads/v2/services/conversion_action_service_pb";
import * as google_ads_googleads_v2_services_customer_extension_setting_service_pb from "../../../../../google/ads/googleads/v2/services/customer_extension_setting_service_pb";
import * as google_ads_googleads_v2_services_customer_feed_service_pb from "../../../../../google/ads/googleads/v2/services/customer_feed_service_pb";
import * as google_ads_googleads_v2_services_customer_label_service_pb from "../../../../../google/ads/googleads/v2/services/customer_label_service_pb";
import * as google_ads_googleads_v2_services_customer_negative_criterion_service_pb from "../../../../../google/ads/googleads/v2/services/customer_negative_criterion_service_pb";
import * as google_ads_googleads_v2_services_customer_service_pb from "../../../../../google/ads/googleads/v2/services/customer_service_pb";
import * as google_ads_googleads_v2_services_extension_feed_item_service_pb from "../../../../../google/ads/googleads/v2/services/extension_feed_item_service_pb";
import * as google_ads_googleads_v2_services_feed_item_service_pb from "../../../../../google/ads/googleads/v2/services/feed_item_service_pb";
import * as google_ads_googleads_v2_services_feed_item_target_service_pb from "../../../../../google/ads/googleads/v2/services/feed_item_target_service_pb";
import * as google_ads_googleads_v2_services_feed_mapping_service_pb from "../../../../../google/ads/googleads/v2/services/feed_mapping_service_pb";
import * as google_ads_googleads_v2_services_feed_service_pb from "../../../../../google/ads/googleads/v2/services/feed_service_pb";
import * as google_ads_googleads_v2_services_label_service_pb from "../../../../../google/ads/googleads/v2/services/label_service_pb";
import * as google_ads_googleads_v2_services_media_file_service_pb from "../../../../../google/ads/googleads/v2/services/media_file_service_pb";
import * as google_ads_googleads_v2_services_remarketing_action_service_pb from "../../../../../google/ads/googleads/v2/services/remarketing_action_service_pb";
import * as google_ads_googleads_v2_services_shared_criterion_service_pb from "../../../../../google/ads/googleads/v2/services/shared_criterion_service_pb";
import * as google_ads_googleads_v2_services_shared_set_service_pb from "../../../../../google/ads/googleads/v2/services/shared_set_service_pb";
import * as google_ads_googleads_v2_services_user_list_service_pb from "../../../../../google/ads/googleads/v2/services/user_list_service_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

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

  getReturnSummaryRow(): boolean;
  setReturnSummaryRow(value: boolean): void;

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
    returnSummaryRow: boolean,
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

  hasSummaryRow(): boolean;
  clearSummaryRow(): void;
  getSummaryRow(): GoogleAdsRow | undefined;
  setSummaryRow(value?: GoogleAdsRow): void;

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
    summaryRow?: GoogleAdsRow.AsObject,
  }
}

export class GoogleAdsRow extends jspb.Message {
  hasAccountBudget(): boolean;
  clearAccountBudget(): void;
  getAccountBudget(): google_ads_googleads_v2_resources_account_budget_pb.AccountBudget | undefined;
  setAccountBudget(value?: google_ads_googleads_v2_resources_account_budget_pb.AccountBudget): void;

  hasAccountBudgetProposal(): boolean;
  clearAccountBudgetProposal(): void;
  getAccountBudgetProposal(): google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal | undefined;
  setAccountBudgetProposal(value?: google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_ads_googleads_v2_resources_ad_group_pb.AdGroup | undefined;
  setAdGroup(value?: google_ads_googleads_v2_resources_ad_group_pb.AdGroup): void;

  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;
  getAdGroupAd(): google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd | undefined;
  setAdGroupAd(value?: google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd): void;

  hasAdGroupAdAssetView(): boolean;
  clearAdGroupAdAssetView(): void;
  getAdGroupAdAssetView(): google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView | undefined;
  setAdGroupAdAssetView(value?: google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView): void;

  hasAdGroupAdLabel(): boolean;
  clearAdGroupAdLabel(): void;
  getAdGroupAdLabel(): google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel | undefined;
  setAdGroupAdLabel(value?: google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel): void;

  hasAdGroupAudienceView(): boolean;
  clearAdGroupAudienceView(): void;
  getAdGroupAudienceView(): google_ads_googleads_v2_resources_ad_group_audience_view_pb.AdGroupAudienceView | undefined;
  setAdGroupAudienceView(value?: google_ads_googleads_v2_resources_ad_group_audience_view_pb.AdGroupAudienceView): void;

  hasAdGroupBidModifier(): boolean;
  clearAdGroupBidModifier(): void;
  getAdGroupBidModifier(): google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setAdGroupBidModifier(value?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): void;

  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;
  getAdGroupCriterion(): google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setAdGroupCriterion(value?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion): void;

  hasAdGroupCriterionLabel(): boolean;
  clearAdGroupCriterionLabel(): void;
  getAdGroupCriterionLabel(): google_ads_googleads_v2_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel | undefined;
  setAdGroupCriterionLabel(value?: google_ads_googleads_v2_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel): void;

  hasAdGroupCriterionSimulation(): boolean;
  clearAdGroupCriterionSimulation(): void;
  getAdGroupCriterionSimulation(): google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation | undefined;
  setAdGroupCriterionSimulation(value?: google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation): void;

  hasAdGroupExtensionSetting(): boolean;
  clearAdGroupExtensionSetting(): void;
  getAdGroupExtensionSetting(): google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting | undefined;
  setAdGroupExtensionSetting(value?: google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting): void;

  hasAdGroupFeed(): boolean;
  clearAdGroupFeed(): void;
  getAdGroupFeed(): google_ads_googleads_v2_resources_ad_group_feed_pb.AdGroupFeed | undefined;
  setAdGroupFeed(value?: google_ads_googleads_v2_resources_ad_group_feed_pb.AdGroupFeed): void;

  hasAdGroupLabel(): boolean;
  clearAdGroupLabel(): void;
  getAdGroupLabel(): google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel | undefined;
  setAdGroupLabel(value?: google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel): void;

  hasAdGroupSimulation(): boolean;
  clearAdGroupSimulation(): void;
  getAdGroupSimulation(): google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation | undefined;
  setAdGroupSimulation(value?: google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation): void;

  hasAdParameter(): boolean;
  clearAdParameter(): void;
  getAdParameter(): google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter | undefined;
  setAdParameter(value?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter): void;

  hasAgeRangeView(): boolean;
  clearAgeRangeView(): void;
  getAgeRangeView(): google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView | undefined;
  setAgeRangeView(value?: google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView): void;

  hasAdScheduleView(): boolean;
  clearAdScheduleView(): void;
  getAdScheduleView(): google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView | undefined;
  setAdScheduleView(value?: google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView): void;

  hasDomainCategory(): boolean;
  clearDomainCategory(): void;
  getDomainCategory(): google_ads_googleads_v2_resources_domain_category_pb.DomainCategory | undefined;
  setDomainCategory(value?: google_ads_googleads_v2_resources_domain_category_pb.DomainCategory): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): google_ads_googleads_v2_resources_asset_pb.Asset | undefined;
  setAsset(value?: google_ads_googleads_v2_resources_asset_pb.Asset): void;

  hasBiddingStrategy(): boolean;
  clearBiddingStrategy(): void;
  getBiddingStrategy(): google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setBiddingStrategy(value?: google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy): void;

  hasBillingSetup(): boolean;
  clearBillingSetup(): void;
  getBillingSetup(): google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup | undefined;
  setBillingSetup(value?: google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup): void;

  hasCampaignBudget(): boolean;
  clearCampaignBudget(): void;
  getCampaignBudget(): google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget | undefined;
  setCampaignBudget(value?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_ads_googleads_v2_resources_campaign_pb.Campaign | undefined;
  setCampaign(value?: google_ads_googleads_v2_resources_campaign_pb.Campaign): void;

  hasCampaignAudienceView(): boolean;
  clearCampaignAudienceView(): void;
  getCampaignAudienceView(): google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView | undefined;
  setCampaignAudienceView(value?: google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView): void;

  hasCampaignBidModifier(): boolean;
  clearCampaignBidModifier(): void;
  getCampaignBidModifier(): google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier | undefined;
  setCampaignBidModifier(value?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier): void;

  hasCampaignCriterion(): boolean;
  clearCampaignCriterion(): void;
  getCampaignCriterion(): google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion | undefined;
  setCampaignCriterion(value?: google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion): void;

  hasCampaignCriterionSimulation(): boolean;
  clearCampaignCriterionSimulation(): void;
  getCampaignCriterionSimulation(): google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation | undefined;
  setCampaignCriterionSimulation(value?: google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation): void;

  hasCampaignDraft(): boolean;
  clearCampaignDraft(): void;
  getCampaignDraft(): google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft | undefined;
  setCampaignDraft(value?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft): void;

  hasCampaignExperiment(): boolean;
  clearCampaignExperiment(): void;
  getCampaignExperiment(): google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment | undefined;
  setCampaignExperiment(value?: google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment): void;

  hasCampaignExtensionSetting(): boolean;
  clearCampaignExtensionSetting(): void;
  getCampaignExtensionSetting(): google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting | undefined;
  setCampaignExtensionSetting(value?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting): void;

  hasCampaignFeed(): boolean;
  clearCampaignFeed(): void;
  getCampaignFeed(): google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed | undefined;
  setCampaignFeed(value?: google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed): void;

  hasCampaignLabel(): boolean;
  clearCampaignLabel(): void;
  getCampaignLabel(): google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel | undefined;
  setCampaignLabel(value?: google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel): void;

  hasCampaignSharedSet(): boolean;
  clearCampaignSharedSet(): void;
  getCampaignSharedSet(): google_ads_googleads_v2_resources_campaign_shared_set_pb.CampaignSharedSet | undefined;
  setCampaignSharedSet(value?: google_ads_googleads_v2_resources_campaign_shared_set_pb.CampaignSharedSet): void;

  hasCarrierConstant(): boolean;
  clearCarrierConstant(): void;
  getCarrierConstant(): google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant | undefined;
  setCarrierConstant(value?: google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant): void;

  hasChangeStatus(): boolean;
  clearChangeStatus(): void;
  getChangeStatus(): google_ads_googleads_v2_resources_change_status_pb.ChangeStatus | undefined;
  setChangeStatus(value?: google_ads_googleads_v2_resources_change_status_pb.ChangeStatus): void;

  hasConversionAction(): boolean;
  clearConversionAction(): void;
  getConversionAction(): google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction | undefined;
  setConversionAction(value?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction): void;

  hasClickView(): boolean;
  clearClickView(): void;
  getClickView(): google_ads_googleads_v2_resources_click_view_pb.ClickView | undefined;
  setClickView(value?: google_ads_googleads_v2_resources_click_view_pb.ClickView): void;

  hasCustomInterest(): boolean;
  clearCustomInterest(): void;
  getCustomInterest(): google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest | undefined;
  setCustomInterest(value?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): google_ads_googleads_v2_resources_customer_pb.Customer | undefined;
  setCustomer(value?: google_ads_googleads_v2_resources_customer_pb.Customer): void;

  hasCustomerManagerLink(): boolean;
  clearCustomerManagerLink(): void;
  getCustomerManagerLink(): google_ads_googleads_v2_resources_customer_manager_link_pb.CustomerManagerLink | undefined;
  setCustomerManagerLink(value?: google_ads_googleads_v2_resources_customer_manager_link_pb.CustomerManagerLink): void;

  hasCustomerClientLink(): boolean;
  clearCustomerClientLink(): void;
  getCustomerClientLink(): google_ads_googleads_v2_resources_customer_client_link_pb.CustomerClientLink | undefined;
  setCustomerClientLink(value?: google_ads_googleads_v2_resources_customer_client_link_pb.CustomerClientLink): void;

  hasCustomerClient(): boolean;
  clearCustomerClient(): void;
  getCustomerClient(): google_ads_googleads_v2_resources_customer_client_pb.CustomerClient | undefined;
  setCustomerClient(value?: google_ads_googleads_v2_resources_customer_client_pb.CustomerClient): void;

  hasCustomerExtensionSetting(): boolean;
  clearCustomerExtensionSetting(): void;
  getCustomerExtensionSetting(): google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting | undefined;
  setCustomerExtensionSetting(value?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting): void;

  hasCustomerFeed(): boolean;
  clearCustomerFeed(): void;
  getCustomerFeed(): google_ads_googleads_v2_resources_customer_feed_pb.CustomerFeed | undefined;
  setCustomerFeed(value?: google_ads_googleads_v2_resources_customer_feed_pb.CustomerFeed): void;

  hasCustomerLabel(): boolean;
  clearCustomerLabel(): void;
  getCustomerLabel(): google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel | undefined;
  setCustomerLabel(value?: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel): void;

  hasCustomerNegativeCriterion(): boolean;
  clearCustomerNegativeCriterion(): void;
  getCustomerNegativeCriterion(): google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion | undefined;
  setCustomerNegativeCriterion(value?: google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion): void;

  hasDetailPlacementView(): boolean;
  clearDetailPlacementView(): void;
  getDetailPlacementView(): google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView | undefined;
  setDetailPlacementView(value?: google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView): void;

  hasDisplayKeywordView(): boolean;
  clearDisplayKeywordView(): void;
  getDisplayKeywordView(): google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView | undefined;
  setDisplayKeywordView(value?: google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView): void;

  hasDistanceView(): boolean;
  clearDistanceView(): void;
  getDistanceView(): google_ads_googleads_v2_resources_distance_view_pb.DistanceView | undefined;
  setDistanceView(value?: google_ads_googleads_v2_resources_distance_view_pb.DistanceView): void;

  hasDynamicSearchAdsSearchTermView(): boolean;
  clearDynamicSearchAdsSearchTermView(): void;
  getDynamicSearchAdsSearchTermView(): google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView | undefined;
  setDynamicSearchAdsSearchTermView(value?: google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView): void;

  hasExpandedLandingPageView(): boolean;
  clearExpandedLandingPageView(): void;
  getExpandedLandingPageView(): google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView | undefined;
  setExpandedLandingPageView(value?: google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView): void;

  hasExtensionFeedItem(): boolean;
  clearExtensionFeedItem(): void;
  getExtensionFeedItem(): google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem | undefined;
  setExtensionFeedItem(value?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_ads_googleads_v2_resources_feed_pb.Feed | undefined;
  setFeed(value?: google_ads_googleads_v2_resources_feed_pb.Feed): void;

  hasFeedItem(): boolean;
  clearFeedItem(): void;
  getFeedItem(): google_ads_googleads_v2_resources_feed_item_pb.FeedItem | undefined;
  setFeedItem(value?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem): void;

  hasFeedItemTarget(): boolean;
  clearFeedItemTarget(): void;
  getFeedItemTarget(): google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget | undefined;
  setFeedItemTarget(value?: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget): void;

  hasFeedMapping(): boolean;
  clearFeedMapping(): void;
  getFeedMapping(): google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping | undefined;
  setFeedMapping(value?: google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping): void;

  hasFeedPlaceholderView(): boolean;
  clearFeedPlaceholderView(): void;
  getFeedPlaceholderView(): google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView | undefined;
  setFeedPlaceholderView(value?: google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView): void;

  hasGenderView(): boolean;
  clearGenderView(): void;
  getGenderView(): google_ads_googleads_v2_resources_gender_view_pb.GenderView | undefined;
  setGenderView(value?: google_ads_googleads_v2_resources_gender_view_pb.GenderView): void;

  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;
  getGeoTargetConstant(): google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant | undefined;
  setGeoTargetConstant(value?: google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant): void;

  hasGeographicView(): boolean;
  clearGeographicView(): void;
  getGeographicView(): google_ads_googleads_v2_resources_geographic_view_pb.GeographicView | undefined;
  setGeographicView(value?: google_ads_googleads_v2_resources_geographic_view_pb.GeographicView): void;

  hasGroupPlacementView(): boolean;
  clearGroupPlacementView(): void;
  getGroupPlacementView(): google_ads_googleads_v2_resources_group_placement_view_pb.GroupPlacementView | undefined;
  setGroupPlacementView(value?: google_ads_googleads_v2_resources_group_placement_view_pb.GroupPlacementView): void;

  hasHotelGroupView(): boolean;
  clearHotelGroupView(): void;
  getHotelGroupView(): google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView | undefined;
  setHotelGroupView(value?: google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView): void;

  hasHotelPerformanceView(): boolean;
  clearHotelPerformanceView(): void;
  getHotelPerformanceView(): google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView | undefined;
  setHotelPerformanceView(value?: google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView): void;

  hasKeywordView(): boolean;
  clearKeywordView(): void;
  getKeywordView(): google_ads_googleads_v2_resources_keyword_view_pb.KeywordView | undefined;
  setKeywordView(value?: google_ads_googleads_v2_resources_keyword_view_pb.KeywordView): void;

  hasKeywordPlan(): boolean;
  clearKeywordPlan(): void;
  getKeywordPlan(): google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan | undefined;
  setKeywordPlan(value?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan): void;

  hasKeywordPlanCampaign(): boolean;
  clearKeywordPlanCampaign(): void;
  getKeywordPlanCampaign(): google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign | undefined;
  setKeywordPlanCampaign(value?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign): void;

  hasKeywordPlanNegativeKeyword(): boolean;
  clearKeywordPlanNegativeKeyword(): void;
  getKeywordPlanNegativeKeyword(): google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword | undefined;
  setKeywordPlanNegativeKeyword(value?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword): void;

  hasKeywordPlanAdGroup(): boolean;
  clearKeywordPlanAdGroup(): void;
  getKeywordPlanAdGroup(): google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup | undefined;
  setKeywordPlanAdGroup(value?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup): void;

  hasKeywordPlanKeyword(): boolean;
  clearKeywordPlanKeyword(): void;
  getKeywordPlanKeyword(): google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword | undefined;
  setKeywordPlanKeyword(value?: google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): google_ads_googleads_v2_resources_label_pb.Label | undefined;
  setLabel(value?: google_ads_googleads_v2_resources_label_pb.Label): void;

  hasLandingPageView(): boolean;
  clearLandingPageView(): void;
  getLandingPageView(): google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView | undefined;
  setLandingPageView(value?: google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView): void;

  hasLanguageConstant(): boolean;
  clearLanguageConstant(): void;
  getLanguageConstant(): google_ads_googleads_v2_resources_language_constant_pb.LanguageConstant | undefined;
  setLanguageConstant(value?: google_ads_googleads_v2_resources_language_constant_pb.LanguageConstant): void;

  hasLocationView(): boolean;
  clearLocationView(): void;
  getLocationView(): google_ads_googleads_v2_resources_location_view_pb.LocationView | undefined;
  setLocationView(value?: google_ads_googleads_v2_resources_location_view_pb.LocationView): void;

  hasManagedPlacementView(): boolean;
  clearManagedPlacementView(): void;
  getManagedPlacementView(): google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView | undefined;
  setManagedPlacementView(value?: google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView): void;

  hasMediaFile(): boolean;
  clearMediaFile(): void;
  getMediaFile(): google_ads_googleads_v2_resources_media_file_pb.MediaFile | undefined;
  setMediaFile(value?: google_ads_googleads_v2_resources_media_file_pb.MediaFile): void;

  hasMobileAppCategoryConstant(): boolean;
  clearMobileAppCategoryConstant(): void;
  getMobileAppCategoryConstant(): google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant | undefined;
  setMobileAppCategoryConstant(value?: google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant): void;

  hasMobileDeviceConstant(): boolean;
  clearMobileDeviceConstant(): void;
  getMobileDeviceConstant(): google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant | undefined;
  setMobileDeviceConstant(value?: google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant): void;

  hasMutateJob(): boolean;
  clearMutateJob(): void;
  getMutateJob(): google_ads_googleads_v2_resources_mutate_job_pb.MutateJob | undefined;
  setMutateJob(value?: google_ads_googleads_v2_resources_mutate_job_pb.MutateJob): void;

  hasOperatingSystemVersionConstant(): boolean;
  clearOperatingSystemVersionConstant(): void;
  getOperatingSystemVersionConstant(): google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant | undefined;
  setOperatingSystemVersionConstant(value?: google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant): void;

  hasPaidOrganicSearchTermView(): boolean;
  clearPaidOrganicSearchTermView(): void;
  getPaidOrganicSearchTermView(): google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView | undefined;
  setPaidOrganicSearchTermView(value?: google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView): void;

  hasParentalStatusView(): boolean;
  clearParentalStatusView(): void;
  getParentalStatusView(): google_ads_googleads_v2_resources_parental_status_view_pb.ParentalStatusView | undefined;
  setParentalStatusView(value?: google_ads_googleads_v2_resources_parental_status_view_pb.ParentalStatusView): void;

  hasProductBiddingCategoryConstant(): boolean;
  clearProductBiddingCategoryConstant(): void;
  getProductBiddingCategoryConstant(): google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant | undefined;
  setProductBiddingCategoryConstant(value?: google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant): void;

  hasProductGroupView(): boolean;
  clearProductGroupView(): void;
  getProductGroupView(): google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView | undefined;
  setProductGroupView(value?: google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView): void;

  hasRecommendation(): boolean;
  clearRecommendation(): void;
  getRecommendation(): google_ads_googleads_v2_resources_recommendation_pb.Recommendation | undefined;
  setRecommendation(value?: google_ads_googleads_v2_resources_recommendation_pb.Recommendation): void;

  hasSearchTermView(): boolean;
  clearSearchTermView(): void;
  getSearchTermView(): google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView | undefined;
  setSearchTermView(value?: google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView): void;

  hasSharedCriterion(): boolean;
  clearSharedCriterion(): void;
  getSharedCriterion(): google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion | undefined;
  setSharedCriterion(value?: google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion): void;

  hasSharedSet(): boolean;
  clearSharedSet(): void;
  getSharedSet(): google_ads_googleads_v2_resources_shared_set_pb.SharedSet | undefined;
  setSharedSet(value?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet): void;

  hasShoppingPerformanceView(): boolean;
  clearShoppingPerformanceView(): void;
  getShoppingPerformanceView(): google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView | undefined;
  setShoppingPerformanceView(value?: google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView): void;

  hasTopicView(): boolean;
  clearTopicView(): void;
  getTopicView(): google_ads_googleads_v2_resources_topic_view_pb.TopicView | undefined;
  setTopicView(value?: google_ads_googleads_v2_resources_topic_view_pb.TopicView): void;

  hasUserInterest(): boolean;
  clearUserInterest(): void;
  getUserInterest(): google_ads_googleads_v2_resources_user_interest_pb.UserInterest | undefined;
  setUserInterest(value?: google_ads_googleads_v2_resources_user_interest_pb.UserInterest): void;

  hasUserList(): boolean;
  clearUserList(): void;
  getUserList(): google_ads_googleads_v2_resources_user_list_pb.UserList | undefined;
  setUserList(value?: google_ads_googleads_v2_resources_user_list_pb.UserList): void;

  hasUserLocationView(): boolean;
  clearUserLocationView(): void;
  getUserLocationView(): google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView | undefined;
  setUserLocationView(value?: google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView): void;

  hasRemarketingAction(): boolean;
  clearRemarketingAction(): void;
  getRemarketingAction(): google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction | undefined;
  setRemarketingAction(value?: google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction): void;

  hasTopicConstant(): boolean;
  clearTopicConstant(): void;
  getTopicConstant(): google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant | undefined;
  setTopicConstant(value?: google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant): void;

  hasVideo(): boolean;
  clearVideo(): void;
  getVideo(): google_ads_googleads_v2_resources_video_pb.Video | undefined;
  setVideo(value?: google_ads_googleads_v2_resources_video_pb.Video): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): google_ads_googleads_v2_common_metrics_pb.Metrics | undefined;
  setMetrics(value?: google_ads_googleads_v2_common_metrics_pb.Metrics): void;

  hasSegments(): boolean;
  clearSegments(): void;
  getSegments(): google_ads_googleads_v2_common_segments_pb.Segments | undefined;
  setSegments(value?: google_ads_googleads_v2_common_segments_pb.Segments): void;

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
    accountBudget?: google_ads_googleads_v2_resources_account_budget_pb.AccountBudget.AsObject,
    accountBudgetProposal?: google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal.AsObject,
    adGroup?: google_ads_googleads_v2_resources_ad_group_pb.AdGroup.AsObject,
    adGroupAd?: google_ads_googleads_v2_resources_ad_group_ad_pb.AdGroupAd.AsObject,
    adGroupAdAssetView?: google_ads_googleads_v2_resources_ad_group_ad_asset_view_pb.AdGroupAdAssetView.AsObject,
    adGroupAdLabel?: google_ads_googleads_v2_resources_ad_group_ad_label_pb.AdGroupAdLabel.AsObject,
    adGroupAudienceView?: google_ads_googleads_v2_resources_ad_group_audience_view_pb.AdGroupAudienceView.AsObject,
    adGroupBidModifier?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    adGroupCriterion?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    adGroupCriterionLabel?: google_ads_googleads_v2_resources_ad_group_criterion_label_pb.AdGroupCriterionLabel.AsObject,
    adGroupCriterionSimulation?: google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb.AdGroupCriterionSimulation.AsObject,
    adGroupExtensionSetting?: google_ads_googleads_v2_resources_ad_group_extension_setting_pb.AdGroupExtensionSetting.AsObject,
    adGroupFeed?: google_ads_googleads_v2_resources_ad_group_feed_pb.AdGroupFeed.AsObject,
    adGroupLabel?: google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel.AsObject,
    adGroupSimulation?: google_ads_googleads_v2_resources_ad_group_simulation_pb.AdGroupSimulation.AsObject,
    adParameter?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter.AsObject,
    ageRangeView?: google_ads_googleads_v2_resources_age_range_view_pb.AgeRangeView.AsObject,
    adScheduleView?: google_ads_googleads_v2_resources_ad_schedule_view_pb.AdScheduleView.AsObject,
    domainCategory?: google_ads_googleads_v2_resources_domain_category_pb.DomainCategory.AsObject,
    asset?: google_ads_googleads_v2_resources_asset_pb.Asset.AsObject,
    biddingStrategy?: google_ads_googleads_v2_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    billingSetup?: google_ads_googleads_v2_resources_billing_setup_pb.BillingSetup.AsObject,
    campaignBudget?: google_ads_googleads_v2_resources_campaign_budget_pb.CampaignBudget.AsObject,
    campaign?: google_ads_googleads_v2_resources_campaign_pb.Campaign.AsObject,
    campaignAudienceView?: google_ads_googleads_v2_resources_campaign_audience_view_pb.CampaignAudienceView.AsObject,
    campaignBidModifier?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier.AsObject,
    campaignCriterion?: google_ads_googleads_v2_resources_campaign_criterion_pb.CampaignCriterion.AsObject,
    campaignCriterionSimulation?: google_ads_googleads_v2_resources_campaign_criterion_simulation_pb.CampaignCriterionSimulation.AsObject,
    campaignDraft?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft.AsObject,
    campaignExperiment?: google_ads_googleads_v2_resources_campaign_experiment_pb.CampaignExperiment.AsObject,
    campaignExtensionSetting?: google_ads_googleads_v2_resources_campaign_extension_setting_pb.CampaignExtensionSetting.AsObject,
    campaignFeed?: google_ads_googleads_v2_resources_campaign_feed_pb.CampaignFeed.AsObject,
    campaignLabel?: google_ads_googleads_v2_resources_campaign_label_pb.CampaignLabel.AsObject,
    campaignSharedSet?: google_ads_googleads_v2_resources_campaign_shared_set_pb.CampaignSharedSet.AsObject,
    carrierConstant?: google_ads_googleads_v2_resources_carrier_constant_pb.CarrierConstant.AsObject,
    changeStatus?: google_ads_googleads_v2_resources_change_status_pb.ChangeStatus.AsObject,
    conversionAction?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction.AsObject,
    clickView?: google_ads_googleads_v2_resources_click_view_pb.ClickView.AsObject,
    customInterest?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest.AsObject,
    customer?: google_ads_googleads_v2_resources_customer_pb.Customer.AsObject,
    customerManagerLink?: google_ads_googleads_v2_resources_customer_manager_link_pb.CustomerManagerLink.AsObject,
    customerClientLink?: google_ads_googleads_v2_resources_customer_client_link_pb.CustomerClientLink.AsObject,
    customerClient?: google_ads_googleads_v2_resources_customer_client_pb.CustomerClient.AsObject,
    customerExtensionSetting?: google_ads_googleads_v2_resources_customer_extension_setting_pb.CustomerExtensionSetting.AsObject,
    customerFeed?: google_ads_googleads_v2_resources_customer_feed_pb.CustomerFeed.AsObject,
    customerLabel?: google_ads_googleads_v2_resources_customer_label_pb.CustomerLabel.AsObject,
    customerNegativeCriterion?: google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion.AsObject,
    detailPlacementView?: google_ads_googleads_v2_resources_detail_placement_view_pb.DetailPlacementView.AsObject,
    displayKeywordView?: google_ads_googleads_v2_resources_display_keyword_view_pb.DisplayKeywordView.AsObject,
    distanceView?: google_ads_googleads_v2_resources_distance_view_pb.DistanceView.AsObject,
    dynamicSearchAdsSearchTermView?: google_ads_googleads_v2_resources_dynamic_search_ads_search_term_view_pb.DynamicSearchAdsSearchTermView.AsObject,
    expandedLandingPageView?: google_ads_googleads_v2_resources_expanded_landing_page_view_pb.ExpandedLandingPageView.AsObject,
    extensionFeedItem?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem.AsObject,
    feed?: google_ads_googleads_v2_resources_feed_pb.Feed.AsObject,
    feedItem?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem.AsObject,
    feedItemTarget?: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.AsObject,
    feedMapping?: google_ads_googleads_v2_resources_feed_mapping_pb.FeedMapping.AsObject,
    feedPlaceholderView?: google_ads_googleads_v2_resources_feed_placeholder_view_pb.FeedPlaceholderView.AsObject,
    genderView?: google_ads_googleads_v2_resources_gender_view_pb.GenderView.AsObject,
    geoTargetConstant?: google_ads_googleads_v2_resources_geo_target_constant_pb.GeoTargetConstant.AsObject,
    geographicView?: google_ads_googleads_v2_resources_geographic_view_pb.GeographicView.AsObject,
    groupPlacementView?: google_ads_googleads_v2_resources_group_placement_view_pb.GroupPlacementView.AsObject,
    hotelGroupView?: google_ads_googleads_v2_resources_hotel_group_view_pb.HotelGroupView.AsObject,
    hotelPerformanceView?: google_ads_googleads_v2_resources_hotel_performance_view_pb.HotelPerformanceView.AsObject,
    keywordView?: google_ads_googleads_v2_resources_keyword_view_pb.KeywordView.AsObject,
    keywordPlan?: google_ads_googleads_v2_resources_keyword_plan_pb.KeywordPlan.AsObject,
    keywordPlanCampaign?: google_ads_googleads_v2_resources_keyword_plan_campaign_pb.KeywordPlanCampaign.AsObject,
    keywordPlanNegativeKeyword?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword.AsObject,
    keywordPlanAdGroup?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup.AsObject,
    keywordPlanKeyword?: google_ads_googleads_v2_resources_keyword_plan_keyword_pb.KeywordPlanKeyword.AsObject,
    label?: google_ads_googleads_v2_resources_label_pb.Label.AsObject,
    landingPageView?: google_ads_googleads_v2_resources_landing_page_view_pb.LandingPageView.AsObject,
    languageConstant?: google_ads_googleads_v2_resources_language_constant_pb.LanguageConstant.AsObject,
    locationView?: google_ads_googleads_v2_resources_location_view_pb.LocationView.AsObject,
    managedPlacementView?: google_ads_googleads_v2_resources_managed_placement_view_pb.ManagedPlacementView.AsObject,
    mediaFile?: google_ads_googleads_v2_resources_media_file_pb.MediaFile.AsObject,
    mobileAppCategoryConstant?: google_ads_googleads_v2_resources_mobile_app_category_constant_pb.MobileAppCategoryConstant.AsObject,
    mobileDeviceConstant?: google_ads_googleads_v2_resources_mobile_device_constant_pb.MobileDeviceConstant.AsObject,
    mutateJob?: google_ads_googleads_v2_resources_mutate_job_pb.MutateJob.AsObject,
    operatingSystemVersionConstant?: google_ads_googleads_v2_resources_operating_system_version_constant_pb.OperatingSystemVersionConstant.AsObject,
    paidOrganicSearchTermView?: google_ads_googleads_v2_resources_paid_organic_search_term_view_pb.PaidOrganicSearchTermView.AsObject,
    parentalStatusView?: google_ads_googleads_v2_resources_parental_status_view_pb.ParentalStatusView.AsObject,
    productBiddingCategoryConstant?: google_ads_googleads_v2_resources_product_bidding_category_constant_pb.ProductBiddingCategoryConstant.AsObject,
    productGroupView?: google_ads_googleads_v2_resources_product_group_view_pb.ProductGroupView.AsObject,
    recommendation?: google_ads_googleads_v2_resources_recommendation_pb.Recommendation.AsObject,
    searchTermView?: google_ads_googleads_v2_resources_search_term_view_pb.SearchTermView.AsObject,
    sharedCriterion?: google_ads_googleads_v2_resources_shared_criterion_pb.SharedCriterion.AsObject,
    sharedSet?: google_ads_googleads_v2_resources_shared_set_pb.SharedSet.AsObject,
    shoppingPerformanceView?: google_ads_googleads_v2_resources_shopping_performance_view_pb.ShoppingPerformanceView.AsObject,
    topicView?: google_ads_googleads_v2_resources_topic_view_pb.TopicView.AsObject,
    userInterest?: google_ads_googleads_v2_resources_user_interest_pb.UserInterest.AsObject,
    userList?: google_ads_googleads_v2_resources_user_list_pb.UserList.AsObject,
    userLocationView?: google_ads_googleads_v2_resources_user_location_view_pb.UserLocationView.AsObject,
    remarketingAction?: google_ads_googleads_v2_resources_remarketing_action_pb.RemarketingAction.AsObject,
    topicConstant?: google_ads_googleads_v2_resources_topic_constant_pb.TopicConstant.AsObject,
    video?: google_ads_googleads_v2_resources_video_pb.Video.AsObject,
    metrics?: google_ads_googleads_v2_common_metrics_pb.Metrics.AsObject,
    segments?: google_ads_googleads_v2_common_segments_pb.Segments.AsObject,
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
  hasAdGroupAdLabelOperation(): boolean;
  clearAdGroupAdLabelOperation(): void;
  getAdGroupAdLabelOperation(): google_ads_googleads_v2_services_ad_group_ad_label_service_pb.AdGroupAdLabelOperation | undefined;
  setAdGroupAdLabelOperation(value?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.AdGroupAdLabelOperation): void;

  hasAdGroupAdOperation(): boolean;
  clearAdGroupAdOperation(): void;
  getAdGroupAdOperation(): google_ads_googleads_v2_services_ad_group_ad_service_pb.AdGroupAdOperation | undefined;
  setAdGroupAdOperation(value?: google_ads_googleads_v2_services_ad_group_ad_service_pb.AdGroupAdOperation): void;

  hasAdGroupBidModifierOperation(): boolean;
  clearAdGroupBidModifierOperation(): void;
  getAdGroupBidModifierOperation(): google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation | undefined;
  setAdGroupBidModifierOperation(value?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation): void;

  hasAdGroupCriterionLabelOperation(): boolean;
  clearAdGroupCriterionLabelOperation(): void;
  getAdGroupCriterionLabelOperation(): google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.AdGroupCriterionLabelOperation | undefined;
  setAdGroupCriterionLabelOperation(value?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.AdGroupCriterionLabelOperation): void;

  hasAdGroupCriterionOperation(): boolean;
  clearAdGroupCriterionOperation(): void;
  getAdGroupCriterionOperation(): google_ads_googleads_v2_services_ad_group_criterion_service_pb.AdGroupCriterionOperation | undefined;
  setAdGroupCriterionOperation(value?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.AdGroupCriterionOperation): void;

  hasAdGroupExtensionSettingOperation(): boolean;
  clearAdGroupExtensionSettingOperation(): void;
  getAdGroupExtensionSettingOperation(): google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.AdGroupExtensionSettingOperation | undefined;
  setAdGroupExtensionSettingOperation(value?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.AdGroupExtensionSettingOperation): void;

  hasAdGroupFeedOperation(): boolean;
  clearAdGroupFeedOperation(): void;
  getAdGroupFeedOperation(): google_ads_googleads_v2_services_ad_group_feed_service_pb.AdGroupFeedOperation | undefined;
  setAdGroupFeedOperation(value?: google_ads_googleads_v2_services_ad_group_feed_service_pb.AdGroupFeedOperation): void;

  hasAdGroupLabelOperation(): boolean;
  clearAdGroupLabelOperation(): void;
  getAdGroupLabelOperation(): google_ads_googleads_v2_services_ad_group_label_service_pb.AdGroupLabelOperation | undefined;
  setAdGroupLabelOperation(value?: google_ads_googleads_v2_services_ad_group_label_service_pb.AdGroupLabelOperation): void;

  hasAdGroupOperation(): boolean;
  clearAdGroupOperation(): void;
  getAdGroupOperation(): google_ads_googleads_v2_services_ad_group_service_pb.AdGroupOperation | undefined;
  setAdGroupOperation(value?: google_ads_googleads_v2_services_ad_group_service_pb.AdGroupOperation): void;

  hasAdParameterOperation(): boolean;
  clearAdParameterOperation(): void;
  getAdParameterOperation(): google_ads_googleads_v2_services_ad_parameter_service_pb.AdParameterOperation | undefined;
  setAdParameterOperation(value?: google_ads_googleads_v2_services_ad_parameter_service_pb.AdParameterOperation): void;

  hasAssetOperation(): boolean;
  clearAssetOperation(): void;
  getAssetOperation(): google_ads_googleads_v2_services_asset_service_pb.AssetOperation | undefined;
  setAssetOperation(value?: google_ads_googleads_v2_services_asset_service_pb.AssetOperation): void;

  hasBiddingStrategyOperation(): boolean;
  clearBiddingStrategyOperation(): void;
  getBiddingStrategyOperation(): google_ads_googleads_v2_services_bidding_strategy_service_pb.BiddingStrategyOperation | undefined;
  setBiddingStrategyOperation(value?: google_ads_googleads_v2_services_bidding_strategy_service_pb.BiddingStrategyOperation): void;

  hasCampaignBidModifierOperation(): boolean;
  clearCampaignBidModifierOperation(): void;
  getCampaignBidModifierOperation(): google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation | undefined;
  setCampaignBidModifierOperation(value?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation): void;

  hasCampaignBudgetOperation(): boolean;
  clearCampaignBudgetOperation(): void;
  getCampaignBudgetOperation(): google_ads_googleads_v2_services_campaign_budget_service_pb.CampaignBudgetOperation | undefined;
  setCampaignBudgetOperation(value?: google_ads_googleads_v2_services_campaign_budget_service_pb.CampaignBudgetOperation): void;

  hasCampaignCriterionOperation(): boolean;
  clearCampaignCriterionOperation(): void;
  getCampaignCriterionOperation(): google_ads_googleads_v2_services_campaign_criterion_service_pb.CampaignCriterionOperation | undefined;
  setCampaignCriterionOperation(value?: google_ads_googleads_v2_services_campaign_criterion_service_pb.CampaignCriterionOperation): void;

  hasCampaignDraftOperation(): boolean;
  clearCampaignDraftOperation(): void;
  getCampaignDraftOperation(): google_ads_googleads_v2_services_campaign_draft_service_pb.CampaignDraftOperation | undefined;
  setCampaignDraftOperation(value?: google_ads_googleads_v2_services_campaign_draft_service_pb.CampaignDraftOperation): void;

  hasCampaignExperimentOperation(): boolean;
  clearCampaignExperimentOperation(): void;
  getCampaignExperimentOperation(): google_ads_googleads_v2_services_campaign_experiment_service_pb.CampaignExperimentOperation | undefined;
  setCampaignExperimentOperation(value?: google_ads_googleads_v2_services_campaign_experiment_service_pb.CampaignExperimentOperation): void;

  hasCampaignExtensionSettingOperation(): boolean;
  clearCampaignExtensionSettingOperation(): void;
  getCampaignExtensionSettingOperation(): google_ads_googleads_v2_services_campaign_extension_setting_service_pb.CampaignExtensionSettingOperation | undefined;
  setCampaignExtensionSettingOperation(value?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.CampaignExtensionSettingOperation): void;

  hasCampaignFeedOperation(): boolean;
  clearCampaignFeedOperation(): void;
  getCampaignFeedOperation(): google_ads_googleads_v2_services_campaign_feed_service_pb.CampaignFeedOperation | undefined;
  setCampaignFeedOperation(value?: google_ads_googleads_v2_services_campaign_feed_service_pb.CampaignFeedOperation): void;

  hasCampaignLabelOperation(): boolean;
  clearCampaignLabelOperation(): void;
  getCampaignLabelOperation(): google_ads_googleads_v2_services_campaign_label_service_pb.CampaignLabelOperation | undefined;
  setCampaignLabelOperation(value?: google_ads_googleads_v2_services_campaign_label_service_pb.CampaignLabelOperation): void;

  hasCampaignOperation(): boolean;
  clearCampaignOperation(): void;
  getCampaignOperation(): google_ads_googleads_v2_services_campaign_service_pb.CampaignOperation | undefined;
  setCampaignOperation(value?: google_ads_googleads_v2_services_campaign_service_pb.CampaignOperation): void;

  hasCampaignSharedSetOperation(): boolean;
  clearCampaignSharedSetOperation(): void;
  getCampaignSharedSetOperation(): google_ads_googleads_v2_services_campaign_shared_set_service_pb.CampaignSharedSetOperation | undefined;
  setCampaignSharedSetOperation(value?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.CampaignSharedSetOperation): void;

  hasConversionActionOperation(): boolean;
  clearConversionActionOperation(): void;
  getConversionActionOperation(): google_ads_googleads_v2_services_conversion_action_service_pb.ConversionActionOperation | undefined;
  setConversionActionOperation(value?: google_ads_googleads_v2_services_conversion_action_service_pb.ConversionActionOperation): void;

  hasCustomerExtensionSettingOperation(): boolean;
  clearCustomerExtensionSettingOperation(): void;
  getCustomerExtensionSettingOperation(): google_ads_googleads_v2_services_customer_extension_setting_service_pb.CustomerExtensionSettingOperation | undefined;
  setCustomerExtensionSettingOperation(value?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.CustomerExtensionSettingOperation): void;

  hasCustomerFeedOperation(): boolean;
  clearCustomerFeedOperation(): void;
  getCustomerFeedOperation(): google_ads_googleads_v2_services_customer_feed_service_pb.CustomerFeedOperation | undefined;
  setCustomerFeedOperation(value?: google_ads_googleads_v2_services_customer_feed_service_pb.CustomerFeedOperation): void;

  hasCustomerLabelOperation(): boolean;
  clearCustomerLabelOperation(): void;
  getCustomerLabelOperation(): google_ads_googleads_v2_services_customer_label_service_pb.CustomerLabelOperation | undefined;
  setCustomerLabelOperation(value?: google_ads_googleads_v2_services_customer_label_service_pb.CustomerLabelOperation): void;

  hasCustomerNegativeCriterionOperation(): boolean;
  clearCustomerNegativeCriterionOperation(): void;
  getCustomerNegativeCriterionOperation(): google_ads_googleads_v2_services_customer_negative_criterion_service_pb.CustomerNegativeCriterionOperation | undefined;
  setCustomerNegativeCriterionOperation(value?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.CustomerNegativeCriterionOperation): void;

  hasCustomerOperation(): boolean;
  clearCustomerOperation(): void;
  getCustomerOperation(): google_ads_googleads_v2_services_customer_service_pb.CustomerOperation | undefined;
  setCustomerOperation(value?: google_ads_googleads_v2_services_customer_service_pb.CustomerOperation): void;

  hasExtensionFeedItemOperation(): boolean;
  clearExtensionFeedItemOperation(): void;
  getExtensionFeedItemOperation(): google_ads_googleads_v2_services_extension_feed_item_service_pb.ExtensionFeedItemOperation | undefined;
  setExtensionFeedItemOperation(value?: google_ads_googleads_v2_services_extension_feed_item_service_pb.ExtensionFeedItemOperation): void;

  hasFeedItemOperation(): boolean;
  clearFeedItemOperation(): void;
  getFeedItemOperation(): google_ads_googleads_v2_services_feed_item_service_pb.FeedItemOperation | undefined;
  setFeedItemOperation(value?: google_ads_googleads_v2_services_feed_item_service_pb.FeedItemOperation): void;

  hasFeedItemTargetOperation(): boolean;
  clearFeedItemTargetOperation(): void;
  getFeedItemTargetOperation(): google_ads_googleads_v2_services_feed_item_target_service_pb.FeedItemTargetOperation | undefined;
  setFeedItemTargetOperation(value?: google_ads_googleads_v2_services_feed_item_target_service_pb.FeedItemTargetOperation): void;

  hasFeedMappingOperation(): boolean;
  clearFeedMappingOperation(): void;
  getFeedMappingOperation(): google_ads_googleads_v2_services_feed_mapping_service_pb.FeedMappingOperation | undefined;
  setFeedMappingOperation(value?: google_ads_googleads_v2_services_feed_mapping_service_pb.FeedMappingOperation): void;

  hasFeedOperation(): boolean;
  clearFeedOperation(): void;
  getFeedOperation(): google_ads_googleads_v2_services_feed_service_pb.FeedOperation | undefined;
  setFeedOperation(value?: google_ads_googleads_v2_services_feed_service_pb.FeedOperation): void;

  hasLabelOperation(): boolean;
  clearLabelOperation(): void;
  getLabelOperation(): google_ads_googleads_v2_services_label_service_pb.LabelOperation | undefined;
  setLabelOperation(value?: google_ads_googleads_v2_services_label_service_pb.LabelOperation): void;

  hasMediaFileOperation(): boolean;
  clearMediaFileOperation(): void;
  getMediaFileOperation(): google_ads_googleads_v2_services_media_file_service_pb.MediaFileOperation | undefined;
  setMediaFileOperation(value?: google_ads_googleads_v2_services_media_file_service_pb.MediaFileOperation): void;

  hasRemarketingActionOperation(): boolean;
  clearRemarketingActionOperation(): void;
  getRemarketingActionOperation(): google_ads_googleads_v2_services_remarketing_action_service_pb.RemarketingActionOperation | undefined;
  setRemarketingActionOperation(value?: google_ads_googleads_v2_services_remarketing_action_service_pb.RemarketingActionOperation): void;

  hasSharedCriterionOperation(): boolean;
  clearSharedCriterionOperation(): void;
  getSharedCriterionOperation(): google_ads_googleads_v2_services_shared_criterion_service_pb.SharedCriterionOperation | undefined;
  setSharedCriterionOperation(value?: google_ads_googleads_v2_services_shared_criterion_service_pb.SharedCriterionOperation): void;

  hasSharedSetOperation(): boolean;
  clearSharedSetOperation(): void;
  getSharedSetOperation(): google_ads_googleads_v2_services_shared_set_service_pb.SharedSetOperation | undefined;
  setSharedSetOperation(value?: google_ads_googleads_v2_services_shared_set_service_pb.SharedSetOperation): void;

  hasUserListOperation(): boolean;
  clearUserListOperation(): void;
  getUserListOperation(): google_ads_googleads_v2_services_user_list_service_pb.UserListOperation | undefined;
  setUserListOperation(value?: google_ads_googleads_v2_services_user_list_service_pb.UserListOperation): void;

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
    adGroupAdLabelOperation?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.AdGroupAdLabelOperation.AsObject,
    adGroupAdOperation?: google_ads_googleads_v2_services_ad_group_ad_service_pb.AdGroupAdOperation.AsObject,
    adGroupBidModifierOperation?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.AdGroupBidModifierOperation.AsObject,
    adGroupCriterionLabelOperation?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.AdGroupCriterionLabelOperation.AsObject,
    adGroupCriterionOperation?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.AdGroupCriterionOperation.AsObject,
    adGroupExtensionSettingOperation?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.AdGroupExtensionSettingOperation.AsObject,
    adGroupFeedOperation?: google_ads_googleads_v2_services_ad_group_feed_service_pb.AdGroupFeedOperation.AsObject,
    adGroupLabelOperation?: google_ads_googleads_v2_services_ad_group_label_service_pb.AdGroupLabelOperation.AsObject,
    adGroupOperation?: google_ads_googleads_v2_services_ad_group_service_pb.AdGroupOperation.AsObject,
    adParameterOperation?: google_ads_googleads_v2_services_ad_parameter_service_pb.AdParameterOperation.AsObject,
    assetOperation?: google_ads_googleads_v2_services_asset_service_pb.AssetOperation.AsObject,
    biddingStrategyOperation?: google_ads_googleads_v2_services_bidding_strategy_service_pb.BiddingStrategyOperation.AsObject,
    campaignBidModifierOperation?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.CampaignBidModifierOperation.AsObject,
    campaignBudgetOperation?: google_ads_googleads_v2_services_campaign_budget_service_pb.CampaignBudgetOperation.AsObject,
    campaignCriterionOperation?: google_ads_googleads_v2_services_campaign_criterion_service_pb.CampaignCriterionOperation.AsObject,
    campaignDraftOperation?: google_ads_googleads_v2_services_campaign_draft_service_pb.CampaignDraftOperation.AsObject,
    campaignExperimentOperation?: google_ads_googleads_v2_services_campaign_experiment_service_pb.CampaignExperimentOperation.AsObject,
    campaignExtensionSettingOperation?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.CampaignExtensionSettingOperation.AsObject,
    campaignFeedOperation?: google_ads_googleads_v2_services_campaign_feed_service_pb.CampaignFeedOperation.AsObject,
    campaignLabelOperation?: google_ads_googleads_v2_services_campaign_label_service_pb.CampaignLabelOperation.AsObject,
    campaignOperation?: google_ads_googleads_v2_services_campaign_service_pb.CampaignOperation.AsObject,
    campaignSharedSetOperation?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.CampaignSharedSetOperation.AsObject,
    conversionActionOperation?: google_ads_googleads_v2_services_conversion_action_service_pb.ConversionActionOperation.AsObject,
    customerExtensionSettingOperation?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.CustomerExtensionSettingOperation.AsObject,
    customerFeedOperation?: google_ads_googleads_v2_services_customer_feed_service_pb.CustomerFeedOperation.AsObject,
    customerLabelOperation?: google_ads_googleads_v2_services_customer_label_service_pb.CustomerLabelOperation.AsObject,
    customerNegativeCriterionOperation?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.CustomerNegativeCriterionOperation.AsObject,
    customerOperation?: google_ads_googleads_v2_services_customer_service_pb.CustomerOperation.AsObject,
    extensionFeedItemOperation?: google_ads_googleads_v2_services_extension_feed_item_service_pb.ExtensionFeedItemOperation.AsObject,
    feedItemOperation?: google_ads_googleads_v2_services_feed_item_service_pb.FeedItemOperation.AsObject,
    feedItemTargetOperation?: google_ads_googleads_v2_services_feed_item_target_service_pb.FeedItemTargetOperation.AsObject,
    feedMappingOperation?: google_ads_googleads_v2_services_feed_mapping_service_pb.FeedMappingOperation.AsObject,
    feedOperation?: google_ads_googleads_v2_services_feed_service_pb.FeedOperation.AsObject,
    labelOperation?: google_ads_googleads_v2_services_label_service_pb.LabelOperation.AsObject,
    mediaFileOperation?: google_ads_googleads_v2_services_media_file_service_pb.MediaFileOperation.AsObject,
    remarketingActionOperation?: google_ads_googleads_v2_services_remarketing_action_service_pb.RemarketingActionOperation.AsObject,
    sharedCriterionOperation?: google_ads_googleads_v2_services_shared_criterion_service_pb.SharedCriterionOperation.AsObject,
    sharedSetOperation?: google_ads_googleads_v2_services_shared_set_service_pb.SharedSetOperation.AsObject,
    userListOperation?: google_ads_googleads_v2_services_user_list_service_pb.UserListOperation.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    AD_GROUP_AD_LABEL_OPERATION = 17,
    AD_GROUP_AD_OPERATION = 1,
    AD_GROUP_BID_MODIFIER_OPERATION = 2,
    AD_GROUP_CRITERION_LABEL_OPERATION = 18,
    AD_GROUP_CRITERION_OPERATION = 3,
    AD_GROUP_EXTENSION_SETTING_OPERATION = 19,
    AD_GROUP_FEED_OPERATION = 20,
    AD_GROUP_LABEL_OPERATION = 21,
    AD_GROUP_OPERATION = 5,
    AD_PARAMETER_OPERATION = 22,
    ASSET_OPERATION = 23,
    BIDDING_STRATEGY_OPERATION = 6,
    CAMPAIGN_BID_MODIFIER_OPERATION = 7,
    CAMPAIGN_BUDGET_OPERATION = 8,
    CAMPAIGN_CRITERION_OPERATION = 13,
    CAMPAIGN_DRAFT_OPERATION = 24,
    CAMPAIGN_EXPERIMENT_OPERATION = 25,
    CAMPAIGN_EXTENSION_SETTING_OPERATION = 26,
    CAMPAIGN_FEED_OPERATION = 27,
    CAMPAIGN_LABEL_OPERATION = 28,
    CAMPAIGN_OPERATION = 10,
    CAMPAIGN_SHARED_SET_OPERATION = 11,
    CONVERSION_ACTION_OPERATION = 12,
    CUSTOMER_EXTENSION_SETTING_OPERATION = 30,
    CUSTOMER_FEED_OPERATION = 31,
    CUSTOMER_LABEL_OPERATION = 32,
    CUSTOMER_NEGATIVE_CRITERION_OPERATION = 34,
    CUSTOMER_OPERATION = 35,
    EXTENSION_FEED_ITEM_OPERATION = 36,
    FEED_ITEM_OPERATION = 37,
    FEED_ITEM_TARGET_OPERATION = 38,
    FEED_MAPPING_OPERATION = 39,
    FEED_OPERATION = 40,
    LABEL_OPERATION = 41,
    MEDIA_FILE_OPERATION = 42,
    REMARKETING_ACTION_OPERATION = 43,
    SHARED_CRITERION_OPERATION = 14,
    SHARED_SET_OPERATION = 15,
    USER_LIST_OPERATION = 16,
  }
}

export class MutateOperationResponse extends jspb.Message {
  hasAdGroupAdLabelResult(): boolean;
  clearAdGroupAdLabelResult(): void;
  getAdGroupAdLabelResult(): google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelResult | undefined;
  setAdGroupAdLabelResult(value?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelResult): void;

  hasAdGroupAdResult(): boolean;
  clearAdGroupAdResult(): void;
  getAdGroupAdResult(): google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdResult | undefined;
  setAdGroupAdResult(value?: google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdResult): void;

  hasAdGroupBidModifierResult(): boolean;
  clearAdGroupBidModifierResult(): void;
  getAdGroupBidModifierResult(): google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult | undefined;
  setAdGroupBidModifierResult(value?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult): void;

  hasAdGroupCriterionLabelResult(): boolean;
  clearAdGroupCriterionLabelResult(): void;
  getAdGroupCriterionLabelResult(): google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelResult | undefined;
  setAdGroupCriterionLabelResult(value?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelResult): void;

  hasAdGroupCriterionResult(): boolean;
  clearAdGroupCriterionResult(): void;
  getAdGroupCriterionResult(): google_ads_googleads_v2_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult | undefined;
  setAdGroupCriterionResult(value?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult): void;

  hasAdGroupExtensionSettingResult(): boolean;
  clearAdGroupExtensionSettingResult(): void;
  getAdGroupExtensionSettingResult(): google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingResult | undefined;
  setAdGroupExtensionSettingResult(value?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingResult): void;

  hasAdGroupFeedResult(): boolean;
  clearAdGroupFeedResult(): void;
  getAdGroupFeedResult(): google_ads_googleads_v2_services_ad_group_feed_service_pb.MutateAdGroupFeedResult | undefined;
  setAdGroupFeedResult(value?: google_ads_googleads_v2_services_ad_group_feed_service_pb.MutateAdGroupFeedResult): void;

  hasAdGroupLabelResult(): boolean;
  clearAdGroupLabelResult(): void;
  getAdGroupLabelResult(): google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelResult | undefined;
  setAdGroupLabelResult(value?: google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelResult): void;

  hasAdGroupResult(): boolean;
  clearAdGroupResult(): void;
  getAdGroupResult(): google_ads_googleads_v2_services_ad_group_service_pb.MutateAdGroupResult | undefined;
  setAdGroupResult(value?: google_ads_googleads_v2_services_ad_group_service_pb.MutateAdGroupResult): void;

  hasAdParameterResult(): boolean;
  clearAdParameterResult(): void;
  getAdParameterResult(): google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParameterResult | undefined;
  setAdParameterResult(value?: google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParameterResult): void;

  hasAssetResult(): boolean;
  clearAssetResult(): void;
  getAssetResult(): google_ads_googleads_v2_services_asset_service_pb.MutateAssetResult | undefined;
  setAssetResult(value?: google_ads_googleads_v2_services_asset_service_pb.MutateAssetResult): void;

  hasBiddingStrategyResult(): boolean;
  clearBiddingStrategyResult(): void;
  getBiddingStrategyResult(): google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategyResult | undefined;
  setBiddingStrategyResult(value?: google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategyResult): void;

  hasCampaignBidModifierResult(): boolean;
  clearCampaignBidModifierResult(): void;
  getCampaignBidModifierResult(): google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult | undefined;
  setCampaignBidModifierResult(value?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult): void;

  hasCampaignBudgetResult(): boolean;
  clearCampaignBudgetResult(): void;
  getCampaignBudgetResult(): google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetResult | undefined;
  setCampaignBudgetResult(value?: google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetResult): void;

  hasCampaignCriterionResult(): boolean;
  clearCampaignCriterionResult(): void;
  getCampaignCriterionResult(): google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriterionResult | undefined;
  setCampaignCriterionResult(value?: google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriterionResult): void;

  hasCampaignDraftResult(): boolean;
  clearCampaignDraftResult(): void;
  getCampaignDraftResult(): google_ads_googleads_v2_services_campaign_draft_service_pb.MutateCampaignDraftResult | undefined;
  setCampaignDraftResult(value?: google_ads_googleads_v2_services_campaign_draft_service_pb.MutateCampaignDraftResult): void;

  hasCampaignExperimentResult(): boolean;
  clearCampaignExperimentResult(): void;
  getCampaignExperimentResult(): google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentResult | undefined;
  setCampaignExperimentResult(value?: google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentResult): void;

  hasCampaignExtensionSettingResult(): boolean;
  clearCampaignExtensionSettingResult(): void;
  getCampaignExtensionSettingResult(): google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingResult | undefined;
  setCampaignExtensionSettingResult(value?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingResult): void;

  hasCampaignFeedResult(): boolean;
  clearCampaignFeedResult(): void;
  getCampaignFeedResult(): google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedResult | undefined;
  setCampaignFeedResult(value?: google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedResult): void;

  hasCampaignLabelResult(): boolean;
  clearCampaignLabelResult(): void;
  getCampaignLabelResult(): google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelResult | undefined;
  setCampaignLabelResult(value?: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelResult): void;

  hasCampaignResult(): boolean;
  clearCampaignResult(): void;
  getCampaignResult(): google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignResult | undefined;
  setCampaignResult(value?: google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignResult): void;

  hasCampaignSharedSetResult(): boolean;
  clearCampaignSharedSetResult(): void;
  getCampaignSharedSetResult(): google_ads_googleads_v2_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult | undefined;
  setCampaignSharedSetResult(value?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult): void;

  hasConversionActionResult(): boolean;
  clearConversionActionResult(): void;
  getConversionActionResult(): google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionResult | undefined;
  setConversionActionResult(value?: google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionResult): void;

  hasCustomerExtensionSettingResult(): boolean;
  clearCustomerExtensionSettingResult(): void;
  getCustomerExtensionSettingResult(): google_ads_googleads_v2_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingResult | undefined;
  setCustomerExtensionSettingResult(value?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingResult): void;

  hasCustomerFeedResult(): boolean;
  clearCustomerFeedResult(): void;
  getCustomerFeedResult(): google_ads_googleads_v2_services_customer_feed_service_pb.MutateCustomerFeedResult | undefined;
  setCustomerFeedResult(value?: google_ads_googleads_v2_services_customer_feed_service_pb.MutateCustomerFeedResult): void;

  hasCustomerLabelResult(): boolean;
  clearCustomerLabelResult(): void;
  getCustomerLabelResult(): google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelResult | undefined;
  setCustomerLabelResult(value?: google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelResult): void;

  hasCustomerNegativeCriterionResult(): boolean;
  clearCustomerNegativeCriterionResult(): void;
  getCustomerNegativeCriterionResult(): google_ads_googleads_v2_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResult | undefined;
  setCustomerNegativeCriterionResult(value?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResult): void;

  hasCustomerResult(): boolean;
  clearCustomerResult(): void;
  getCustomerResult(): google_ads_googleads_v2_services_customer_service_pb.MutateCustomerResult | undefined;
  setCustomerResult(value?: google_ads_googleads_v2_services_customer_service_pb.MutateCustomerResult): void;

  hasExtensionFeedItemResult(): boolean;
  clearExtensionFeedItemResult(): void;
  getExtensionFeedItemResult(): google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemResult | undefined;
  setExtensionFeedItemResult(value?: google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemResult): void;

  hasFeedItemResult(): boolean;
  clearFeedItemResult(): void;
  getFeedItemResult(): google_ads_googleads_v2_services_feed_item_service_pb.MutateFeedItemResult | undefined;
  setFeedItemResult(value?: google_ads_googleads_v2_services_feed_item_service_pb.MutateFeedItemResult): void;

  hasFeedItemTargetResult(): boolean;
  clearFeedItemTargetResult(): void;
  getFeedItemTargetResult(): google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetResult | undefined;
  setFeedItemTargetResult(value?: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetResult): void;

  hasFeedMappingResult(): boolean;
  clearFeedMappingResult(): void;
  getFeedMappingResult(): google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingResult | undefined;
  setFeedMappingResult(value?: google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingResult): void;

  hasFeedResult(): boolean;
  clearFeedResult(): void;
  getFeedResult(): google_ads_googleads_v2_services_feed_service_pb.MutateFeedResult | undefined;
  setFeedResult(value?: google_ads_googleads_v2_services_feed_service_pb.MutateFeedResult): void;

  hasLabelResult(): boolean;
  clearLabelResult(): void;
  getLabelResult(): google_ads_googleads_v2_services_label_service_pb.MutateLabelResult | undefined;
  setLabelResult(value?: google_ads_googleads_v2_services_label_service_pb.MutateLabelResult): void;

  hasMediaFileResult(): boolean;
  clearMediaFileResult(): void;
  getMediaFileResult(): google_ads_googleads_v2_services_media_file_service_pb.MutateMediaFileResult | undefined;
  setMediaFileResult(value?: google_ads_googleads_v2_services_media_file_service_pb.MutateMediaFileResult): void;

  hasRemarketingActionResult(): boolean;
  clearRemarketingActionResult(): void;
  getRemarketingActionResult(): google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionResult | undefined;
  setRemarketingActionResult(value?: google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionResult): void;

  hasSharedCriterionResult(): boolean;
  clearSharedCriterionResult(): void;
  getSharedCriterionResult(): google_ads_googleads_v2_services_shared_criterion_service_pb.MutateSharedCriterionResult | undefined;
  setSharedCriterionResult(value?: google_ads_googleads_v2_services_shared_criterion_service_pb.MutateSharedCriterionResult): void;

  hasSharedSetResult(): boolean;
  clearSharedSetResult(): void;
  getSharedSetResult(): google_ads_googleads_v2_services_shared_set_service_pb.MutateSharedSetResult | undefined;
  setSharedSetResult(value?: google_ads_googleads_v2_services_shared_set_service_pb.MutateSharedSetResult): void;

  hasUserListResult(): boolean;
  clearUserListResult(): void;
  getUserListResult(): google_ads_googleads_v2_services_user_list_service_pb.MutateUserListResult | undefined;
  setUserListResult(value?: google_ads_googleads_v2_services_user_list_service_pb.MutateUserListResult): void;

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
    adGroupAdLabelResult?: google_ads_googleads_v2_services_ad_group_ad_label_service_pb.MutateAdGroupAdLabelResult.AsObject,
    adGroupAdResult?: google_ads_googleads_v2_services_ad_group_ad_service_pb.MutateAdGroupAdResult.AsObject,
    adGroupBidModifierResult?: google_ads_googleads_v2_services_ad_group_bid_modifier_service_pb.MutateAdGroupBidModifierResult.AsObject,
    adGroupCriterionLabelResult?: google_ads_googleads_v2_services_ad_group_criterion_label_service_pb.MutateAdGroupCriterionLabelResult.AsObject,
    adGroupCriterionResult?: google_ads_googleads_v2_services_ad_group_criterion_service_pb.MutateAdGroupCriterionResult.AsObject,
    adGroupExtensionSettingResult?: google_ads_googleads_v2_services_ad_group_extension_setting_service_pb.MutateAdGroupExtensionSettingResult.AsObject,
    adGroupFeedResult?: google_ads_googleads_v2_services_ad_group_feed_service_pb.MutateAdGroupFeedResult.AsObject,
    adGroupLabelResult?: google_ads_googleads_v2_services_ad_group_label_service_pb.MutateAdGroupLabelResult.AsObject,
    adGroupResult?: google_ads_googleads_v2_services_ad_group_service_pb.MutateAdGroupResult.AsObject,
    adParameterResult?: google_ads_googleads_v2_services_ad_parameter_service_pb.MutateAdParameterResult.AsObject,
    assetResult?: google_ads_googleads_v2_services_asset_service_pb.MutateAssetResult.AsObject,
    biddingStrategyResult?: google_ads_googleads_v2_services_bidding_strategy_service_pb.MutateBiddingStrategyResult.AsObject,
    campaignBidModifierResult?: google_ads_googleads_v2_services_campaign_bid_modifier_service_pb.MutateCampaignBidModifierResult.AsObject,
    campaignBudgetResult?: google_ads_googleads_v2_services_campaign_budget_service_pb.MutateCampaignBudgetResult.AsObject,
    campaignCriterionResult?: google_ads_googleads_v2_services_campaign_criterion_service_pb.MutateCampaignCriterionResult.AsObject,
    campaignDraftResult?: google_ads_googleads_v2_services_campaign_draft_service_pb.MutateCampaignDraftResult.AsObject,
    campaignExperimentResult?: google_ads_googleads_v2_services_campaign_experiment_service_pb.MutateCampaignExperimentResult.AsObject,
    campaignExtensionSettingResult?: google_ads_googleads_v2_services_campaign_extension_setting_service_pb.MutateCampaignExtensionSettingResult.AsObject,
    campaignFeedResult?: google_ads_googleads_v2_services_campaign_feed_service_pb.MutateCampaignFeedResult.AsObject,
    campaignLabelResult?: google_ads_googleads_v2_services_campaign_label_service_pb.MutateCampaignLabelResult.AsObject,
    campaignResult?: google_ads_googleads_v2_services_campaign_service_pb.MutateCampaignResult.AsObject,
    campaignSharedSetResult?: google_ads_googleads_v2_services_campaign_shared_set_service_pb.MutateCampaignSharedSetResult.AsObject,
    conversionActionResult?: google_ads_googleads_v2_services_conversion_action_service_pb.MutateConversionActionResult.AsObject,
    customerExtensionSettingResult?: google_ads_googleads_v2_services_customer_extension_setting_service_pb.MutateCustomerExtensionSettingResult.AsObject,
    customerFeedResult?: google_ads_googleads_v2_services_customer_feed_service_pb.MutateCustomerFeedResult.AsObject,
    customerLabelResult?: google_ads_googleads_v2_services_customer_label_service_pb.MutateCustomerLabelResult.AsObject,
    customerNegativeCriterionResult?: google_ads_googleads_v2_services_customer_negative_criterion_service_pb.MutateCustomerNegativeCriteriaResult.AsObject,
    customerResult?: google_ads_googleads_v2_services_customer_service_pb.MutateCustomerResult.AsObject,
    extensionFeedItemResult?: google_ads_googleads_v2_services_extension_feed_item_service_pb.MutateExtensionFeedItemResult.AsObject,
    feedItemResult?: google_ads_googleads_v2_services_feed_item_service_pb.MutateFeedItemResult.AsObject,
    feedItemTargetResult?: google_ads_googleads_v2_services_feed_item_target_service_pb.MutateFeedItemTargetResult.AsObject,
    feedMappingResult?: google_ads_googleads_v2_services_feed_mapping_service_pb.MutateFeedMappingResult.AsObject,
    feedResult?: google_ads_googleads_v2_services_feed_service_pb.MutateFeedResult.AsObject,
    labelResult?: google_ads_googleads_v2_services_label_service_pb.MutateLabelResult.AsObject,
    mediaFileResult?: google_ads_googleads_v2_services_media_file_service_pb.MutateMediaFileResult.AsObject,
    remarketingActionResult?: google_ads_googleads_v2_services_remarketing_action_service_pb.MutateRemarketingActionResult.AsObject,
    sharedCriterionResult?: google_ads_googleads_v2_services_shared_criterion_service_pb.MutateSharedCriterionResult.AsObject,
    sharedSetResult?: google_ads_googleads_v2_services_shared_set_service_pb.MutateSharedSetResult.AsObject,
    userListResult?: google_ads_googleads_v2_services_user_list_service_pb.MutateUserListResult.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    AD_GROUP_AD_LABEL_RESULT = 17,
    AD_GROUP_AD_RESULT = 1,
    AD_GROUP_BID_MODIFIER_RESULT = 2,
    AD_GROUP_CRITERION_LABEL_RESULT = 18,
    AD_GROUP_CRITERION_RESULT = 3,
    AD_GROUP_EXTENSION_SETTING_RESULT = 19,
    AD_GROUP_FEED_RESULT = 20,
    AD_GROUP_LABEL_RESULT = 21,
    AD_GROUP_RESULT = 5,
    AD_PARAMETER_RESULT = 22,
    ASSET_RESULT = 23,
    BIDDING_STRATEGY_RESULT = 6,
    CAMPAIGN_BID_MODIFIER_RESULT = 7,
    CAMPAIGN_BUDGET_RESULT = 8,
    CAMPAIGN_CRITERION_RESULT = 13,
    CAMPAIGN_DRAFT_RESULT = 24,
    CAMPAIGN_EXPERIMENT_RESULT = 25,
    CAMPAIGN_EXTENSION_SETTING_RESULT = 26,
    CAMPAIGN_FEED_RESULT = 27,
    CAMPAIGN_LABEL_RESULT = 28,
    CAMPAIGN_RESULT = 10,
    CAMPAIGN_SHARED_SET_RESULT = 11,
    CONVERSION_ACTION_RESULT = 12,
    CUSTOMER_EXTENSION_SETTING_RESULT = 30,
    CUSTOMER_FEED_RESULT = 31,
    CUSTOMER_LABEL_RESULT = 32,
    CUSTOMER_NEGATIVE_CRITERION_RESULT = 34,
    CUSTOMER_RESULT = 35,
    EXTENSION_FEED_ITEM_RESULT = 36,
    FEED_ITEM_RESULT = 37,
    FEED_ITEM_TARGET_RESULT = 38,
    FEED_MAPPING_RESULT = 39,
    FEED_RESULT = 40,
    LABEL_RESULT = 41,
    MEDIA_FILE_RESULT = 42,
    REMARKETING_ACTION_RESULT = 43,
    SHARED_CRITERION_RESULT = 14,
    SHARED_SET_RESULT = 15,
    USER_LIST_RESULT = 16,
  }
}

