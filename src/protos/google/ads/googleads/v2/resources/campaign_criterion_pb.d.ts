// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_criterion.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_criteria_pb from "../../../../../google/ads/googleads/v2/common/criteria_pb";
import * as google_ads_googleads_v2_enums_campaign_criterion_status_pb from "../../../../../google/ads/googleads/v2/enums/campaign_criterion_status_pb";
import * as google_ads_googleads_v2_enums_criterion_type_pb from "../../../../../google/ads/googleads/v2/enums/criterion_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignCriterion extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCriterionId(): boolean;
  clearCriterionId(): void;
  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBidModifier(): boolean;
  clearBidModifier(): void;
  getBidModifier(): google_protobuf_wrappers_pb.FloatValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.FloatValue): void;

  hasNegative(): boolean;
  clearNegative(): void;
  getNegative(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setNegative(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getType(): google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType;
  setType(value: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType): void;

  getStatus(): google_ads_googleads_v2_enums_campaign_criterion_status_pb.CampaignCriterionStatusEnum.CampaignCriterionStatus;
  setStatus(value: google_ads_googleads_v2_enums_campaign_criterion_status_pb.CampaignCriterionStatusEnum.CampaignCriterionStatus): void;

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

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): google_ads_googleads_v2_common_criteria_pb.LocationInfo | undefined;
  setLocation(value?: google_ads_googleads_v2_common_criteria_pb.LocationInfo): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): google_ads_googleads_v2_common_criteria_pb.DeviceInfo | undefined;
  setDevice(value?: google_ads_googleads_v2_common_criteria_pb.DeviceInfo): void;

  hasAdSchedule(): boolean;
  clearAdSchedule(): void;
  getAdSchedule(): google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo | undefined;
  setAdSchedule(value?: google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo): void;

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

  hasProximity(): boolean;
  clearProximity(): void;
  getProximity(): google_ads_googleads_v2_common_criteria_pb.ProximityInfo | undefined;
  setProximity(value?: google_ads_googleads_v2_common_criteria_pb.ProximityInfo): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): google_ads_googleads_v2_common_criteria_pb.TopicInfo | undefined;
  setTopic(value?: google_ads_googleads_v2_common_criteria_pb.TopicInfo): void;

  hasListingScope(): boolean;
  clearListingScope(): void;
  getListingScope(): google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo | undefined;
  setListingScope(value?: google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): google_ads_googleads_v2_common_criteria_pb.LanguageInfo | undefined;
  setLanguage(value?: google_ads_googleads_v2_common_criteria_pb.LanguageInfo): void;

  hasIpBlock(): boolean;
  clearIpBlock(): void;
  getIpBlock(): google_ads_googleads_v2_common_criteria_pb.IpBlockInfo | undefined;
  setIpBlock(value?: google_ads_googleads_v2_common_criteria_pb.IpBlockInfo): void;

  hasContentLabel(): boolean;
  clearContentLabel(): void;
  getContentLabel(): google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo | undefined;
  setContentLabel(value?: google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo): void;

  hasCarrier(): boolean;
  clearCarrier(): void;
  getCarrier(): google_ads_googleads_v2_common_criteria_pb.CarrierInfo | undefined;
  setCarrier(value?: google_ads_googleads_v2_common_criteria_pb.CarrierInfo): void;

  hasUserInterest(): boolean;
  clearUserInterest(): void;
  getUserInterest(): google_ads_googleads_v2_common_criteria_pb.UserInterestInfo | undefined;
  setUserInterest(value?: google_ads_googleads_v2_common_criteria_pb.UserInterestInfo): void;

  hasWebpage(): boolean;
  clearWebpage(): void;
  getWebpage(): google_ads_googleads_v2_common_criteria_pb.WebpageInfo | undefined;
  setWebpage(value?: google_ads_googleads_v2_common_criteria_pb.WebpageInfo): void;

  hasOperatingSystemVersion(): boolean;
  clearOperatingSystemVersion(): void;
  getOperatingSystemVersion(): google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo | undefined;
  setOperatingSystemVersion(value?: google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo): void;

  hasMobileDevice(): boolean;
  clearMobileDevice(): void;
  getMobileDevice(): google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo | undefined;
  setMobileDevice(value?: google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo): void;

  hasLocationGroup(): boolean;
  clearLocationGroup(): void;
  getLocationGroup(): google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo | undefined;
  setLocationGroup(value?: google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo): void;

  getCriterionCase(): CampaignCriterion.CriterionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCriterion.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCriterion): CampaignCriterion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignCriterion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCriterion;
  static deserializeBinaryFromReader(message: CampaignCriterion, reader: jspb.BinaryReader): CampaignCriterion;
}

