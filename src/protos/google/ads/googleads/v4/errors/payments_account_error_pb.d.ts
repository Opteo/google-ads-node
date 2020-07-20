// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/payments_account_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PaymentsAccountErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentsAccountErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentsAccountErrorEnum): PaymentsAccountErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentsAccountErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentsAccountErrorEnum;
  static deserializeBinaryFromReader(message: PaymentsAccountErrorEnum, reader: jspb.BinaryReader): PaymentsAccountErrorEnum;
}

export namespace PaymentsAccountErrorEnum {
  export type AsObject = {
  }

  export interface PaymentsAccountErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    NOT_SUPPORTED_FOR_MANAGER_CUSTOMER: 2;
  }

  export const PaymentsAccountError: PaymentsAccountErrorMap;
}

