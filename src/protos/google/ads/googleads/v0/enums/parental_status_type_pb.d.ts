// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/parental_status_type.proto

import * as jspb from "google-protobuf";

export class ParentalStatusTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentalStatusTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ParentalStatusTypeEnum): ParentalStatusTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParentalStatusTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentalStatusTypeEnum;
  static deserializeBinaryFromReader(message: ParentalStatusTypeEnum, reader: jspb.BinaryReader): ParentalStatusTypeEnum;
}

export namespace ParentalStatusTypeEnum {
  export type AsObject = {
  }

  export enum ParentalStatusType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PARENT = 300,
    NOT_A_PARENT = 301,
    UNDETERMINED = 302,
  }
}

