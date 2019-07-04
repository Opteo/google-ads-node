// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/asset_field_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AssetFieldTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetFieldTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AssetFieldTypeEnum): AssetFieldTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetFieldTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetFieldTypeEnum;
  static deserializeBinaryFromReader(message: AssetFieldTypeEnum, reader: jspb.BinaryReader): AssetFieldTypeEnum;
}

export namespace AssetFieldTypeEnum {
  export type AsObject = {
  }

  export enum AssetFieldType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    HEADLINE = 2,
    DESCRIPTION = 3,
    MANDATORY_AD_TEXT = 4,
    MARKETING_IMAGE = 5,
    MEDIA_BUNDLE = 6,
    YOUTUBE_VIDEO = 7,
  }
}

