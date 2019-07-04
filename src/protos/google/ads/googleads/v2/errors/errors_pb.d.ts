// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/errors.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_policy_pb from "../../../../../google/ads/googleads/v2/common/policy_pb";
import * as google_ads_googleads_v2_common_value_pb from "../../../../../google/ads/googleads/v2/common/value_pb";
import * as google_ads_googleads_v2_errors_access_invitation_error_pb from "../../../../../google/ads/googleads/v2/errors/access_invitation_error_pb";
import * as google_ads_googleads_v2_errors_account_budget_proposal_error_pb from "../../../../../google/ads/googleads/v2/errors/account_budget_proposal_error_pb";
import * as google_ads_googleads_v2_errors_ad_customizer_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_customizer_error_pb";
import * as google_ads_googleads_v2_errors_ad_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_ad_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_ad_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_bid_modifier_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_criterion_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_error_pb";
import * as google_ads_googleads_v2_errors_ad_group_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_group_feed_error_pb";
import * as google_ads_googleads_v2_errors_ad_parameter_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_parameter_error_pb";
import * as google_ads_googleads_v2_errors_ad_sharing_error_pb from "../../../../../google/ads/googleads/v2/errors/ad_sharing_error_pb";
import * as google_ads_googleads_v2_errors_adx_error_pb from "../../../../../google/ads/googleads/v2/errors/adx_error_pb";
import * as google_ads_googleads_v2_errors_asset_error_pb from "../../../../../google/ads/googleads/v2/errors/asset_error_pb";
import * as google_ads_googleads_v2_errors_authentication_error_pb from "../../../../../google/ads/googleads/v2/errors/authentication_error_pb";
import * as google_ads_googleads_v2_errors_authorization_error_pb from "../../../../../google/ads/googleads/v2/errors/authorization_error_pb";
import * as google_ads_googleads_v2_errors_bidding_error_pb from "../../../../../google/ads/googleads/v2/errors/bidding_error_pb";
import * as google_ads_googleads_v2_errors_bidding_strategy_error_pb from "../../../../../google/ads/googleads/v2/errors/bidding_strategy_error_pb";
import * as google_ads_googleads_v2_errors_billing_setup_error_pb from "../../../../../google/ads/googleads/v2/errors/billing_setup_error_pb";
import * as google_ads_googleads_v2_errors_campaign_budget_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_budget_error_pb";
import * as google_ads_googleads_v2_errors_campaign_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_criterion_error_pb";
import * as google_ads_googleads_v2_errors_campaign_draft_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_draft_error_pb";
import * as google_ads_googleads_v2_errors_campaign_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_error_pb";
import * as google_ads_googleads_v2_errors_campaign_experiment_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_experiment_error_pb";
import * as google_ads_googleads_v2_errors_campaign_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_feed_error_pb";
import * as google_ads_googleads_v2_errors_campaign_shared_set_error_pb from "../../../../../google/ads/googleads/v2/errors/campaign_shared_set_error_pb";
import * as google_ads_googleads_v2_errors_change_status_error_pb from "../../../../../google/ads/googleads/v2/errors/change_status_error_pb";
import * as google_ads_googleads_v2_errors_collection_size_error_pb from "../../../../../google/ads/googleads/v2/errors/collection_size_error_pb";
import * as google_ads_googleads_v2_errors_context_error_pb from "../../../../../google/ads/googleads/v2/errors/context_error_pb";
import * as google_ads_googleads_v2_errors_conversion_action_error_pb from "../../../../../google/ads/googleads/v2/errors/conversion_action_error_pb";
import * as google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb from "../../../../../google/ads/googleads/v2/errors/conversion_adjustment_upload_error_pb";
import * as google_ads_googleads_v2_errors_conversion_upload_error_pb from "../../../../../google/ads/googleads/v2/errors/conversion_upload_error_pb";
import * as google_ads_googleads_v2_errors_country_code_error_pb from "../../../../../google/ads/googleads/v2/errors/country_code_error_pb";
import * as google_ads_googleads_v2_errors_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/criterion_error_pb";
import * as google_ads_googleads_v2_errors_currency_code_error_pb from "../../../../../google/ads/googleads/v2/errors/currency_code_error_pb";
import * as google_ads_googleads_v2_errors_custom_interest_error_pb from "../../../../../google/ads/googleads/v2/errors/custom_interest_error_pb";
import * as google_ads_googleads_v2_errors_customer_client_link_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_client_link_error_pb";
import * as google_ads_googleads_v2_errors_customer_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_error_pb";
import * as google_ads_googleads_v2_errors_customer_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_feed_error_pb";
import * as google_ads_googleads_v2_errors_customer_manager_link_error_pb from "../../../../../google/ads/googleads/v2/errors/customer_manager_link_error_pb";
import * as google_ads_googleads_v2_errors_database_error_pb from "../../../../../google/ads/googleads/v2/errors/database_error_pb";
import * as google_ads_googleads_v2_errors_date_error_pb from "../../../../../google/ads/googleads/v2/errors/date_error_pb";
import * as google_ads_googleads_v2_errors_date_range_error_pb from "../../../../../google/ads/googleads/v2/errors/date_range_error_pb";
import * as google_ads_googleads_v2_errors_distinct_error_pb from "../../../../../google/ads/googleads/v2/errors/distinct_error_pb";
import * as google_ads_googleads_v2_errors_enum_error_pb from "../../../../../google/ads/googleads/v2/errors/enum_error_pb";
import * as google_ads_googleads_v2_errors_extension_feed_item_error_pb from "../../../../../google/ads/googleads/v2/errors/extension_feed_item_error_pb";
import * as google_ads_googleads_v2_errors_extension_setting_error_pb from "../../../../../google/ads/googleads/v2/errors/extension_setting_error_pb";
import * as google_ads_googleads_v2_errors_feed_attribute_reference_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_attribute_reference_error_pb";
import * as google_ads_googleads_v2_errors_feed_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_error_pb";
import * as google_ads_googleads_v2_errors_feed_item_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_item_error_pb";
import * as google_ads_googleads_v2_errors_feed_item_target_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_item_target_error_pb";
import * as google_ads_googleads_v2_errors_feed_item_validation_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_item_validation_error_pb";
import * as google_ads_googleads_v2_errors_feed_mapping_error_pb from "../../../../../google/ads/googleads/v2/errors/feed_mapping_error_pb";
import * as google_ads_googleads_v2_errors_field_error_pb from "../../../../../google/ads/googleads/v2/errors/field_error_pb";
import * as google_ads_googleads_v2_errors_field_mask_error_pb from "../../../../../google/ads/googleads/v2/errors/field_mask_error_pb";
import * as google_ads_googleads_v2_errors_function_error_pb from "../../../../../google/ads/googleads/v2/errors/function_error_pb";
import * as google_ads_googleads_v2_errors_function_parsing_error_pb from "../../../../../google/ads/googleads/v2/errors/function_parsing_error_pb";
import * as google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb from "../../../../../google/ads/googleads/v2/errors/geo_target_constant_suggestion_error_pb";
import * as google_ads_googleads_v2_errors_header_error_pb from "../../../../../google/ads/googleads/v2/errors/header_error_pb";
import * as google_ads_googleads_v2_errors_id_error_pb from "../../../../../google/ads/googleads/v2/errors/id_error_pb";
import * as google_ads_googleads_v2_errors_image_error_pb from "../../../../../google/ads/googleads/v2/errors/image_error_pb";
import * as google_ads_googleads_v2_errors_internal_error_pb from "../../../../../google/ads/googleads/v2/errors/internal_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_ad_group_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_campaign_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_idea_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_idea_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_keyword_error_pb";
import * as google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb from "../../../../../google/ads/googleads/v2/errors/keyword_plan_negative_keyword_error_pb";
import * as google_ads_googleads_v2_errors_label_error_pb from "../../../../../google/ads/googleads/v2/errors/label_error_pb";
import * as google_ads_googleads_v2_errors_language_code_error_pb from "../../../../../google/ads/googleads/v2/errors/language_code_error_pb";
import * as google_ads_googleads_v2_errors_list_operation_error_pb from "../../../../../google/ads/googleads/v2/errors/list_operation_error_pb";
import * as google_ads_googleads_v2_errors_manager_link_error_pb from "../../../../../google/ads/googleads/v2/errors/manager_link_error_pb";
import * as google_ads_googleads_v2_errors_media_bundle_error_pb from "../../../../../google/ads/googleads/v2/errors/media_bundle_error_pb";
import * as google_ads_googleads_v2_errors_media_file_error_pb from "../../../../../google/ads/googleads/v2/errors/media_file_error_pb";
import * as google_ads_googleads_v2_errors_media_upload_error_pb from "../../../../../google/ads/googleads/v2/errors/media_upload_error_pb";
import * as google_ads_googleads_v2_errors_multiplier_error_pb from "../../../../../google/ads/googleads/v2/errors/multiplier_error_pb";
import * as google_ads_googleads_v2_errors_mutate_error_pb from "../../../../../google/ads/googleads/v2/errors/mutate_error_pb";
import * as google_ads_googleads_v2_errors_mutate_job_error_pb from "../../../../../google/ads/googleads/v2/errors/mutate_job_error_pb";
import * as google_ads_googleads_v2_errors_new_resource_creation_error_pb from "../../../../../google/ads/googleads/v2/errors/new_resource_creation_error_pb";
import * as google_ads_googleads_v2_errors_not_empty_error_pb from "../../../../../google/ads/googleads/v2/errors/not_empty_error_pb";
import * as google_ads_googleads_v2_errors_not_whitelisted_error_pb from "../../../../../google/ads/googleads/v2/errors/not_whitelisted_error_pb";
import * as google_ads_googleads_v2_errors_null_error_pb from "../../../../../google/ads/googleads/v2/errors/null_error_pb";
import * as google_ads_googleads_v2_errors_operation_access_denied_error_pb from "../../../../../google/ads/googleads/v2/errors/operation_access_denied_error_pb";
import * as google_ads_googleads_v2_errors_operator_error_pb from "../../../../../google/ads/googleads/v2/errors/operator_error_pb";
import * as google_ads_googleads_v2_errors_partial_failure_error_pb from "../../../../../google/ads/googleads/v2/errors/partial_failure_error_pb";
import * as google_ads_googleads_v2_errors_policy_finding_error_pb from "../../../../../google/ads/googleads/v2/errors/policy_finding_error_pb";
import * as google_ads_googleads_v2_errors_policy_validation_parameter_error_pb from "../../../../../google/ads/googleads/v2/errors/policy_validation_parameter_error_pb";
import * as google_ads_googleads_v2_errors_policy_violation_error_pb from "../../../../../google/ads/googleads/v2/errors/policy_violation_error_pb";
import * as google_ads_googleads_v2_errors_query_error_pb from "../../../../../google/ads/googleads/v2/errors/query_error_pb";
import * as google_ads_googleads_v2_errors_quota_error_pb from "../../../../../google/ads/googleads/v2/errors/quota_error_pb";
import * as google_ads_googleads_v2_errors_range_error_pb from "../../../../../google/ads/googleads/v2/errors/range_error_pb";
import * as google_ads_googleads_v2_errors_recommendation_error_pb from "../../../../../google/ads/googleads/v2/errors/recommendation_error_pb";
import * as google_ads_googleads_v2_errors_region_code_error_pb from "../../../../../google/ads/googleads/v2/errors/region_code_error_pb";
import * as google_ads_googleads_v2_errors_request_error_pb from "../../../../../google/ads/googleads/v2/errors/request_error_pb";
import * as google_ads_googleads_v2_errors_resource_access_denied_error_pb from "../../../../../google/ads/googleads/v2/errors/resource_access_denied_error_pb";
import * as google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb from "../../../../../google/ads/googleads/v2/errors/resource_count_limit_exceeded_error_pb";
import * as google_ads_googleads_v2_errors_setting_error_pb from "../../../../../google/ads/googleads/v2/errors/setting_error_pb";
import * as google_ads_googleads_v2_errors_shared_criterion_error_pb from "../../../../../google/ads/googleads/v2/errors/shared_criterion_error_pb";
import * as google_ads_googleads_v2_errors_shared_set_error_pb from "../../../../../google/ads/googleads/v2/errors/shared_set_error_pb";
import * as google_ads_googleads_v2_errors_size_limit_error_pb from "../../../../../google/ads/googleads/v2/errors/size_limit_error_pb";
import * as google_ads_googleads_v2_errors_string_format_error_pb from "../../../../../google/ads/googleads/v2/errors/string_format_error_pb";
import * as google_ads_googleads_v2_errors_string_length_error_pb from "../../../../../google/ads/googleads/v2/errors/string_length_error_pb";
import * as google_ads_googleads_v2_errors_url_field_error_pb from "../../../../../google/ads/googleads/v2/errors/url_field_error_pb";
import * as google_ads_googleads_v2_errors_user_list_error_pb from "../../../../../google/ads/googleads/v2/errors/user_list_error_pb";
import * as google_ads_googleads_v2_errors_youtube_video_registration_error_pb from "../../../../../google/ads/googleads/v2/errors/youtube_video_registration_error_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GoogleAdsFailure extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<GoogleAdsError>;
  setErrorsList(value: Array<GoogleAdsError>): void;
  addErrors(value?: GoogleAdsError, index?: number): GoogleAdsError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsFailure.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsFailure): GoogleAdsFailure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsFailure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsFailure;
  static deserializeBinaryFromReader(message: GoogleAdsFailure, reader: jspb.BinaryReader): GoogleAdsFailure;
}

