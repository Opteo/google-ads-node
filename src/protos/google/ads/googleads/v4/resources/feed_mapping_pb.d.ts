// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/feed_mapping.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_ad_customizer_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/ad_customizer_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_affiliate_location_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/affiliate_location_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_app_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/app_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_call_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/call_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_callout_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/callout_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_custom_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/custom_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_dsa_page_feed_criterion_field_pb from "../../../../../google/ads/googleads/v4/enums/dsa_page_feed_criterion_field_pb";
import * as google_ads_googleads_v4_enums_education_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/education_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_feed_mapping_criterion_type_pb from "../../../../../google/ads/googleads/v4/enums/feed_mapping_criterion_type_pb";
import * as google_ads_googleads_v4_enums_feed_mapping_status_pb from "../../../../../google/ads/googleads/v4/enums/feed_mapping_status_pb";
import * as google_ads_googleads_v4_enums_flight_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/flight_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_hotel_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/hotel_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_job_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/job_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_local_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/local_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_location_extension_targeting_criterion_field_pb from "../../../../../google/ads/googleads/v4/enums/location_extension_targeting_criterion_field_pb";
import * as google_ads_googleads_v4_enums_location_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/location_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_message_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/message_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_placeholder_type_pb from "../../../../../google/ads/googleads/v4/enums/placeholder_type_pb";
import * as google_ads_googleads_v4_enums_price_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/price_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_promotion_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/promotion_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_real_estate_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/real_estate_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_sitelink_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/sitelink_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_structured_snippet_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/structured_snippet_placeholder_field_pb";
import * as google_ads_googleads_v4_enums_travel_placeholder_field_pb from "../../../../../google/ads/googleads/v4/enums/travel_placeholder_field_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedMapping extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearAttributeFieldMappingsList(): void;
  getAttributeFieldMappingsList(): Array<AttributeFieldMapping>;
  setAttributeFieldMappingsList(value: Array<AttributeFieldMapping>): void;
  addAttributeFieldMappings(value?: AttributeFieldMapping, index?: number): AttributeFieldMapping;

  getStatus(): google_ads_googleads_v4_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatusMap[keyof google_ads_googleads_v4_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatusMap[keyof google_ads_googleads_v4_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatusMap]): void;

  hasPlaceholderType(): boolean;
  clearPlaceholderType(): void;
  getPlaceholderType(): google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap];
  setPlaceholderType(value: google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap]): void;

  hasCriterionType(): boolean;
  clearCriterionType(): void;
  getCriterionType(): google_ads_googleads_v4_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionTypeMap[keyof google_ads_googleads_v4_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionTypeMap];
  setCriterionType(value: google_ads_googleads_v4_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionTypeMap[keyof google_ads_googleads_v4_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionTypeMap]): void;

  getTargetCase(): FeedMapping.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMapping.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMapping): FeedMapping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMapping;
  static deserializeBinaryFromReader(message: FeedMapping, reader: jspb.BinaryReader): FeedMapping;
}

export namespace FeedMapping {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    attributeFieldMappingsList: Array<AttributeFieldMapping.AsObject>,
    status: google_ads_googleads_v4_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatusMap[keyof google_ads_googleads_v4_enums_feed_mapping_status_pb.FeedMappingStatusEnum.FeedMappingStatusMap],
    placeholderType: google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap],
    criterionType: google_ads_googleads_v4_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionTypeMap[keyof google_ads_googleads_v4_enums_feed_mapping_criterion_type_pb.FeedMappingCriterionTypeEnum.FeedMappingCriterionTypeMap],
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    PLACEHOLDER_TYPE = 3,
    CRITERION_TYPE = 4,
  }
}

