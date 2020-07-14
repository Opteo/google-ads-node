// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/ad_group_criterion_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupCriterionErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionErrorEnum): AdGroupCriterionErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupCriterionErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionErrorEnum;
  static deserializeBinaryFromReader(message: AdGroupCriterionErrorEnum, reader: jspb.BinaryReader): AdGroupCriterionErrorEnum;
}

export namespace AdGroupCriterionErrorEnum {
  export type AsObject = {
  }

  export interface AdGroupCriterionErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    AD_GROUP_CRITERION_LABEL_DOES_NOT_EXIST: 2;
    AD_GROUP_CRITERION_LABEL_ALREADY_EXISTS: 3;
    CANNOT_ADD_LABEL_TO_NEGATIVE_CRITERION: 4;
    TOO_MANY_OPERATIONS: 5;
    CANT_UPDATE_NEGATIVE: 6;
    CONCRETE_TYPE_REQUIRED: 7;
    BID_INCOMPATIBLE_WITH_ADGROUP: 8;
    CANNOT_TARGET_AND_EXCLUDE: 9;
    ILLEGAL_URL: 10;
    INVALID_KEYWORD_TEXT: 11;
    INVALID_DESTINATION_URL: 12;
    MISSING_DESTINATION_URL_TAG: 13;
    KEYWORD_LEVEL_BID_NOT_SUPPORTED_FOR_MANUALCPM: 14;
    INVALID_USER_STATUS: 15;
    CANNOT_ADD_CRITERIA_TYPE: 16;
    CANNOT_EXCLUDE_CRITERIA_TYPE: 17;
    CAMPAIGN_TYPE_NOT_COMPATIBLE_WITH_PARTIAL_FAILURE: 27;
    OPERATIONS_FOR_TOO_MANY_SHOPPING_ADGROUPS: 28;
    CANNOT_MODIFY_URL_FIELDS_WITH_DUPLICATE_ELEMENTS: 29;
    CANNOT_SET_WITHOUT_FINAL_URLS: 30;
    CANNOT_CLEAR_FINAL_URLS_IF_FINAL_MOBILE_URLS_EXIST: 31;
    CANNOT_CLEAR_FINAL_URLS_IF_FINAL_APP_URLS_EXIST: 32;
    CANNOT_CLEAR_FINAL_URLS_IF_TRACKING_URL_TEMPLATE_EXISTS: 33;
    CANNOT_CLEAR_FINAL_URLS_IF_URL_CUSTOM_PARAMETERS_EXIST: 34;
    CANNOT_SET_BOTH_DESTINATION_URL_AND_FINAL_URLS: 35;
    CANNOT_SET_BOTH_DESTINATION_URL_AND_TRACKING_URL_TEMPLATE: 36;
    FINAL_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE: 37;
    FINAL_MOBILE_URLS_NOT_SUPPORTED_FOR_CRITERION_TYPE: 38;
  }

  export const AdGroupCriterionError: AdGroupCriterionErrorMap;
}

