// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/invoice_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class InvoiceErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceErrorEnum): InvoiceErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceErrorEnum;
  static deserializeBinaryFromReader(message: InvoiceErrorEnum, reader: jspb.BinaryReader): InvoiceErrorEnum;
}

export namespace InvoiceErrorEnum {
  export type AsObject = {
  }

  export interface InvoiceErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    YEAR_MONTH_TOO_OLD: 2;
    NOT_INVOICED_CUSTOMER: 3;
  }

  export const InvoiceError: InvoiceErrorMap;
}

