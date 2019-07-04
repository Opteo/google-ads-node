// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/function_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FunctionErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionErrorEnum): FunctionErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionErrorEnum;
  static deserializeBinaryFromReader(message: FunctionErrorEnum, reader: jspb.BinaryReader): FunctionErrorEnum;
}

export namespace FunctionErrorEnum {
  export type AsObject = {
  }

  export enum FunctionError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_FUNCTION_FORMAT = 2,
    DATA_TYPE_MISMATCH = 3,
    INVALID_CONJUNCTION_OPERANDS = 4,
    INVALID_NUMBER_OF_OPERANDS = 5,
    INVALID_OPERAND_TYPE = 6,
    INVALID_OPERATOR = 7,
    INVALID_REQUEST_CONTEXT_TYPE = 8,
    INVALID_FUNCTION_FOR_CALL_PLACEHOLDER = 9,
    INVALID_FUNCTION_FOR_PLACEHOLDER = 10,
    INVALID_OPERAND = 11,
    MISSING_CONSTANT_OPERAND_VALUE = 12,
    INVALID_CONSTANT_OPERAND_VALUE = 13,
    INVALID_NESTING = 14,
    MULTIPLE_FEED_IDS_NOT_SUPPORTED = 15,
    INVALID_FUNCTION_FOR_FEED_WITH_FIXED_SCHEMA = 16,
    INVALID_ATTRIBUTE_NAME = 17,
  }
}

