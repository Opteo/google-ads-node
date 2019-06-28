// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/field_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FieldErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FieldErrorEnum): FieldErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldErrorEnum;
  static deserializeBinaryFromReader(message: FieldErrorEnum, reader: jspb.BinaryReader): FieldErrorEnum;
}

export namespace FieldErrorEnum {
  export type AsObject = {
  }

  export enum FieldError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REQUIRED = 2,
    IMMUTABLE_FIELD = 3,
    INVALID_VALUE = 4,
    VALUE_MUST_BE_UNSET = 5,
    REQUIRED_NONEMPTY_LIST = 6,
    FIELD_CANNOT_BE_CLEARED = 7,
    BLACKLISTED_VALUE = 8,
  }
}

