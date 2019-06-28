// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/function_parsing_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FunctionParsingErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionParsingErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionParsingErrorEnum): FunctionParsingErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FunctionParsingErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionParsingErrorEnum;
  static deserializeBinaryFromReader(message: FunctionParsingErrorEnum, reader: jspb.BinaryReader): FunctionParsingErrorEnum;
}

export namespace FunctionParsingErrorEnum {
  export type AsObject = {
  }

  export enum FunctionParsingError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NO_MORE_INPUT = 2,
    EXPECTED_CHARACTER = 3,
    UNEXPECTED_SEPARATOR = 4,
    UNMATCHED_LEFT_BRACKET = 5,
    UNMATCHED_RIGHT_BRACKET = 6,
    TOO_MANY_NESTED_FUNCTIONS = 7,
    MISSING_RIGHT_HAND_OPERAND = 8,
    INVALID_OPERATOR_NAME = 9,
    FEED_ATTRIBUTE_OPERAND_ARGUMENT_NOT_INTEGER = 10,
    NO_OPERANDS = 11,
    TOO_MANY_OPERANDS = 12,
  }
}

