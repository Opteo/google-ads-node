// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/age_range_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AgeRangeTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgeRangeTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AgeRangeTypeEnum): AgeRangeTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgeRangeTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgeRangeTypeEnum;
  static deserializeBinaryFromReader(message: AgeRangeTypeEnum, reader: jspb.BinaryReader): AgeRangeTypeEnum;
}

export namespace AgeRangeTypeEnum {
  export type AsObject = {
  }

  export enum AgeRangeType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AGE_RANGE_18_24 = 503001,
    AGE_RANGE_25_34 = 503002,
    AGE_RANGE_35_44 = 503003,
    AGE_RANGE_45_54 = 503004,
    AGE_RANGE_55_64 = 503005,
    AGE_RANGE_65_UP = 503006,
    AGE_RANGE_UNDETERMINED = 503999,
  }
}

