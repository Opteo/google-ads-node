// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/shared_set_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SharedSetErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSetErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSetErrorEnum): SharedSetErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedSetErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSetErrorEnum;
  static deserializeBinaryFromReader(message: SharedSetErrorEnum, reader: jspb.BinaryReader): SharedSetErrorEnum;
}

export namespace SharedSetErrorEnum {
  export type AsObject = {
  }

  export enum SharedSetError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CUSTOMER_CANNOT_CREATE_SHARED_SET_OF_THIS_TYPE = 2,
    DUPLICATE_NAME = 3,
    SHARED_SET_REMOVED = 4,
    SHARED_SET_IN_USE = 5,
  }
}

