// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/conversion_adjustment_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionAdjustmentTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAdjustmentTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAdjustmentTypeEnum): ConversionAdjustmentTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionAdjustmentTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAdjustmentTypeEnum;
  static deserializeBinaryFromReader(message: ConversionAdjustmentTypeEnum, reader: jspb.BinaryReader): ConversionAdjustmentTypeEnum;
}

export namespace ConversionAdjustmentTypeEnum {
  export type AsObject = {
  }

  export enum ConversionAdjustmentType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RETRACTION = 2,
    RESTATEMENT = 3,
  }
}

