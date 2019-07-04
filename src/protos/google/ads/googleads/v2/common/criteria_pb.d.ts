// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/criteria.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_age_range_type_pb from "../../../../../google/ads/googleads/v2/enums/age_range_type_pb";
import * as google_ads_googleads_v2_enums_app_payment_model_type_pb from "../../../../../google/ads/googleads/v2/enums/app_payment_model_type_pb";
import * as google_ads_googleads_v2_enums_content_label_type_pb from "../../../../../google/ads/googleads/v2/enums/content_label_type_pb";
import * as google_ads_googleads_v2_enums_day_of_week_pb from "../../../../../google/ads/googleads/v2/enums/day_of_week_pb";
import * as google_ads_googleads_v2_enums_device_pb from "../../../../../google/ads/googleads/v2/enums/device_pb";
import * as google_ads_googleads_v2_enums_gender_type_pb from "../../../../../google/ads/googleads/v2/enums/gender_type_pb";
import * as google_ads_googleads_v2_enums_hotel_date_selection_type_pb from "../../../../../google/ads/googleads/v2/enums/hotel_date_selection_type_pb";
import * as google_ads_googleads_v2_enums_income_range_type_pb from "../../../../../google/ads/googleads/v2/enums/income_range_type_pb";
import * as google_ads_googleads_v2_enums_interaction_type_pb from "../../../../../google/ads/googleads/v2/enums/interaction_type_pb";
import * as google_ads_googleads_v2_enums_keyword_match_type_pb from "../../../../../google/ads/googleads/v2/enums/keyword_match_type_pb";
import * as google_ads_googleads_v2_enums_listing_custom_attribute_index_pb from "../../../../../google/ads/googleads/v2/enums/listing_custom_attribute_index_pb";
import * as google_ads_googleads_v2_enums_listing_group_type_pb from "../../../../../google/ads/googleads/v2/enums/listing_group_type_pb";
import * as google_ads_googleads_v2_enums_location_group_radius_units_pb from "../../../../../google/ads/googleads/v2/enums/location_group_radius_units_pb";
import * as google_ads_googleads_v2_enums_minute_of_hour_pb from "../../../../../google/ads/googleads/v2/enums/minute_of_hour_pb";
import * as google_ads_googleads_v2_enums_parental_status_type_pb from "../../../../../google/ads/googleads/v2/enums/parental_status_type_pb";
import * as google_ads_googleads_v2_enums_preferred_content_type_pb from "../../../../../google/ads/googleads/v2/enums/preferred_content_type_pb";
import * as google_ads_googleads_v2_enums_product_bidding_category_level_pb from "../../../../../google/ads/googleads/v2/enums/product_bidding_category_level_pb";
import * as google_ads_googleads_v2_enums_product_channel_pb from "../../../../../google/ads/googleads/v2/enums/product_channel_pb";
import * as google_ads_googleads_v2_enums_product_channel_exclusivity_pb from "../../../../../google/ads/googleads/v2/enums/product_channel_exclusivity_pb";
import * as google_ads_googleads_v2_enums_product_condition_pb from "../../../../../google/ads/googleads/v2/enums/product_condition_pb";
import * as google_ads_googleads_v2_enums_product_type_level_pb from "../../../../../google/ads/googleads/v2/enums/product_type_level_pb";
import * as google_ads_googleads_v2_enums_proximity_radius_units_pb from "../../../../../google/ads/googleads/v2/enums/proximity_radius_units_pb";
import * as google_ads_googleads_v2_enums_webpage_condition_operand_pb from "../../../../../google/ads/googleads/v2/enums/webpage_condition_operand_pb";
import * as google_ads_googleads_v2_enums_webpage_condition_operator_pb from "../../../../../google/ads/googleads/v2/enums/webpage_condition_operator_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordInfo extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMatchType(): google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
  setMatchType(value: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordInfo.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordInfo): KeywordInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordInfo;
  static deserializeBinaryFromReader(message: KeywordInfo, reader: jspb.BinaryReader): KeywordInfo;
}

export namespace KeywordInfo {
  export type AsObject = {
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    matchType: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
  }
}

export class PlacementInfo extends jspb.Message {
  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlacementInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlacementInfo): PlacementInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlacementInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlacementInfo;
  static deserializeBinaryFromReader(message: PlacementInfo, reader: jspb.BinaryReader): PlacementInfo;
}

