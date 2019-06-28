// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/customer_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerErrorEnum): CustomerErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerErrorEnum;
  static deserializeBinaryFromReader(message: CustomerErrorEnum, reader: jspb.BinaryReader): CustomerErrorEnum;
}

export namespace CustomerErrorEnum {
  export type AsObject = {
  }

  export enum CustomerError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    STATUS_CHANGE_DISALLOWED = 2,
    ACCOUNT_NOT_SET_UP = 3,
  }
}

