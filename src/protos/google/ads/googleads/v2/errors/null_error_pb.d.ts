// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/null_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class NullErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: NullErrorEnum): NullErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullErrorEnum;
  static deserializeBinaryFromReader(message: NullErrorEnum, reader: jspb.BinaryReader): NullErrorEnum;
}

export namespace NullErrorEnum {
  export type AsObject = {
  }

  export enum NullError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NULL_CONTENT = 2,
  }
}

