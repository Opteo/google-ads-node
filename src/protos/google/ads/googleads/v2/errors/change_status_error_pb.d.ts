// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/change_status_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ChangeStatusErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStatusErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStatusErrorEnum): ChangeStatusErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeStatusErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStatusErrorEnum;
  static deserializeBinaryFromReader(message: ChangeStatusErrorEnum, reader: jspb.BinaryReader): ChangeStatusErrorEnum;
}

export namespace ChangeStatusErrorEnum {
  export type AsObject = {
  }

  export enum ChangeStatusError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    START_DATE_TOO_OLD = 3,
  }
}