export namespace GoogleAdsFailure {
  export type AsObject = {
    errorsList: Array<GoogleAdsError.AsObject>,
  }
}

export class GoogleAdsError extends jspb.Message {
  hasErrorCode(): boolean;
  clearErrorCode(): void;
  getErrorCode(): ErrorCode | undefined;
  setErrorCode(value?: ErrorCode): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasTrigger(): boolean;
  clearTrigger(): void;
  getTrigger(): google_ads_googleads_v2_common_value_pb.Value | undefined;
  setTrigger(value?: google_ads_googleads_v2_common_value_pb.Value): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): ErrorLocation | undefined;
  setLocation(value?: ErrorLocation): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): ErrorDetails | undefined;
  setDetails(value?: ErrorDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsError.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsError): GoogleAdsError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsError;
  static deserializeBinaryFromReader(message: GoogleAdsError, reader: jspb.BinaryReader): GoogleAdsError;
}

export namespace GoogleAdsError {
  export type AsObject = {
    errorCode?: ErrorCode.AsObject,
    message: string,
    trigger?: google_ads_googleads_v2_common_value_pb.Value.AsObject,
    location?: ErrorLocation.AsObject,
    details?: ErrorDetails.AsObject,
  }
}

export class ErrorCode extends jspb.Message {
  hasRequestError(): boolean;
  clearRequestError(): void;
  getRequestError(): google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestError;
  setRequestError(value: google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestError): void;

