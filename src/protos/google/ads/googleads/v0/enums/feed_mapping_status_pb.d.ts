// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/feed_mapping_status.proto

import * as jspb from "google-protobuf";

export class FeedMappingStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMappingStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMappingStatusEnum): FeedMappingStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMappingStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMappingStatusEnum;
  static deserializeBinaryFromReader(message: FeedMappingStatusEnum, reader: jspb.BinaryReader): FeedMappingStatusEnum;
}

export namespace FeedMappingStatusEnum {
  export type AsObject = {
  }

  export enum FeedMappingStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

