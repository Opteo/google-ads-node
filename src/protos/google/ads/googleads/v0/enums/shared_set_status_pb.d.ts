// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/shared_set_status.proto

import * as jspb from "google-protobuf";

export class SharedSetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSetStatusEnum): SharedSetStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedSetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSetStatusEnum;
  static deserializeBinaryFromReader(message: SharedSetStatusEnum, reader: jspb.BinaryReader): SharedSetStatusEnum;
}

export namespace SharedSetStatusEnum {
  export type AsObject = {
  }

  export enum SharedSetStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

