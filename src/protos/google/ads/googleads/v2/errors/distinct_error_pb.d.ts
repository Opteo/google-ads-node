// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/distinct_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DistinctErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistinctErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DistinctErrorEnum): DistinctErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistinctErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistinctErrorEnum;
  static deserializeBinaryFromReader(message: DistinctErrorEnum, reader: jspb.BinaryReader): DistinctErrorEnum;
}

export namespace DistinctErrorEnum {
  export type AsObject = {
  }

  export enum DistinctError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DUPLICATE_ELEMENT = 2,
    DUPLICATE_TYPE = 3,
  }
}

