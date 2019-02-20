// package: google.ads.googleads.v0.errors
// file: google/ads/googleads/v0/errors/string_length_error.proto

import * as jspb from "google-protobuf";

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

  export enum StringLengthError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TOO_SHORT = 2,
    TOO_LONG = 3,
  }
}