export namespace PlacementInfo {
  export type AsObject = {
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class MobileAppCategoryInfo extends jspb.Message {
  hasMobileAppCategoryConstant(): boolean;
  clearMobileAppCategoryConstant(): void;
  getMobileAppCategoryConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobileAppCategoryConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileAppCategoryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MobileAppCategoryInfo): MobileAppCategoryInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileAppCategoryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileAppCategoryInfo;
  static deserializeBinaryFromReader(message: MobileAppCategoryInfo, reader: jspb.BinaryReader): MobileAppCategoryInfo;
}

export namespace MobileAppCategoryInfo {
  export type AsObject = {
    mobileAppCategoryConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class MobileApplicationInfo extends jspb.Message {
  hasAppId(): boolean;
  clearAppId(): void;
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileApplicationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MobileApplicationInfo): MobileApplicationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileApplicationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileApplicationInfo;
  static deserializeBinaryFromReader(message: MobileApplicationInfo, reader: jspb.BinaryReader): MobileApplicationInfo;
}

export namespace MobileApplicationInfo {
  export type AsObject = {
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class LocationInfo extends jspb.Message {
  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;
  getGeoTargetConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationInfo): LocationInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationInfo;
  static deserializeBinaryFromReader(message: LocationInfo, reader: jspb.BinaryReader): LocationInfo;
}

export namespace LocationInfo {
  export type AsObject = {
    geoTargetConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class DeviceInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device;
  setType(value: google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceInfo): DeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceInfo;
  static deserializeBinaryFromReader(message: DeviceInfo, reader: jspb.BinaryReader): DeviceInfo;
}

export namespace DeviceInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_device_pb.DeviceEnum.Device,
  }
}

export class PreferredContentInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_preferred_content_type_pb.PreferredContentTypeEnum.PreferredContentType;
  setType(value: google_ads_googleads_v2_enums_preferred_content_type_pb.PreferredContentTypeEnum.PreferredContentType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferredContentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PreferredContentInfo): PreferredContentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreferredContentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferredContentInfo;
  static deserializeBinaryFromReader(message: PreferredContentInfo, reader: jspb.BinaryReader): PreferredContentInfo;
}

export namespace PreferredContentInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_preferred_content_type_pb.PreferredContentTypeEnum.PreferredContentType,
  }
}

export class ListingGroupInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType;
  setType(value: google_ads_googleads_v2_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType): void;

  hasCaseValue(): boolean;
  clearCaseValue(): void;
  getCaseValue(): ListingDimensionInfo | undefined;
  setCaseValue(value?: ListingDimensionInfo): void;

  hasParentAdGroupCriterion(): boolean;
  clearParentAdGroupCriterion(): void;
  getParentAdGroupCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setParentAdGroupCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingGroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingGroupInfo): ListingGroupInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListingGroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingGroupInfo;
  static deserializeBinaryFromReader(message: ListingGroupInfo, reader: jspb.BinaryReader): ListingGroupInfo;
}

export namespace ListingGroupInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_listing_group_type_pb.ListingGroupTypeEnum.ListingGroupType,
    caseValue?: ListingDimensionInfo.AsObject,
    parentAdGroupCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListingScopeInfo extends jspb.Message {
  clearDimensionsList(): void;
  getDimensionsList(): Array<ListingDimensionInfo>;
  setDimensionsList(value: Array<ListingDimensionInfo>): void;
  addDimensions(value?: ListingDimensionInfo, index?: number): ListingDimensionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingScopeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingScopeInfo): ListingScopeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListingScopeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingScopeInfo;
  static deserializeBinaryFromReader(message: ListingScopeInfo, reader: jspb.BinaryReader): ListingScopeInfo;
}

export namespace ListingScopeInfo {
  export type AsObject = {
    dimensionsList: Array<ListingDimensionInfo.AsObject>,
  }
}

export class ListingDimensionInfo extends jspb.Message {
  hasListingBrand(): boolean;
  clearListingBrand(): void;
  getListingBrand(): ListingBrandInfo | undefined;
  setListingBrand(value?: ListingBrandInfo): void;

  hasHotelId(): boolean;
  clearHotelId(): void;
  getHotelId(): HotelIdInfo | undefined;
  setHotelId(value?: HotelIdInfo): void;

  hasHotelClass(): boolean;
  clearHotelClass(): void;
  getHotelClass(): HotelClassInfo | undefined;
  setHotelClass(value?: HotelClassInfo): void;

  hasHotelCountryRegion(): boolean;
  clearHotelCountryRegion(): void;
  getHotelCountryRegion(): HotelCountryRegionInfo | undefined;
  setHotelCountryRegion(value?: HotelCountryRegionInfo): void;

  hasHotelState(): boolean;
  clearHotelState(): void;
  getHotelState(): HotelStateInfo | undefined;
  setHotelState(value?: HotelStateInfo): void;

  hasHotelCity(): boolean;
  clearHotelCity(): void;
  getHotelCity(): HotelCityInfo | undefined;
  setHotelCity(value?: HotelCityInfo): void;

  hasListingCustomAttribute(): boolean;
  clearListingCustomAttribute(): void;
  getListingCustomAttribute(): ListingCustomAttributeInfo | undefined;
  setListingCustomAttribute(value?: ListingCustomAttributeInfo): void;

  hasProductBiddingCategory(): boolean;
  clearProductBiddingCategory(): void;
  getProductBiddingCategory(): ProductBiddingCategoryInfo | undefined;
  setProductBiddingCategory(value?: ProductBiddingCategoryInfo): void;

  hasProductChannel(): boolean;
  clearProductChannel(): void;
  getProductChannel(): ProductChannelInfo | undefined;
  setProductChannel(value?: ProductChannelInfo): void;