export namespace CampaignCriterion {
  export type AsObject = {
    resourceName: string,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bidModifier?: google_protobuf_wrappers_pb.FloatValue.AsObject,
    negative?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    type: google_ads_googleads_v2_enums_criterion_type_pb.CriterionTypeEnum.CriterionType,
    status: google_ads_googleads_v2_enums_campaign_criterion_status_pb.CampaignCriterionStatusEnum.CampaignCriterionStatus,
    keyword?: google_ads_googleads_v2_common_criteria_pb.KeywordInfo.AsObject,
    placement?: google_ads_googleads_v2_common_criteria_pb.PlacementInfo.AsObject,
    mobileAppCategory?: google_ads_googleads_v2_common_criteria_pb.MobileAppCategoryInfo.AsObject,
    mobileApplication?: google_ads_googleads_v2_common_criteria_pb.MobileApplicationInfo.AsObject,
    location?: google_ads_googleads_v2_common_criteria_pb.LocationInfo.AsObject,
    device?: google_ads_googleads_v2_common_criteria_pb.DeviceInfo.AsObject,
    adSchedule?: google_ads_googleads_v2_common_criteria_pb.AdScheduleInfo.AsObject,
    ageRange?: google_ads_googleads_v2_common_criteria_pb.AgeRangeInfo.AsObject,
    gender?: google_ads_googleads_v2_common_criteria_pb.GenderInfo.AsObject,
    incomeRange?: google_ads_googleads_v2_common_criteria_pb.IncomeRangeInfo.AsObject,
    parentalStatus?: google_ads_googleads_v2_common_criteria_pb.ParentalStatusInfo.AsObject,
    userList?: google_ads_googleads_v2_common_criteria_pb.UserListInfo.AsObject,
    youtubeVideo?: google_ads_googleads_v2_common_criteria_pb.YouTubeVideoInfo.AsObject,
    youtubeChannel?: google_ads_googleads_v2_common_criteria_pb.YouTubeChannelInfo.AsObject,
    proximity?: google_ads_googleads_v2_common_criteria_pb.ProximityInfo.AsObject,
    topic?: google_ads_googleads_v2_common_criteria_pb.TopicInfo.AsObject,
    listingScope?: google_ads_googleads_v2_common_criteria_pb.ListingScopeInfo.AsObject,
    language?: google_ads_googleads_v2_common_criteria_pb.LanguageInfo.AsObject,
    ipBlock?: google_ads_googleads_v2_common_criteria_pb.IpBlockInfo.AsObject,
    contentLabel?: google_ads_googleads_v2_common_criteria_pb.ContentLabelInfo.AsObject,
    carrier?: google_ads_googleads_v2_common_criteria_pb.CarrierInfo.AsObject,
    userInterest?: google_ads_googleads_v2_common_criteria_pb.UserInterestInfo.AsObject,
    webpage?: google_ads_googleads_v2_common_criteria_pb.WebpageInfo.AsObject,
    operatingSystemVersion?: google_ads_googleads_v2_common_criteria_pb.OperatingSystemVersionInfo.AsObject,
    mobileDevice?: google_ads_googleads_v2_common_criteria_pb.MobileDeviceInfo.AsObject,
    locationGroup?: google_ads_googleads_v2_common_criteria_pb.LocationGroupInfo.AsObject,
  }

  export enum CriterionCase {
    CRITERION_NOT_SET = 0,
    KEYWORD = 8,
    PLACEMENT = 9,
    MOBILE_APP_CATEGORY = 10,
    MOBILE_APPLICATION = 11,
    LOCATION = 12,
    DEVICE = 13,
    AD_SCHEDULE = 15,
    AGE_RANGE = 16,
    GENDER = 17,
    INCOME_RANGE = 18,
    PARENTAL_STATUS = 19,
    USER_LIST = 22,
    YOUTUBE_VIDEO = 20,
    YOUTUBE_CHANNEL = 21,
    PROXIMITY = 23,
    TOPIC = 24,
    LISTING_SCOPE = 25,
    LANGUAGE = 26,
    IP_BLOCK = 27,
    CONTENT_LABEL = 28,
    CARRIER = 29,
    USER_INTEREST = 30,
    WEBPAGE = 31,
    OPERATING_SYSTEM_VERSION = 32,
    MOBILE_DEVICE = 33,
    LOCATION_GROUP = 34,
  }
}

