// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/payments_account_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_payments_account_pb from "../../../../../google/ads/googleads/v1/resources/payments_account_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ListPaymentsAccountsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPaymentsAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPaymentsAccountsRequest): ListPaymentsAccountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPaymentsAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPaymentsAccountsRequest;
  static deserializeBinaryFromReader(message: ListPaymentsAccountsRequest, reader: jspb.BinaryReader): ListPaymentsAccountsRequest;
}

export namespace ListPaymentsAccountsRequest {
  export type AsObject = {
    customerId: string,
  }
}

export class ListPaymentsAccountsResponse extends jspb.Message {
  clearPaymentsAccountsList(): void;
  getPaymentsAccountsList(): Array<google_ads_googleads_v1_resources_payments_account_pb.PaymentsAccount>;
  setPaymentsAccountsList(value: Array<google_ads_googleads_v1_resources_payments_account_pb.PaymentsAccount>): void;
  addPaymentsAccounts(value?: google_ads_googleads_v1_resources_payments_account_pb.PaymentsAccount, index?: number): google_ads_googleads_v1_resources_payments_account_pb.PaymentsAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPaymentsAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPaymentsAccountsResponse): ListPaymentsAccountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListPaymentsAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPaymentsAccountsResponse;
  static deserializeBinaryFromReader(message: ListPaymentsAccountsResponse, reader: jspb.BinaryReader): ListPaymentsAccountsResponse;
}

export namespace ListPaymentsAccountsResponse {
  export type AsObject = {
    paymentsAccountsList: Array<google_ads_googleads_v1_resources_payments_account_pb.PaymentsAccount.AsObject>,
  }
}

