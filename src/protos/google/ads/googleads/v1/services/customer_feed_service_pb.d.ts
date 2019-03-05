// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_feed_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_customer_feed_pb from "../../../../../google/ads/googleads/v1/resources/customer_feed_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetCustomerFeedRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerFeedRequest): GetCustomerFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerFeedRequest;
  static deserializeBinaryFromReader(message: GetCustomerFeedRequest, reader: jspb.BinaryReader): GetCustomerFeedRequest;
}

export namespace GetCustomerFeedRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerFeedsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CustomerFeedOperation>;
  setOperationsList(value: Array<CustomerFeedOperation>): void;
  addOperations(value?: CustomerFeedOperation, index?: number): CustomerFeedOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerFeedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerFeedsRequest): MutateCustomerFeedsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerFeedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerFeedsRequest;
  static deserializeBinaryFromReader(message: MutateCustomerFeedsRequest, reader: jspb.BinaryReader): MutateCustomerFeedsRequest;
}

export namespace MutateCustomerFeedsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomerFeedOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CustomerFeedOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CustomerFeedOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerFeedOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerFeedOperation): CustomerFeedOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerFeedOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerFeedOperation;
  static deserializeBinaryFromReader(message: CustomerFeedOperation, reader: jspb.BinaryReader): CustomerFeedOperation;
}

export namespace CustomerFeedOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.AsObject,
    update?: google_ads_googleads_v1_resources_customer_feed_pb.CustomerFeed.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCustomerFeedsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCustomerFeedResult>;
  setResultsList(value: Array<MutateCustomerFeedResult>): void;
  addResults(value?: MutateCustomerFeedResult, index?: number): MutateCustomerFeedResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerFeedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerFeedsResponse): MutateCustomerFeedsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerFeedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerFeedsResponse;
  static deserializeBinaryFromReader(message: MutateCustomerFeedsResponse, reader: jspb.BinaryReader): MutateCustomerFeedsResponse;
}

export namespace MutateCustomerFeedsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCustomerFeedResult.AsObject>,
  }
}

export class MutateCustomerFeedResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerFeedResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerFeedResult): MutateCustomerFeedResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerFeedResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerFeedResult;
  static deserializeBinaryFromReader(message: MutateCustomerFeedResult, reader: jspb.BinaryReader): MutateCustomerFeedResult;
}

export namespace MutateCustomerFeedResult {
  export type AsObject = {
    resourceName: string,
  }
}