  hasProductChannelExclusivity(): boolean;
  clearProductChannelExclusivity(): void;
  getProductChannelExclusivity(): ProductChannelExclusivityInfo | undefined;
  setProductChannelExclusivity(value?: ProductChannelExclusivityInfo): void;

  hasProductCondition(): boolean;
  clearProductCondition(): void;
  getProductCondition(): ProductConditionInfo | undefined;
  setProductCondition(value?: ProductConditionInfo): void;

  hasProductItemId(): boolean;
  clearProductItemId(): void;
  getProductItemId(): ProductItemIdInfo | undefined;
  setProductItemId(value?: ProductItemIdInfo): void;

  hasProductType(): boolean;
  clearProductType(): void;
  getProductType(): ProductTypeInfo | undefined;
  setProductType(value?: ProductTypeInfo): void;

  hasUnknownListingDimension(): boolean;
  clearUnknownListingDimension(): void;
  getUnknownListingDimension(): UnknownListingDimensionInfo | undefined;
  setUnknownListingDimension(value?: UnknownListingDimensionInfo): void;

  getDimensionCase(): ListingDimensionInfo.DimensionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingDimensionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingDimensionInfo): ListingDimensionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListingDimensionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingDimensionInfo;
  static deserializeBinaryFromReader(message: ListingDimensionInfo, reader: jspb.BinaryReader): ListingDimensionInfo;
}

export namespace ListingDimensionInfo {
  export type AsObject = {
    listingBrand?: ListingBrandInfo.AsObject,
    hotelId?: HotelIdInfo.AsObject,
    hotelClass?: HotelClassInfo.AsObject,
    hotelCountryRegion?: HotelCountryRegionInfo.AsObject,
    hotelState?: HotelStateInfo.AsObject,
    hotelCity?: HotelCityInfo.AsObject,
    listingCustomAttribute?: ListingCustomAttributeInfo.AsObject,
    productBiddingCategory?: ProductBiddingCategoryInfo.AsObject,
    productChannel?: ProductChannelInfo.AsObject,
    productChannelExclusivity?: ProductChannelExclusivityInfo.AsObject,
    productCondition?: ProductConditionInfo.AsObject,
    productItemId?: ProductItemIdInfo.AsObject,
    productType?: ProductTypeInfo.AsObject,
    unknownListingDimension?: UnknownListingDimensionInfo.AsObject,
  }

  export enum DimensionCase {
    DIMENSION_NOT_SET = 0,
    LISTING_BRAND = 1,
    HOTEL_ID = 2,
    HOTEL_CLASS = 3,
    HOTEL_COUNTRY_REGION = 4,
    HOTEL_STATE = 5,
    HOTEL_CITY = 6,
    LISTING_CUSTOM_ATTRIBUTE = 7,
    PRODUCT_BIDDING_CATEGORY = 13,
    PRODUCT_CHANNEL = 8,
    PRODUCT_CHANNEL_EXCLUSIVITY = 9,
    PRODUCT_CONDITION = 10,
    PRODUCT_ITEM_ID = 11,
    PRODUCT_TYPE = 12,
    UNKNOWN_LISTING_DIMENSION = 14,
  }
}

export class ListingBrandInfo extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingBrandInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingBrandInfo): ListingBrandInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListingBrandInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingBrandInfo;
  static deserializeBinaryFromReader(message: ListingBrandInfo, reader: jspb.BinaryReader): ListingBrandInfo;
}

export namespace ListingBrandInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelIdInfo extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelIdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelIdInfo): HotelIdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelIdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelIdInfo;
  static deserializeBinaryFromReader(message: HotelIdInfo, reader: jspb.BinaryReader): HotelIdInfo;
}

export namespace HotelIdInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelClassInfo extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setValue(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelClassInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelClassInfo): HotelClassInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelClassInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelClassInfo;
  static deserializeBinaryFromReader(message: HotelClassInfo, reader: jspb.BinaryReader): HotelClassInfo;
}

export namespace HotelClassInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelCountryRegionInfo extends jspb.Message {
  hasCountryRegionCriterion(): boolean;
  clearCountryRegionCriterion(): void;
  getCountryRegionCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryRegionCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCountryRegionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCountryRegionInfo): HotelCountryRegionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelCountryRegionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCountryRegionInfo;
  static deserializeBinaryFromReader(message: HotelCountryRegionInfo, reader: jspb.BinaryReader): HotelCountryRegionInfo;
}

