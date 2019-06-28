// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/account_budget_proposal_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_account_budget_proposal_pb from "../../../../../google/ads/googleads/v2/resources/account_budget_proposal_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAccountBudgetProposalRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountBudgetProposalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountBudgetProposalRequest): GetAccountBudgetProposalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountBudgetProposalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountBudgetProposalRequest;
  static deserializeBinaryFromReader(message: GetAccountBudgetProposalRequest, reader: jspb.BinaryReader): GetAccountBudgetProposalRequest;
}

export namespace GetAccountBudgetProposalRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAccountBudgetProposalRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): AccountBudgetProposalOperation | undefined;
  setOperation(value?: AccountBudgetProposalOperation): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAccountBudgetProposalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAccountBudgetProposalRequest): MutateAccountBudgetProposalRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAccountBudgetProposalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAccountBudgetProposalRequest;
  static deserializeBinaryFromReader(message: MutateAccountBudgetProposalRequest, reader: jspb.BinaryReader): MutateAccountBudgetProposalRequest;
}

export namespace MutateAccountBudgetProposalRequest {
  export type AsObject = {
    customerId: string,
    operation?: AccountBudgetProposalOperation.AsObject,
    validateOnly: boolean,
  }
}

export class AccountBudgetProposalOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AccountBudgetProposalOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBudgetProposalOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBudgetProposalOperation): AccountBudgetProposalOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBudgetProposalOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBudgetProposalOperation;
  static deserializeBinaryFromReader(message: AccountBudgetProposalOperation, reader: jspb.BinaryReader): AccountBudgetProposalOperation;
}

export namespace AccountBudgetProposalOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_account_budget_proposal_pb.AccountBudgetProposal.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 2,
    REMOVE = 1,
  }
}

export class MutateAccountBudgetProposalResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): MutateAccountBudgetProposalResult | undefined;
  setResult(value?: MutateAccountBudgetProposalResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAccountBudgetProposalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAccountBudgetProposalResponse): MutateAccountBudgetProposalResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAccountBudgetProposalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAccountBudgetProposalResponse;
  static deserializeBinaryFromReader(message: MutateAccountBudgetProposalResponse, reader: jspb.BinaryReader): MutateAccountBudgetProposalResponse;
}

export namespace MutateAccountBudgetProposalResponse {
  export type AsObject = {
    result?: MutateAccountBudgetProposalResult.AsObject,
  }
}

export class MutateAccountBudgetProposalResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAccountBudgetProposalResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAccountBudgetProposalResult): MutateAccountBudgetProposalResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAccountBudgetProposalResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAccountBudgetProposalResult;
  static deserializeBinaryFromReader(message: MutateAccountBudgetProposalResult, reader: jspb.BinaryReader): MutateAccountBudgetProposalResult;
}

export namespace MutateAccountBudgetProposalResult {
  export type AsObject = {
    resourceName: string,
  }
}

