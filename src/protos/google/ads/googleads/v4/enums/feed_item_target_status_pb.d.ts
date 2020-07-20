// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/feed_item_target_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemTargetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTargetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTargetStatusEnum): FeedItemTargetStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemTargetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTargetStatusEnum;
  static deserializeBinaryFromReader(message: FeedItemTargetStatusEnum, reader: jspb.BinaryReader): FeedItemTargetStatusEnum;
}

export namespace FeedItemTargetStatusEnum {
  export type AsObject = {
  }

  export interface FeedItemTargetStatusMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    ENABLED: 2;
    REMOVED: 3;
  }

  export const FeedItemTargetStatus: FeedItemTargetStatusMap;
}

