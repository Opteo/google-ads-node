// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/feed_item_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemErrorEnum): FeedItemErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemErrorEnum;
  static deserializeBinaryFromReader(message: FeedItemErrorEnum, reader: jspb.BinaryReader): FeedItemErrorEnum;
}

export namespace FeedItemErrorEnum {
  export type AsObject = {
  }

  export enum FeedItemError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_CONVERT_ATTRIBUTE_VALUE_FROM_STRING = 2,
    CANNOT_OPERATE_ON_REMOVED_FEED_ITEM = 3,
    DATE_TIME_MUST_BE_IN_ACCOUNT_TIME_ZONE = 4,
    KEY_ATTRIBUTES_NOT_FOUND = 5,
    INVALID_URL = 6,
    MISSING_KEY_ATTRIBUTES = 7,
    KEY_ATTRIBUTES_NOT_UNIQUE = 8,
    CANNOT_MODIFY_KEY_ATTRIBUTE_VALUE = 9,
    SIZE_TOO_LARGE_FOR_MULTI_VALUE_ATTRIBUTE = 10,
  }
}

