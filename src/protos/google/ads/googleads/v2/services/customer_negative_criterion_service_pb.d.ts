// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/customer_negative_criterion_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_customer_negative_criterion_pb from "../../../../../google/ads/googleads/v2/resources/customer_negative_criterion_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetCustomerNegativeCriterionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerNegativeCriterionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerNegativeCriterionRequest): GetCustomerNegativeCriterionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerNegativeCriterionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerNegativeCriterionRequest;
  static deserializeBinaryFromReader(message: GetCustomerNegativeCriterionRequest, reader: jspb.BinaryReader): GetCustomerNegativeCriterionRequest;
}

export namespace GetCustomerNegativeCriterionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerNegativeCriteriaRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CustomerNegativeCriterionOperation>;
  setOperationsList(value: Array<CustomerNegativeCriterionOperation>): void;
  addOperations(value?: CustomerNegativeCriterionOperation, index?: number): CustomerNegativeCriterionOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerNegativeCriteriaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerNegativeCriteriaRequest): MutateCustomerNegativeCriteriaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerNegativeCriteriaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerNegativeCriteriaRequest;
  static deserializeBinaryFromReader(message: MutateCustomerNegativeCriteriaRequest, reader: jspb.BinaryReader): MutateCustomerNegativeCriteriaRequest;
}

export namespace MutateCustomerNegativeCriteriaRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomerNegativeCriterionOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CustomerNegativeCriterionOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CustomerNegativeCriterionOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerNegativeCriterionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerNegativeCriterionOperation): CustomerNegativeCriterionOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerNegativeCriterionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerNegativeCriterionOperation;
  static deserializeBinaryFromReader(message: CustomerNegativeCriterionOperation, reader: jspb.BinaryReader): CustomerNegativeCriterionOperation;
}

export namespace CustomerNegativeCriterionOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_customer_negative_criterion_pb.CustomerNegativeCriterion.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateCustomerNegativeCriteriaResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCustomerNegativeCriteriaResult>;
  setResultsList(value: Array<MutateCustomerNegativeCriteriaResult>): void;
  addResults(value?: MutateCustomerNegativeCriteriaResult, index?: number): MutateCustomerNegativeCriteriaResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerNegativeCriteriaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerNegativeCriteriaResponse): MutateCustomerNegativeCriteriaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerNegativeCriteriaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerNegativeCriteriaResponse;
  static deserializeBinaryFromReader(message: MutateCustomerNegativeCriteriaResponse, reader: jspb.BinaryReader): MutateCustomerNegativeCriteriaResponse;
}

export namespace MutateCustomerNegativeCriteriaResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCustomerNegativeCriteriaResult.AsObject>,
  }
}

export class MutateCustomerNegativeCriteriaResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerNegativeCriteriaResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerNegativeCriteriaResult): MutateCustomerNegativeCriteriaResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerNegativeCriteriaResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerNegativeCriteriaResult;
  static deserializeBinaryFromReader(message: MutateCustomerNegativeCriteriaResult, reader: jspb.BinaryReader): MutateCustomerNegativeCriteriaResult;
}

export namespace MutateCustomerNegativeCriteriaResult {
  export type AsObject = {
    resourceName: string,
  }
}

