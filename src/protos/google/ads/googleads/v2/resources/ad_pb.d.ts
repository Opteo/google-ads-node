// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/ad.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_ad_type_infos_pb from "../../../../../google/ads/googleads/v2/common/ad_type_infos_pb";
import * as google_ads_googleads_v2_common_custom_parameter_pb from "../../../../../google/ads/googleads/v2/common/custom_parameter_pb";
import * as google_ads_googleads_v2_common_final_app_url_pb from "../../../../../google/ads/googleads/v2/common/final_app_url_pb";
import * as google_ads_googleads_v2_common_url_collection_pb from "../../../../../google/ads/googleads/v2/common/url_collection_pb";
import * as google_ads_googleads_v2_enums_ad_type_pb from "../../../../../google/ads/googleads/v2/enums/ad_type_pb";
import * as google_ads_googleads_v2_enums_device_pb from "../../../../../google/ads/googleads/v2/enums/device_pb";
import * as google_ads_googleads_v2_enums_system_managed_entity_source_pb from "../../../../../google/ads/googleads/v2/enums/system_managed_entity_source_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Ad extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearFinalUrlsList(): void;
  getFinalUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearFinalAppUrlsList(): void;
  getFinalAppUrlsList(): Array<google_ads_googleads_v2_common_final_app_url_pb.FinalAppUrl>;
  setFinalAppUrlsList(value: Array<google_ads_googleads_v2_common_final_app_url_pb.FinalAppUrl>): void;
  addFinalAppUrls(value?: google_ads_googleads_v2_common_final_app_url_pb.FinalAppUrl, index?: number): google_ads_googleads_v2_common_final_app_url_pb.FinalAppUrl;

  clearFinalMobileUrlsList(): void;
  getFinalMobileUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalMobileUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalMobileUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;
  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearUrlCustomParametersList(): void;
  getUrlCustomParametersList(): Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;

  hasDisplayUrl(): boolean;
  clearDisplayUrl(): void;
  getDisplayUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDisplayUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  getType(): google_ads_googleads_v2_enums_ad_type_pb.AdTypeEnum.AdType;
  setType(value: google_ads_googleads_v2_enums_ad_type_pb.AdTypeEnum.AdType): void;

  hasAddedByGoogleAds(): boolean;
  clearAddedByGoogleAds(): void;
  getAddedByGoogleAds(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAddedByGoogleAds(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getDevicePreference(): google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device;
  setDevicePreference(value: google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device): void;

  clearUrlCollectionsList(): void;
  getUrlCollectionsList(): Array<google_ads_googleads_v2_common_url_collection_pb.UrlCollection>;
  setUrlCollectionsList(value: Array<google_ads_googleads_v2_common_url_collection_pb.UrlCollection>): void;
  addUrlCollections(value?: google_ads_googleads_v2_common_url_collection_pb.UrlCollection, index?: number): google_ads_googleads_v2_common_url_collection_pb.UrlCollection;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getSystemManagedResourceSource(): google_ads_googleads_v2_enums_system_managed_entity_source_pb.SystemManagedResourceSourceEnum.SystemManagedResourceSource;
  setSystemManagedResourceSource(value: google_ads_googleads_v2_enums_system_managed_entity_source_pb.SystemManagedResourceSourceEnum.SystemManagedResourceSource): void;

  hasTextAd(): boolean;
  clearTextAd(): void;
  getTextAd(): google_ads_googleads_v2_common_ad_type_infos_pb.TextAdInfo | undefined;
  setTextAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.TextAdInfo): void;

  hasExpandedTextAd(): boolean;
  clearExpandedTextAd(): void;
  getExpandedTextAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ExpandedTextAdInfo | undefined;
  setExpandedTextAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ExpandedTextAdInfo): void;

  hasCallOnlyAd(): boolean;
  clearCallOnlyAd(): void;
  getCallOnlyAd(): google_ads_googleads_v2_common_ad_type_infos_pb.CallOnlyAdInfo | undefined;
  setCallOnlyAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.CallOnlyAdInfo): void;

  hasExpandedDynamicSearchAd(): boolean;
  clearExpandedDynamicSearchAd(): void;
  getExpandedDynamicSearchAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ExpandedDynamicSearchAdInfo | undefined;
  setExpandedDynamicSearchAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ExpandedDynamicSearchAdInfo): void;

  hasHotelAd(): boolean;
  clearHotelAd(): void;
  getHotelAd(): google_ads_googleads_v2_common_ad_type_infos_pb.HotelAdInfo | undefined;
  setHotelAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.HotelAdInfo): void;

  hasShoppingSmartAd(): boolean;
  clearShoppingSmartAd(): void;
  getShoppingSmartAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingSmartAdInfo | undefined;
  setShoppingSmartAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingSmartAdInfo): void;

  hasShoppingProductAd(): boolean;
  clearShoppingProductAd(): void;
  getShoppingProductAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingProductAdInfo | undefined;
  setShoppingProductAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingProductAdInfo): void;

  hasGmailAd(): boolean;
  clearGmailAd(): void;
  getGmailAd(): google_ads_googleads_v2_common_ad_type_infos_pb.GmailAdInfo | undefined;
  setGmailAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.GmailAdInfo): void;

  hasImageAd(): boolean;
  clearImageAd(): void;
  getImageAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ImageAdInfo | undefined;
  setImageAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ImageAdInfo): void;

  hasVideoAd(): boolean;
  clearVideoAd(): void;
  getVideoAd(): google_ads_googleads_v2_common_ad_type_infos_pb.VideoAdInfo | undefined;
  setVideoAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.VideoAdInfo): void;

  hasResponsiveSearchAd(): boolean;
  clearResponsiveSearchAd(): void;
  getResponsiveSearchAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ResponsiveSearchAdInfo | undefined;
  setResponsiveSearchAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ResponsiveSearchAdInfo): void;

  hasLegacyResponsiveDisplayAd(): boolean;
  clearLegacyResponsiveDisplayAd(): void;
  getLegacyResponsiveDisplayAd(): google_ads_googleads_v2_common_ad_type_infos_pb.LegacyResponsiveDisplayAdInfo | undefined;
  setLegacyResponsiveDisplayAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.LegacyResponsiveDisplayAdInfo): void;

  hasAppAd(): boolean;
  clearAppAd(): void;
  getAppAd(): google_ads_googleads_v2_common_ad_type_infos_pb.AppAdInfo | undefined;
  setAppAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.AppAdInfo): void;

  hasLegacyAppInstallAd(): boolean;
  clearLegacyAppInstallAd(): void;
  getLegacyAppInstallAd(): google_ads_googleads_v2_common_ad_type_infos_pb.LegacyAppInstallAdInfo | undefined;
  setLegacyAppInstallAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.LegacyAppInstallAdInfo): void;

  hasResponsiveDisplayAd(): boolean;
  clearResponsiveDisplayAd(): void;
  getResponsiveDisplayAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ResponsiveDisplayAdInfo | undefined;
  setResponsiveDisplayAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ResponsiveDisplayAdInfo): void;

  hasDisplayUploadAd(): boolean;
  clearDisplayUploadAd(): void;
  getDisplayUploadAd(): google_ads_googleads_v2_common_ad_type_infos_pb.DisplayUploadAdInfo | undefined;
  setDisplayUploadAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.DisplayUploadAdInfo): void;

  hasAppEngagementAd(): boolean;
  clearAppEngagementAd(): void;
  getAppEngagementAd(): google_ads_googleads_v2_common_ad_type_infos_pb.AppEngagementAdInfo | undefined;
  setAppEngagementAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.AppEngagementAdInfo): void;

  hasShoppingComparisonListingAd(): boolean;
  clearShoppingComparisonListingAd(): void;
  getShoppingComparisonListingAd(): google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingComparisonListingAdInfo | undefined;
  setShoppingComparisonListingAd(value?: google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingComparisonListingAdInfo): void;

  getAdDataCase(): Ad.AdDataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ad.AsObject;
  static toObject(includeInstance: boolean, msg: Ad): Ad.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ad, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ad;
  static deserializeBinaryFromReader(message: Ad, reader: jspb.BinaryReader): Ad;
}

