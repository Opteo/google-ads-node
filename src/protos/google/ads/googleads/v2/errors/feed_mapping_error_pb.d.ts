// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/feed_mapping_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedMappingErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMappingErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMappingErrorEnum): FeedMappingErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMappingErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMappingErrorEnum;
  static deserializeBinaryFromReader(message: FeedMappingErrorEnum, reader: jspb.BinaryReader): FeedMappingErrorEnum;
}

export namespace FeedMappingErrorEnum {
  export type AsObject = {
  }

  export enum FeedMappingError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_PLACEHOLDER_FIELD = 2,
    INVALID_CRITERION_FIELD = 3,
    INVALID_PLACEHOLDER_TYPE = 4,
    INVALID_CRITERION_TYPE = 5,
    NO_ATTRIBUTE_FIELD_MAPPINGS = 7,
    FEED_ATTRIBUTE_TYPE_MISMATCH = 8,
    CANNOT_OPERATE_ON_MAPPINGS_FOR_SYSTEM_GENERATED_FEED = 9,
    MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_TYPE = 10,
    MULTIPLE_MAPPINGS_FOR_CRITERION_TYPE = 11,
    MULTIPLE_MAPPINGS_FOR_PLACEHOLDER_FIELD = 12,
    MULTIPLE_MAPPINGS_FOR_CRITERION_FIELD = 13,
    UNEXPECTED_ATTRIBUTE_FIELD_MAPPINGS = 14,
    LOCATION_PLACEHOLDER_ONLY_FOR_PLACES_FEEDS = 15,
    CANNOT_MODIFY_MAPPINGS_FOR_TYPED_FEED = 16,
    INVALID_PLACEHOLDER_TYPE_FOR_NON_SYSTEM_GENERATED_FEED = 17,
    INVALID_PLACEHOLDER_TYPE_FOR_SYSTEM_GENERATED_FEED_TYPE = 18,
  }
}

