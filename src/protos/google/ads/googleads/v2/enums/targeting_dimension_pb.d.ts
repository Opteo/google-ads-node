// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/targeting_dimension.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TargetingDimensionEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetingDimensionEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TargetingDimensionEnum): TargetingDimensionEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetingDimensionEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetingDimensionEnum;
  static deserializeBinaryFromReader(message: TargetingDimensionEnum, reader: jspb.BinaryReader): TargetingDimensionEnum;
}

export namespace TargetingDimensionEnum {
  export type AsObject = {
  }

  export enum TargetingDimension {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    KEYWORD = 2,
    AUDIENCE = 3,
    TOPIC = 4,
    GENDER = 5,
    AGE_RANGE = 6,
    PLACEMENT = 7,
    PARENTAL_STATUS = 8,
    INCOME_RANGE = 9,
  }
}

