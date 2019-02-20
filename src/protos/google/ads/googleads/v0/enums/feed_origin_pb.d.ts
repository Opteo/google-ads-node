// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/feed_origin.proto

import * as jspb from "google-protobuf";

export class FeedOriginEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedOriginEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedOriginEnum): FeedOriginEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedOriginEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedOriginEnum;
  static deserializeBinaryFromReader(message: FeedOriginEnum, reader: jspb.BinaryReader): FeedOriginEnum;
}

export namespace FeedOriginEnum {
  export type AsObject = {
  }

  export enum FeedOrigin {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    USER = 2,
    GOOGLE = 3,
  }
}

