// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/ad_group_criterion.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_criteria_pb from "../../../../../google/ads/googleads/v2/common/criteria_pb";
import * as google_ads_googleads_v2_common_custom_parameter_pb from "../../../../../google/ads/googleads/v2/common/custom_parameter_pb";
import * as google_ads_googleads_v2_enums_ad_group_criterion_approval_status_pb from "../../../../../google/ads/googleads/v2/enums/ad_group_criterion_approval_status_pb";
import * as google_ads_googleads_v2_enums_ad_group_criterion_status_pb from "../../../../../google/ads/googleads/v2/enums/ad_group_criterion_status_pb";
import * as google_ads_googleads_v2_enums_bidding_source_pb from "../../../../../google/ads/googleads/v2/enums/bidding_source_pb";
import * as google_ads_googleads_v2_enums_criterion_system_serving_status_pb from "../../../../../google/ads/googleads/v2/enums/criterion_system_serving_status_pb";
import * as google_ads_googleads_v2_enums_criterion_type_pb from "../../../../../google/ads/googleads/v2/enums/criterion_type_pb";
import * as google_ads_googleads_v2_enums_quality_score_bucket_pb from "../../../../../google/ads/googleads/v2/enums/quality_score_bucket_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupCriterion extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCriterionId(): boolean;
  clearCriterionId(): void;
  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getStatus(): google_ads_googleads_v2_enums_ad_group_criterion_status_pb.AdGroupCriterionStatusEnum.AdGroupCriterionStatus;
  setStatus(value: google_ads_googleads_v2_enums_ad_group_criterion_status_pb.AdGroupCriterionStatusEnum.AdGroupCriterionStatus): void;

  hasQualityInfo(): boolean;
  clearQualityInfo(): void;
  getQualityInfo(): AdGroupCriterion.QualityInfo | undefined;
  setQualityInfo(value?: AdGroupCriterion.QualityInfo): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  getType(): google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType;
  setType(value: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType): void;

  hasNegative(): boolean;
  clearNegative(): void;
  getNegative(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setNegative(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getSystemServingStatus(): google_ads_googleads_v2_enums_criterion_system_serving_status_pb.CriterionSystemServingStatusEnum.CriterionSystemServingStatus;
  setSystemServingStatus(value: google_ads_googleads_v2_enums_criterion_system_serving_status_pb.CriterionSystemServingStatusEnum.CriterionSystemServingStatus): void;

  getApprovalStatus(): google_ads_googleads_v2_enums_ad_group_criterion_approval_status_pb.AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus;
  setApprovalStatus(value: google_ads_googleads_v2_enums_ad_group_criterion_approval_status_pb.AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus): void;

  hasBidModifier(): boolean;
  clearBidModifier(): void;
  getBidModifier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;
  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCpmBidMicros(): boolean;
  clearCpmBidMicros(): void;
  getCpmBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpmBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCpvBidMicros(): boolean;
  clearCpvBidMicros(): void;
  getCpvBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpvBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPercentCpcBidMicros(): boolean;
  clearPercentCpcBidMicros(): void;
  getPercentCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPercentCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasEffectiveCpcBidMicros(): boolean;
  clearEffectiveCpcBidMicros(): void;
  getEffectiveCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectiveCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasEffectiveCpmBidMicros(): boolean;
  clearEffectiveCpmBidMicros(): void;
  getEffectiveCpmBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectiveCpmBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasEffectiveCpvBidMicros(): boolean;
  clearEffectiveCpvBidMicros(): void;
  getEffectiveCpvBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectiveCpvBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasEffectivePercentCpcBidMicros(): boolean;
  clearEffectivePercentCpcBidMicros(): void;
  getEffectivePercentCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setEffectivePercentCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getEffectiveCpcBidSource(): google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveCpcBidSource(value: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): void;

  getEffectiveCpmBidSource(): google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveCpmBidSource(value: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): void;

  getEffectiveCpvBidSource(): google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectiveCpvBidSource(value: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): void;

  getEffectivePercentCpcBidSource(): google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource;
  setEffectivePercentCpcBidSource(value: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource): void;

  hasPositionEstimates(): boolean;
  clearPositionEstimates(): void;
  getPositionEstimates(): AdGroupCriterion.PositionEstimates | undefined;
  setPositionEstimates(value?: AdGroupCriterion.PositionEstimates): void;

  clearFinalUrlsList(): void;
  getFinalUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearFinalMobileUrlsList(): void;
  getFinalMobileUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalMobileUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalMobileUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;
  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;
  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearUrlCustomParametersList(): void;
  getUrlCustomParametersList(): Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;

  hasKeyword(): boolean;
  clearKeyword(): void;
  getKeyword(): google_ads_googleads_v2_common_criteria_pb.KeywordInfo | undefined;
  setKeyword(value?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo): void;

  hasPlacement(): boolean;
  clearPlacement(): void;
  getPlacement(): google_ads_googleads_v2_common_criteria_pb.PlacementInfo | undefined;
  setPlacement(value?: google_ads_googleads_v2_common_criteria_pb.PlacementInfo): void;

  hasMobileAppCategory(): boolean;
  clearMobileAppCategory(): void;
  getMobileAppCategory(): google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo | undefined;
  setMobileAppCategory(value?: google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo): void;

  hasMobileApplication(): boolean;
  clearMobileApplication(): void;
  getMobileApplication(): google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo | undefined;
  setMobileApplication(value?: google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo): void;

  hasListingGroup(): boolean;
  clearListingGroup(): void;
  getListingGroup(): google_ads_googleads_v2_common_criteria_pb.ListingGroupInfo | undefined;
  setListingGroup(value?: google_ads_googleads_v2_common_criteria_pb.ListingGroupInfo): void;

  hasAgeRange(): boolean;
  clearAgeRange(): void;
  getAgeRange(): google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo | undefined;
  setAgeRange(value?: google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo): void;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): google_ads_googleads_v2_common_criteria_pb.GenderInfo | undefined;
  setGender(value?: google_ads_googleads_v2_common_criteria_pb.GenderInfo): void;

  hasIncomeRange(): boolean;
  clearIncomeRange(): void;
  getIncomeRange(): google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo | undefined;
  setIncomeRange(value?: google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo): void;

  hasParentalStatus(): boolean;
  clearParentalStatus(): void;
  getParentalStatus(): google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo | undefined;
  setParentalStatus(value?: google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo): void;

  hasUserList(): boolean;
  clearUserList(): void;
  getUserList(): google_ads_googleads_v2_common_criteria_pb.UserListInfo | undefined;
  setUserList(value?: google_ads_googleads_v2_common_criteria_pb.UserListInfo): void;

  hasYoutubeVideo(): boolean;
  clearYoutubeVideo(): void;
  getYoutubeVideo(): google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo | undefined;
  setYoutubeVideo(value?: google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo): void;

  hasYoutubeChannel(): boolean;
  clearYoutubeChannel(): void;
  getYoutubeChannel(): google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo | undefined;
  setYoutubeChannel(value?: google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): google_ads_googleads_v2_common_criteria_pb.TopicInfo | undefined;
  setTopic(value?: google_ads_googleads_v2_common_criteria_pb.TopicInfo): void;

  hasUserInterest(): boolean;
  clearUserInterest(): void;
  getUserInterest(): google_ads_googleads_v2_common_criteria_pb.UserInterestInfo | undefined;
  setUserInterest(value?: google_ads_googleads_v2_common_criteria_pb.UserInterestInfo): void;

  hasWebpage(): boolean;
  clearWebpage(): void;
  getWebpage(): google_ads_googleads_v2_common_criteria_pb.WebpageInfo | undefined;
  setWebpage(value?: google_ads_googleads_v2_common_criteria_pb.WebpageInfo): void;

  hasAppPaymentModel(): boolean;
  clearAppPaymentModel(): void;
  getAppPaymentModel(): google_ads_googleads_v2_common_criteria_pb.AppPaymentModelInfo | undefined;
  setAppPaymentModel(value?: google_ads_googleads_v2_common_criteria_pb.AppPaymentModelInfo): void;

  hasCustomAffinity(): boolean;
  clearCustomAffinity(): void;
  getCustomAffinity(): google_ads_googleads_v2_common_criteria_pb.CustomAffinityInfo | undefined;
  setCustomAffinity(value?: google_ads_googleads_v2_common_criteria_pb.CustomAffinityInfo): void;

  hasCustomIntent(): boolean;
  clearCustomIntent(): void;
  getCustomIntent(): google_ads_googleads_v2_common_criteria_pb.CustomIntentInfo | undefined;
  setCustomIntent(value?: google_ads_googleads_v2_common_criteria_pb.CustomIntentInfo): void;

  getCriterionCase(): AdGroupCriterion.CriterionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterion.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterion): AdGroupCriterion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupCriterion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterion;
  static deserializeBinaryFromReader(message: AdGroupCriterion, reader: jspb.BinaryReader): AdGroupCriterion;
}