export namespace HotelCountryRegionInfo {
  export type AsObject = {
    countryRegionCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelStateInfo extends jspb.Message {
  hasStateCriterion(): boolean;
  clearStateCriterion(): void;
  getStateCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStateCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelStateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelStateInfo): HotelStateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelStateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelStateInfo;
  static deserializeBinaryFromReader(message: HotelStateInfo, reader: jspb.BinaryReader): HotelStateInfo;
}

export namespace HotelStateInfo {
  export type AsObject = {
    stateCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class HotelCityInfo extends jspb.Message {
  hasCityCriterion(): boolean;
  clearCityCriterion(): void;
  getCityCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCityCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCityInfo): HotelCityInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelCityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCityInfo;
  static deserializeBinaryFromReader(message: HotelCityInfo, reader: jspb.BinaryReader): HotelCityInfo;
}

export namespace HotelCityInfo {
  export type AsObject = {
    cityCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ListingCustomAttributeInfo extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  getIndex(): google_ads_googleads_v2_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex;
  setIndex(value: google_ads_googleads_v2_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListingCustomAttributeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ListingCustomAttributeInfo): ListingCustomAttributeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListingCustomAttributeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListingCustomAttributeInfo;
  static deserializeBinaryFromReader(message: ListingCustomAttributeInfo, reader: jspb.BinaryReader): ListingCustomAttributeInfo;
}

export namespace ListingCustomAttributeInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
    index: google_ads_googleads_v2_enums_listing_custom_attribute_index_pb.ListingCustomAttributeIndexEnum.ListingCustomAttributeIndex,
  }
}

export class ProductBiddingCategoryInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  getLevel(): google_ads_googleads_v2_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel;
  setLevel(value: google_ads_googleads_v2_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductBiddingCategoryInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductBiddingCategoryInfo): ProductBiddingCategoryInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductBiddingCategoryInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductBiddingCategoryInfo;
  static deserializeBinaryFromReader(message: ProductBiddingCategoryInfo, reader: jspb.BinaryReader): ProductBiddingCategoryInfo;
}

export namespace ProductBiddingCategoryInfo {
  export type AsObject = {
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    level: google_ads_googleads_v2_enums_product_bidding_category_level_pb.ProductBiddingCategoryLevelEnum.ProductBiddingCategoryLevel,
  }
}

export class ProductChannelInfo extends jspb.Message {
  getChannel(): google_ads_googleads_v2_enums_product_channel_pb.ProductChannelEnum.ProductChannel;
  setChannel(value: google_ads_googleads_v2_enums_product_channel_pb.ProductChannelEnum.ProductChannel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductChannelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductChannelInfo): ProductChannelInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductChannelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductChannelInfo;
  static deserializeBinaryFromReader(message: ProductChannelInfo, reader: jspb.BinaryReader): ProductChannelInfo;
}

export namespace ProductChannelInfo {
  export type AsObject = {
    channel: google_ads_googleads_v2_enums_product_channel_pb.ProductChannelEnum.ProductChannel,
  }
}

export class ProductChannelExclusivityInfo extends jspb.Message {
  getChannelExclusivity(): google_ads_googleads_v2_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity;
  setChannelExclusivity(value: google_ads_googleads_v2_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductChannelExclusivityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductChannelExclusivityInfo): ProductChannelExclusivityInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductChannelExclusivityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductChannelExclusivityInfo;
  static deserializeBinaryFromReader(message: ProductChannelExclusivityInfo, reader: jspb.BinaryReader): ProductChannelExclusivityInfo;
}

export namespace ProductChannelExclusivityInfo {
  export type AsObject = {
    channelExclusivity: google_ads_googleads_v2_enums_product_channel_exclusivity_pb.ProductChannelExclusivityEnum.ProductChannelExclusivity,
  }
}

export class ProductConditionInfo extends jspb.Message {
  getCondition(): google_ads_googleads_v2_enums_product_condition_pb.ProductConditionEnum.ProductCondition;
  setCondition(value: google_ads_googleads_v2_enums_product_condition_pb.ProductConditionEnum.ProductCondition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductConditionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductConditionInfo): ProductConditionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductConditionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductConditionInfo;
  static deserializeBinaryFromReader(message: ProductConditionInfo, reader: jspb.BinaryReader): ProductConditionInfo;
}

export namespace ProductConditionInfo {
  export type AsObject = {
    condition: google_ads_googleads_v2_enums_product_condition_pb.ProductConditionEnum.ProductCondition,
  }
}

export class ProductItemIdInfo extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductItemIdInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductItemIdInfo): ProductItemIdInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductItemIdInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductItemIdInfo;
  static deserializeBinaryFromReader(message: ProductItemIdInfo, reader: jspb.BinaryReader): ProductItemIdInfo;
}

export namespace ProductItemIdInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ProductTypeInfo extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  getLevel(): google_ads_googleads_v2_enums_product_type_level_pb.ProductTypeLevelEnum.ProductTypeLevel;
  setLevel(value: google_ads_googleads_v2_enums_product_type_level_pb.ProductTypeLevelEnum.ProductTypeLevel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTypeInfo): ProductTypeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTypeInfo;
  static deserializeBinaryFromReader(message: ProductTypeInfo, reader: jspb.BinaryReader): ProductTypeInfo;
}

export namespace ProductTypeInfo {
  export type AsObject = {
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
    level: google_ads_googleads_v2_enums_product_type_level_pb.ProductTypeLevelEnum.ProductTypeLevel,
  }
}

export class UnknownListingDimensionInfo extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnknownListingDimensionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UnknownListingDimensionInfo): UnknownListingDimensionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnknownListingDimensionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnknownListingDimensionInfo;
  static deserializeBinaryFromReader(message: UnknownListingDimensionInfo, reader: jspb.BinaryReader): UnknownListingDimensionInfo;
}

