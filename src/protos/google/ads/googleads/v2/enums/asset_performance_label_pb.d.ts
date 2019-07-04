// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/asset_performance_label.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AssetPerformanceLabelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetPerformanceLabelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AssetPerformanceLabelEnum): AssetPerformanceLabelEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetPerformanceLabelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetPerformanceLabelEnum;
  static deserializeBinaryFromReader(message: AssetPerformanceLabelEnum, reader: jspb.BinaryReader): AssetPerformanceLabelEnum;
}

export namespace AssetPerformanceLabelEnum {
  export type AsObject = {
  }

  export enum AssetPerformanceLabel {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    LEARNING = 3,
    LOW = 4,
    GOOD = 5,
    BEST = 6,
  }
}

