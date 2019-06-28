// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/extensions.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_custom_parameter_pb from "../../../../../google/ads/googleads/v2/common/custom_parameter_pb";
import * as google_ads_googleads_v2_common_feed_common_pb from "../../../../../google/ads/googleads/v2/common/feed_common_pb";
import * as google_ads_googleads_v2_enums_app_store_pb from "../../../../../google/ads/googleads/v2/enums/app_store_pb";
import * as google_ads_googleads_v2_enums_call_conversion_reporting_state_pb from "../../../../../google/ads/googleads/v2/enums/call_conversion_reporting_state_pb";
import * as google_ads_googleads_v2_enums_price_extension_price_qualifier_pb from "../../../../../google/ads/googleads/v2/enums/price_extension_price_qualifier_pb";
import * as google_ads_googleads_v2_enums_price_extension_price_unit_pb from "../../../../../google/ads/googleads/v2/enums/price_extension_price_unit_pb";
import * as google_ads_googleads_v2_enums_price_extension_type_pb from "../../../../../google/ads/googleads/v2/enums/price_extension_type_pb";
import * as google_ads_googleads_v2_enums_promotion_extension_discount_modifier_pb from "../../../../../google/ads/googleads/v2/enums/promotion_extension_discount_modifier_pb";
import * as google_ads_googleads_v2_enums_promotion_extension_occasion_pb from "../../../../../google/ads/googleads/v2/enums/promotion_extension_occasion_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AppFeedItem extends jspb.Message {
  hasLinkText(): boolean;
  clearLinkText(): void;
  getLinkText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLinkText(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAppId(): boolean;
  clearAppId(): void;
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getAppStore(): google_ads_googleads_v2_enums_app_store_pb.AppStoreEnum.AppStore;
  setAppStore(value: google_ads_googleads_v2_enums_app_store_pb.AppStoreEnum.AppStore): void;

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
  getUrlCustomParametersList(): Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;

  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;
  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: AppFeedItem): AppFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppFeedItem;
  static deserializeBinaryFromReader(message: AppFeedItem, reader: jspb.BinaryReader): AppFeedItem;
}