export class AttributeFieldMapping extends jspb.Message {
  hasFeedAttributeId(): boolean;
  clearFeedAttributeId(): void;
  getFeedAttributeId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFeedAttributeId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasFieldId(): boolean;
  clearFieldId(): void;
  getFieldId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFieldId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasSitelinkField(): boolean;
  clearSitelinkField(): void;
  getSitelinkField(): google_ads_googleads_v4_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderFieldMap];
  setSitelinkField(value: google_ads_googleads_v4_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderFieldMap]): void;

  hasCallField(): boolean;
  clearCallField(): void;
  getCallField(): google_ads_googleads_v4_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderFieldMap];
  setCallField(value: google_ads_googleads_v4_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderFieldMap]): void;

  hasAppField(): boolean;
  clearAppField(): void;
  getAppField(): google_ads_googleads_v4_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderFieldMap];
  setAppField(value: google_ads_googleads_v4_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderFieldMap]): void;

  hasLocationField(): boolean;
  clearLocationField(): void;
  getLocationField(): google_ads_googleads_v4_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderFieldMap];
  setLocationField(value: google_ads_googleads_v4_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderFieldMap]): void;

  hasAffiliateLocationField(): boolean;
  clearAffiliateLocationField(): void;
  getAffiliateLocationField(): google_ads_googleads_v4_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderFieldMap];
  setAffiliateLocationField(value: google_ads_googleads_v4_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderFieldMap]): void;

  hasCalloutField(): boolean;
  clearCalloutField(): void;
  getCalloutField(): google_ads_googleads_v4_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderFieldMap];
  setCalloutField(value: google_ads_googleads_v4_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderFieldMap]): void;

  hasStructuredSnippetField(): boolean;
  clearStructuredSnippetField(): void;
  getStructuredSnippetField(): google_ads_googleads_v4_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderFieldMap];
  setStructuredSnippetField(value: google_ads_googleads_v4_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderFieldMap]): void;

  hasMessageField(): boolean;
  clearMessageField(): void;
  getMessageField(): google_ads_googleads_v4_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderFieldMap];
  setMessageField(value: google_ads_googleads_v4_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderFieldMap]): void;

  hasPriceField(): boolean;
  clearPriceField(): void;
  getPriceField(): google_ads_googleads_v4_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderFieldMap];
  setPriceField(value: google_ads_googleads_v4_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderFieldMap]): void;

  hasPromotionField(): boolean;
  clearPromotionField(): void;
  getPromotionField(): google_ads_googleads_v4_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderFieldMap];
  setPromotionField(value: google_ads_googleads_v4_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderFieldMap]): void;

  hasAdCustomizerField(): boolean;
  clearAdCustomizerField(): void;
  getAdCustomizerField(): google_ads_googleads_v4_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderFieldMap];
  setAdCustomizerField(value: google_ads_googleads_v4_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderFieldMap]): void;

  hasDsaPageFeedField(): boolean;
  clearDsaPageFeedField(): void;
  getDsaPageFeedField(): google_ads_googleads_v4_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionFieldMap[keyof google_ads_googleads_v4_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionFieldMap];
  setDsaPageFeedField(value: google_ads_googleads_v4_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionFieldMap[keyof google_ads_googleads_v4_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionFieldMap]): void;

  hasLocationExtensionTargetingField(): boolean;
  clearLocationExtensionTargetingField(): void;
  getLocationExtensionTargetingField(): google_ads_googleads_v4_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionFieldMap[keyof google_ads_googleads_v4_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionFieldMap];
  setLocationExtensionTargetingField(value: google_ads_googleads_v4_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionFieldMap[keyof google_ads_googleads_v4_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionFieldMap]): void;

  hasEducationField(): boolean;
  clearEducationField(): void;
  getEducationField(): google_ads_googleads_v4_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderFieldMap];
  setEducationField(value: google_ads_googleads_v4_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderFieldMap]): void;

  hasFlightField(): boolean;
  clearFlightField(): void;
  getFlightField(): google_ads_googleads_v4_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderFieldMap];
  setFlightField(value: google_ads_googleads_v4_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderFieldMap]): void;

  hasCustomField(): boolean;
  clearCustomField(): void;
  getCustomField(): google_ads_googleads_v4_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderFieldMap];
  setCustomField(value: google_ads_googleads_v4_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderFieldMap]): void;

  hasHotelField(): boolean;
  clearHotelField(): void;
  getHotelField(): google_ads_googleads_v4_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderFieldMap];
  setHotelField(value: google_ads_googleads_v4_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderFieldMap]): void;

  hasRealEstateField(): boolean;
  clearRealEstateField(): void;
  getRealEstateField(): google_ads_googleads_v4_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderFieldMap];
  setRealEstateField(value: google_ads_googleads_v4_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderFieldMap]): void;

  hasTravelField(): boolean;
  clearTravelField(): void;
  getTravelField(): google_ads_googleads_v4_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderFieldMap];
  setTravelField(value: google_ads_googleads_v4_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderFieldMap]): void;

  hasLocalField(): boolean;
  clearLocalField(): void;
  getLocalField(): google_ads_googleads_v4_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderFieldMap];
  setLocalField(value: google_ads_googleads_v4_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderFieldMap]): void;

  hasJobField(): boolean;
  clearJobField(): void;
  getJobField(): google_ads_googleads_v4_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderFieldMap];
  setJobField(value: google_ads_googleads_v4_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderFieldMap]): void;

  getFieldCase(): AttributeFieldMapping.FieldCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributeFieldMapping.AsObject;
  static toObject(includeInstance: boolean, msg: AttributeFieldMapping): AttributeFieldMapping.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributeFieldMapping, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributeFieldMapping;
  static deserializeBinaryFromReader(message: AttributeFieldMapping, reader: jspb.BinaryReader): AttributeFieldMapping;
}

