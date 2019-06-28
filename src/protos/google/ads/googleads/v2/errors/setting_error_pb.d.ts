// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/setting_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SettingErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SettingErrorEnum): SettingErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettingErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingErrorEnum;
  static deserializeBinaryFromReader(message: SettingErrorEnum, reader: jspb.BinaryReader): SettingErrorEnum;
}

export namespace SettingErrorEnum {
  export type AsObject = {
  }

  export enum SettingError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SETTING_TYPE_IS_NOT_AVAILABLE = 3,
    SETTING_TYPE_IS_NOT_COMPATIBLE_WITH_CAMPAIGN = 4,
    TARGETING_SETTING_CONTAINS_INVALID_CRITERION_TYPE_GROUP = 5,
    TARGETING_SETTING_DEMOGRAPHIC_CRITERION_TYPE_GROUPS_MUST_BE_SET_TO_TARGET_ALL = 6,
    TARGETING_SETTING_CANNOT_CHANGE_TARGET_ALL_TO_FALSE_FOR_DEMOGRAPHIC_CRITERION_TYPE_GROUP = 7,
    DYNAMIC_SEARCH_ADS_SETTING_AT_LEAST_ONE_FEED_ID_MUST_BE_PRESENT = 8,
    DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_DOMAIN_NAME = 9,
    DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_SUBDOMAIN_NAME = 10,
    DYNAMIC_SEARCH_ADS_SETTING_CONTAINS_INVALID_LANGUAGE_CODE = 11,
    TARGET_ALL_IS_NOT_ALLOWED_FOR_PLACEMENT_IN_SEARCH_CAMPAIGN = 12,
    UNIVERSAL_APP_CAMPAIGN_SETTING_DUPLICATE_DESCRIPTION = 13,
    UNIVERSAL_APP_CAMPAIGN_SETTING_DESCRIPTION_LINE_WIDTH_TOO_LONG = 14,
    UNIVERSAL_APP_CAMPAIGN_SETTING_APP_ID_CANNOT_BE_MODIFIED = 15,
    TOO_MANY_YOUTUBE_MEDIA_IDS_IN_UNIVERSAL_APP_CAMPAIGN = 16,
    TOO_MANY_IMAGE_MEDIA_IDS_IN_UNIVERSAL_APP_CAMPAIGN = 17,
    MEDIA_INCOMPATIBLE_FOR_UNIVERSAL_APP_CAMPAIGN = 18,
    TOO_MANY_EXCLAMATION_MARKS = 19,
  }
}