export namespace AppFeedItem {
  export type AsObject = {
    linkText?: google_protobuf_wrappers_pb.StringValue.AsObject,
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    appStore: google_ads_googleads_v2_enums_app_store_pb.AppStoreEnum.AppStore,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.AsObject>,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CallFeedItem extends jspb.Message {
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;
  getPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCallTrackingEnabled(): boolean;
  clearCallTrackingEnabled(): void;
  getCallTrackingEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallTrackingEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasCallConversionAction(): boolean;
  clearCallConversionAction(): void;
  getCallConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCallConversionTrackingDisabled(): boolean;
  clearCallConversionTrackingDisabled(): void;
  getCallConversionTrackingDisabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallConversionTrackingDisabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  getCallConversionReportingState(): google_ads_googleads_v2_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState;
  setCallConversionReportingState(value: google_ads_googleads_v2_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: CallFeedItem): CallFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallFeedItem;
  static deserializeBinaryFromReader(message: CallFeedItem, reader: jspb.BinaryReader): CallFeedItem;
}

export namespace CallFeedItem {
  export type AsObject = {
    phoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callTrackingEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callConversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callConversionTrackingDisabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    callConversionReportingState: google_ads_googleads_v2_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState,
  }
}

export class CalloutFeedItem extends jspb.Message {
  hasCalloutText(): boolean;
  clearCalloutText(): void;
  getCalloutText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCalloutText(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalloutFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: CalloutFeedItem): CalloutFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalloutFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalloutFeedItem;
  static deserializeBinaryFromReader(message: CalloutFeedItem, reader: jspb.BinaryReader): CalloutFeedItem;
}

export namespace CalloutFeedItem {
  export type AsObject = {
    calloutText?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class LocationFeedItem extends jspb.Message {
  hasBusinessName(): boolean;
  clearBusinessName(): void;
  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAddressLine1(): boolean;
  clearAddressLine1(): void;
  getAddressLine1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAddressLine1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAddressLine2(): boolean;
  clearAddressLine2(): void;
  getAddressLine2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAddressLine2(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCity(): boolean;
  clearCity(): void;
  getCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCity(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProvince(): boolean;
  clearProvince(): void;
  getProvince(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProvince(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostalCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;
  getPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: LocationFeedItem): LocationFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationFeedItem;
  static deserializeBinaryFromReader(message: LocationFeedItem, reader: jspb.BinaryReader): LocationFeedItem;
}

export namespace LocationFeedItem {
  export type AsObject = {
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    addressLine1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    addressLine2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    city?: google_protobuf_wrappers_pb.StringValue.AsObject,
    province?: google_protobuf_wrappers_pb.StringValue.AsObject,
    postalCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    phoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class AffiliateLocationFeedItem extends jspb.Message {
  hasBusinessName(): boolean;
  clearBusinessName(): void;
  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAddressLine1(): boolean;
  clearAddressLine1(): void;
  getAddressLine1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAddressLine1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAddressLine2(): boolean;
  clearAddressLine2(): void;
  getAddressLine2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAddressLine2(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCity(): boolean;
  clearCity(): void;
  getCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCity(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProvince(): boolean;
  clearProvince(): void;
  getProvince(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProvince(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostalCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;
  getPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasChainId(): boolean;
  clearChainId(): void;
  getChainId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setChainId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasChainName(): boolean;
  clearChainName(): void;
  getChainName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setChainName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AffiliateLocationFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: AffiliateLocationFeedItem): AffiliateLocationFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AffiliateLocationFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AffiliateLocationFeedItem;
  static deserializeBinaryFromReader(message: AffiliateLocationFeedItem, reader: jspb.BinaryReader): AffiliateLocationFeedItem;
}

export namespace AffiliateLocationFeedItem {
  export type AsObject = {
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    addressLine1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    addressLine2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    city?: google_protobuf_wrappers_pb.StringValue.AsObject,
    province?: google_protobuf_wrappers_pb.StringValue.AsObject,
    postalCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    phoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    chainId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    chainName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TextMessageFeedItem extends jspb.Message {
  hasBusinessName(): boolean;
  clearBusinessName(): void;
  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;
  getPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasText(): boolean;
  clearText(): void;
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasExtensionText(): boolean;
  clearExtensionText(): void;
  getExtensionText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExtensionText(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextMessageFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: TextMessageFeedItem): TextMessageFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextMessageFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextMessageFeedItem;
  static deserializeBinaryFromReader(message: TextMessageFeedItem, reader: jspb.BinaryReader): TextMessageFeedItem;
}

export namespace TextMessageFeedItem {
  export type AsObject = {
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    phoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    extensionText?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class PriceFeedItem extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_price_extension_type_pb.PriceExtensionTypeEnum.PriceExtensionType;
  setType(value: google_ads_googleads_v2_enums_price_extension_type_pb.PriceExtensionTypeEnum.PriceExtensionType): void;

  getPriceQualifier(): google_ads_googleads_v2_enums_price_extension_price_qualifier_pb.PriceExtensionPriceQualifierEnum.PriceExtensionPriceQualifier;
  setPriceQualifier(value: google_ads_googleads_v2_enums_price_extension_price_qualifier_pb.PriceExtensionPriceQualifierEnum.PriceExtensionPriceQualifier): void;

  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;
  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLanguageCode(): boolean;
  clearLanguageCode(): void;
  getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearPriceOfferingsList(): void;
  getPriceOfferingsList(): Array<PriceOffer>;
  setPriceOfferingsList(value: Array<PriceOffer>): void;
  addPriceOfferings(value?: PriceOffer, index?: number): PriceOffer;

  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;
  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: PriceFeedItem): PriceFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceFeedItem;
  static deserializeBinaryFromReader(message: PriceFeedItem, reader: jspb.BinaryReader): PriceFeedItem;
}

export namespace PriceFeedItem {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_price_extension_type_pb.PriceExtensionTypeEnum.PriceExtensionType,
    priceQualifier: google_ads_googleads_v2_enums_price_extension_price_qualifier_pb.PriceExtensionPriceQualifierEnum.PriceExtensionPriceQualifier,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    priceOfferingsList: Array<PriceOffer.AsObject>,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class PriceOffer extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeader(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): google_ads_googleads_v2_common_feed_common_pb.Money | undefined;
  setPrice(value?: google_ads_googleads_v2_common_feed_common_pb.Money): void;

  getUnit(): google_ads_googleads_v2_enums_price_extension_price_unit_pb.PriceExtensionPriceUnitEnum.PriceExtensionPriceUnit;
  setUnit(value: google_ads_googleads_v2_enums_price_extension_price_unit_pb.PriceExtensionPriceUnitEnum.PriceExtensionPriceUnit): void;

  clearFinalUrlsList(): void;
  getFinalUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearFinalMobileUrlsList(): void;
  getFinalMobileUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalMobileUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalMobileUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PriceOffer.AsObject;
  static toObject(includeInstance: boolean, msg: PriceOffer): PriceOffer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PriceOffer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PriceOffer;
  static deserializeBinaryFromReader(message: PriceOffer, reader: jspb.BinaryReader): PriceOffer;
}

export namespace PriceOffer {
  export type AsObject = {
    header?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    price?: google_ads_googleads_v2_common_feed_common_pb.Money.AsObject,
    unit: google_ads_googleads_v2_enums_price_extension_price_unit_pb.PriceExtensionPriceUnitEnum.PriceExtensionPriceUnit,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

export class PromotionFeedItem extends jspb.Message {
  hasPromotionTarget(): boolean;
  clearPromotionTarget(): void;
  getPromotionTarget(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPromotionTarget(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDiscountModifier(): google_ads_googleads_v2_enums_promotion_extension_discount_modifier_pb.PromotionExtensionDiscountModifierEnum.PromotionExtensionDiscountModifier;
  setDiscountModifier(value: google_ads_googleads_v2_enums_promotion_extension_discount_modifier_pb.PromotionExtensionDiscountModifierEnum.PromotionExtensionDiscountModifier): void;

  hasPromotionStartDate(): boolean;
  clearPromotionStartDate(): void;
  getPromotionStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPromotionStartDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPromotionEndDate(): boolean;
  clearPromotionEndDate(): void;
  getPromotionEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPromotionEndDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  getOccasion(): google_ads_googleads_v2_enums_promotion_extension_occasion_pb.PromotionExtensionOccasionEnum.PromotionExtensionOccasion;
  setOccasion(value: google_ads_googleads_v2_enums_promotion_extension_occasion_pb.PromotionExtensionOccasionEnum.PromotionExtensionOccasion): void;

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
  getUrlCustomParametersList(): Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;

  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;
  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLanguageCode(): boolean;
  clearLanguageCode(): void;
  getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPercentOff(): boolean;
  clearPercentOff(): void;
  getPercentOff(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPercentOff(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMoneyAmountOff(): boolean;
  clearMoneyAmountOff(): void;
  getMoneyAmountOff(): google_ads_googleads_v2_common_feed_common_pb.Money | undefined;
  setMoneyAmountOff(value?: google_ads_googleads_v2_common_feed_common_pb.Money): void;

  hasPromotionCode(): boolean;
  clearPromotionCode(): void;
  getPromotionCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPromotionCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOrdersOverAmount(): boolean;
  clearOrdersOverAmount(): void;
  getOrdersOverAmount(): google_ads_googleads_v2_common_feed_common_pb.Money | undefined;
  setOrdersOverAmount(value?: google_ads_googleads_v2_common_feed_common_pb.Money): void;

  getDiscountTypeCase(): PromotionFeedItem.DiscountTypeCase;
  getPromotionTriggerCase(): PromotionFeedItem.PromotionTriggerCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionFeedItem): PromotionFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionFeedItem;
  static deserializeBinaryFromReader(message: PromotionFeedItem, reader: jspb.BinaryReader): PromotionFeedItem;
}

export namespace PromotionFeedItem {
  export type AsObject = {
    promotionTarget?: google_protobuf_wrappers_pb.StringValue.AsObject,
    discountModifier: google_ads_googleads_v2_enums_promotion_extension_discount_modifier_pb.PromotionExtensionDiscountModifierEnum.PromotionExtensionDiscountModifier,
    promotionStartDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    promotionEndDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    occasion: google_ads_googleads_v2_enums_promotion_extension_occasion_pb.PromotionExtensionOccasionEnum.PromotionExtensionOccasion,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.AsObject>,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    percentOff?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    moneyAmountOff?: google_ads_googleads_v2_common_feed_common_pb.Money.AsObject,
    promotionCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ordersOverAmount?: google_ads_googleads_v2_common_feed_common_pb.Money.AsObject,
  }

  export enum DiscountTypeCase {
    DISCOUNT_TYPE_NOT_SET = 0,
    PERCENT_OFF = 3,
    MONEY_AMOUNT_OFF = 4,
  }

  export enum PromotionTriggerCase {
    PROMOTION_TRIGGER_NOT_SET = 0,
    PROMOTION_CODE = 5,
    ORDERS_OVER_AMOUNT = 6,
  }
}

export class StructuredSnippetFeedItem extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeader(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearValuesList(): void;
  getValuesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setValuesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addValues(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructuredSnippetFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: StructuredSnippetFeedItem): StructuredSnippetFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructuredSnippetFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructuredSnippetFeedItem;
  static deserializeBinaryFromReader(message: StructuredSnippetFeedItem, reader: jspb.BinaryReader): StructuredSnippetFeedItem;
}

export namespace StructuredSnippetFeedItem {
  export type AsObject = {
    header?: google_protobuf_wrappers_pb.StringValue.AsObject,
    valuesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

export class SitelinkFeedItem extends jspb.Message {
  hasLinkText(): boolean;
  clearLinkText(): void;
  getLinkText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLinkText(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLine1(): boolean;
  clearLine1(): void;
  getLine1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLine1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLine2(): boolean;
  clearLine2(): void;
  getLine2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLine2(value?: google_protobuf_wrappers_pb.StringValue): void;

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
  getUrlCustomParametersList(): Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter;

  hasFinalUrlSuffix(): boolean;
  clearFinalUrlSuffix(): void;
  getFinalUrlSuffix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFinalUrlSuffix(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SitelinkFeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: SitelinkFeedItem): SitelinkFeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SitelinkFeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SitelinkFeedItem;
  static deserializeBinaryFromReader(message: SitelinkFeedItem, reader: jspb.BinaryReader): SitelinkFeedItem;
}

export namespace SitelinkFeedItem {
  export type AsObject = {
    linkText?: google_protobuf_wrappers_pb.StringValue.AsObject,
    line1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    line2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    urlCustomParametersList: Array<google_ads_googleads_v2_common_custom_parameter_pb.CustomParameter.AsObject>,
    finalUrlSuffix?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