export namespace AttributeFieldMapping {
  export type AsObject = {
    feedAttributeId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    fieldId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    sitelinkField: google_ads_googleads_v4_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_sitelink_placeholder_field_pb.SitelinkPlaceholderFieldEnum.SitelinkPlaceholderFieldMap],
    callField: google_ads_googleads_v4_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_call_placeholder_field_pb.CallPlaceholderFieldEnum.CallPlaceholderFieldMap],
    appField: google_ads_googleads_v4_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_app_placeholder_field_pb.AppPlaceholderFieldEnum.AppPlaceholderFieldMap],
    locationField: google_ads_googleads_v4_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_location_placeholder_field_pb.LocationPlaceholderFieldEnum.LocationPlaceholderFieldMap],
    affiliateLocationField: google_ads_googleads_v4_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_affiliate_location_placeholder_field_pb.AffiliateLocationPlaceholderFieldEnum.AffiliateLocationPlaceholderFieldMap],
    calloutField: google_ads_googleads_v4_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_callout_placeholder_field_pb.CalloutPlaceholderFieldEnum.CalloutPlaceholderFieldMap],
    structuredSnippetField: google_ads_googleads_v4_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_structured_snippet_placeholder_field_pb.StructuredSnippetPlaceholderFieldEnum.StructuredSnippetPlaceholderFieldMap],
    messageField: google_ads_googleads_v4_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_message_placeholder_field_pb.MessagePlaceholderFieldEnum.MessagePlaceholderFieldMap],
    priceField: google_ads_googleads_v4_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_price_placeholder_field_pb.PricePlaceholderFieldEnum.PricePlaceholderFieldMap],
    promotionField: google_ads_googleads_v4_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_promotion_placeholder_field_pb.PromotionPlaceholderFieldEnum.PromotionPlaceholderFieldMap],
    adCustomizerField: google_ads_googleads_v4_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_ad_customizer_placeholder_field_pb.AdCustomizerPlaceholderFieldEnum.AdCustomizerPlaceholderFieldMap],
    dsaPageFeedField: google_ads_googleads_v4_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionFieldMap[keyof google_ads_googleads_v4_enums_dsa_page_feed_criterion_field_pb.DsaPageFeedCriterionFieldEnum.DsaPageFeedCriterionFieldMap],
    locationExtensionTargetingField: google_ads_googleads_v4_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionFieldMap[keyof google_ads_googleads_v4_enums_location_extension_targeting_criterion_field_pb.LocationExtensionTargetingCriterionFieldEnum.LocationExtensionTargetingCriterionFieldMap],
    educationField: google_ads_googleads_v4_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_education_placeholder_field_pb.EducationPlaceholderFieldEnum.EducationPlaceholderFieldMap],
    flightField: google_ads_googleads_v4_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_flight_placeholder_field_pb.FlightPlaceholderFieldEnum.FlightPlaceholderFieldMap],
    customField: google_ads_googleads_v4_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_custom_placeholder_field_pb.CustomPlaceholderFieldEnum.CustomPlaceholderFieldMap],
    hotelField: google_ads_googleads_v4_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_hotel_placeholder_field_pb.HotelPlaceholderFieldEnum.HotelPlaceholderFieldMap],
    realEstateField: google_ads_googleads_v4_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderFieldMap[keyof google_ads_googleads_v4_enums_real_estate_placeholder_field_pb.RealEstatePlaceholderFieldEnum.RealEstatePlaceholderFieldMap],
    travelField: google_ads_googleads_v4_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_travel_placeholder_field_pb.TravelPlaceholderFieldEnum.TravelPlaceholderFieldMap],
    localField: google_ads_googleads_v4_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_local_placeholder_field_pb.LocalPlaceholderFieldEnum.LocalPlaceholderFieldMap],
    jobField: google_ads_googleads_v4_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderFieldMap[keyof google_ads_googleads_v4_enums_job_placeholder_field_pb.JobPlaceholderFieldEnum.JobPlaceholderFieldMap],
  }

  export enum FieldCase {
    FIELD_NOT_SET = 0,
    SITELINK_FIELD = 3,
    CALL_FIELD = 4,
    APP_FIELD = 5,
    LOCATION_FIELD = 6,
    AFFILIATE_LOCATION_FIELD = 7,
    CALLOUT_FIELD = 8,
    STRUCTURED_SNIPPET_FIELD = 9,
    MESSAGE_FIELD = 10,
    PRICE_FIELD = 11,
    PROMOTION_FIELD = 12,
    AD_CUSTOMIZER_FIELD = 13,
    DSA_PAGE_FEED_FIELD = 14,
    LOCATION_EXTENSION_TARGETING_FIELD = 15,
    EDUCATION_FIELD = 16,
    FLIGHT_FIELD = 17,
    CUSTOM_FIELD = 18,
    HOTEL_FIELD = 19,
    REAL_ESTATE_FIELD = 20,
    TRAVEL_FIELD = 21,
    LOCAL_FIELD = 22,
    JOB_FIELD = 23,
  }
}

