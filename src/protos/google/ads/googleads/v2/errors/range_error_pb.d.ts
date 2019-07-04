// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/range_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class RangeErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RangeErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RangeErrorEnum): RangeErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RangeErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RangeErrorEnum;
  static deserializeBinaryFromReader(message: RangeErrorEnum, reader: jspb.BinaryReader): RangeErrorEnum;
}

export namespace RangeErrorEnum {
  export type AsObject = {
  }

  export enum RangeError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TOO_LOW = 2,
    TOO_HIGH = 3,
  }
}

