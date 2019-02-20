// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/feed_item_status.proto

import * as jspb from "google-protobuf";

export class FeedItemStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemStatusEnum): FeedItemStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemStatusEnum;
  static deserializeBinaryFromReader(message: FeedItemStatusEnum, reader: jspb.BinaryReader): FeedItemStatusEnum;
}

export namespace FeedItemStatusEnum {
  export type AsObject = {
  }

  export enum FeedItemStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