export namespace UnknownListingDimensionInfo {
  export type AsObject = {
  }
}

export class HotelDateSelectionTypeInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType;
  setType(value: google_ads_googleads_v2_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelDateSelectionTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelDateSelectionTypeInfo): HotelDateSelectionTypeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelDateSelectionTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelDateSelectionTypeInfo;
  static deserializeBinaryFromReader(message: HotelDateSelectionTypeInfo, reader: jspb.BinaryReader): HotelDateSelectionTypeInfo;
}

export namespace HotelDateSelectionTypeInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType,
  }
}

export class HotelAdvanceBookingWindowInfo extends jspb.Message {
  hasMinDays(): boolean;
  clearMinDays(): void;
  getMinDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinDays(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMaxDays(): boolean;
  clearMaxDays(): void;
  getMaxDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxDays(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelAdvanceBookingWindowInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelAdvanceBookingWindowInfo): HotelAdvanceBookingWindowInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelAdvanceBookingWindowInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelAdvanceBookingWindowInfo;
  static deserializeBinaryFromReader(message: HotelAdvanceBookingWindowInfo, reader: jspb.BinaryReader): HotelAdvanceBookingWindowInfo;
}

export namespace HotelAdvanceBookingWindowInfo {
  export type AsObject = {
    minDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelLengthOfStayInfo extends jspb.Message {
  hasMinNights(): boolean;
  clearMinNights(): void;
  getMinNights(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMinNights(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasMaxNights(): boolean;
  clearMaxNights(): void;
  getMaxNights(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMaxNights(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelLengthOfStayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelLengthOfStayInfo): HotelLengthOfStayInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelLengthOfStayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelLengthOfStayInfo;
  static deserializeBinaryFromReader(message: HotelLengthOfStayInfo, reader: jspb.BinaryReader): HotelLengthOfStayInfo;
}

export namespace HotelLengthOfStayInfo {
  export type AsObject = {
    minNights?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    maxNights?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class HotelCheckInDayInfo extends jspb.Message {
  getDayOfWeek(): google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setDayOfWeek(value: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelCheckInDayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HotelCheckInDayInfo): HotelCheckInDayInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelCheckInDayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelCheckInDayInfo;
  static deserializeBinaryFromReader(message: HotelCheckInDayInfo, reader: jspb.BinaryReader): HotelCheckInDayInfo;
}

export namespace HotelCheckInDayInfo {
  export type AsObject = {
    dayOfWeek: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
  }
}

export class InteractionTypeInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_interaction_type_pb.InteractionTypeEnum.InteractionType;
  setType(value: google_ads_googleads_v2_enums_interaction_type_pb.InteractionTypeEnum.InteractionType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InteractionTypeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: InteractionTypeInfo): InteractionTypeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InteractionTypeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InteractionTypeInfo;
  static deserializeBinaryFromReader(message: InteractionTypeInfo, reader: jspb.BinaryReader): InteractionTypeInfo;
}

export namespace InteractionTypeInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_interaction_type_pb.InteractionTypeEnum.InteractionType,
  }
}

export class AdScheduleInfo extends jspb.Message {
  getStartMinute(): google_ads_googleads_v2_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour;
  setStartMinute(value: google_ads_googleads_v2_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour): void;

  getEndMinute(): google_ads_googleads_v2_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour;
  setEndMinute(value: google_ads_googleads_v2_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour): void;

  hasStartHour(): boolean;
  clearStartHour(): void;
  getStartHour(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setStartHour(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasEndHour(): boolean;
  clearEndHour(): void;
  getEndHour(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setEndHour(value?: google_protobuf_wrappers_pb.Int32Value): void;

  getDayOfWeek(): google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setDayOfWeek(value: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdScheduleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdScheduleInfo): AdScheduleInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdScheduleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdScheduleInfo;
  static deserializeBinaryFromReader(message: AdScheduleInfo, reader: jspb.BinaryReader): AdScheduleInfo;
}

export namespace AdScheduleInfo {
  export type AsObject = {
    startMinute: google_ads_googleads_v2_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour,
    endMinute: google_ads_googleads_v2_enums_minute_of_hour_pb.MinuteOfHourEnum.MinuteOfHour,
    startHour?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    endHour?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    dayOfWeek: google_ads_googleads_v2_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
  }
}

export class AgeRangeInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_age_range_type_pb.AgeRangeTypeEnum.AgeRangeType;
  setType(value: google_ads_googleads_v2_enums_age_range_type_pb.AgeRangeTypeEnum.AgeRangeType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgeRangeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AgeRangeInfo): AgeRangeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgeRangeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgeRangeInfo;
  static deserializeBinaryFromReader(message: AgeRangeInfo, reader: jspb.BinaryReader): AgeRangeInfo;
}

export namespace AgeRangeInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_age_range_type_pb.AgeRangeTypeEnum.AgeRangeType,
  }
}

export class GenderInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_gender_type_pb.GenderTypeEnum.GenderType;
  setType(value: google_ads_googleads_v2_enums_gender_type_pb.GenderTypeEnum.GenderType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GenderInfo): GenderInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenderInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderInfo;
  static deserializeBinaryFromReader(message: GenderInfo, reader: jspb.BinaryReader): GenderInfo;
}

export namespace GenderInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_gender_type_pb.GenderTypeEnum.GenderType,
  }
}

export class IncomeRangeInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_income_range_type_pb.IncomeRangeTypeEnum.IncomeRangeType;
  setType(value: google_ads_googleads_v2_enums_income_range_type_pb.IncomeRangeTypeEnum.IncomeRangeType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncomeRangeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IncomeRangeInfo): IncomeRangeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncomeRangeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncomeRangeInfo;
  static deserializeBinaryFromReader(message: IncomeRangeInfo, reader: jspb.BinaryReader): IncomeRangeInfo;
}

export namespace IncomeRangeInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_income_range_type_pb.IncomeRangeTypeEnum.IncomeRangeType,
  }
}

