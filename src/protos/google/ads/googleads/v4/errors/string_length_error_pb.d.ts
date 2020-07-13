// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/string_length_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class StringLengthErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringLengthErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: StringLengthErrorEnum): StringLengthErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringLengthErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringLengthErrorEnum;
  static deserializeBinaryFromReader(message: StringLengthErrorEnum, reader: jspb.BinaryReader): StringLengthErrorEnum;
}

export namespace StringLengthErrorEnum {
  export type AsObject = {
  }

  export interface StringLengthErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    EMPTY: 4;
    TOO_SHORT: 2;
    TOO_LONG: 3;
  }

  export const StringLengthError: StringLengthErrorMap;
}

