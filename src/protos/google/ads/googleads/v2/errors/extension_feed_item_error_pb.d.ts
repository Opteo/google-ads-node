// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/extension_feed_item_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ExtensionFeedItemErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionFeedItemErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionFeedItemErrorEnum): ExtensionFeedItemErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionFeedItemErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionFeedItemErrorEnum;
  static deserializeBinaryFromReader(message: ExtensionFeedItemErrorEnum, reader: jspb.BinaryReader): ExtensionFeedItemErrorEnum;
}

export namespace ExtensionFeedItemErrorEnum {
  export type AsObject = {
  }

  export enum ExtensionFeedItemError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    VALUE_OUT_OF_RANGE = 2,
    URL_LIST_TOO_LONG = 3,
    CANNOT_HAVE_RESTRICTION_ON_EMPTY_GEO_TARGETING = 4,
    CANNOT_SET_WITH_FINAL_URLS = 5,
    CANNOT_SET_WITHOUT_FINAL_URLS = 6,
    INVALID_PHONE_NUMBER = 7,
    PHONE_NUMBER_NOT_SUPPORTED_FOR_COUNTRY = 8,
    CARRIER_SPECIFIC_SHORT_NUMBER_NOT_ALLOWED = 9,
    PREMIUM_RATE_NUMBER_NOT_ALLOWED = 10,
    DISALLOWED_NUMBER_TYPE = 11,
    INVALID_DOMESTIC_PHONE_NUMBER_FORMAT = 12,
    VANITY_PHONE_NUMBER_NOT_ALLOWED = 13,
    INVALID_CALL_CONVERSION_ACTION = 14,
    CUSTOMER_NOT_WHITELISTED_FOR_CALLTRACKING = 15,
    CALLTRACKING_NOT_SUPPORTED_FOR_COUNTRY = 16,
    CUSTOMER_CONSENT_FOR_CALL_RECORDING_REQUIRED = 17,
    INVALID_APP_ID = 18,
    QUOTES_IN_REVIEW_EXTENSION_SNIPPET = 19,
    HYPHENS_IN_REVIEW_EXTENSION_SNIPPET = 20,
    REVIEW_EXTENSION_SOURCE_INELIGIBLE = 21,
    SOURCE_NAME_IN_REVIEW_EXTENSION_TEXT = 22,
    INCONSISTENT_CURRENCY_CODES = 23,
    PRICE_EXTENSION_HAS_DUPLICATED_HEADERS = 24,
    PRICE_ITEM_HAS_DUPLICATED_HEADER_AND_DESCRIPTION = 25,
    PRICE_EXTENSION_HAS_TOO_FEW_ITEMS = 26,
    PRICE_EXTENSION_HAS_TOO_MANY_ITEMS = 27,
    UNSUPPORTED_VALUE = 28,
    UNSUPPORTED_VALUE_IN_SELECTED_LANGUAGE = 29,
    INVALID_DEVICE_PREFERENCE = 30,
    INVALID_SCHEDULE_END = 31,
    DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE = 32,
    INVALID_SNIPPETS_HEADER = 33,
    CANNOT_OPERATE_ON_REMOVED_FEED_ITEM = 34,
    PHONE_NUMBER_NOT_SUPPORTED_WITH_CALLTRACKING_FOR_COUNTRY = 35,
    CONFLICTING_CALL_CONVERSION_SETTINGS = 36,
    EXTENSION_TYPE_MISMATCH = 37,
    EXTENSION_SUBTYPE_REQUIRED = 38,
    EXTENSION_TYPE_UNSUPPORTED = 39,
    CANNOT_OPERATE_ON_FEED_WITH_MULTIPLE_MAPPINGS = 40,
    CANNOT_OPERATE_ON_FEED_WITH_KEY_ATTRIBUTES = 41,
    INVALID_PRICE_FORMAT = 42,
    PROMOTION_INVALID_TIME = 43,
    TOO_MANY_DECIMAL_PLACES_SPECIFIED = 44,
  }
}

