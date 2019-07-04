// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/feed_attribute_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedAttributeTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedAttributeTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedAttributeTypeEnum): FeedAttributeTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedAttributeTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedAttributeTypeEnum;
  static deserializeBinaryFromReader(message: FeedAttributeTypeEnum, reader: jspb.BinaryReader): FeedAttributeTypeEnum;
}

export namespace FeedAttributeTypeEnum {
  export type AsObject = {
  }

  export enum FeedAttributeType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INT64 = 2,
    DOUBLE = 3,
    STRING = 4,
    BOOLEAN = 5,
    URL = 6,
    DATE_TIME = 7,
    INT64_LIST = 8,
    DOUBLE_LIST = 9,
    STRING_LIST = 10,
    BOOLEAN_LIST = 11,
    URL_LIST = 12,
    DATE_TIME_LIST = 13,
    PRICE = 14,
  }
}

