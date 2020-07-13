// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/feed_item.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_custom_parameter_pb from "../../../../../google/ads/googleads/v4/common/custom_parameter_pb";
import * as google_ads_googleads_v4_common_feed_common_pb from "../../../../../google/ads/googleads/v4/common/feed_common_pb";
import * as google_ads_googleads_v4_common_policy_pb from "../../../../../google/ads/googleads/v4/common/policy_pb";
import * as google_ads_googleads_v4_enums_feed_item_quality_approval_status_pb from "../../../../../google/ads/googleads/v4/enums/feed_item_quality_approval_status_pb";
import * as google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb from "../../../../../google/ads/googleads/v4/enums/feed_item_quality_disapproval_reason_pb";
import * as google_ads_googleads_v4_enums_feed_item_status_pb from "../../../../../google/ads/googleads/v4/enums/feed_item_status_pb";
import * as google_ads_googleads_v4_enums_feed_item_validation_status_pb from "../../../../../google/ads/googleads/v4/enums/feed_item_validation_status_pb";
import * as google_ads_googleads_v4_enums_geo_targeting_restriction_pb from "../../../../../google/ads/googleads/v4/enums/geo_targeting_restriction_pb";
import * as google_ads_googleads_v4_enums_placeholder_type_pb from "../../../../../google/ads/googleads/v4/enums/placeholder_type_pb";
import * as google_ads_googleads_v4_enums_policy_approval_status_pb from "../../../../../google/ads/googleads/v4/enums/policy_approval_status_pb";
import * as google_ads_googleads_v4_enums_policy_review_status_pb from "../../../../../google/ads/googleads/v4/enums/policy_review_status_pb";
import * as google_ads_googleads_v4_errors_feed_item_validation_error_pb from "../../../../../google/ads/googleads/v4/errors/feed_item_validation_error_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItem extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeed(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasStartDateTime(): boolean;
  clearStartDateTime(): void;
  getStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEndDateTime(): boolean;
  clearEndDateTime(): void;
  getEndDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearAttributeValuesList(): void;
  getAttributeValuesList(): Array<FeedItemAttributeValue>;
  setAttributeValuesList(value: Array<FeedItemAttributeValue>): void;
  addAttributeValues(value?: FeedItemAttributeValue, index?: number): FeedItemAttributeValue;

  getGeoTargetingRestriction(): google_ads_googleads_v4_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestrictionMap[keyof google_ads_googleads_v4_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestrictionMap];
  setGeoTargetingRestriction(value: google_ads_googleads_v4_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestrictionMap[keyof google_ads_googleads_v4_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestrictionMap]): void;

  clearUrlCustomParametersList(): void;
  getUrlCustomParametersList(): Array<google_ads_googleads_v4_common_custom_parameter_pb.CustomParameter>;
  setUrlCustomParametersList(value: Array<google_ads_googleads_v4_common_custom_parameter_pb.CustomParameter>): void;
  addUrlCustomParameters(value?: google_ads_googleads_v4_common_custom_parameter_pb.CustomParameter, index?: number): google_ads_googleads_v4_common_custom_parameter_pb.CustomParameter;

  getStatus(): google_ads_googleads_v4_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatusMap[keyof google_ads_googleads_v4_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatusMap[keyof google_ads_googleads_v4_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatusMap]): void;

  clearPolicyInfosList(): void;
  getPolicyInfosList(): Array<FeedItemPlaceholderPolicyInfo>;
  setPolicyInfosList(value: Array<FeedItemPlaceholderPolicyInfo>): void;
  addPolicyInfos(value?: FeedItemPlaceholderPolicyInfo, index?: number): FeedItemPlaceholderPolicyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItem.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItem): FeedItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItem;
  static deserializeBinaryFromReader(message: FeedItem, reader: jspb.BinaryReader): FeedItem;
}

