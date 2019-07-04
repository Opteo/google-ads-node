// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/payment_mode.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PaymentModeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentModeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentModeEnum): PaymentModeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentModeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentModeEnum;
  static deserializeBinaryFromReader(message: PaymentModeEnum, reader: jspb.BinaryReader): PaymentModeEnum;
}

export namespace PaymentModeEnum {
  export type AsObject = {
  }

  export enum PaymentMode {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CLICKS = 4,
    CONVERSION_VALUE = 5,
    CONVERSIONS = 6,
  }
}

