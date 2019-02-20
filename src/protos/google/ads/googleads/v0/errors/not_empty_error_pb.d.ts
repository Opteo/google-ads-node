// package: google.ads.googleads.v0.errors
// file: google/ads/googleads/v0/errors/not_empty_error.proto

import * as jspb from "google-protobuf";

export class NotEmptyErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotEmptyErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: NotEmptyErrorEnum): NotEmptyErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotEmptyErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotEmptyErrorEnum;
  static deserializeBinaryFromReader(message: NotEmptyErrorEnum, reader: jspb.BinaryReader): NotEmptyErrorEnum;
}

export namespace NotEmptyErrorEnum {
  export type AsObject = {
  }

  export enum NotEmptyError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EMPTY_LIST = 2,
  }
}

