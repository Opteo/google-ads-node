// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/account_budget_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_account_budget_pb from "../../../../../google/ads/googleads/v1/resources/account_budget_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetAccountBudgetRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountBudgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountBudgetRequest): GetAccountBudgetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountBudgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountBudgetRequest;
  static deserializeBinaryFromReader(message: GetAccountBudgetRequest, reader: jspb.BinaryReader): GetAccountBudgetRequest;
}

export namespace GetAccountBudgetRequest {
  export type AsObject = {
    resourceName: string,
  }
}

