// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/string_format_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class StringFormatErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringFormatErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: StringFormatErrorEnum): StringFormatErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringFormatErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringFormatErrorEnum;
  static deserializeBinaryFromReader(message: StringFormatErrorEnum, reader: jspb.BinaryReader): StringFormatErrorEnum;
}

export namespace StringFormatErrorEnum {
  export type AsObject = {
  }

  export enum StringFormatError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ILLEGAL_CHARS = 2,
    INVALID_FORMAT = 3,
  }
}

