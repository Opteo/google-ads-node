// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/asset_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AssetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AssetTypeEnum): AssetTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetTypeEnum;
  static deserializeBinaryFromReader(message: AssetTypeEnum, reader: jspb.BinaryReader): AssetTypeEnum;
}

export namespace AssetTypeEnum {
  export type AsObject = {
  }

  export enum AssetType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    YOUTUBE_VIDEO = 2,
    MEDIA_BUNDLE = 3,
    IMAGE = 4,
    TEXT = 5,
  }
}

