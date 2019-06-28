// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/google_ads_field_data_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GoogleAdsFieldDataTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAdsFieldDataTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAdsFieldDataTypeEnum): GoogleAdsFieldDataTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoogleAdsFieldDataTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAdsFieldDataTypeEnum;
  static deserializeBinaryFromReader(message: GoogleAdsFieldDataTypeEnum, reader: jspb.BinaryReader): GoogleAdsFieldDataTypeEnum;
}

export namespace GoogleAdsFieldDataTypeEnum {
  export type AsObject = {
  }

  export enum GoogleAdsFieldDataType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BOOLEAN = 2,
    DATE = 3,
    DOUBLE = 4,
    ENUM = 5,
    FLOAT = 6,
    INT32 = 7,
    INT64 = 8,
    MESSAGE = 9,
    RESOURCE_NAME = 10,
    STRING = 11,
    UINT64 = 12,
  }
}

