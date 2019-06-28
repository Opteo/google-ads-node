// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/list_operation_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ListOperationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOperationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ListOperationErrorEnum): ListOperationErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOperationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOperationErrorEnum;
  static deserializeBinaryFromReader(message: ListOperationErrorEnum, reader: jspb.BinaryReader): ListOperationErrorEnum;
}

export namespace ListOperationErrorEnum {
  export type AsObject = {
  }

  export enum ListOperationError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REQUIRED_FIELD_MISSING = 7,
    DUPLICATE_VALUES = 8,
  }
}

