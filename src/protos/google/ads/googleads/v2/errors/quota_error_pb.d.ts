// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/quota_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class QuotaErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaErrorEnum): QuotaErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuotaErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaErrorEnum;
  static deserializeBinaryFromReader(message: QuotaErrorEnum, reader: jspb.BinaryReader): QuotaErrorEnum;
}

export namespace QuotaErrorEnum {
  export type AsObject = {
  }

  export enum QuotaError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RESOURCE_EXHAUSTED = 2,
    ACCESS_PROHIBITED = 3,
    RESOURCE_TEMPORARILY_EXHAUSTED = 4,
  }
}

