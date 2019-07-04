// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/criterion_category_availability.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_advertising_channel_sub_type_pb from "../../../../../google/ads/googleads/v2/enums/advertising_channel_sub_type_pb";
import * as google_ads_googleads_v2_enums_advertising_channel_type_pb from "../../../../../google/ads/googleads/v2/enums/advertising_channel_type_pb";
import * as google_ads_googleads_v2_enums_criterion_category_channel_availability_mode_pb from "../../../../../google/ads/googleads/v2/enums/criterion_category_channel_availability_mode_pb";
import * as google_ads_googleads_v2_enums_criterion_category_locale_availability_mode_pb from "../../../../../google/ads/googleads/v2/enums/criterion_category_locale_availability_mode_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CriterionCategoryAvailability extends jspb.Message {
  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): CriterionCategoryChannelAvailability | undefined;
  setChannel(value?: CriterionCategoryChannelAvailability): void;

  clearLocaleList(): void;
  getLocaleList(): Array<CriterionCategoryLocaleAvailability>;
  setLocaleList(value: Array<CriterionCategoryLocaleAvailability>): void;
  addLocale(value?: CriterionCategoryLocaleAvailability, index?: number): CriterionCategoryLocaleAvailability;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryAvailability.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryAvailability): CriterionCategoryAvailability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CriterionCategoryAvailability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryAvailability;
  static deserializeBinaryFromReader(message: CriterionCategoryAvailability, reader: jspb.BinaryReader): CriterionCategoryAvailability;
}

export namespace CriterionCategoryAvailability {
  export type AsObject = {
    channel?: CriterionCategoryChannelAvailability.AsObject,
    localeList: Array<CriterionCategoryLocaleAvailability.AsObject>,
  }
}

export class CriterionCategoryChannelAvailability extends jspb.Message {
  getAvailabilityMode(): google_ads_googleads_v2_enums_criterion_category_channel_availability_mode_pb.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode;
  setAvailabilityMode(value: google_ads_googleads_v2_enums_criterion_category_channel_availability_mode_pb.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode): void;

  getAdvertisingChannelType(): google_ads_googleads_v2_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType;
  setAdvertisingChannelType(value: google_ads_googleads_v2_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType): void;

  clearAdvertisingChannelSubTypeList(): void;
  getAdvertisingChannelSubTypeList(): Array<google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType>;
  setAdvertisingChannelSubTypeList(value: Array<google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType>): void;
  addAdvertisingChannelSubType(value: google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType, index?: number): google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType;

  hasIncludeDefaultChannelSubType(): boolean;
  clearIncludeDefaultChannelSubType(): void;
  getIncludeDefaultChannelSubType(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIncludeDefaultChannelSubType(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryChannelAvailability.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryChannelAvailability): CriterionCategoryChannelAvailability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CriterionCategoryChannelAvailability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryChannelAvailability;
  static deserializeBinaryFromReader(message: CriterionCategoryChannelAvailability, reader: jspb.BinaryReader): CriterionCategoryChannelAvailability;
}

export namespace CriterionCategoryChannelAvailability {
  export type AsObject = {
    availabilityMode: google_ads_googleads_v2_enums_criterion_category_channel_availability_mode_pb.CriterionCategoryChannelAvailabilityModeEnum.CriterionCategoryChannelAvailabilityMode,
    advertisingChannelType: google_ads_googleads_v2_enums_advertising_channel_type_pb.AdvertisingChannelTypeEnum.AdvertisingChannelType,
    advertisingChannelSubTypeList: Array<google_ads_googleads_v2_enums_advertising_channel_sub_type_pb.AdvertisingChannelSubTypeEnum.AdvertisingChannelSubType>,
    includeDefaultChannelSubType?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class CriterionCategoryLocaleAvailability extends jspb.Message {
  getAvailabilityMode(): google_ads_googleads_v2_enums_criterion_category_locale_availability_mode_pb.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode;
  setAvailabilityMode(value: google_ads_googleads_v2_enums_criterion_category_locale_availability_mode_pb.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLanguageCode(): boolean;
  clearLanguageCode(): void;
  getLanguageCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionCategoryLocaleAvailability.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionCategoryLocaleAvailability): CriterionCategoryLocaleAvailability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CriterionCategoryLocaleAvailability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionCategoryLocaleAvailability;
  static deserializeBinaryFromReader(message: CriterionCategoryLocaleAvailability, reader: jspb.BinaryReader): CriterionCategoryLocaleAvailability;
}

export namespace CriterionCategoryLocaleAvailability {
  export type AsObject = {
    availabilityMode: google_ads_googleads_v2_enums_criterion_category_locale_availability_mode_pb.CriterionCategoryLocaleAvailabilityModeEnum.CriterionCategoryLocaleAvailabilityMode,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    languageCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

