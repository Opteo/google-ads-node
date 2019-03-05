// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_client_link_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_customer_client_link_pb from "../../../../../google/ads/googleads/v1/resources/customer_client_link_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetCustomerClientLinkRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerClientLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerClientLinkRequest): GetCustomerClientLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerClientLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerClientLinkRequest;
  static deserializeBinaryFromReader(message: GetCustomerClientLinkRequest, reader: jspb.BinaryReader): GetCustomerClientLinkRequest;
}

export namespace GetCustomerClientLinkRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerClientLinkRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): CustomerClientLinkOperation | undefined;
  setOperation(value?: CustomerClientLinkOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerClientLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerClientLinkRequest): MutateCustomerClientLinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerClientLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerClientLinkRequest;
  static deserializeBinaryFromReader(message: MutateCustomerClientLinkRequest, reader: jspb.BinaryReader): MutateCustomerClientLinkRequest;
}

export namespace MutateCustomerClientLinkRequest {
  export type AsObject = {
    customerId: string,
    operation?: CustomerClientLinkOperation.AsObject,
  }
}

export class CustomerClientLinkOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink): void;

  getOperationCase(): CustomerClientLinkOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerClientLinkOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerClientLinkOperation): CustomerClientLinkOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerClientLinkOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerClientLinkOperation;
  static deserializeBinaryFromReader(message: CustomerClientLinkOperation, reader: jspb.BinaryReader): CustomerClientLinkOperation;
}

export namespace CustomerClientLinkOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink.AsObject,
    update?: google_ads_googleads_v1_resources_customer_client_link_pb.CustomerClientLink.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
  }
}

export class MutateCustomerClientLinkResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): MutateCustomerClientLinkResult | undefined;
  setResult(value?: MutateCustomerClientLinkResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerClientLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerClientLinkResponse): MutateCustomerClientLinkResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerClientLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerClientLinkResponse;
  static deserializeBinaryFromReader(message: MutateCustomerClientLinkResponse, reader: jspb.BinaryReader): MutateCustomerClientLinkResponse;
}

export namespace MutateCustomerClientLinkResponse {
  export type AsObject = {
    result?: MutateCustomerClientLinkResult.AsObject,
  }
}

export class MutateCustomerClientLinkResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerClientLinkResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerClientLinkResult): MutateCustomerClientLinkResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerClientLinkResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerClientLinkResult;
  static deserializeBinaryFromReader(message: MutateCustomerClientLinkResult, reader: jspb.BinaryReader): MutateCustomerClientLinkResult;
}

export namespace MutateCustomerClientLinkResult {
  export type AsObject = {
    resourceName: string,
  }
}

