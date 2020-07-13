// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/ad_group_bid_modifier.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_criteria_pb from "../../../../../google/ads/googleads/v4/common/criteria_pb";
import * as google_ads_googleads_v4_enums_bid_modifier_source_pb from "../../../../../google/ads/googleads/v4/enums/bid_modifier_source_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupBidModifier extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCriterionId(): boolean;
  clearCriterionId(): void;
  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBidModifier(): boolean;
  clearBidModifier(): void;
  getBidModifier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasBaseAdGroup(): boolean;
  clearBaseAdGroup(): void;
  getBaseAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBaseAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  getBidModifierSource(): google_ads_googleads_v4_enums_bid_modifier_source_pb.BidModifierSourceEnum.BidModifierSourceMap[keyof google_ads_googleads_v4_enums_bid_modifier_source_pb.BidModifierSourceEnum.BidModifierSourceMap];
  setBidModifierSource(value: google_ads_googleads_v4_enums_bid_modifier_source_pb.BidModifierSourceEnum.BidModifierSourceMap[keyof google_ads_googleads_v4_enums_bid_modifier_source_pb.BidModifierSourceEnum.BidModifierSourceMap]): void;

  hasHotelDateSelectionType(): boolean;
  clearHotelDateSelectionType(): void;
  getHotelDateSelectionType(): google_ads_googleads_v4_common_criteria_pb.HotelDateSelectionTypeInfo | undefined;
  setHotelDateSelectionType(value?: google_ads_googleads_v4_common_criteria_pb.HotelDateSelectionTypeInfo): void;

  hasHotelAdvanceBookingWindow(): boolean;
  clearHotelAdvanceBookingWindow(): void;
  getHotelAdvanceBookingWindow(): google_ads_googleads_v4_common_criteria_pb.HotelAdvanceBookingWindowInfo | undefined;
  setHotelAdvanceBookingWindow(value?: google_ads_googleads_v4_common_criteria_pb.HotelAdvanceBookingWindowInfo): void;

  hasHotelLengthOfStay(): boolean;
  clearHotelLengthOfStay(): void;
  getHotelLengthOfStay(): google_ads_googleads_v4_common_criteria_pb.HotelLengthOfStayInfo | undefined;
  setHotelLengthOfStay(value?: google_ads_googleads_v4_common_criteria_pb.HotelLengthOfStayInfo): void;

  hasHotelCheckInDay(): boolean;
  clearHotelCheckInDay(): void;
  getHotelCheckInDay(): google_ads_googleads_v4_common_criteria_pb.HotelCheckInDayInfo | undefined;
  setHotelCheckInDay(value?: google_ads_googleads_v4_common_criteria_pb.HotelCheckInDayInfo): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): google_ads_googleads_v4_common_criteria_pb.DeviceInfo | undefined;
  setDevice(value?: google_ads_googleads_v4_common_criteria_pb.DeviceInfo): void;

  hasPreferredContent(): boolean;
  clearPreferredContent(): void;
  getPreferredContent(): google_ads_googleads_v4_common_criteria_pb.PreferredContentInfo | undefined;
  setPreferredContent(value?: google_ads_googleads_v4_common_criteria_pb.PreferredContentInfo): void;

  getCriterionCase(): AdGroupBidModifier.CriterionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupBidModifier.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupBidModifier): AdGroupBidModifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupBidModifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupBidModifier;
  static deserializeBinaryFromReader(message: AdGroupBidModifier, reader: jspb.BinaryReader): AdGroupBidModifier;
}

export namespace AdGroupBidModifier {
  export type AsObject = {
    resourceName: string,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bidModifier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    baseAdGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    bidModifierSource: google_ads_googleads_v4_enums_bid_modifier_source_pb.BidModifierSourceEnum.BidModifierSourceMap[keyof google_ads_googleads_v4_enums_bid_modifier_source_pb.BidModifierSourceEnum.BidModifierSourceMap],
    hotelDateSelectionType?: google_ads_googleads_v4_common_criteria_pb.HotelDateSelectionTypeInfo.AsObject,
    hotelAdvanceBookingWindow?: google_ads_googleads_v4_common_criteria_pb.HotelAdvanceBookingWindowInfo.AsObject,
    hotelLengthOfStay?: google_ads_googleads_v4_common_criteria_pb.HotelLengthOfStayInfo.AsObject,
    hotelCheckInDay?: google_ads_googleads_v4_common_criteria_pb.HotelCheckInDayInfo.AsObject,
    device?: google_ads_googleads_v4_common_criteria_pb.DeviceInfo.AsObject,
    preferredContent?: google_ads_googleads_v4_common_criteria_pb.PreferredContentInfo.AsObject,
  }

  export enum CriterionCase {
    CRITERION_NOT_SET = 0,
    HOTEL_DATE_SELECTION_TYPE = 5,
    HOTEL_ADVANCE_BOOKING_WINDOW = 6,
    HOTEL_LENGTH_OF_STAY = 7,
    HOTEL_CHECK_IN_DAY = 8,
    DEVICE = 11,
    PREFERRED_CONTENT = 12,
  }
}

