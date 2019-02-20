// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/feed_link_status.proto

import * as jspb from "google-protobuf";

export class FeedLinkStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedLinkStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedLinkStatusEnum): FeedLinkStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedLinkStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedLinkStatusEnum;
  static deserializeBinaryFromReader(message: FeedLinkStatusEnum, reader: jspb.BinaryReader): FeedLinkStatusEnum;
}

export namespace FeedLinkStatusEnum {
  export type AsObject = {
  }

  export enum FeedLinkStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

