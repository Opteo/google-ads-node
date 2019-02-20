// package: google.ads.googleads.v0.resources
// file: google/ads/googleads/v0/resources/ad.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v0_common_ad_type_infos_pb from "../../../../../google/ads/googleads/v0/common/ad_type_infos_pb";
import * as google_ads_googleads_v0_common_custom_parameter_pb from "../../../../../google/ads/googleads/v0/common/custom_parameter_pb";
import * as google_ads_googleads_v0_enums_ad_type_pb from "../../../../../google/ads/googleads/v0/enums/ad_type_pb";
import * as google_ads_googleads_v0_enums_device_pb from "../../../../../google/ads/googleads/v0/enums/device_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Ad extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearFinalUrlsList(): void;
  getFinalUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearFinalMobileUrlsList(): void;
  getFinalMobileUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalMobileUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalMobileUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;
  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearUrlCustomParametersList(): void;
  getUrlCustomParametersList(): Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter;

  hasDisplayUrl(): boolean;
  clearDisplayUrl(): void;
  getDisplayUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDisplayUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  getType(): google_ads_googleads_v0_enums_ad_type_pb.AdTypeEnum.AdType;
  setType(value: google_ads_googleads_v0_enums_ad_type_pb.AdTypeEnum.AdType): void;

  hasAddedByGoogleAds(): boolean;
  clearAddedByGoogleAds(): void;
  getAddedByGoogleAds(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAddedByGoogleAds(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getDevicePreference(): google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device;
  setDevicePreference(value: google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTextAd(): boolean;
  clearTextAd(): void;
  getTextAd(): google_ads_googleads_v0_common_ad_type_infos_pb.TextAdInfo | undefined;
  setTextAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.TextAdInfo): void;

  hasExpandedTextAd(): boolean;
  clearExpandedTextAd(): void;
  getExpandedTextAd(): google_ads_googleads_v0_common_ad_type_infos_pb.ExpandedTextAdInfo | undefined;
  setExpandedTextAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.ExpandedTextAdInfo): void;

  hasDynamicSearchAd(): boolean;
  clearDynamicSearchAd(): void;
  getDynamicSearchAd(): google_ads_googleads_v0_common_ad_type_infos_pb.DynamicSearchAdInfo | undefined;
  setDynamicSearchAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.DynamicSearchAdInfo): void;

  hasResponsiveDisplayAd(): boolean;
  clearResponsiveDisplayAd(): void;
  getResponsiveDisplayAd(): google_ads_googleads_v0_common_ad_type_infos_pb.ResponsiveDisplayAdInfo | undefined;
  setResponsiveDisplayAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.ResponsiveDisplayAdInfo): void;

  hasCallOnlyAd(): boolean;
  clearCallOnlyAd(): void;
  getCallOnlyAd(): google_ads_googleads_v0_common_ad_type_infos_pb.CallOnlyAdInfo | undefined;
  setCallOnlyAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.CallOnlyAdInfo): void;

  hasExpandedDynamicSearchAd(): boolean;
  clearExpandedDynamicSearchAd(): void;
  getExpandedDynamicSearchAd(): google_ads_googleads_v0_common_ad_type_infos_pb.ExpandedDynamicSearchAdInfo | undefined;
  setExpandedDynamicSearchAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.ExpandedDynamicSearchAdInfo): void;

  hasHotelAd(): boolean;
  clearHotelAd(): void;
  getHotelAd(): google_ads_googleads_v0_common_ad_type_infos_pb.HotelAdInfo | undefined;
  setHotelAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.HotelAdInfo): void;

  hasShoppingSmartAd(): boolean;
  clearShoppingSmartAd(): void;
  getShoppingSmartAd(): google_ads_googleads_v0_common_ad_type_infos_pb.ShoppingSmartAdInfo | undefined;
  setShoppingSmartAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.ShoppingSmartAdInfo): void;

  hasShoppingProductAd(): boolean;
  clearShoppingProductAd(): void;
  getShoppingProductAd(): google_ads_googleads_v0_common_ad_type_infos_pb.ShoppingProductAdInfo | undefined;
  setShoppingProductAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.ShoppingProductAdInfo): void;

  hasGmailAd(): boolean;
  clearGmailAd(): void;
  getGmailAd(): google_ads_googleads_v0_common_ad_type_infos_pb.GmailAdInfo | undefined;
  setGmailAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.GmailAdInfo): void;

  hasImageAd(): boolean;
  clearImageAd(): void;
  getImageAd(): google_ads_googleads_v0_common_ad_type_infos_pb.ImageAdInfo | undefined;
  setImageAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.ImageAdInfo): void;

  hasVideoAd(): boolean;
  clearVideoAd(): void;
  getVideoAd(): google_ads_googleads_v0_common_ad_type_infos_pb.VideoAdInfo | undefined;
  setVideoAd(value?: google_ads_googleads_v0_common_ad_type_infos_pb.VideoAdInfo): void;

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
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v0_common_custom_parameter_pb.CustomParameter.AsObject>,
    displayUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    type: google_ads_googleads_v0_enums_ad_type_pb.AdTypeEnum.AdType,
    addedByGoogleAds?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    devicePreference: google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    textAd?: google_ads_googleads_v0_common_ad_type_infos_pb.TextAdInfo.AsObject,
    expandedTextAd?: google_ads_googleads_v0_common_ad_type_infos_pb.ExpandedTextAdInfo.AsObject,
    dynamicSearchAd?: google_ads_googleads_v0_common_ad_type_infos_pb.DynamicSearchAdInfo.AsObject,
    responsiveDisplayAd?: google_ads_googleads_v0_common_ad_type_infos_pb.ResponsiveDisplayAdInfo.AsObject,
    callOnlyAd?: google_ads_googleads_v0_common_ad_type_infos_pb.CallOnlyAdInfo.AsObject,
    expandedDynamicSearchAd?: google_ads_googleads_v0_common_ad_type_infos_pb.ExpandedDynamicSearchAdInfo.AsObject,
    hotelAd?: google_ads_googleads_v0_common_ad_type_infos_pb.HotelAdInfo.AsObject,
    shoppingSmartAd?: google_ads_googleads_v0_common_ad_type_infos_pb.ShoppingSmartAdInfo.AsObject,
    shoppingProductAd?: google_ads_googleads_v0_common_ad_type_infos_pb.ShoppingProductAdInfo.AsObject,
    gmailAd?: google_ads_googleads_v0_common_ad_type_infos_pb.GmailAdInfo.AsObject,
    imageAd?: google_ads_googleads_v0_common_ad_type_infos_pb.ImageAdInfo.AsObject,
    videoAd?: google_ads_googleads_v0_common_ad_type_infos_pb.VideoAdInfo.AsObject,
  }

  export enum AdDataCase {
    AD_DATA_NOT_SET = 0,
    TEXT_AD = 6,
    EXPANDED_TEXT_AD = 7,
    DYNAMIC_SEARCH_AD = 8,
    RESPONSIVE_DISPLAY_AD = 9,
    CALL_ONLY_AD = 13,
    EXPANDED_DYNAMIC_SEARCH_AD = 14,
    HOTEL_AD = 15,
    SHOPPING_SMART_AD = 17,
    SHOPPING_PRODUCT_AD = 18,
    GMAIL_AD = 21,
    IMAGE_AD = 22,
    VIDEO_AD = 24,
  }
}

