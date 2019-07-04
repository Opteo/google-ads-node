// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/adx_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdxErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdxErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdxErrorEnum): AdxErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdxErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdxErrorEnum;
  static deserializeBinaryFromReader(message: AdxErrorEnum, reader: jspb.BinaryReader): AdxErrorEnum;
}

export namespace AdxErrorEnum {
  export type AsObject = {
  }

  export enum AdxError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNSUPPORTED_FEATURE = 2,
  }
}