  hasBiddingStrategyError(): boolean;
  clearBiddingStrategyError(): void;
  getBiddingStrategyError(): google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyError;
  setBiddingStrategyError(value: google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyError): void;

  hasUrlFieldError(): boolean;
  clearUrlFieldError(): void;
  getUrlFieldError(): google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldError;
  setUrlFieldError(value: google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldError): void;

  hasListOperationError(): boolean;
  clearListOperationError(): void;
  getListOperationError(): google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationError;
  setListOperationError(value: google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationError): void;

  hasQueryError(): boolean;
  clearQueryError(): void;
  getQueryError(): google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryError;
  setQueryError(value: google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryError): void;

  hasMutateError(): boolean;
  clearMutateError(): void;
  getMutateError(): google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateError;
  setMutateError(value: google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateError): void;

  hasFieldMaskError(): boolean;
  clearFieldMaskError(): void;
  getFieldMaskError(): google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskError;
  setFieldMaskError(value: google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskError): void;

  hasAuthorizationError(): boolean;
  clearAuthorizationError(): void;
  getAuthorizationError(): google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationError;
  setAuthorizationError(value: google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationError): void;

  hasInternalError(): boolean;
  clearInternalError(): void;
  getInternalError(): google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalError;
  setInternalError(value: google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalError): void;

  hasQuotaError(): boolean;
  clearQuotaError(): void;
  getQuotaError(): google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaError;
  setQuotaError(value: google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaError): void;

  hasAdError(): boolean;
  clearAdError(): void;
  getAdError(): google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdError;
  setAdError(value: google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdError): void;

  hasAdGroupError(): boolean;
  clearAdGroupError(): void;
  getAdGroupError(): google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupError;
  setAdGroupError(value: google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupError): void;

  hasCampaignBudgetError(): boolean;
  clearCampaignBudgetError(): void;
  getCampaignBudgetError(): google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetError;
  setCampaignBudgetError(value: google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetError): void;

  hasCampaignError(): boolean;
  clearCampaignError(): void;
  getCampaignError(): google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignError;
  setCampaignError(value: google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignError): void;

  hasAuthenticationError(): boolean;
  clearAuthenticationError(): void;
  getAuthenticationError(): google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationError;
  setAuthenticationError(value: google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationError): void;

  hasAdGroupCriterionError(): boolean;
  clearAdGroupCriterionError(): void;
  getAdGroupCriterionError(): google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionError;
  setAdGroupCriterionError(value: google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionError): void;

  hasAdCustomizerError(): boolean;
  clearAdCustomizerError(): void;
  getAdCustomizerError(): google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerError;
  setAdCustomizerError(value: google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerError): void;

  hasAdGroupAdError(): boolean;
  clearAdGroupAdError(): void;
  getAdGroupAdError(): google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdError;
  setAdGroupAdError(value: google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdError): void;

  hasAdSharingError(): boolean;
  clearAdSharingError(): void;
  getAdSharingError(): google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingError;
  setAdSharingError(value: google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingError): void;

  hasAdxError(): boolean;
  clearAdxError(): void;
  getAdxError(): google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxError;
  setAdxError(value: google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxError): void;

  hasAssetError(): boolean;
  clearAssetError(): void;
  getAssetError(): google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetError;
  setAssetError(value: google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetError): void;

  hasBiddingError(): boolean;
  clearBiddingError(): void;
  getBiddingError(): google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingError;
  setBiddingError(value: google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingError): void;

  hasCampaignCriterionError(): boolean;
  clearCampaignCriterionError(): void;
  getCampaignCriterionError(): google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionError;
  setCampaignCriterionError(value: google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionError): void;

  hasCollectionSizeError(): boolean;
  clearCollectionSizeError(): void;
  getCollectionSizeError(): google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeError;
  setCollectionSizeError(value: google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeError): void;

  hasCountryCodeError(): boolean;
  clearCountryCodeError(): void;
  getCountryCodeError(): google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeError;
  setCountryCodeError(value: google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeError): void;

  hasCriterionError(): boolean;
  clearCriterionError(): void;
  getCriterionError(): google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionError;
  setCriterionError(value: google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionError): void;

  hasCustomerError(): boolean;
  clearCustomerError(): void;
  getCustomerError(): google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerError;
  setCustomerError(value: google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerError): void;

  hasDateError(): boolean;
  clearDateError(): void;
  getDateError(): google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateError;
  setDateError(value: google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateError): void;

  hasDateRangeError(): boolean;
  clearDateRangeError(): void;
  getDateRangeError(): google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeError;
  setDateRangeError(value: google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeError): void;

  hasDistinctError(): boolean;
  clearDistinctError(): void;
  getDistinctError(): google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctError;
  setDistinctError(value: google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctError): void;

  hasFeedAttributeReferenceError(): boolean;
  clearFeedAttributeReferenceError(): void;
  getFeedAttributeReferenceError(): google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError;
  setFeedAttributeReferenceError(value: google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError): void;

  hasFunctionError(): boolean;
  clearFunctionError(): void;
  getFunctionError(): google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionError;
  setFunctionError(value: google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionError): void;

  hasFunctionParsingError(): boolean;
  clearFunctionParsingError(): void;
  getFunctionParsingError(): google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingError;
  setFunctionParsingError(value: google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingError): void;

  hasIdError(): boolean;
  clearIdError(): void;
  getIdError(): google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdError;
  setIdError(value: google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdError): void;

  hasImageError(): boolean;
  clearImageError(): void;
  getImageError(): google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageError;
  setImageError(value: google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageError): void;

  hasLanguageCodeError(): boolean;
  clearLanguageCodeError(): void;
  getLanguageCodeError(): google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeError;
  setLanguageCodeError(value: google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeError): void;

  hasMediaBundleError(): boolean;
  clearMediaBundleError(): void;
  getMediaBundleError(): google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleError;
  setMediaBundleError(value: google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleError): void;

  hasMediaUploadError(): boolean;
  clearMediaUploadError(): void;
  getMediaUploadError(): google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadError;
  setMediaUploadError(value: google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadError): void;

  hasMediaFileError(): boolean;
  clearMediaFileError(): void;
  getMediaFileError(): google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileError;
  setMediaFileError(value: google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileError): void;

  hasMultiplierError(): boolean;
  clearMultiplierError(): void;
  getMultiplierError(): google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierError;
  setMultiplierError(value: google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierError): void;

  hasNewResourceCreationError(): boolean;
  clearNewResourceCreationError(): void;
  getNewResourceCreationError(): google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationError;
  setNewResourceCreationError(value: google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationError): void;