export namespace AdGroupCriterion {
  export type AsObject = {
    resourceName: string,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v2_enums_ad_group_criterion_status_pb.AdGroupCriterionStatusEnum.AdGroupCriterionStatus,
    qualityInfo?: AdGroupCriterion.QualityInfo.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType,
    negative?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    systemServingStatus: google_ads_googleads_v2_enums_criterion_system_serving_status_pb.CriterionSystemServingStatusEnum.CriterionSystemServingStatus,
    approvalStatus: google_ads_googleads_v2_enums_ad_group_criterion_approval_status_pb.AdGroupCriterionApprovalStatusEnum.AdGroupCriterionApprovalStatus,
    bidModifier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpmBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpvBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    percentCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpmBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpvBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectivePercentCpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    effectiveCpcBidSource: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    effectiveCpmBidSource: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    effectiveCpvBidSource: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    effectivePercentCpcBidSource: google_ads_googleads_v2_enums_bidding_source_pb.BiddingSourceEnum.BiddingSource,
    positionEstimates?: AdGroupCriterion.PositionEstimates.AsObject,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.AsObject>,
    keyword?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo.AsObject,
    placement?: google_ads_googleads_v2_common_criteria_pb.PlacementInfo.AsObject,
    mobileAppCategory?: google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.AsObject,
    mobileApplication?: google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.AsObject,
    listingGroup?: google_ads_googleads_v2_common_criteria_pb.ListingGroupInfo.AsObject,
    ageRange?: google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo.AsObject,
    gender?: google_ads_googleads_v2_common_criteria_pb.GenderInfo.AsObject,
    incomeRange?: google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo.AsObject,
    parentalStatus?: google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo.AsObject,
    userList?: google_ads_googleads_v2_common_criteria_pb.UserListInfo.AsObject,
    youtubeVideo?: google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.AsObject,
    youtubeChannel?: google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.AsObject,
    topic?: google_ads_googleads_v2_common_criteria_pb.TopicInfo.AsObject,
    userInterest?: google_ads_googleads_v2_common_criteria_pb.UserInterestInfo.AsObject,
    webpage?: google_ads_googleads_v2_common_criteria_pb.WebpageInfo.AsObject,
    appPaymentModel?: google_ads_googleads_v2_common_criteria_pb.AppPaymentModelInfo.AsObject,
    customAffinity?: google_ads_googleads_v2_common_criteria_pb.CustomAffinityInfo.AsObject,
    customIntent?: google_ads_googleads_v2_common_criteria_pb.CustomIntentInfo.AsObject,
  }

