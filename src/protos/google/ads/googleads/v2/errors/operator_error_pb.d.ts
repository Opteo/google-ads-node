// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/operator_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OperatorErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatorErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OperatorErrorEnum): OperatorErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperatorErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatorErrorEnum;
  static deserializeBinaryFromReader(message: OperatorErrorEnum, reader: jspb.BinaryReader): OperatorErrorEnum;
}

export namespace OperatorErrorEnum {
  export type AsObject = {
  }

  export enum OperatorError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPERATOR_NOT_SUPPORTED = 2,
  }
}