export class ParentalStatusInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_parental_status_type_pb.ParentalStatusTypeEnum.ParentalStatusType;
  setType(value: google_ads_googleads_v2_enums_parental_status_type_pb.ParentalStatusTypeEnum.ParentalStatusType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentalStatusInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ParentalStatusInfo): ParentalStatusInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParentalStatusInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentalStatusInfo;
  static deserializeBinaryFromReader(message: ParentalStatusInfo, reader: jspb.BinaryReader): ParentalStatusInfo;
}

export namespace ParentalStatusInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_parental_status_type_pb.ParentalStatusTypeEnum.ParentalStatusType,
  }
}

export class YouTubeVideoInfo extends jspb.Message {
  hasVideoId(): boolean;
  clearVideoId(): void;
  getVideoId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setVideoId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YouTubeVideoInfo.AsObject;
  static toObject(includeInstance: boolean, msg: YouTubeVideoInfo): YouTubeVideoInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: YouTubeVideoInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YouTubeVideoInfo;
  static deserializeBinaryFromReader(message: YouTubeVideoInfo, reader: jspb.BinaryReader): YouTubeVideoInfo;
}

export namespace YouTubeVideoInfo {
  export type AsObject = {
    videoId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class YouTubeChannelInfo extends jspb.Message {
  hasChannelId(): boolean;
  clearChannelId(): void;
  getChannelId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setChannelId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): YouTubeChannelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: YouTubeChannelInfo): YouTubeChannelInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: YouTubeChannelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): YouTubeChannelInfo;
  static deserializeBinaryFromReader(message: YouTubeChannelInfo, reader: jspb.BinaryReader): YouTubeChannelInfo;
}

