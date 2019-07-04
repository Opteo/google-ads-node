// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/language_code_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LanguageCodeErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LanguageCodeErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LanguageCodeErrorEnum): LanguageCodeErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LanguageCodeErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LanguageCodeErrorEnum;
  static deserializeBinaryFromReader(message: LanguageCodeErrorEnum, reader: jspb.BinaryReader): LanguageCodeErrorEnum;
}

export namespace LanguageCodeErrorEnum {
  export type AsObject = {
  }

  export enum LanguageCodeError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LANGUAGE_CODE_NOT_FOUND = 2,
    INVALID_LANGUAGE_CODE = 3,
  }
}

