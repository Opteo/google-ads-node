// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/url_field_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UrlFieldErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlFieldErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UrlFieldErrorEnum): UrlFieldErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlFieldErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlFieldErrorEnum;
  static deserializeBinaryFromReader(message: UrlFieldErrorEnum, reader: jspb.BinaryReader): UrlFieldErrorEnum;
}

export namespace UrlFieldErrorEnum {
  export type AsObject = {
  }

  export enum UrlFieldError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_TRACKING_URL_TEMPLATE = 2,
    INVALID_TAG_IN_TRACKING_URL_TEMPLATE = 3,
    MISSING_TRACKING_URL_TEMPLATE_TAG = 4,
    MISSING_PROTOCOL_IN_TRACKING_URL_TEMPLATE = 5,
    INVALID_PROTOCOL_IN_TRACKING_URL_TEMPLATE = 6,
    MALFORMED_TRACKING_URL_TEMPLATE = 7,
    MISSING_HOST_IN_TRACKING_URL_TEMPLATE = 8,
    INVALID_TLD_IN_TRACKING_URL_TEMPLATE = 9,
    REDUNDANT_NESTED_TRACKING_URL_TEMPLATE_TAG = 10,
    INVALID_FINAL_URL = 11,
    INVALID_TAG_IN_FINAL_URL = 12,
    REDUNDANT_NESTED_FINAL_URL_TAG = 13,
    MISSING_PROTOCOL_IN_FINAL_URL = 14,
    INVALID_PROTOCOL_IN_FINAL_URL = 15,
    MALFORMED_FINAL_URL = 16,
    MISSING_HOST_IN_FINAL_URL = 17,
    INVALID_TLD_IN_FINAL_URL = 18,
    INVALID_FINAL_MOBILE_URL = 19,
    INVALID_TAG_IN_FINAL_MOBILE_URL = 20,
    REDUNDANT_NESTED_FINAL_MOBILE_URL_TAG = 21,
    MISSING_PROTOCOL_IN_FINAL_MOBILE_URL = 22,
    INVALID_PROTOCOL_IN_FINAL_MOBILE_URL = 23,
    MALFORMED_FINAL_MOBILE_URL = 24,
    MISSING_HOST_IN_FINAL_MOBILE_URL = 25,
    INVALID_TLD_IN_FINAL_MOBILE_URL = 26,
    INVALID_FINAL_APP_URL = 27,
    INVALID_TAG_IN_FINAL_APP_URL = 28,
    REDUNDANT_NESTED_FINAL_APP_URL_TAG = 29,
    MULTIPLE_APP_URLS_FOR_OSTYPE = 30,
    INVALID_OSTYPE = 31,
    INVALID_PROTOCOL_FOR_APP_URL = 32,
    INVALID_PACKAGE_ID_FOR_APP_URL = 33,
    URL_CUSTOM_PARAMETERS_COUNT_EXCEEDS_LIMIT = 34,
    INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_KEY = 39,
    INVALID_CHARACTERS_IN_URL_CUSTOM_PARAMETER_VALUE = 40,
    INVALID_TAG_IN_URL_CUSTOM_PARAMETER_VALUE = 41,
    REDUNDANT_NESTED_URL_CUSTOM_PARAMETER_TAG = 42,
    MISSING_PROTOCOL = 43,
    INVALID_PROTOCOL = 52,
    INVALID_URL = 44,
    DESTINATION_URL_DEPRECATED = 45,
    INVALID_TAG_IN_URL = 46,
    MISSING_URL_TAG = 47,
    DUPLICATE_URL_ID = 48,
    INVALID_URL_ID = 49,
    FINAL_URL_SUFFIX_MALFORMED = 50,
    INVALID_TAG_IN_FINAL_URL_SUFFIX = 51,
    INVALID_TOP_LEVEL_DOMAIN = 53,
    MALFORMED_TOP_LEVEL_DOMAIN = 54,
    MALFORMED_URL = 55,
    MISSING_HOST = 56,
    NULL_CUSTOM_PARAMETER_VALUE = 57,
  }
}

