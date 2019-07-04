// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/conversion_adjustment_upload_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionAdjustmentUploadErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionAdjustmentUploadErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionAdjustmentUploadErrorEnum): ConversionAdjustmentUploadErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionAdjustmentUploadErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionAdjustmentUploadErrorEnum;
  static deserializeBinaryFromReader(message: ConversionAdjustmentUploadErrorEnum, reader: jspb.BinaryReader): ConversionAdjustmentUploadErrorEnum;
}

export namespace ConversionAdjustmentUploadErrorEnum {
  export type AsObject = {
  }

  export enum ConversionAdjustmentUploadError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TOO_RECENT_CONVERSION_ACTION = 2,
    INVALID_CONVERSION_ACTION = 3,
    CONVERSION_ALREADY_RETRACTED = 4,
    CONVERSION_NOT_FOUND = 5,
    CONVERSION_EXPIRED = 6,
    ADJUSTMENT_PRECEDES_CONVERSION = 7,
    MORE_RECENT_RESTATEMENT_FOUND = 8,
    TOO_RECENT_CONVERSION = 9,
    CANNOT_RESTATE_CONVERSION_ACTION_THAT_ALWAYS_USES_DEFAULT_CONVERSION_VALUE = 10,
  }
}

