// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/feed_item_target_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemTargetErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTargetErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTargetErrorEnum): FeedItemTargetErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemTargetErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTargetErrorEnum;
  static deserializeBinaryFromReader(message: FeedItemTargetErrorEnum, reader: jspb.BinaryReader): FeedItemTargetErrorEnum;
}

export namespace FeedItemTargetErrorEnum {
  export type AsObject = {
  }

  export enum FeedItemTargetError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MUST_SET_TARGET_ONEOF_ON_CREATE = 2,
    FEED_ITEM_TARGET_ALREADY_EXISTS = 3,
    FEED_ITEM_SCHEDULES_CANNOT_OVERLAP = 4,
    TARGET_LIMIT_EXCEEDED_FOR_GIVEN_TYPE = 5,
    TOO_MANY_SCHEDULES_PER_DAY = 6,
    CANNOT_HAVE_ENABLED_CAMPAIGN_AND_ENABLED_AD_GROUP_TARGETS = 7,
    DUPLICATE_AD_SCHEDULE = 8,
    DUPLICATE_KEYWORD = 9,
  }
}