  hasNotEmptyError(): boolean;
  clearNotEmptyError(): void;
  getNotEmptyError(): google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyError;
  setNotEmptyError(value: google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyError): void;

  hasNullError(): boolean;
  clearNullError(): void;
  getNullError(): google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullError;
  setNullError(value: google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullError): void;

  hasOperatorError(): boolean;
  clearOperatorError(): void;
  getOperatorError(): google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorError;
  setOperatorError(value: google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorError): void;

  hasRangeError(): boolean;
  clearRangeError(): void;
  getRangeError(): google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeError;
  setRangeError(value: google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeError): void;

  hasRecommendationError(): boolean;
  clearRecommendationError(): void;
  getRecommendationError(): google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationError;
  setRecommendationError(value: google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationError): void;

  hasRegionCodeError(): boolean;
  clearRegionCodeError(): void;
  getRegionCodeError(): google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeError;
  setRegionCodeError(value: google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeError): void;

  hasSettingError(): boolean;
  clearSettingError(): void;
  getSettingError(): google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingError;
  setSettingError(value: google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingError): void;

  hasStringFormatError(): boolean;
  clearStringFormatError(): void;
  getStringFormatError(): google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatError;
  setStringFormatError(value: google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatError): void;

  hasStringLengthError(): boolean;
  clearStringLengthError(): void;
  getStringLengthError(): google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthError;
  setStringLengthError(value: google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthError): void;

  hasOperationAccessDeniedError(): boolean;
  clearOperationAccessDeniedError(): void;
  getOperationAccessDeniedError(): google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedError;
  setOperationAccessDeniedError(value: google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedError): void;

  hasResourceAccessDeniedError(): boolean;
  clearResourceAccessDeniedError(): void;
  getResourceAccessDeniedError(): google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError;
  setResourceAccessDeniedError(value: google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError): void;

  hasResourceCountLimitExceededError(): boolean;
  clearResourceCountLimitExceededError(): void;
  getResourceCountLimitExceededError(): google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError;
  setResourceCountLimitExceededError(value: google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError): void;

  hasYoutubeVideoRegistrationError(): boolean;
  clearYoutubeVideoRegistrationError(): void;
  getYoutubeVideoRegistrationError(): google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationError;
  setYoutubeVideoRegistrationError(value: google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationError): void;

  hasAdGroupBidModifierError(): boolean;
  clearAdGroupBidModifierError(): void;
  getAdGroupBidModifierError(): google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierError;
  setAdGroupBidModifierError(value: google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierError): void;

  hasContextError(): boolean;
  clearContextError(): void;
  getContextError(): google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextError;
  setContextError(value: google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextError): void;

  hasFieldError(): boolean;
  clearFieldError(): void;
  getFieldError(): google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldError;
  setFieldError(value: google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldError): void;

  hasSharedSetError(): boolean;
  clearSharedSetError(): void;
  getSharedSetError(): google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetError;
  setSharedSetError(value: google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetError): void;

  hasSharedCriterionError(): boolean;
  clearSharedCriterionError(): void;
  getSharedCriterionError(): google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionError;
  setSharedCriterionError(value: google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionError): void;

  hasCampaignSharedSetError(): boolean;
  clearCampaignSharedSetError(): void;
  getCampaignSharedSetError(): google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetError;
  setCampaignSharedSetError(value: google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetError): void;

  hasConversionActionError(): boolean;
  clearConversionActionError(): void;
  getConversionActionError(): google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionError;
  setConversionActionError(value: google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionError): void;

  hasConversionAdjustmentUploadError(): boolean;
  clearConversionAdjustmentUploadError(): void;
  getConversionAdjustmentUploadError(): google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError;
  setConversionAdjustmentUploadError(value: google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError): void;

  hasConversionUploadError(): boolean;
  clearConversionUploadError(): void;
  getConversionUploadError(): google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadError;
  setConversionUploadError(value: google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadError): void;

  hasHeaderError(): boolean;
  clearHeaderError(): void;
  getHeaderError(): google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderError;
  setHeaderError(value: google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderError): void;

  hasDatabaseError(): boolean;
  clearDatabaseError(): void;
  getDatabaseError(): google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseError;
  setDatabaseError(value: google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseError): void;

  hasPolicyFindingError(): boolean;
  clearPolicyFindingError(): void;
  getPolicyFindingError(): google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingError;
  setPolicyFindingError(value: google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingError): void;

  hasEnumError(): boolean;
  clearEnumError(): void;
  getEnumError(): google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumError;
  setEnumError(value: google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumError): void;

  hasKeywordPlanError(): boolean;
  clearKeywordPlanError(): void;
  getKeywordPlanError(): google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanError;
  setKeywordPlanError(value: google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanError): void;

  hasKeywordPlanCampaignError(): boolean;
  clearKeywordPlanCampaignError(): void;
  getKeywordPlanCampaignError(): google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignError;
  setKeywordPlanCampaignError(value: google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignError): void;

  hasKeywordPlanNegativeKeywordError(): boolean;
  clearKeywordPlanNegativeKeywordError(): void;
  getKeywordPlanNegativeKeywordError(): google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordError;
  setKeywordPlanNegativeKeywordError(value: google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordError): void;

  hasKeywordPlanAdGroupError(): boolean;
  clearKeywordPlanAdGroupError(): void;
  getKeywordPlanAdGroupError(): google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupError;
  setKeywordPlanAdGroupError(value: google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupError): void;

  hasKeywordPlanKeywordError(): boolean;
  clearKeywordPlanKeywordError(): void;
  getKeywordPlanKeywordError(): google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordError;
  setKeywordPlanKeywordError(value: google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordError): void;

  hasKeywordPlanIdeaError(): boolean;
  clearKeywordPlanIdeaError(): void;
  getKeywordPlanIdeaError(): google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaError;
  setKeywordPlanIdeaError(value: google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaError): void;

  hasAccountBudgetProposalError(): boolean;
  clearAccountBudgetProposalError(): void;
  getAccountBudgetProposalError(): google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalError;
  setAccountBudgetProposalError(value: google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalError): void;

  hasUserListError(): boolean;
  clearUserListError(): void;
  getUserListError(): google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListError;
  setUserListError(value: google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListError): void;

  hasChangeStatusError(): boolean;
  clearChangeStatusError(): void;
  getChangeStatusError(): google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusError;
  setChangeStatusError(value: google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusError): void;

  hasFeedError(): boolean;
  clearFeedError(): void;
  getFeedError(): google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedError;
  setFeedError(value: google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedError): void;

  hasGeoTargetConstantSuggestionError(): boolean;
  clearGeoTargetConstantSuggestionError(): void;
  getGeoTargetConstantSuggestionError(): google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionError;
  setGeoTargetConstantSuggestionError(value: google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionError): void;

  hasCampaignDraftError(): boolean;
  clearCampaignDraftError(): void;
  getCampaignDraftError(): google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftError;
  setCampaignDraftError(value: google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftError): void;

  hasFeedItemError(): boolean;
  clearFeedItemError(): void;
  getFeedItemError(): google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemError;
  setFeedItemError(value: google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemError): void;

