// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/context_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ContextErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContextErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ContextErrorEnum): ContextErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContextErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContextErrorEnum;
  static deserializeBinaryFromReader(message: ContextErrorEnum, reader: jspb.BinaryReader): ContextErrorEnum;
}

export namespace ContextErrorEnum {
  export type AsObject = {
  }

  export enum ContextError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPERATION_NOT_PERMITTED_FOR_CONTEXT = 2,
    OPERATION_NOT_PERMITTED_FOR_REMOVED_RESOURCE = 3,
  }
}

