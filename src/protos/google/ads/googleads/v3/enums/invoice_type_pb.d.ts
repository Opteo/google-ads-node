// package: google.ads.googleads.v3.enums
// file: google/ads/googleads/v3/enums/invoice_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class InvoiceTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceTypeEnum): InvoiceTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceTypeEnum;
  static deserializeBinaryFromReader(message: InvoiceTypeEnum, reader: jspb.BinaryReader): InvoiceTypeEnum;
}

export namespace InvoiceTypeEnum {
  export type AsObject = {
  }

  export enum InvoiceType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CREDIT_MEMO = 2,
    INVOICE = 3,
  }
}