export namespace Ad {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalAppUrlsList: Array<google_ads_googleads_v2_common_final_app_url_pb.FinalAppUrl.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.AsObject>,
    displayUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v2_enums_ad_type_pb.AdTypeEnum.AdType,
    addedByGoogleAds?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    devicePreference: google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device,
    urlCollectionsList: Array<google_ads_googleads_v2_common_url_collection_pb.UrlCollection.AsObject>,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    systemManagedResourceSource: google_ads_googleads_v2_enums_system_managed_entity_source_pb.SystemManagedResourceSourceEnum.SystemManagedResourceSource,
    textAd?: google_ads_googleads_v2_common_ad_type_infos_pb.TextAdInfo.AsObject,
    expandedTextAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ExpandedTextAdInfo.AsObject,
    callOnlyAd?: google_ads_googleads_v2_common_ad_type_infos_pb.CallOnlyAdInfo.AsObject,
    expandedDynamicSearchAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ExpandedDynamicSearchAdInfo.AsObject,
    hotelAd?: google_ads_googleads_v2_common_ad_type_infos_pb.HotelAdInfo.AsObject,
    shoppingSmartAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingSmartAdInfo.AsObject,
    shoppingProductAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingProductAdInfo.AsObject,
    gmailAd?: google_ads_googleads_v2_common_ad_type_infos_pb.GmailAdInfo.AsObject,
    imageAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ImageAdInfo.AsObject,
    videoAd?: google_ads_googleads_v2_common_ad_type_infos_pb.VideoAdInfo.AsObject,
    responsiveSearchAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ResponsiveSearchAdInfo.AsObject,
    legacyResponsiveDisplayAd?: google_ads_googleads_v2_common_ad_type_infos_pb.LegacyResponsiveDisplayAdInfo.AsObject,
    appAd?: google_ads_googleads_v2_common_ad_type_infos_pb.AppAdInfo.AsObject,
    legacyAppInstallAd?: google_ads_googleads_v2_common_ad_type_infos_pb.LegacyAppInstallAdInfo.AsObject,
    responsiveDisplayAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ResponsiveDisplayAdInfo.AsObject,
    displayUploadAd?: google_ads_googleads_v2_common_ad_type_infos_pb.DisplayUploadAdInfo.AsObject,
    appEngagementAd?: google_ads_googleads_v2_common_ad_type_infos_pb.AppEngagementAdInfo.AsObject,
    shoppingComparisonListingAd?: google_ads_googleads_v2_common_ad_type_infos_pb.ShoppingComparisonListingAdInfo.AsObject,
  }

  export enum AdDataCase {
    AD_DATA_NOT_SET = 0,
    TEXT_AD = 6,
    EXPANDED_TEXT_AD = 7,
    CALL_ONLY_AD = 13,
    EXPANDED_DYNAMIC_SEARCH_AD = 14,
    HOTEL_AD = 15,
    SHOPPING_SMART_AD = 17,
    SHOPPING_PRODUCT_AD = 18,
    GMAIL_AD = 21,
    IMAGE_AD = 22,
    VIDEO_AD = 24,
    RESPONSIVE_SEARCH_AD = 25,
    LEGACY_RESPONSIVE_DISPLAY_AD = 28,
    APP_AD = 29,
    LEGACY_APP_INSTALL_AD = 30,
    RESPONSIVE_DISPLAY_AD = 31,
    DISPLAY_UPLOAD_AD = 33,
    APP_ENGAGEMENT_AD = 34,
    SHOPPING_COMPARISON_LISTING_AD = 36,
  }
}

