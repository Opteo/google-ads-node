// package: google.ads.googleads.v0.common
// file: google/ads/googleads/v0/common/segments.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v0_enums_ad_network_type_pb from "../../../../../google/ads/googleads/v0/enums/ad_network_type_pb";
import * as google_ads_googleads_v0_enums_conversion_attribution_event_type_pb from "../../../../../google/ads/googleads/v0/enums/conversion_attribution_event_type_pb";
import * as google_ads_googleads_v0_enums_day_of_week_pb from "../../../../../google/ads/googleads/v0/enums/day_of_week_pb";
import * as google_ads_googleads_v0_enums_device_pb from "../../../../../google/ads/googleads/v0/enums/device_pb";
import * as google_ads_googleads_v0_enums_hotel_date_selection_type_pb from "../../../../../google/ads/googleads/v0/enums/hotel_date_selection_type_pb";
import * as google_ads_googleads_v0_enums_month_of_year_pb from "../../../../../google/ads/googleads/v0/enums/month_of_year_pb";
import * as google_ads_googleads_v0_enums_placeholder_type_pb from "../../../../../google/ads/googleads/v0/enums/placeholder_type_pb";
import * as google_ads_googleads_v0_enums_search_term_match_type_pb from "../../../../../google/ads/googleads/v0/enums/search_term_match_type_pb";
import * as google_ads_googleads_v0_enums_slot_pb from "../../../../../google/ads/googleads/v0/enums/slot_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class Segments extends jspb.Message {
  getAdNetworkType(): google_ads_googleads_v0_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType;
  setAdNetworkType(value: google_ads_googleads_v0_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType): void;

  getConversionAttributionEventType(): google_ads_googleads_v0_enums_conversion_attribution_event_type_pb.ConversionAttributionEventTypeEnum.ConversionAttributionEventType;
  setConversionAttributionEventType(value: google_ads_googleads_v0_enums_conversion_attribution_event_type_pb.ConversionAttributionEventTypeEnum.ConversionAttributionEventType): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  getDayOfWeek(): google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setDayOfWeek(value: google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  getDevice(): google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device;
  setDevice(value: google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device): void;

  hasHotelBookingWindowDays(): boolean;
  clearHotelBookingWindowDays(): void;
  getHotelBookingWindowDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHotelBookingWindowDays(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHotelCenterId(): boolean;
  clearHotelCenterId(): void;
  getHotelCenterId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHotelCenterId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHotelCheckInDate(): boolean;
  clearHotelCheckInDate(): void;
  getHotelCheckInDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelCheckInDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  getHotelCheckInDayOfWeek(): google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek;
  setHotelCheckInDayOfWeek(value: google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek): void;

  hasHotelCity(): boolean;
  clearHotelCity(): void;
  getHotelCity(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelCity(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHotelClass(): boolean;
  clearHotelClass(): void;
  getHotelClass(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHotelClass(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasHotelCountry(): boolean;
  clearHotelCountry(): void;
  getHotelCountry(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelCountry(value?: google_protobuf_wrappers_pb.StringValue): void;

  getHotelDateSelectionType(): google_ads_googleads_v0_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType;
  setHotelDateSelectionType(value: google_ads_googleads_v0_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType): void;

  hasHotelLengthOfStay(): boolean;
  clearHotelLengthOfStay(): void;
  getHotelLengthOfStay(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHotelLengthOfStay(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasHotelState(): boolean;
  clearHotelState(): void;
  getHotelState(): google_protobuf_wrappers_pb.StringValue | undefined;
  setHotelState(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasHour(): boolean;
  clearHour(): void;
  getHour(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setHour(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasMonth(): boolean;
  clearMonth(): void;
  getMonth(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMonth(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMonthOfYear(): google_ads_googleads_v0_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear;
  setMonthOfYear(value: google_ads_googleads_v0_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear): void;

  hasPartnerHotelId(): boolean;
  clearPartnerHotelId(): void;
  getPartnerHotelId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPartnerHotelId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getPlaceholderType(): google_ads_googleads_v0_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType;
  setPlaceholderType(value: google_ads_googleads_v0_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType): void;

  hasQuarter(): boolean;
  clearQuarter(): void;
  getQuarter(): google_protobuf_wrappers_pb.StringValue | undefined;
  setQuarter(value?: google_protobuf_wrappers_pb.StringValue): void;

  getSearchTermMatchType(): google_ads_googleads_v0_enums_search_term_match_type_pb.SearchTermMatchTypeEnum.SearchTermMatchType;
  setSearchTermMatchType(value: google_ads_googleads_v0_enums_search_term_match_type_pb.SearchTermMatchTypeEnum.SearchTermMatchType): void;

  getSlot(): google_ads_googleads_v0_enums_slot_pb.SlotEnum.Slot;
  setSlot(value: google_ads_googleads_v0_enums_slot_pb.SlotEnum.Slot): void;

  hasWeek(): boolean;
  clearWeek(): void;
  getWeek(): google_protobuf_wrappers_pb.StringValue | undefined;
  setWeek(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasYear(): boolean;
  clearYear(): void;
  getYear(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setYear(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Segments.AsObject;
  static toObject(includeInstance: boolean, msg: Segments): Segments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Segments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Segments;
  static deserializeBinaryFromReader(message: Segments, reader: jspb.BinaryReader): Segments;
}

export namespace Segments {
  export type AsObject = {
    adNetworkType: google_ads_googleads_v0_enums_ad_network_type_pb.AdNetworkTypeEnum.AdNetworkType,
    conversionAttributionEventType: google_ads_googleads_v0_enums_conversion_attribution_event_type_pb.ConversionAttributionEventTypeEnum.ConversionAttributionEventType,
    date?: google_protobuf_wrappers_pb.StringValue.AsObject,
    dayOfWeek: google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
    device: google_ads_googleads_v0_enums_device_pb.DeviceEnum.Device,
    hotelBookingWindowDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    hotelCenterId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    hotelCheckInDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelCheckInDayOfWeek: google_ads_googleads_v0_enums_day_of_week_pb.DayOfWeekEnum.DayOfWeek,
    hotelCity?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelClass?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    hotelCountry?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hotelDateSelectionType: google_ads_googleads_v0_enums_hotel_date_selection_type_pb.HotelDateSelectionTypeEnum.HotelDateSelectionType,
    hotelLengthOfStay?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    hotelState?: google_protobuf_wrappers_pb.StringValue.AsObject,
    hour?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    month?: google_protobuf_wrappers_pb.StringValue.AsObject,
    monthOfYear: google_ads_googleads_v0_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear,
    partnerHotelId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    placeholderType: google_ads_googleads_v0_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderType,
    quarter?: google_protobuf_wrappers_pb.StringValue.AsObject,
    searchTermMatchType: google_ads_googleads_v0_enums_search_term_match_type_pb.SearchTermMatchTypeEnum.SearchTermMatchType,
    slot: google_ads_googleads_v0_enums_slot_pb.SlotEnum.Slot,
    week?: google_protobuf_wrappers_pb.StringValue.AsObject,
    year?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

