// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/feed_origin.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

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

  export interface FeedOriginMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    USER: 2;
    GOOGLE: 3;
  }

  export const FeedOrigin: FeedOriginMap;
}