  export class QualityInfo extends jspb.Message {
    hasQualityScore(): boolean;
    clearQualityScore(): void;
    getQualityScore(): google_protobuf_wrappers_pb.Int32Value | undefined;
    setQualityScore(value?: google_protobuf_wrappers_pb.Int32Value): void;

    getCreativeQualityScore(): google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
    setCreativeQualityScore(value: google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): void;

    getPostClickQualityScore(): google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
    setPostClickQualityScore(value: google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): void;

    getSearchPredictedCtr(): google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket;
    setSearchPredictedCtr(value: google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QualityInfo.AsObject;
    static toObject(includeInstance: boolean, msg: QualityInfo): QualityInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QualityInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QualityInfo;
    static deserializeBinaryFromReader(message: QualityInfo, reader: jspb.BinaryReader): QualityInfo;
  }

  export namespace QualityInfo {
    export type AsObject = {
      qualityScore?: google_protobuf_wrappers_pb.Int32Value.AsObject,
      creativeQualityScore: google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
      postClickQualityScore: google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
      searchPredictedCtr: google_ads_googleads_v2_enums_quality_score_bucket_pb.QualityScoreBucketEnum.QualityScoreBucket,
    }
  }

  export class PositionEstimates extends jspb.Message {
    hasFirstPageCpcMicros(): boolean;
    clearFirstPageCpcMicros(): void;
    getFirstPageCpcMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFirstPageCpcMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasFirstPositionCpcMicros(): boolean;
    clearFirstPositionCpcMicros(): void;
    getFirstPositionCpcMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setFirstPositionCpcMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasTopOfPageCpcMicros(): boolean;
    clearTopOfPageCpcMicros(): void;
    getTopOfPageCpcMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setTopOfPageCpcMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasEstimatedAddClicksAtFirstPositionCpc(): boolean;
    clearEstimatedAddClicksAtFirstPositionCpc(): void;
    getEstimatedAddClicksAtFirstPositionCpc(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEstimatedAddClicksAtFirstPositionCpc(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasEstimatedAddCostAtFirstPositionCpc(): boolean;
    clearEstimatedAddCostAtFirstPositionCpc(): void;
    getEstimatedAddCostAtFirstPositionCpc(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setEstimatedAddCostAtFirstPositionCpc(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionEstimates.AsObject;
    static toObject(includeInstance: boolean, msg: PositionEstimates): PositionEstimates.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionEstimates, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionEstimates;
    static deserializeBinaryFromReader(message: PositionEstimates, reader: jspb.BinaryReader): PositionEstimates;
  }

  export namespace PositionEstimates {
    export type AsObject = {
      firstPageCpcMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      firstPositionCpcMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      topOfPageCpcMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      estimatedAddClicksAtFirstPositionCpc?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      estimatedAddCostAtFirstPositionCpc?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }

  export enum CriterionCase {
    CRITERION_NOT_SET = 0,
    KEYWORD = 27,
    PLACEMENT = 28,
    MOBILE_APP_CATEGORY = 29,
    MOBILE_APPLICATION = 30,
    LISTING_GROUP = 32,
    AGE_RANGE = 36,
    GENDER = 37,
    INCOME_RANGE = 38,
    PARENTAL_STATUS = 39,
    USER_LIST = 42,
    YOUTUBE_VIDEO = 40,
    YOUTUBE_CHANNEL = 41,
    TOPIC = 43,
    USER_INTEREST = 45,
    WEBPAGE = 46,
    APP_PAYMENT_MODEL = 47,
    CUSTOM_AFFINITY = 48,
    CUSTOM_INTENT = 49,
  }
}

