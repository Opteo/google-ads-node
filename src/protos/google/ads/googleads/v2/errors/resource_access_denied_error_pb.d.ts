// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/resource_access_denied_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ResourceAccessDeniedErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceAccessDeniedErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceAccessDeniedErrorEnum): ResourceAccessDeniedErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceAccessDeniedErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceAccessDeniedErrorEnum;
  static deserializeBinaryFromReader(message: ResourceAccessDeniedErrorEnum, reader: jspb.BinaryReader): ResourceAccessDeniedErrorEnum;
}

export namespace ResourceAccessDeniedErrorEnum {
  export type AsObject = {
  }

  export enum ResourceAccessDeniedError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    WRITE_ACCESS_DENIED = 3,
  }
}

