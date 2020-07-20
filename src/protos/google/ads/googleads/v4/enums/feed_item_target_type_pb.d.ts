// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/feed_item_target_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemTargetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTargetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTargetTypeEnum): FeedItemTargetTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemTargetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTargetTypeEnum;
  static deserializeBinaryFromReader(message: FeedItemTargetTypeEnum, reader: jspb.BinaryReader): FeedItemTargetTypeEnum;
}

export namespace FeedItemTargetTypeEnum {
  export type AsObject = {
  }

  export interface FeedItemTargetTypeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    CAMPAIGN: 2;
    AD_GROUP: 3;
    CRITERION: 4;
  }

  export const FeedItemTargetType: FeedItemTargetTypeMap;
}

