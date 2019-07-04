// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/feed_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedErrorEnum): FeedErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedErrorEnum;
  static deserializeBinaryFromReader(message: FeedErrorEnum, reader: jspb.BinaryReader): FeedErrorEnum;
}

export namespace FeedErrorEnum {
  export type AsObject = {
  }

  export enum FeedError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ATTRIBUTE_NAMES_NOT_UNIQUE = 2,
    ATTRIBUTES_DO_NOT_MATCH_EXISTING_ATTRIBUTES = 3,
    CANNOT_SPECIFY_USER_ORIGIN_FOR_SYSTEM_FEED = 4,
    CANNOT_SPECIFY_GOOGLE_ORIGIN_FOR_NON_SYSTEM_FEED = 5,
    CANNOT_SPECIFY_FEED_ATTRIBUTES_FOR_SYSTEM_FEED = 6,
    CANNOT_UPDATE_FEED_ATTRIBUTES_WITH_ORIGIN_GOOGLE = 7,
    FEED_REMOVED = 8,
    INVALID_ORIGIN_VALUE = 9,
    FEED_ORIGIN_IS_NOT_USER = 10,
    INVALID_AUTH_TOKEN_FOR_EMAIL = 11,
    INVALID_EMAIL = 12,
    DUPLICATE_FEED_NAME = 13,
    INVALID_FEED_NAME = 14,
    MISSING_OAUTH_INFO = 15,
    NEW_ATTRIBUTE_CANNOT_BE_PART_OF_UNIQUE_KEY = 16,
    TOO_MANY_ATTRIBUTES = 17,
    INVALID_BUSINESS_ACCOUNT = 18,
    BUSINESS_ACCOUNT_CANNOT_ACCESS_LOCATION_ACCOUNT = 19,
    INVALID_AFFILIATE_CHAIN_ID = 20,
    DUPLICATE_SYSTEM_FEED = 21,
  }
}

