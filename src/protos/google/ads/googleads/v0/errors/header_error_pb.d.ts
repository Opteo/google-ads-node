// package: google.ads.googleads.v0.errors
// file: google/ads/googleads/v0/errors/header_error.proto

import * as jspb from "google-protobuf";

export class HeaderErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeaderErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: HeaderErrorEnum): HeaderErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeaderErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeaderErrorEnum;
  static deserializeBinaryFromReader(message: HeaderErrorEnum, reader: jspb.BinaryReader): HeaderErrorEnum;
}

export namespace HeaderErrorEnum {
  export type AsObject = {
  }

  export enum HeaderError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_LOGIN_CUSTOMER_ID = 3,
  }
}

