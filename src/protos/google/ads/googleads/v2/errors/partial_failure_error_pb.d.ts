// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/partial_failure_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PartialFailureErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartialFailureErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PartialFailureErrorEnum): PartialFailureErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartialFailureErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartialFailureErrorEnum;
  static deserializeBinaryFromReader(message: PartialFailureErrorEnum, reader: jspb.BinaryReader): PartialFailureErrorEnum;
}

export namespace PartialFailureErrorEnum {
  export type AsObject = {
  }

  export enum PartialFailureError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PARTIAL_FAILURE_MODE_REQUIRED = 2,
  }
}