  hasLabelError(): boolean;
  clearLabelError(): void;
  getLabelError(): google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelError;
  setLabelError(value: google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelError): void;

  hasBillingSetupError(): boolean;
  clearBillingSetupError(): void;
  getBillingSetupError(): google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupError;
  setBillingSetupError(value: google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupError): void;

  hasCustomerClientLinkError(): boolean;
  clearCustomerClientLinkError(): void;
  getCustomerClientLinkError(): google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkError;
  setCustomerClientLinkError(value: google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkError): void;

  hasCustomerManagerLinkError(): boolean;
  clearCustomerManagerLinkError(): void;
  getCustomerManagerLinkError(): google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkError;
  setCustomerManagerLinkError(value: google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkError): void;

  hasFeedMappingError(): boolean;
  clearFeedMappingError(): void;
  getFeedMappingError(): google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingError;
  setFeedMappingError(value: google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingError): void;

  hasCustomerFeedError(): boolean;
  clearCustomerFeedError(): void;
  getCustomerFeedError(): google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedError;
  setCustomerFeedError(value: google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedError): void;

  hasAdGroupFeedError(): boolean;
  clearAdGroupFeedError(): void;
  getAdGroupFeedError(): google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedError;
  setAdGroupFeedError(value: google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedError): void;

  hasCampaignFeedError(): boolean;
  clearCampaignFeedError(): void;
  getCampaignFeedError(): google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedError;
  setCampaignFeedError(value: google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedError): void;

  hasCustomInterestError(): boolean;
  clearCustomInterestError(): void;
  getCustomInterestError(): google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestError;
  setCustomInterestError(value: google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestError): void;

  hasCampaignExperimentError(): boolean;
  clearCampaignExperimentError(): void;
  getCampaignExperimentError(): google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentError;
  setCampaignExperimentError(value: google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentError): void;

  hasExtensionFeedItemError(): boolean;
  clearExtensionFeedItemError(): void;
  getExtensionFeedItemError(): google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemError;
  setExtensionFeedItemError(value: google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemError): void;

  hasAdParameterError(): boolean;
  clearAdParameterError(): void;
  getAdParameterError(): google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterError;
  setAdParameterError(value: google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterError): void;

  hasFeedItemValidationError(): boolean;
  clearFeedItemValidationError(): void;
  getFeedItemValidationError(): google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationError;
  setFeedItemValidationError(value: google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationError): void;

  hasExtensionSettingError(): boolean;
  clearExtensionSettingError(): void;
  getExtensionSettingError(): google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingError;
  setExtensionSettingError(value: google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingError): void;

  hasFeedItemTargetError(): boolean;
  clearFeedItemTargetError(): void;
  getFeedItemTargetError(): google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetError;
  setFeedItemTargetError(value: google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetError): void;

  hasPolicyViolationError(): boolean;
  clearPolicyViolationError(): void;
  getPolicyViolationError(): google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationError;
  setPolicyViolationError(value: google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationError): void;

  hasMutateJobError(): boolean;
  clearMutateJobError(): void;
  getMutateJobError(): google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobError;
  setMutateJobError(value: google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobError): void;

  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureError;
  setPartialFailureError(value: google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureError): void;

  hasPolicyValidationParameterError(): boolean;
  clearPolicyValidationParameterError(): void;
  getPolicyValidationParameterError(): google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterError;
  setPolicyValidationParameterError(value: google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterError): void;

  hasSizeLimitError(): boolean;
  clearSizeLimitError(): void;
  getSizeLimitError(): google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitError;
  setSizeLimitError(value: google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitError): void;

  hasNotWhitelistedError(): boolean;
  clearNotWhitelistedError(): void;
  getNotWhitelistedError(): google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedError;
  setNotWhitelistedError(value: google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedError): void;

  hasManagerLinkError(): boolean;
  clearManagerLinkError(): void;
  getManagerLinkError(): google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkError;
  setManagerLinkError(value: google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkError): void;

  hasCurrencyCodeError(): boolean;
  clearCurrencyCodeError(): void;
  getCurrencyCodeError(): google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeError;
  setCurrencyCodeError(value: google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeError): void;

  hasAccessInvitationError(): boolean;
  clearAccessInvitationError(): void;
  getAccessInvitationError(): google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationError;
  setAccessInvitationError(value: google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationError): void;

  getErrorCodeCase(): ErrorCode.ErrorCodeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorCode): ErrorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorCode;
  static deserializeBinaryFromReader(message: ErrorCode, reader: jspb.BinaryReader): ErrorCode;
}

