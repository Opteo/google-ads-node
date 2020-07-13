// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/account_link_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_account_link_pb from "../../../../../google/ads/googleads/v4/resources/account_link_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";

export class GetAccountLinkRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountLinkRequest): GetAccountLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountLinkRequest;
  static deserializeBinaryFromReader(message: GetAccountLinkRequest, reader: jspb.BinaryReader): GetAccountLinkRequest;
}

export namespace GetAccountLinkRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAccountLinkRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): AccountLinkOperation | undefined;
  setOperation(value?: AccountLinkOperation): void;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAccountLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAccountLinkRequest): MutateAccountLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAccountLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAccountLinkRequest;
  static deserializeBinaryFromReader(message: MutateAccountLinkRequest, reader: jspb.BinaryReader): MutateAccountLinkRequest;
}

export namespace MutateAccountLinkRequest {
  export type AsObject = {
    customerId: string,
    operation?: AccountLinkOperation.AsObject,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AccountLinkOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v4_resources_account_link_pb.AccountLink | undefined;
  setCreate(value?: google_ads_googleads_v4_resources_account_link_pb.AccountLink): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AccountLinkOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountLinkOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AccountLinkOperation): AccountLinkOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountLinkOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountLinkOperation;
  static deserializeBinaryFromReader(message: AccountLinkOperation, reader: jspb.BinaryReader): AccountLinkOperation;
}

export namespace AccountLinkOperation {
  export type AsObject = {
    create?: google_ads_googleads_v4_resources_account_link_pb.AccountLink.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 3,
  }
}

export class MutateAccountLinkResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): MutateAccountLinkResult | undefined;
  setResult(value?: MutateAccountLinkResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAccountLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAccountLinkResponse): MutateAccountLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAccountLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAccountLinkResponse;
  static deserializeBinaryFromReader(message: MutateAccountLinkResponse, reader: jspb.BinaryReader): MutateAccountLinkResponse;
}

export namespace MutateAccountLinkResponse {
  export type AsObject = {
    result?: MutateAccountLinkResult.AsObject,
  }
}

export class MutateAccountLinkResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAccountLinkResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAccountLinkResult): MutateAccountLinkResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAccountLinkResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAccountLinkResult;
  static deserializeBinaryFromReader(message: MutateAccountLinkResult, reader: jspb.BinaryReader): MutateAccountLinkResult;
}

export namespace MutateAccountLinkResult {
  export type AsObject = {
    resourceName: string,
  }
}

