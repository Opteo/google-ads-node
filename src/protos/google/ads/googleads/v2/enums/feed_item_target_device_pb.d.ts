// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/feed_item_target_device.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FeedItemTargetDeviceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTargetDeviceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTargetDeviceEnum): FeedItemTargetDeviceEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemTargetDeviceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTargetDeviceEnum;
  static deserializeBinaryFromReader(message: FeedItemTargetDeviceEnum, reader: jspb.BinaryReader): FeedItemTargetDeviceEnum;
}

export namespace FeedItemTargetDeviceEnum {
  export type AsObject = {
  }

  export enum FeedItemTargetDevice {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
  }
}

