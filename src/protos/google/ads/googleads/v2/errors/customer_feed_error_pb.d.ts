// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/customer_feed_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerFeedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerFeedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerFeedErrorEnum): CustomerFeedErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerFeedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerFeedErrorEnum;
  static deserializeBinaryFromReader(message: CustomerFeedErrorEnum, reader: jspb.BinaryReader): CustomerFeedErrorEnum;
}

export namespace CustomerFeedErrorEnum {
  export type AsObject = {
  }

  export enum CustomerFeedError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FEED_ALREADY_EXISTS_FOR_PLACEHOLDER_TYPE = 2,
    CANNOT_CREATE_FOR_REMOVED_FEED = 3,
    CANNOT_CREATE_ALREADY_EXISTING_CUSTOMER_FEED = 4,
    CANNOT_MODIFY_REMOVED_CUSTOMER_FEED = 5,
    INVALID_PLACEHOLDER_TYPE = 6,
    MISSING_FEEDMAPPING_FOR_PLACEHOLDER_TYPE = 7,
    PLACEHOLDER_TYPE_NOT_ALLOWED_ON_CUSTOMER_FEED = 8,
  }
}