export namespace ErrorCode {
  export type AsObject = {
    requestError: google_ads_googleads_v2_errors_request_error_pb.RequestErrorEnum.RequestError,
    biddingStrategyError: google_ads_googleads_v2_errors_bidding_strategy_error_pb.BiddingStrategyErrorEnum.BiddingStrategyError,
    urlFieldError: google_ads_googleads_v2_errors_url_field_error_pb.UrlFieldErrorEnum.UrlFieldError,
    listOperationError: google_ads_googleads_v2_errors_list_operation_error_pb.ListOperationErrorEnum.ListOperationError,
    queryError: google_ads_googleads_v2_errors_query_error_pb.QueryErrorEnum.QueryError,
    mutateError: google_ads_googleads_v2_errors_mutate_error_pb.MutateErrorEnum.MutateError,
    fieldMaskError: google_ads_googleads_v2_errors_field_mask_error_pb.FieldMaskErrorEnum.FieldMaskError,
    authorizationError: google_ads_googleads_v2_errors_authorization_error_pb.AuthorizationErrorEnum.AuthorizationError,
    internalError: google_ads_googleads_v2_errors_internal_error_pb.InternalErrorEnum.InternalError,
    quotaError: google_ads_googleads_v2_errors_quota_error_pb.QuotaErrorEnum.QuotaError,
    adError: google_ads_googleads_v2_errors_ad_error_pb.AdErrorEnum.AdError,
    adGroupError: google_ads_googleads_v2_errors_ad_group_error_pb.AdGroupErrorEnum.AdGroupError,
    campaignBudgetError: google_ads_googleads_v2_errors_campaign_budget_error_pb.CampaignBudgetErrorEnum.CampaignBudgetError,
    campaignError: google_ads_googleads_v2_errors_campaign_error_pb.CampaignErrorEnum.CampaignError,
    authenticationError: google_ads_googleads_v2_errors_authentication_error_pb.AuthenticationErrorEnum.AuthenticationError,
    adGroupCriterionError: google_ads_googleads_v2_errors_ad_group_criterion_error_pb.AdGroupCriterionErrorEnum.AdGroupCriterionError,
    adCustomizerError: google_ads_googleads_v2_errors_ad_customizer_error_pb.AdCustomizerErrorEnum.AdCustomizerError,
    adGroupAdError: google_ads_googleads_v2_errors_ad_group_ad_error_pb.AdGroupAdErrorEnum.AdGroupAdError,
    adSharingError: google_ads_googleads_v2_errors_ad_sharing_error_pb.AdSharingErrorEnum.AdSharingError,
    adxError: google_ads_googleads_v2_errors_adx_error_pb.AdxErrorEnum.AdxError,
    assetError: google_ads_googleads_v2_errors_asset_error_pb.AssetErrorEnum.AssetError,
    biddingError: google_ads_googleads_v2_errors_bidding_error_pb.BiddingErrorEnum.BiddingError,
    campaignCriterionError: google_ads_googleads_v2_errors_campaign_criterion_error_pb.CampaignCriterionErrorEnum.CampaignCriterionError,
    collectionSizeError: google_ads_googleads_v2_errors_collection_size_error_pb.CollectionSizeErrorEnum.CollectionSizeError,
    countryCodeError: google_ads_googleads_v2_errors_country_code_error_pb.CountryCodeErrorEnum.CountryCodeError,
    criterionError: google_ads_googleads_v2_errors_criterion_error_pb.CriterionErrorEnum.CriterionError,
    customerError: google_ads_googleads_v2_errors_customer_error_pb.CustomerErrorEnum.CustomerError,
    dateError: google_ads_googleads_v2_errors_date_error_pb.DateErrorEnum.DateError,
    dateRangeError: google_ads_googleads_v2_errors_date_range_error_pb.DateRangeErrorEnum.DateRangeError,
    distinctError: google_ads_googleads_v2_errors_distinct_error_pb.DistinctErrorEnum.DistinctError,
    feedAttributeReferenceError: google_ads_googleads_v2_errors_feed_attribute_reference_error_pb.FeedAttributeReferenceErrorEnum.FeedAttributeReferenceError,
    functionError: google_ads_googleads_v2_errors_function_error_pb.FunctionErrorEnum.FunctionError,
    functionParsingError: google_ads_googleads_v2_errors_function_parsing_error_pb.FunctionParsingErrorEnum.FunctionParsingError,
    idError: google_ads_googleads_v2_errors_id_error_pb.IdErrorEnum.IdError,
    imageError: google_ads_googleads_v2_errors_image_error_pb.ImageErrorEnum.ImageError,
    languageCodeError: google_ads_googleads_v2_errors_language_code_error_pb.LanguageCodeErrorEnum.LanguageCodeError,
    mediaBundleError: google_ads_googleads_v2_errors_media_bundle_error_pb.MediaBundleErrorEnum.MediaBundleError,
    mediaUploadError: google_ads_googleads_v2_errors_media_upload_error_pb.MediaUploadErrorEnum.MediaUploadError,
    mediaFileError: google_ads_googleads_v2_errors_media_file_error_pb.MediaFileErrorEnum.MediaFileError,
    multiplierError: google_ads_googleads_v2_errors_multiplier_error_pb.MultiplierErrorEnum.MultiplierError,
    newResourceCreationError: google_ads_googleads_v2_errors_new_resource_creation_error_pb.NewResourceCreationErrorEnum.NewResourceCreationError,
    notEmptyError: google_ads_googleads_v2_errors_not_empty_error_pb.NotEmptyErrorEnum.NotEmptyError,
    nullError: google_ads_googleads_v2_errors_null_error_pb.NullErrorEnum.NullError,
    operatorError: google_ads_googleads_v2_errors_operator_error_pb.OperatorErrorEnum.OperatorError,
    rangeError: google_ads_googleads_v2_errors_range_error_pb.RangeErrorEnum.RangeError,
    recommendationError: google_ads_googleads_v2_errors_recommendation_error_pb.RecommendationErrorEnum.RecommendationError,
    regionCodeError: google_ads_googleads_v2_errors_region_code_error_pb.RegionCodeErrorEnum.RegionCodeError,
    settingError: google_ads_googleads_v2_errors_setting_error_pb.SettingErrorEnum.SettingError,
    stringFormatError: google_ads_googleads_v2_errors_string_format_error_pb.StringFormatErrorEnum.StringFormatError,
    stringLengthError: google_ads_googleads_v2_errors_string_length_error_pb.StringLengthErrorEnum.StringLengthError,
    operationAccessDeniedError: google_ads_googleads_v2_errors_operation_access_denied_error_pb.OperationAccessDeniedErrorEnum.OperationAccessDeniedError,
    resourceAccessDeniedError: google_ads_googleads_v2_errors_resource_access_denied_error_pb.ResourceAccessDeniedErrorEnum.ResourceAccessDeniedError,
    resourceCountLimitExceededError: google_ads_googleads_v2_errors_resource_count_limit_exceeded_error_pb.ResourceCountLimitExceededErrorEnum.ResourceCountLimitExceededError,
    youtubeVideoRegistrationError: google_ads_googleads_v2_errors_youtube_video_registration_error_pb.YoutubeVideoRegistrationErrorEnum.YoutubeVideoRegistrationError,
    adGroupBidModifierError: google_ads_googleads_v2_errors_ad_group_bid_modifier_error_pb.AdGroupBidModifierErrorEnum.AdGroupBidModifierError,
    contextError: google_ads_googleads_v2_errors_context_error_pb.ContextErrorEnum.ContextError,
    fieldError: google_ads_googleads_v2_errors_field_error_pb.FieldErrorEnum.FieldError,
    sharedSetError: google_ads_googleads_v2_errors_shared_set_error_pb.SharedSetErrorEnum.SharedSetError,
    sharedCriterionError: google_ads_googleads_v2_errors_shared_criterion_error_pb.SharedCriterionErrorEnum.SharedCriterionError,
    campaignSharedSetError: google_ads_googleads_v2_errors_campaign_shared_set_error_pb.CampaignSharedSetErrorEnum.CampaignSharedSetError,
    conversionActionError: google_ads_googleads_v2_errors_conversion_action_error_pb.ConversionActionErrorEnum.ConversionActionError,
    conversionAdjustmentUploadError: google_ads_googleads_v2_errors_conversion_adjustment_upload_error_pb.ConversionAdjustmentUploadErrorEnum.ConversionAdjustmentUploadError,
    conversionUploadError: google_ads_googleads_v2_errors_conversion_upload_error_pb.ConversionUploadErrorEnum.ConversionUploadError,
    headerError: google_ads_googleads_v2_errors_header_error_pb.HeaderErrorEnum.HeaderError,
    databaseError: google_ads_googleads_v2_errors_database_error_pb.DatabaseErrorEnum.DatabaseError,
    policyFindingError: google_ads_googleads_v2_errors_policy_finding_error_pb.PolicyFindingErrorEnum.PolicyFindingError,
    enumError: google_ads_googleads_v2_errors_enum_error_pb.EnumErrorEnum.EnumError,
    keywordPlanError: google_ads_googleads_v2_errors_keyword_plan_error_pb.KeywordPlanErrorEnum.KeywordPlanError,
    keywordPlanCampaignError: google_ads_googleads_v2_errors_keyword_plan_campaign_error_pb.KeywordPlanCampaignErrorEnum.KeywordPlanCampaignError,
    keywordPlanNegativeKeywordError: google_ads_googleads_v2_errors_keyword_plan_negative_keyword_error_pb.KeywordPlanNegativeKeywordErrorEnum.KeywordPlanNegativeKeywordError,
    keywordPlanAdGroupError: google_ads_googleads_v2_errors_keyword_plan_ad_group_error_pb.KeywordPlanAdGroupErrorEnum.KeywordPlanAdGroupError,
    keywordPlanKeywordError: google_ads_googleads_v2_errors_keyword_plan_keyword_error_pb.KeywordPlanKeywordErrorEnum.KeywordPlanKeywordError,
    keywordPlanIdeaError: google_ads_googleads_v2_errors_keyword_plan_idea_error_pb.KeywordPlanIdeaErrorEnum.KeywordPlanIdeaError,
    accountBudgetProposalError: google_ads_googleads_v2_errors_account_budget_proposal_error_pb.AccountBudgetProposalErrorEnum.AccountBudgetProposalError,
    userListError: google_ads_googleads_v2_errors_user_list_error_pb.UserListErrorEnum.UserListError,
    changeStatusError: google_ads_googleads_v2_errors_change_status_error_pb.ChangeStatusErrorEnum.ChangeStatusError,
    feedError: google_ads_googleads_v2_errors_feed_error_pb.FeedErrorEnum.FeedError,
    geoTargetConstantSuggestionError: google_ads_googleads_v2_errors_geo_target_constant_suggestion_error_pb.GeoTargetConstantSuggestionErrorEnum.GeoTargetConstantSuggestionError,
    campaignDraftError: google_ads_googleads_v2_errors_campaign_draft_error_pb.CampaignDraftErrorEnum.CampaignDraftError,
    feedItemError: google_ads_googleads_v2_errors_feed_item_error_pb.FeedItemErrorEnum.FeedItemError,
    labelError: google_ads_googleads_v2_errors_label_error_pb.LabelErrorEnum.LabelError,
    billingSetupError: google_ads_googleads_v2_errors_billing_setup_error_pb.BillingSetupErrorEnum.BillingSetupError,
    customerClientLinkError: google_ads_googleads_v2_errors_customer_client_link_error_pb.CustomerClientLinkErrorEnum.CustomerClientLinkError,
    customerManagerLinkError: google_ads_googleads_v2_errors_customer_manager_link_error_pb.CustomerManagerLinkErrorEnum.CustomerManagerLinkError,
    feedMappingError: google_ads_googleads_v2_errors_feed_mapping_error_pb.FeedMappingErrorEnum.FeedMappingError,
    customerFeedError: google_ads_googleads_v2_errors_customer_feed_error_pb.CustomerFeedErrorEnum.CustomerFeedError,
    adGroupFeedError: google_ads_googleads_v2_errors_ad_group_feed_error_pb.AdGroupFeedErrorEnum.AdGroupFeedError,
    campaignFeedError: google_ads_googleads_v2_errors_campaign_feed_error_pb.CampaignFeedErrorEnum.CampaignFeedError,
    customInterestError: google_ads_googleads_v2_errors_custom_interest_error_pb.CustomInterestErrorEnum.CustomInterestError,
    campaignExperimentError: google_ads_googleads_v2_errors_campaign_experiment_error_pb.CampaignExperimentErrorEnum.CampaignExperimentError,
    extensionFeedItemError: google_ads_googleads_v2_errors_extension_feed_item_error_pb.ExtensionFeedItemErrorEnum.ExtensionFeedItemError,
    adParameterError: google_ads_googleads_v2_errors_ad_parameter_error_pb.AdParameterErrorEnum.AdParameterError,
    feedItemValidationError: google_ads_googleads_v2_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationError,
    extensionSettingError: google_ads_googleads_v2_errors_extension_setting_error_pb.ExtensionSettingErrorEnum.ExtensionSettingError,
    feedItemTargetError: google_ads_googleads_v2_errors_feed_item_target_error_pb.FeedItemTargetErrorEnum.FeedItemTargetError,
    policyViolationError: google_ads_googleads_v2_errors_policy_violation_error_pb.PolicyViolationErrorEnum.PolicyViolationError,
    mutateJobError: google_ads_googleads_v2_errors_mutate_job_error_pb.MutateJobErrorEnum.MutateJobError,
    partialFailureError: google_ads_googleads_v2_errors_partial_failure_error_pb.PartialFailureErrorEnum.PartialFailureError,
    policyValidationParameterError: google_ads_googleads_v2_errors_policy_validation_parameter_error_pb.PolicyValidationParameterErrorEnum.PolicyValidationParameterError,
    sizeLimitError: google_ads_googleads_v2_errors_size_limit_error_pb.SizeLimitErrorEnum.SizeLimitError,
    notWhitelistedError: google_ads_googleads_v2_errors_not_whitelisted_error_pb.NotWhitelistedErrorEnum.NotWhitelistedError,
    managerLinkError: google_ads_googleads_v2_errors_manager_link_error_pb.ManagerLinkErrorEnum.ManagerLinkError,
    currencyCodeError: google_ads_googleads_v2_errors_currency_code_error_pb.CurrencyCodeErrorEnum.CurrencyCodeError,
    accessInvitationError: google_ads_googleads_v2_errors_access_invitation_error_pb.AccessInvitationErrorEnum.AccessInvitationError,
  }

