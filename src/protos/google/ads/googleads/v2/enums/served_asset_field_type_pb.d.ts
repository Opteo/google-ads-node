// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/served_asset_field_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ServedAssetFieldTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServedAssetFieldTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ServedAssetFieldTypeEnum): ServedAssetFieldTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServedAssetFieldTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServedAssetFieldTypeEnum;
  static deserializeBinaryFromReader(message: ServedAssetFieldTypeEnum, reader: jspb.BinaryReader): ServedAssetFieldTypeEnum;
}

export namespace ServedAssetFieldTypeEnum {
  export type AsObject = {
  }

  export enum ServedAssetFieldType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    HEADLINE_1 = 2,
    HEADLINE_2 = 3,
    HEADLINE_3 = 4,
    DESCRIPTION_1 = 5,
    DESCRIPTION_2 = 6,
  }
}