export namespace FeedItem {
  export type AsObject = {
    resourceName: string,
    feed?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    startDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    attributeValuesList: Array<FeedItemAttributeValue.AsObject>,
    geoTargetingRestriction: google_ads_googleads_v4_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestrictionMap[keyof google_ads_googleads_v4_enums_geo_targeting_restriction_pb.GeoTargetingRestrictionEnum.GeoTargetingRestrictionMap],
    urlCustomParametersList: Array<google_ads_googleads_v4_common_custom_parameter_pb.CustomParameter.AsObject>,
    status: google_ads_googleads_v4_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatusMap[keyof google_ads_googleads_v4_enums_feed_item_status_pb.FeedItemStatusEnum.FeedItemStatusMap],
    policyInfosList: Array<FeedItemPlaceholderPolicyInfo.AsObject>,
  }
}

export class FeedItemAttributeValue extends jspb.Message {
  hasFeedAttributeId(): boolean;
  clearFeedAttributeId(): void;
  getFeedAttributeId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setFeedAttributeId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasIntegerValue(): boolean;
  clearIntegerValue(): void;
  getIntegerValue(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setIntegerValue(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBooleanValue(): boolean;
  clearBooleanValue(): void;
  getBooleanValue(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setBooleanValue(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStringValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setDoubleValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasPriceValue(): boolean;
  clearPriceValue(): void;
  getPriceValue(): google_ads_googleads_v4_common_feed_common_pb.Money | undefined;
  setPriceValue(value?: google_ads_googleads_v4_common_feed_common_pb.Money): void;

  clearIntegerValuesList(): void;
  getIntegerValuesList(): Array<google_protobuf_wrappers_pb.Int64Value>;
  setIntegerValuesList(value: Array<google_protobuf_wrappers_pb.Int64Value>): void;
  addIntegerValues(value?: google_protobuf_wrappers_pb.Int64Value, index?: number): google_protobuf_wrappers_pb.Int64Value;

  clearBooleanValuesList(): void;
  getBooleanValuesList(): Array<google_protobuf_wrappers_pb.BoolValue>;
  setBooleanValuesList(value: Array<google_protobuf_wrappers_pb.BoolValue>): void;
  addBooleanValues(value?: google_protobuf_wrappers_pb.BoolValue, index?: number): google_protobuf_wrappers_pb.BoolValue;

  clearStringValuesList(): void;
  getStringValuesList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setStringValuesList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addStringValues(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearDoubleValuesList(): void;
  getDoubleValuesList(): Array<google_protobuf_wrappers_pb.DoubleValue>;
  setDoubleValuesList(value: Array<google_protobuf_wrappers_pb.DoubleValue>): void;
  addDoubleValues(value?: google_protobuf_wrappers_pb.DoubleValue, index?: number): google_protobuf_wrappers_pb.DoubleValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemAttributeValue.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemAttributeValue): FeedItemAttributeValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemAttributeValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemAttributeValue;
  static deserializeBinaryFromReader(message: FeedItemAttributeValue, reader: jspb.BinaryReader): FeedItemAttributeValue;
}

export namespace FeedItemAttributeValue {
  export type AsObject = {
    feedAttributeId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    integerValue?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    booleanValue?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    stringValue?: google_protobuf_wrappers_pb.StringValue.AsObject,
    doubleValue?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    priceValue?: google_ads_googleads_v4_common_feed_common_pb.Money.AsObject,
    integerValuesList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>,
    booleanValuesList: Array<google_protobuf_wrappers_pb.BoolValue.AsObject>,
    stringValuesList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    doubleValuesList: Array<google_protobuf_wrappers_pb.DoubleValue.AsObject>,
  }
}

export class FeedItemPlaceholderPolicyInfo extends jspb.Message {
  getPlaceholderTypeEnum(): google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap];
  setPlaceholderTypeEnum(value: google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap]): void;

  hasFeedMappingResourceName(): boolean;
  clearFeedMappingResourceName(): void;
  getFeedMappingResourceName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFeedMappingResourceName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getReviewStatus(): google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap];
  setReviewStatus(value: google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap]): void;

