// package: google.ads.googleads.v3.services
// file: google/ads/googleads/v3/services/invoice_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v3_enums_month_of_year_pb from "../../../../../google/ads/googleads/v3/enums/month_of_year_pb";
import * as google_ads_googleads_v3_resources_invoice_pb from "../../../../../google/ads/googleads/v3/resources/invoice_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";

export class ListInvoicesRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  getBillingSetup(): string;
  setBillingSetup(value: string): void;

  getIssueYear(): string;
  setIssueYear(value: string): void;

  getIssueMonth(): google_ads_googleads_v3_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear;
  setIssueMonth(value: google_ads_googleads_v3_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoicesRequest): ListInvoicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvoicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoicesRequest;
  static deserializeBinaryFromReader(message: ListInvoicesRequest, reader: jspb.BinaryReader): ListInvoicesRequest;
}

export namespace ListInvoicesRequest {
  export type AsObject = {
    customerId: string,
    billingSetup: string,
    issueYear: string,
    issueMonth: google_ads_googleads_v3_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYear,
  }
}

export class ListInvoicesResponse extends jspb.Message {
  clearInvoicesList(): void;
  getInvoicesList(): Array<google_ads_googleads_v3_resources_invoice_pb.Invoice>;
  setInvoicesList(value: Array<google_ads_googleads_v3_resources_invoice_pb.Invoice>): void;
  addInvoices(value?: google_ads_googleads_v3_resources_invoice_pb.Invoice, index?: number): google_ads_googleads_v3_resources_invoice_pb.Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInvoicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInvoicesResponse): ListInvoicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListInvoicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInvoicesResponse;
  static deserializeBinaryFromReader(message: ListInvoicesResponse, reader: jspb.BinaryReader): ListInvoicesResponse;
}

export namespace ListInvoicesResponse {
  export type AsObject = {
    invoicesList: Array<google_ads_googleads_v3_resources_invoice_pb.Invoice.AsObject>,
  }
}

