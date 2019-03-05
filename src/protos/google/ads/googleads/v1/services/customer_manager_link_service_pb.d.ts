// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_manager_link_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_customer_manager_link_pb from "../../../../../google/ads/googleads/v1/resources/customer_manager_link_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";

export class GetCustomerManagerLinkRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerManagerLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerManagerLinkRequest): GetCustomerManagerLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerManagerLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerManagerLinkRequest;
  static deserializeBinaryFromReader(message: GetCustomerManagerLinkRequest, reader: jspb.BinaryReader): GetCustomerManagerLinkRequest;
}

export namespace GetCustomerManagerLinkRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerManagerLinkRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CustomerManagerLinkOperation>;
  setOperationsList(value: Array<CustomerManagerLinkOperation>): void;
  addOperations(value?: CustomerManagerLinkOperation, index?: number): CustomerManagerLinkOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerManagerLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerManagerLinkRequest): MutateCustomerManagerLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerManagerLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerManagerLinkRequest;
  static deserializeBinaryFromReader(message: MutateCustomerManagerLinkRequest, reader: jspb.BinaryReader): MutateCustomerManagerLinkRequest;
}

export namespace MutateCustomerManagerLinkRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomerManagerLinkOperation.AsObject>,
  }
}

export class CustomerManagerLinkOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink): void;

  getOperationCase(): CustomerManagerLinkOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerManagerLinkOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerManagerLinkOperation): CustomerManagerLinkOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerManagerLinkOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerManagerLinkOperation;
  static deserializeBinaryFromReader(message: CustomerManagerLinkOperation, reader: jspb.BinaryReader): CustomerManagerLinkOperation;
}

export namespace CustomerManagerLinkOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    update?: google_ads_googleads_v1_resources_customer_manager_link_pb.CustomerManagerLink.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    UPDATE = 2,
  }
}

export class MutateCustomerManagerLinkResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<MutateCustomerManagerLinkResult>;
  setResultsList(value: Array<MutateCustomerManagerLinkResult>): void;
  addResults(value?: MutateCustomerManagerLinkResult, index?: number): MutateCustomerManagerLinkResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerManagerLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerManagerLinkResponse): MutateCustomerManagerLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerManagerLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerManagerLinkResponse;
  static deserializeBinaryFromReader(message: MutateCustomerManagerLinkResponse, reader: jspb.BinaryReader): MutateCustomerManagerLinkResponse;
}

export namespace MutateCustomerManagerLinkResponse {
  export type AsObject = {
    resultsList: Array<MutateCustomerManagerLinkResult.AsObject>,
  }
}

export class MutateCustomerManagerLinkResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerManagerLinkResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerManagerLinkResult): MutateCustomerManagerLinkResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerManagerLinkResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerManagerLinkResult;
  static deserializeBinaryFromReader(message: MutateCustomerManagerLinkResult, reader: jspb.BinaryReader): MutateCustomerManagerLinkResult;
}

export namespace MutateCustomerManagerLinkResult {
  export type AsObject = {
    resourceName: string,
  }
}

