// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/field_mask_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FieldMaskErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldMaskErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FieldMaskErrorEnum): FieldMaskErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FieldMaskErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldMaskErrorEnum;
  static deserializeBinaryFromReader(message: FieldMaskErrorEnum, reader: jspb.BinaryReader): FieldMaskErrorEnum;
}

export namespace FieldMaskErrorEnum {
  export type AsObject = {
  }

  export enum FieldMaskError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FIELD_MASK_MISSING = 5,
    FIELD_MASK_NOT_ALLOWED = 4,
    FIELD_NOT_FOUND = 2,
    FIELD_HAS_SUBFIELDS = 3,
  }
}

