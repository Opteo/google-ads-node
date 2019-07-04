// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/ad_group_feed_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupFeedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupFeedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupFeedErrorEnum): AdGroupFeedErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupFeedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupFeedErrorEnum;
  static deserializeBinaryFromReader(message: AdGroupFeedErrorEnum, reader: jspb.BinaryReader): AdGroupFeedErrorEnum;
}

export namespace AdGroupFeedErrorEnum {
  export type AsObject = {
  }

  export enum AdGroupFeedError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE = 2,
    CANNOT_CREATE_FOR_REMOVED_FEED = 3,
    ADGROUP_FEED_ALREADY_EXISTS = 4,
    CANNOT_OPERATE_ON_REMOVED_ADGROUP_FEED = 5,
    INVALID_PLACEHOLDER_TYPE = 6,
    MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE = 7,
    NO_EXISTING_LOCATION_CUSTOMER_FEED = 8,
  }
}

