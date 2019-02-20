// package: google.ads.googleads.v0.errors
// file: google/ads/googleads/v0/errors/region_code_error.proto

import * as jspb from "google-protobuf";

export class RegionCodeErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegionCodeErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RegionCodeErrorEnum): RegionCodeErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegionCodeErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegionCodeErrorEnum;
  static deserializeBinaryFromReader(message: RegionCodeErrorEnum, reader: jspb.BinaryReader): RegionCodeErrorEnum;
}

export namespace RegionCodeErrorEnum {
  export type AsObject = {
  }

  export enum RegionCodeError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_REGION_CODE = 2,
  }
}

