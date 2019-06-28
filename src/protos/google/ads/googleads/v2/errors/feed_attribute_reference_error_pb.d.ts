// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/feed_attribute_reference_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedAttributeReferenceErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedAttributeReferenceErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedAttributeReferenceErrorEnum): FeedAttributeReferenceErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedAttributeReferenceErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedAttributeReferenceErrorEnum;
  static deserializeBinaryFromReader(message: FeedAttributeReferenceErrorEnum, reader: jspb.BinaryReader): FeedAttributeReferenceErrorEnum;
}

export namespace FeedAttributeReferenceErrorEnum {
  export type AsObject = {
  }

  export enum FeedAttributeReferenceError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_REFERENCE_REMOVED_FEED = 2,
    INVALID_FEED_NAME = 3,
    INVALID_FEED_ATTRIBUTE_NAME = 4,
  }
}