  getApprovalStatus(): google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap];
  setApprovalStatus(value: google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap]): void;

  clearPolicyTopicEntriesList(): void;
  getPolicyTopicEntriesList(): Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry>;
  setPolicyTopicEntriesList(value: Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry>): void;
  addPolicyTopicEntries(value?: google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry, index?: number): google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry;

  getValidationStatus(): google_ads_googleads_v4_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatusMap[keyof google_ads_googleads_v4_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatusMap];
  setValidationStatus(value: google_ads_googleads_v4_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatusMap[keyof google_ads_googleads_v4_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatusMap]): void;

  clearValidationErrorsList(): void;
  getValidationErrorsList(): Array<FeedItemValidationError>;
  setValidationErrorsList(value: Array<FeedItemValidationError>): void;
  addValidationErrors(value?: FeedItemValidationError, index?: number): FeedItemValidationError;

  getQualityApprovalStatus(): google_ads_googleads_v4_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatusMap[keyof google_ads_googleads_v4_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatusMap];
  setQualityApprovalStatus(value: google_ads_googleads_v4_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatusMap[keyof google_ads_googleads_v4_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatusMap]): void;

  clearQualityDisapprovalReasonsList(): void;
  getQualityDisapprovalReasonsList(): Array<google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap[keyof google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap]>;
  setQualityDisapprovalReasonsList(value: Array<google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap[keyof google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap]>): void;
  addQualityDisapprovalReasons(value: google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap[keyof google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap], index?: number): google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap[keyof google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemPlaceholderPolicyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemPlaceholderPolicyInfo): FeedItemPlaceholderPolicyInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemPlaceholderPolicyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemPlaceholderPolicyInfo;
  static deserializeBinaryFromReader(message: FeedItemPlaceholderPolicyInfo, reader: jspb.BinaryReader): FeedItemPlaceholderPolicyInfo;
}

export namespace FeedItemPlaceholderPolicyInfo {
  export type AsObject = {
    placeholderTypeEnum: google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap[keyof google_ads_googleads_v4_enums_placeholder_type_pb.PlaceholderTypeEnum.PlaceholderTypeMap],
    feedMappingResourceName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    reviewStatus: google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap],
    approvalStatus: google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap],
    policyTopicEntriesList: Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry.AsObject>,
    validationStatus: google_ads_googleads_v4_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatusMap[keyof google_ads_googleads_v4_enums_feed_item_validation_status_pb.FeedItemValidationStatusEnum.FeedItemValidationStatusMap],
    validationErrorsList: Array<FeedItemValidationError.AsObject>,
    qualityApprovalStatus: google_ads_googleads_v4_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatusMap[keyof google_ads_googleads_v4_enums_feed_item_quality_approval_status_pb.FeedItemQualityApprovalStatusEnum.FeedItemQualityApprovalStatusMap],
    qualityDisapprovalReasonsList: Array<google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap[keyof google_ads_googleads_v4_enums_feed_item_quality_disapproval_reason_pb.FeedItemQualityDisapprovalReasonEnum.FeedItemQualityDisapprovalReasonMap]>,
  }
}

export class FeedItemValidationError extends jspb.Message {
  getValidationError(): google_ads_googleads_v4_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap[keyof google_ads_googleads_v4_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap];
  setValidationError(value: google_ads_googleads_v4_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap[keyof google_ads_googleads_v4_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap]): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearFeedAttributeIdsList(): void;
  getFeedAttributeIdsList(): Array<google_protobuf_wrappers_pb.Int64Value>;
  setFeedAttributeIdsList(value: Array<google_protobuf_wrappers_pb.Int64Value>): void;
  addFeedAttributeIds(value?: google_protobuf_wrappers_pb.Int64Value, index?: number): google_protobuf_wrappers_pb.Int64Value;

  hasExtraInfo(): boolean;
  clearExtraInfo(): void;
  getExtraInfo(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExtraInfo(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemValidationError.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemValidationError): FeedItemValidationError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemValidationError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemValidationError;
  static deserializeBinaryFromReader(message: FeedItemValidationError, reader: jspb.BinaryReader): FeedItemValidationError;
}

export namespace FeedItemValidationError {
  export type AsObject = {
    validationError: google_ads_googleads_v4_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap[keyof google_ads_googleads_v4_errors_feed_item_validation_error_pb.FeedItemValidationErrorEnum.FeedItemValidationErrorMap],
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    feedAttributeIdsList: Array<google_protobuf_wrappers_pb.Int64Value.AsObject>,
    extraInfo?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