  export enum ErrorCodeCase {
    ERROR_CODE_NOT_SET = 0,
    REQUEST_ERROR = 1,
    BIDDING_STRATEGY_ERROR = 2,
    URL_FIELD_ERROR = 3,
    LIST_OPERATION_ERROR = 4,
    QUERY_ERROR = 5,
    MUTATE_ERROR = 7,
    FIELD_MASK_ERROR = 8,
    AUTHORIZATION_ERROR = 9,
    INTERNAL_ERROR = 10,
    QUOTA_ERROR = 11,
    AD_ERROR = 12,
    AD_GROUP_ERROR = 13,
    CAMPAIGN_BUDGET_ERROR = 14,
    CAMPAIGN_ERROR = 15,
    AUTHENTICATION_ERROR = 17,
    AD_GROUP_CRITERION_ERROR = 18,
    AD_CUSTOMIZER_ERROR = 19,
    AD_GROUP_AD_ERROR = 21,
    AD_SHARING_ERROR = 24,
    ADX_ERROR = 25,
    ASSET_ERROR = 107,
    BIDDING_ERROR = 26,
    CAMPAIGN_CRITERION_ERROR = 29,
    COLLECTION_SIZE_ERROR = 31,
    COUNTRY_CODE_ERROR = 109,
    CRITERION_ERROR = 32,
    CUSTOMER_ERROR = 90,
    DATE_ERROR = 33,
    DATE_RANGE_ERROR = 34,
    DISTINCT_ERROR = 35,
    FEED_ATTRIBUTE_REFERENCE_ERROR = 36,
    FUNCTION_ERROR = 37,
    FUNCTION_PARSING_ERROR = 38,
    ID_ERROR = 39,
    IMAGE_ERROR = 40,
    LANGUAGE_CODE_ERROR = 110,
    MEDIA_BUNDLE_ERROR = 42,
    MEDIA_UPLOAD_ERROR = 116,
    MEDIA_FILE_ERROR = 86,
    MULTIPLIER_ERROR = 44,
    NEW_RESOURCE_CREATION_ERROR = 45,
    NOT_EMPTY_ERROR = 46,
    NULL_ERROR = 47,
    OPERATOR_ERROR = 48,
    RANGE_ERROR = 49,
    RECOMMENDATION_ERROR = 58,
    REGION_CODE_ERROR = 51,
    SETTING_ERROR = 52,
    STRING_FORMAT_ERROR = 53,
    STRING_LENGTH_ERROR = 54,
    OPERATION_ACCESS_DENIED_ERROR = 55,
    RESOURCE_ACCESS_DENIED_ERROR = 56,
    RESOURCE_COUNT_LIMIT_EXCEEDED_ERROR = 57,
    YOUTUBE_VIDEO_REGISTRATION_ERROR = 117,
    AD_GROUP_BID_MODIFIER_ERROR = 59,
    CONTEXT_ERROR = 60,
    FIELD_ERROR = 61,
    SHARED_SET_ERROR = 62,
    SHARED_CRITERION_ERROR = 63,
    CAMPAIGN_SHARED_SET_ERROR = 64,
    CONVERSION_ACTION_ERROR = 65,
    CONVERSION_ADJUSTMENT_UPLOAD_ERROR = 115,
    CONVERSION_UPLOAD_ERROR = 111,
    HEADER_ERROR = 66,
    DATABASE_ERROR = 67,
    POLICY_FINDING_ERROR = 68,
    ENUM_ERROR = 70,
    KEYWORD_PLAN_ERROR = 71,
    KEYWORD_PLAN_CAMPAIGN_ERROR = 72,
    KEYWORD_PLAN_NEGATIVE_KEYWORD_ERROR = 73,
    KEYWORD_PLAN_AD_GROUP_ERROR = 74,
    KEYWORD_PLAN_KEYWORD_ERROR = 75,
    KEYWORD_PLAN_IDEA_ERROR = 76,
    ACCOUNT_BUDGET_PROPOSAL_ERROR = 77,
    USER_LIST_ERROR = 78,
    CHANGE_STATUS_ERROR = 79,
    FEED_ERROR = 80,
    GEO_TARGET_CONSTANT_SUGGESTION_ERROR = 81,
    CAMPAIGN_DRAFT_ERROR = 82,
    FEED_ITEM_ERROR = 83,
    LABEL_ERROR = 84,
    BILLING_SETUP_ERROR = 87,
    CUSTOMER_CLIENT_LINK_ERROR = 88,
    CUSTOMER_MANAGER_LINK_ERROR = 91,
    FEED_MAPPING_ERROR = 92,
    CUSTOMER_FEED_ERROR = 93,
    AD_GROUP_FEED_ERROR = 94,
    CAMPAIGN_FEED_ERROR = 96,
    CUSTOM_INTEREST_ERROR = 97,
    CAMPAIGN_EXPERIMENT_ERROR = 98,
    EXTENSION_FEED_ITEM_ERROR = 100,
    AD_PARAMETER_ERROR = 101,
    FEED_ITEM_VALIDATION_ERROR = 102,
    EXTENSION_SETTING_ERROR = 103,
    FEED_ITEM_TARGET_ERROR = 104,
    POLICY_VIOLATION_ERROR = 105,
    MUTATE_JOB_ERROR = 108,
    PARTIAL_FAILURE_ERROR = 112,
    POLICY_VALIDATION_PARAMETER_ERROR = 114,
    SIZE_LIMIT_ERROR = 118,
    NOT_WHITELISTED_ERROR = 120,
    MANAGER_LINK_ERROR = 121,
    CURRENCY_CODE_ERROR = 122,
    ACCESS_INVITATION_ERROR = 124,
  }
}

