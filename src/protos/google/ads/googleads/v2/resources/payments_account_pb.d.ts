// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/payments_account.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PaymentsAccount extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasPaymentsAccountId(): boolean;
  clearPaymentsAccountId(): void;
  getPaymentsAccountId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPaymentsAccountId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCurrencyCode(): boolean;
  clearCurrencyCode(): void;
  getCurrencyCode(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCurrencyCode(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPaymentsProfileId(): boolean;
  clearPaymentsProfileId(): void;
  getPaymentsProfileId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPaymentsProfileId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasSecondaryPaymentsProfileId(): boolean;
  clearSecondaryPaymentsProfileId(): void;
  getSecondaryPaymentsProfileId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSecondaryPaymentsProfileId(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentsAccount.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentsAccount): PaymentsAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentsAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentsAccount;
  static deserializeBinaryFromReader(message: PaymentsAccount, reader: jspb.BinaryReader): PaymentsAccount;
}

export namespace PaymentsAccount {
  export type AsObject = {
    resourceName: string,
    paymentsAccountId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currencyCode?: google_protobuf_wrappers_pb.StringValue.AsObject,
    paymentsProfileId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    secondaryPaymentsProfileId?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

