// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/currency_code_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CurrencyCodeErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyCodeErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyCodeErrorEnum): CurrencyCodeErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrencyCodeErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyCodeErrorEnum;
  static deserializeBinaryFromReader(message: CurrencyCodeErrorEnum, reader: jspb.BinaryReader): CurrencyCodeErrorEnum;
}

export namespace CurrencyCodeErrorEnum {
  export type AsObject = {
  }

  export enum CurrencyCodeError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNSUPPORTED = 2,
  }
}

