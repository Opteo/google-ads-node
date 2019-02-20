// package: google.ads.googleads.v0.common
// file: google/ads/googleads/v0/common/ad_type_infos.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v0_enums_call_conversion_reporting_state_pb from "../../../../../google/ads/googleads/v0/enums/call_conversion_reporting_state_pb";
import * as google_ads_googleads_v0_enums_display_ad_format_setting_pb from "../../../../../google/ads/googleads/v0/enums/display_ad_format_setting_pb";
import * as google_ads_googleads_v0_enums_mime_type_pb from "../../../../../google/ads/googleads/v0/enums/mime_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class TextAdInfo extends jspb.Message {
  hasHeadline(): boolean;
  clearHeadline(): void;
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription1(): boolean;
  clearDescription1(): void;
  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription2(): boolean;
  clearDescription2(): void;
  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TextAdInfo): TextAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextAdInfo;
  static deserializeBinaryFromReader(message: TextAdInfo, reader: jspb.BinaryReader): TextAdInfo;
}

export namespace TextAdInfo {
  export type AsObject = {
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ExpandedTextAdInfo extends jspb.Message {
  hasHeadlinePart1(): boolean;
  clearHeadlinePart1(): void;
  getHeadlinePart1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHeadlinePart2(): boolean;
  clearHeadlinePart2(): void;
  getHeadlinePart2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart2(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHeadlinePart3(): boolean;
  clearHeadlinePart3(): void;
  getHeadlinePart3(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadlinePart3(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription2(): boolean;
  clearDescription2(): void;
  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPath1(): boolean;
  clearPath1(): void;
  getPath1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPath2(): boolean;
  clearPath2(): void;
  getPath2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPath2(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpandedTextAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpandedTextAdInfo): ExpandedTextAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpandedTextAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpandedTextAdInfo;
  static deserializeBinaryFromReader(message: ExpandedTextAdInfo, reader: jspb.BinaryReader): ExpandedTextAdInfo;
}

export namespace ExpandedTextAdInfo {
  export type AsObject = {
    headlinePart1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headlinePart2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    headlinePart3?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    path1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    path2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class DynamicSearchAdInfo extends jspb.Message {
  hasDescription1(): boolean;
  clearDescription1(): void;
  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription2(): boolean;
  clearDescription2(): void;
  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DynamicSearchAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DynamicSearchAdInfo): DynamicSearchAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DynamicSearchAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DynamicSearchAdInfo;
  static deserializeBinaryFromReader(message: DynamicSearchAdInfo, reader: jspb.BinaryReader): DynamicSearchAdInfo;
}

export namespace DynamicSearchAdInfo {
  export type AsObject = {
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ResponsiveDisplayAdInfo extends jspb.Message {
  hasShortHeadline(): boolean;
  clearShortHeadline(): void;
  getShortHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setShortHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLongHeadline(): boolean;
  clearLongHeadline(): void;
  getLongHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasBusinessName(): boolean;
  clearBusinessName(): void;
  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAllowFlexibleColor(): boolean;
  clearAllowFlexibleColor(): void;
  getAllowFlexibleColor(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setAllowFlexibleColor(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasAccentColor(): boolean;
  clearAccentColor(): void;
  getAccentColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAccentColor(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMainColor(): boolean;
  clearMainColor(): void;
  getMainColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMainColor(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCallToActionText(): boolean;
  clearCallToActionText(): void;
  getCallToActionText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCallToActionText(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLogoImage(): boolean;
  clearLogoImage(): void;
  getLogoImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLogoImage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSquareLogoImage(): boolean;
  clearSquareLogoImage(): void;
  getSquareLogoImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSquareLogoImage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMarketingImage(): boolean;
  clearMarketingImage(): void;
  getMarketingImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSquareMarketingImage(): boolean;
  clearSquareMarketingImage(): void;
  getSquareMarketingImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSquareMarketingImage(value?: google_protobuf_wrappers_pb.StringValue): void;

  getFormatSetting(): google_ads_googleads_v0_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting;
  setFormatSetting(value: google_ads_googleads_v0_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting): void;

  hasPricePrefix(): boolean;
  clearPricePrefix(): void;
  getPricePrefix(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPricePrefix(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPromoText(): boolean;
  clearPromoText(): void;
  getPromoText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPromoText(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponsiveDisplayAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResponsiveDisplayAdInfo): ResponsiveDisplayAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponsiveDisplayAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponsiveDisplayAdInfo;
  static deserializeBinaryFromReader(message: ResponsiveDisplayAdInfo, reader: jspb.BinaryReader): ResponsiveDisplayAdInfo;
}

export namespace ResponsiveDisplayAdInfo {
  export type AsObject = {
    shortHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    longHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    allowFlexibleColor?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    accentColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mainColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callToActionText?: google_protobuf_wrappers_pb.StringValue.AsObject,
    logoImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    squareLogoImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    squareMarketingImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    formatSetting: google_ads_googleads_v0_enums_display_ad_format_setting_pb.DisplayAdFormatSettingEnum.DisplayAdFormatSetting,
    pricePrefix?: google_protobuf_wrappers_pb.StringValue.AsObject,
    promoText?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CallOnlyAdInfo extends jspb.Message {
  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPhoneNumber(): boolean;
  clearPhoneNumber(): void;
  getPhoneNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasBusinessName(): boolean;
  clearBusinessName(): void;
  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription1(): boolean;
  clearDescription1(): void;
  getDescription1(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription1(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription2(): boolean;
  clearDescription2(): void;
  getDescription2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription2(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCallTracked(): boolean;
  clearCallTracked(): void;
  getCallTracked(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setCallTracked(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasDisableCallConversion(): boolean;
  clearDisableCallConversion(): void;
  getDisableCallConversion(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setDisableCallConversion(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasPhoneNumberVerificationUrl(): boolean;
  clearPhoneNumberVerificationUrl(): void;
  getPhoneNumberVerificationUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPhoneNumberVerificationUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasConversionAction(): boolean;
  clearConversionAction(): void;
  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  getConversionReportingState(): google_ads_googleads_v0_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState;
  setConversionReportingState(value: google_ads_googleads_v0_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallOnlyAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CallOnlyAdInfo): CallOnlyAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallOnlyAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallOnlyAdInfo;
  static deserializeBinaryFromReader(message: CallOnlyAdInfo, reader: jspb.BinaryReader): CallOnlyAdInfo;
}

export namespace CallOnlyAdInfo {
  export type AsObject = {
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    phoneNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description1?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    callTracked?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    disableCallConversion?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    phoneNumberVerificationUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conversionReportingState: google_ads_googleads_v0_enums_call_conversion_reporting_state_pb.CallConversionReportingStateEnum.CallConversionReportingState,
  }
}

export class ExpandedDynamicSearchAdInfo extends jspb.Message {
  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpandedDynamicSearchAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpandedDynamicSearchAdInfo): ExpandedDynamicSearchAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpandedDynamicSearchAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpandedDynamicSearchAdInfo;
  static deserializeBinaryFromReader(message: ExpandedDynamicSearchAdInfo, reader: jspb.BinaryReader): ExpandedDynamicSearchAdInfo;
}

export namespace ExpandedDynamicSearchAdInfo {
  export type AsObject = {
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelAdInfo): HotelAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelAdInfo;
  static deserializeBinaryFromReader(message: HotelAdInfo, reader: jspb.BinaryReader): HotelAdInfo;
}

export namespace HotelAdInfo {
  export type AsObject = {
  }
}

export class ShoppingSmartAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShoppingSmartAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShoppingSmartAdInfo): ShoppingSmartAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShoppingSmartAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShoppingSmartAdInfo;
  static deserializeBinaryFromReader(message: ShoppingSmartAdInfo, reader: jspb.BinaryReader): ShoppingSmartAdInfo;
}

export namespace ShoppingSmartAdInfo {
  export type AsObject = {
  }
}

export class ShoppingProductAdInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShoppingProductAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ShoppingProductAdInfo): ShoppingProductAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShoppingProductAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShoppingProductAdInfo;
  static deserializeBinaryFromReader(message: ShoppingProductAdInfo, reader: jspb.BinaryReader): ShoppingProductAdInfo;
}

export namespace ShoppingProductAdInfo {
  export type AsObject = {
  }
}

export class GmailAdInfo extends jspb.Message {
  hasTeaser(): boolean;
  clearTeaser(): void;
  getTeaser(): GmailTeaser | undefined;
  setTeaser(value?: GmailTeaser): void;

  hasHeaderImage(): boolean;
  clearHeaderImage(): void;
  getHeaderImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeaderImage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMarketingImage(): boolean;
  clearMarketingImage(): void;
  getMarketingImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImage(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMarketingImageHeadline(): boolean;
  clearMarketingImageHeadline(): void;
  getMarketingImageHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImageHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMarketingImageDescription(): boolean;
  clearMarketingImageDescription(): void;
  getMarketingImageDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMarketingImageDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMarketingImageDisplayCallToAction(): boolean;
  clearMarketingImageDisplayCallToAction(): void;
  getMarketingImageDisplayCallToAction(): DisplayCallToAction | undefined;
  setMarketingImageDisplayCallToAction(value?: DisplayCallToAction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GmailAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GmailAdInfo): GmailAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GmailAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GmailAdInfo;
  static deserializeBinaryFromReader(message: GmailAdInfo, reader: jspb.BinaryReader): GmailAdInfo;
}

export namespace GmailAdInfo {
  export type AsObject = {
    teaser?: GmailTeaser.AsObject,
    headerImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImageHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImageDescription?: google_protobuf_wrappers_pb.StringValue.AsObject,
    marketingImageDisplayCallToAction?: DisplayCallToAction.AsObject,
  }
}

export class GmailTeaser extends jspb.Message {
  hasHeadline(): boolean;
  clearHeadline(): void;
  getHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasBusinessName(): boolean;
  clearBusinessName(): void;
  getBusinessName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBusinessName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLogoImage(): boolean;
  clearLogoImage(): void;
  getLogoImage(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLogoImage(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GmailTeaser.AsObject;
  static toObject(includeInstance: boolean, msg: GmailTeaser): GmailTeaser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GmailTeaser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GmailTeaser;
  static deserializeBinaryFromReader(message: GmailTeaser, reader: jspb.BinaryReader): GmailTeaser;
}

export namespace GmailTeaser {
  export type AsObject = {
    headline?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    businessName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    logoImage?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class DisplayCallToAction extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTextColor(): boolean;
  clearTextColor(): void;
  getTextColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTextColor(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayCallToAction.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayCallToAction): DisplayCallToAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisplayCallToAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayCallToAction;
  static deserializeBinaryFromReader(message: DisplayCallToAction, reader: jspb.BinaryReader): DisplayCallToAction;
}

export namespace DisplayCallToAction {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    textColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ImageAdInfo extends jspb.Message {
  hasPixelWidth(): boolean;
  clearPixelWidth(): void;
  getPixelWidth(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPixelWidth(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPixelHeight(): boolean;
  clearPixelHeight(): void;
  getPixelHeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPixelHeight(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasImageUrl(): boolean;
  clearImageUrl(): void;
  getImageUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setImageUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPreviewPixelWidth(): boolean;
  clearPreviewPixelWidth(): void;
  getPreviewPixelWidth(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPreviewPixelWidth(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPreviewPixelHeight(): boolean;
  clearPreviewPixelHeight(): void;
  getPreviewPixelHeight(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setPreviewPixelHeight(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPreviewImageUrl(): boolean;
  clearPreviewImageUrl(): void;
  getPreviewImageUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPreviewImageUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMimeType(): google_ads_googleads_v0_enums_mime_type_pb.MimeTypeEnum.MimeType;
  setMimeType(value: google_ads_googleads_v0_enums_mime_type_pb.MimeTypeEnum.MimeType): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMediaFile(): boolean;
  clearMediaFile(): void;
  getMediaFile(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMediaFile(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_wrappers_pb.BytesValue | undefined;
  setData(value?: google_protobuf_wrappers_pb.BytesValue): void;

  getImageCase(): ImageAdInfo.ImageCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ImageAdInfo): ImageAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageAdInfo;
  static deserializeBinaryFromReader(message: ImageAdInfo, reader: jspb.BinaryReader): ImageAdInfo;
}

export namespace ImageAdInfo {
  export type AsObject = {
    pixelWidth?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    pixelHeight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    imageUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    previewPixelWidth?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    previewPixelHeight?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    previewImageUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mimeType: google_ads_googleads_v0_enums_mime_type_pb.MimeTypeEnum.MimeType,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mediaFile?: google_protobuf_wrappers_pb.StringValue.AsObject,
    data?: google_protobuf_wrappers_pb.BytesValue.AsObject,
  }

  export enum ImageCase {
    IMAGE_NOT_SET = 0,
    MEDIA_FILE = 1,
    DATA = 2,
  }
}

export class VideoTrueViewInStreamAdInfo extends jspb.Message {
  hasActionButtonLabel(): boolean;
  clearActionButtonLabel(): void;
  getActionButtonLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setActionButtonLabel(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasActionHeadline(): boolean;
  clearActionHeadline(): void;
  getActionHeadline(): google_protobuf_wrappers_pb.StringValue | undefined;
  setActionHeadline(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoTrueViewInStreamAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoTrueViewInStreamAdInfo): VideoTrueViewInStreamAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoTrueViewInStreamAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoTrueViewInStreamAdInfo;
  static deserializeBinaryFromReader(message: VideoTrueViewInStreamAdInfo, reader: jspb.BinaryReader): VideoTrueViewInStreamAdInfo;
}

export namespace VideoTrueViewInStreamAdInfo {
  export type AsObject = {
    actionButtonLabel?: google_protobuf_wrappers_pb.StringValue.AsObject,
    actionHeadline?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class VideoAdInfo extends jspb.Message {
  hasMediaFile(): boolean;
  clearMediaFile(): void;
  getMediaFile(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMediaFile(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasInStream(): boolean;
  clearInStream(): void;
  getInStream(): VideoTrueViewInStreamAdInfo | undefined;
  setInStream(value?: VideoTrueViewInStreamAdInfo): void;

  getFormatCase(): VideoAdInfo.FormatCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoAdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: VideoAdInfo): VideoAdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VideoAdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoAdInfo;
  static deserializeBinaryFromReader(message: VideoAdInfo, reader: jspb.BinaryReader): VideoAdInfo;
}

export namespace VideoAdInfo {
  export type AsObject = {
    mediaFile?: google_protobuf_wrappers_pb.StringValue.AsObject,
    inStream?: VideoTrueViewInStreamAdInfo.AsObject,
  }

  export enum FormatCase {
    FORMAT_NOT_SET = 0,
    IN_STREAM = 2,
  }
}