export namespace YouTubeChannelInfo {
  export type AsObject = {
    channelId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UserListInfo extends jspb.Message {
  hasUserList(): boolean;
  clearUserList(): void;
  getUserList(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserList(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListInfo): UserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListInfo;
  static deserializeBinaryFromReader(message: UserListInfo, reader: jspb.BinaryReader): UserListInfo;
}

export namespace UserListInfo {
  export type AsObject = {
    userList?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ProximityInfo extends jspb.Message {
  hasGeoPoint(): boolean;
  clearGeoPoint(): void;
  getGeoPoint(): GeoPointInfo | undefined;
  setGeoPoint(value?: GeoPointInfo): void;

  hasRadius(): boolean;
  clearRadius(): void;
  getRadius(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setRadius(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  getRadiusUnits(): google_ads_googleads_v2_enums_proximity_radius_units_pb.ProximityRadiusUnitsEnum.ProximityRadiusUnits;
  setRadiusUnits(value: google_ads_googleads_v2_enums_proximity_radius_units_pb.ProximityRadiusUnitsEnum.ProximityRadiusUnits): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): AddressInfo | undefined;
  setAddress(value?: AddressInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProximityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ProximityInfo): ProximityInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProximityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProximityInfo;
  static deserializeBinaryFromReader(message: ProximityInfo, reader: jspb.BinaryReader): ProximityInfo;
}

export namespace ProximityInfo {
  export type AsObject = {
    geoPoint?: GeoPointInfo.AsObject,
    radius?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    radiusUnits: google_ads_googleads_v2_enums_proximity_radius_units_pb.ProximityRadiusUnitsEnum.ProximityRadiusUnits,
    address?: AddressInfo.AsObject,
  }
}

export class GeoPointInfo extends jspb.Message {
  hasLongitudeInMicroDegrees(): boolean;
  clearLongitudeInMicroDegrees(): void;
  getLongitudeInMicroDegrees(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLongitudeInMicroDegrees(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasLatitudeInMicroDegrees(): boolean;
  clearLatitudeInMicroDegrees(): void;
  getLatitudeInMicroDegrees(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setLatitudeInMicroDegrees(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoPointInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GeoPointInfo): GeoPointInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoPointInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoPointInfo;
  static deserializeBinaryFromReader(message: GeoPointInfo, reader: jspb.BinaryReader): GeoPointInfo;
}

export namespace GeoPointInfo {
  export type AsObject = {
    longitudeInMicroDegrees?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    latitudeInMicroDegrees?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class AddressInfo extends jspb.Message {
  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPostalCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProvinceCode(): boolean;
  clearProvinceCode(): void;
  getProvinceCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProvinceCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCountryCode(): boolean;
  clearCountryCode(): void;
  getCountryCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCountryCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProvinceName(): boolean;
  clearProvinceName(): void;
  getProvinceName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProvinceName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStreetAddress(): boolean;
  clearStreetAddress(): void;
  getStreetAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStreetAddress(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStreetAddress2(): boolean;
  clearStreetAddress2(): void;
  getStreetAddress2(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStreetAddress2(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCityName(): boolean;
  clearCityName(): void;
  getCityName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCityName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AddressInfo): AddressInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressInfo;
  static deserializeBinaryFromReader(message: AddressInfo, reader: jspb.BinaryReader): AddressInfo;
}

export namespace AddressInfo {
  export type AsObject = {
    postalCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    provinceCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    countryCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    provinceName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    streetAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
    streetAddress2?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cityName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class TopicInfo extends jspb.Message {
  hasTopicConstant(): boolean;
  clearTopicConstant(): void;
  getTopicConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTopicConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearPathList(): void;
  getPathList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setPathList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addPath(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TopicInfo): TopicInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicInfo;
  static deserializeBinaryFromReader(message: TopicInfo, reader: jspb.BinaryReader): TopicInfo;
}

export namespace TopicInfo {
  export type AsObject = {
    topicConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pathList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

export class LanguageInfo extends jspb.Message {
  hasLanguageConstant(): boolean;
  clearLanguageConstant(): void;
  getLanguageConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLanguageConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageInfo): LanguageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LanguageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageInfo;
  static deserializeBinaryFromReader(message: LanguageInfo, reader: jspb.BinaryReader): LanguageInfo;
}

export namespace LanguageInfo {
  export type AsObject = {
    languageConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class IpBlockInfo extends jspb.Message {
  hasIpAddress(): boolean;
  clearIpAddress(): void;
  getIpAddress(): google_protobuf_wrappers_pb.StringValue | undefined;
  setIpAddress(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IpBlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: IpBlockInfo): IpBlockInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IpBlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IpBlockInfo;
  static deserializeBinaryFromReader(message: IpBlockInfo, reader: jspb.BinaryReader): IpBlockInfo;
}

export namespace IpBlockInfo {
  export type AsObject = {
    ipAddress?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ContentLabelInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_content_label_type_pb.ContentLabelTypeEnum.ContentLabelType;
  setType(value: google_ads_googleads_v2_enums_content_label_type_pb.ContentLabelTypeEnum.ContentLabelType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentLabelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ContentLabelInfo): ContentLabelInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentLabelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentLabelInfo;
  static deserializeBinaryFromReader(message: ContentLabelInfo, reader: jspb.BinaryReader): ContentLabelInfo;
}

export namespace ContentLabelInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_content_label_type_pb.ContentLabelTypeEnum.ContentLabelType,
  }
}

export class CarrierInfo extends jspb.Message {
  hasCarrierConstant(): boolean;
  clearCarrierConstant(): void;
  getCarrierConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCarrierConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarrierInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CarrierInfo): CarrierInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarrierInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarrierInfo;
  static deserializeBinaryFromReader(message: CarrierInfo, reader: jspb.BinaryReader): CarrierInfo;
}

export namespace CarrierInfo {
  export type AsObject = {
    carrierConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UserInterestInfo extends jspb.Message {
  hasUserInterestCategory(): boolean;
  clearUserInterestCategory(): void;
  getUserInterestCategory(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserInterestCategory(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInterestInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserInterestInfo): UserInterestInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInterestInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInterestInfo;
  static deserializeBinaryFromReader(message: UserInterestInfo, reader: jspb.BinaryReader): UserInterestInfo;
}

export namespace UserInterestInfo {
  export type AsObject = {
    userInterestCategory?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class WebpageInfo extends jspb.Message {
  hasCriterionName(): boolean;
  clearCriterionName(): void;
  getCriterionName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCriterionName(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearConditionsList(): void;
  getConditionsList(): Array<WebpageConditionInfo>;
  setConditionsList(value: Array<WebpageConditionInfo>): void;
  addConditions(value?: WebpageConditionInfo, index?: number): WebpageConditionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebpageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebpageInfo): WebpageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebpageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebpageInfo;
  static deserializeBinaryFromReader(message: WebpageInfo, reader: jspb.BinaryReader): WebpageInfo;
}

export namespace WebpageInfo {
  export type AsObject = {
    criterionName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    conditionsList: Array<WebpageConditionInfo.AsObject>,
  }
}

export class WebpageConditionInfo extends jspb.Message {
  getOperand(): google_ads_googleads_v2_enums_webpage_condition_operand_pb.WebpageConditionOperandEnum.WebpageConditionOperand;
  setOperand(value: google_ads_googleads_v2_enums_webpage_condition_operand_pb.WebpageConditionOperandEnum.WebpageConditionOperand): void;

  getOperator(): google_ads_googleads_v2_enums_webpage_condition_operator_pb.WebpageConditionOperatorEnum.WebpageConditionOperator;
  setOperator(value: google_ads_googleads_v2_enums_webpage_condition_operator_pb.WebpageConditionOperatorEnum.WebpageConditionOperator): void;

  hasArgument(): boolean;
  clearArgument(): void;
  getArgument(): google_protobuf_wrappers_pb.StringValue | undefined;
  setArgument(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WebpageConditionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WebpageConditionInfo): WebpageConditionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WebpageConditionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WebpageConditionInfo;
  static deserializeBinaryFromReader(message: WebpageConditionInfo, reader: jspb.BinaryReader): WebpageConditionInfo;
}

export namespace WebpageConditionInfo {
  export type AsObject = {
    operand: google_ads_googleads_v2_enums_webpage_condition_operand_pb.WebpageConditionOperandEnum.WebpageConditionOperand,
    operator: google_ads_googleads_v2_enums_webpage_condition_operator_pb.WebpageConditionOperatorEnum.WebpageConditionOperator,
    argument?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class OperatingSystemVersionInfo extends jspb.Message {
  hasOperatingSystemVersionConstant(): boolean;
  clearOperatingSystemVersionConstant(): void;
  getOperatingSystemVersionConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setOperatingSystemVersionConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystemVersionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystemVersionInfo): OperatingSystemVersionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperatingSystemVersionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystemVersionInfo;
  static deserializeBinaryFromReader(message: OperatingSystemVersionInfo, reader: jspb.BinaryReader): OperatingSystemVersionInfo;
}

export namespace OperatingSystemVersionInfo {
  export type AsObject = {
    operatingSystemVersionConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class AppPaymentModelInfo extends jspb.Message {
  getType(): google_ads_googleads_v2_enums_app_payment_model_type_pb.AppPaymentModelTypeEnum.AppPaymentModelType;
  setType(value: google_ads_googleads_v2_enums_app_payment_model_type_pb.AppPaymentModelTypeEnum.AppPaymentModelType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppPaymentModelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AppPaymentModelInfo): AppPaymentModelInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppPaymentModelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppPaymentModelInfo;
  static deserializeBinaryFromReader(message: AppPaymentModelInfo, reader: jspb.BinaryReader): AppPaymentModelInfo;
}

export namespace AppPaymentModelInfo {
  export type AsObject = {
    type: google_ads_googleads_v2_enums_app_payment_model_type_pb.AppPaymentModelTypeEnum.AppPaymentModelType,
  }
}

export class MobileDeviceInfo extends jspb.Message {
  hasMobileDeviceConstant(): boolean;
  clearMobileDeviceConstant(): void;
  getMobileDeviceConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobileDeviceConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDeviceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDeviceInfo): MobileDeviceInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileDeviceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDeviceInfo;
  static deserializeBinaryFromReader(message: MobileDeviceInfo, reader: jspb.BinaryReader): MobileDeviceInfo;
}

export namespace MobileDeviceInfo {
  export type AsObject = {
    mobileDeviceConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CustomAffinityInfo extends jspb.Message {
  hasCustomAffinity(): boolean;
  clearCustomAffinity(): void;
  getCustomAffinity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomAffinity(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomAffinityInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomAffinityInfo): CustomAffinityInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomAffinityInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomAffinityInfo;
  static deserializeBinaryFromReader(message: CustomAffinityInfo, reader: jspb.BinaryReader): CustomAffinityInfo;
}

export namespace CustomAffinityInfo {
  export type AsObject = {
    customAffinity?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CustomIntentInfo extends jspb.Message {
  hasCustomIntent(): boolean;
  clearCustomIntent(): void;
  getCustomIntent(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomIntent(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomIntentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CustomIntentInfo): CustomIntentInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomIntentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomIntentInfo;
  static deserializeBinaryFromReader(message: CustomIntentInfo, reader: jspb.BinaryReader): CustomIntentInfo;
}

export namespace CustomIntentInfo {
  export type AsObject = {
    customIntent?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class LocationGroupInfo extends jspb.Message {
  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearGeoTargetConstantsList(): void;
  getGeoTargetConstantsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setGeoTargetConstantsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addGeoTargetConstants(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  hasRadius(): boolean;
  clearRadius(): void;
  getRadius(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRadius(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getRadiusUnits(): google_ads_googleads_v2_enums_location_group_radius_units_pb.LocationGroupRadiusUnitsEnum.LocationGroupRadiusUnits;
  setRadiusUnits(value: google_ads_googleads_v2_enums_location_group_radius_units_pb.LocationGroupRadiusUnitsEnum.LocationGroupRadiusUnits): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationGroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LocationGroupInfo): LocationGroupInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationGroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationGroupInfo;
  static deserializeBinaryFromReader(message: LocationGroupInfo, reader: jspb.BinaryReader): LocationGroupInfo;
}

export namespace LocationGroupInfo {
  export type AsObject = {
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    geoTargetConstantsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    radius?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    radiusUnits: google_ads_googleads_v2_enums_location_group_radius_units_pb.LocationGroupRadiusUnitsEnum.LocationGroupRadiusUnits,
  }
}