export class ErrorLocation extends jspb.Message {
  clearFieldPathElementsList(): void;
  getFieldPathElementsList(): Array<ErrorLocation.FieldPathElement>;
  setFieldPathElementsList(value: Array<ErrorLocation.FieldPathElement>): void;
  addFieldPathElements(value?: ErrorLocation.FieldPathElement, index?: number): ErrorLocation.FieldPathElement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorLocation): ErrorLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorLocation;
  static deserializeBinaryFromReader(message: ErrorLocation, reader: jspb.BinaryReader): ErrorLocation;
}

export namespace ErrorLocation {
  export type AsObject = {
    fieldPathElementsList: Array<ErrorLocation.FieldPathElement.AsObject>,
  }

  export class FieldPathElement extends jspb.Message {
    getFieldName(): string;
    setFieldName(value: string): void;

    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setIndex(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldPathElement.AsObject;
    static toObject(includeInstance: boolean, msg: FieldPathElement): FieldPathElement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldPathElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldPathElement;
    static deserializeBinaryFromReader(message: FieldPathElement, reader: jspb.BinaryReader): FieldPathElement;
  }

  export namespace FieldPathElement {
    export type AsObject = {
      fieldName: string,
      index?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }
}

export class ErrorDetails extends jspb.Message {
  getUnpublishedErrorCode(): string;
  setUnpublishedErrorCode(value: string): void;

  hasPolicyViolationDetails(): boolean;
  clearPolicyViolationDetails(): void;
  getPolicyViolationDetails(): PolicyViolationDetails | undefined;
  setPolicyViolationDetails(value?: PolicyViolationDetails): void;

  hasPolicyFindingDetails(): boolean;
  clearPolicyFindingDetails(): void;
  getPolicyFindingDetails(): PolicyFindingDetails | undefined;
  setPolicyFindingDetails(value?: PolicyFindingDetails): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorDetails): ErrorDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorDetails;
  static deserializeBinaryFromReader(message: ErrorDetails, reader: jspb.BinaryReader): ErrorDetails;
}

export namespace ErrorDetails {
  export type AsObject = {
    unpublishedErrorCode: string,
    policyViolationDetails?: PolicyViolationDetails.AsObject,
    policyFindingDetails?: PolicyFindingDetails.AsObject,
  }
}

export class PolicyViolationDetails extends jspb.Message {
  getExternalPolicyDescription(): string;
  setExternalPolicyDescription(value: string): void;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): google_ads_googleads_v2_common_policy_pb.PolicyViolationKey | undefined;
  setKey(value?: google_ads_googleads_v2_common_policy_pb.PolicyViolationKey): void;

  getExternalPolicyName(): string;
  setExternalPolicyName(value: string): void;

  getIsExemptible(): boolean;
  setIsExemptible(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyViolationDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyViolationDetails): PolicyViolationDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyViolationDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyViolationDetails;
  static deserializeBinaryFromReader(message: PolicyViolationDetails, reader: jspb.BinaryReader): PolicyViolationDetails;
}

export namespace PolicyViolationDetails {
  export type AsObject = {
    externalPolicyDescription: string,
    key?: google_ads_googleads_v2_common_policy_pb.PolicyViolationKey.AsObject,
    externalPolicyName: string,
    isExemptible: boolean,
  }
}

export class PolicyFindingDetails extends jspb.Message {
  clearPolicyTopicEntriesList(): void;
  getPolicyTopicEntriesList(): Array<google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry>;
  setPolicyTopicEntriesList(value: Array<google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry>): void;
  addPolicyTopicEntries(value?: google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry, index?: number): google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyFindingDetails.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyFindingDetails): PolicyFindingDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyFindingDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyFindingDetails;
  static deserializeBinaryFromReader(message: PolicyFindingDetails, reader: jspb.BinaryReader): PolicyFindingDetails;
}

export namespace PolicyFindingDetails {
  export type AsObject = {
    policyTopicEntriesList: Array<google_ads_googleads_v2_common_policy_pb.PolicyTopicEntry.AsObject>,
  }
}

