// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_customer_pb from "../../../../../google/ads/googleads/v1/resources/customer_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetCustomerRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerRequest): GetCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerRequest;
  static deserializeBinaryFromReader(message: GetCustomerRequest, reader: jspb.BinaryReader): GetCustomerRequest;
}

export namespace GetCustomerRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): CustomerOperation | undefined;
  setOperation(value?: CustomerOperation): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerRequest): MutateCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerRequest;
  static deserializeBinaryFromReader(message: MutateCustomerRequest, reader: jspb.BinaryReader): MutateCustomerRequest;
}

export namespace MutateCustomerRequest {
  export type AsObject = {
    customerId: string,
    operation?: CustomerOperation.AsObject,
    validateOnly: boolean,
  }
}

export class CreateCustomerClientRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasCustomerClient(): boolean;
  clearCustomerClient(): void;
  getCustomerClient(): google_ads_googleads_v1_resources_customer_pb.Customer | undefined;
  setCustomerClient(value?: google_ads_googleads_v1_resources_customer_pb.Customer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerClientRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerClientRequest): CreateCustomerClientRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomerClientRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerClientRequest;
  static deserializeBinaryFromReader(message: CreateCustomerClientRequest, reader: jspb.BinaryReader): CreateCustomerClientRequest;
}

export namespace CreateCustomerClientRequest {
  export type AsObject = {
    customerId: string,
    customerClient?: google_ads_googleads_v1_resources_customer_pb.Customer.AsObject,
  }
}

export class CustomerOperation extends jspb.Message {
  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_customer_pb.Customer | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_customer_pb.Customer): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerOperation): CustomerOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerOperation;
  static deserializeBinaryFromReader(message: CustomerOperation, reader: jspb.BinaryReader): CustomerOperation;
}

export namespace CustomerOperation {
  export type AsObject = {
    update?: google_ads_googleads_v1_resources_customer_pb.Customer.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class CreateCustomerClientResponse extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCustomerClientResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCustomerClientResponse): CreateCustomerClientResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCustomerClientResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCustomerClientResponse;
  static deserializeBinaryFromReader(message: CreateCustomerClientResponse, reader: jspb.BinaryReader): CreateCustomerClientResponse;
}

export namespace CreateCustomerClientResponse {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): MutateCustomerResult | undefined;
  setResult(value?: MutateCustomerResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerResponse): MutateCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerResponse;
  static deserializeBinaryFromReader(message: MutateCustomerResponse, reader: jspb.BinaryReader): MutateCustomerResponse;
}

export namespace MutateCustomerResponse {
  export type AsObject = {
    result?: MutateCustomerResult.AsObject,
  }
}

export class MutateCustomerResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerResult): MutateCustomerResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerResult;
  static deserializeBinaryFromReader(message: MutateCustomerResult, reader: jspb.BinaryReader): MutateCustomerResult;
}

export namespace MutateCustomerResult {
  export type AsObject = {
    resourceName: string,
  }
}

export class ListAccessibleCustomersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccessibleCustomersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccessibleCustomersRequest): ListAccessibleCustomersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAccessibleCustomersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccessibleCustomersRequest;
  static deserializeBinaryFromReader(message: ListAccessibleCustomersRequest, reader: jspb.BinaryReader): ListAccessibleCustomersRequest;
}

export namespace ListAccessibleCustomersRequest {
  export type AsObject = {
  }
}

export class ListAccessibleCustomersResponse extends jspb.Message {
  clearResourceNamesList(): void;
  getResourceNamesList(): Array<string>;
  setResourceNamesList(value: Array<string>): void;
  addResourceNames(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccessibleCustomersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccessibleCustomersResponse): ListAccessibleCustomersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAccessibleCustomersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccessibleCustomersResponse;
  static deserializeBinaryFromReader(message: ListAccessibleCustomersResponse, reader: jspb.BinaryReader): ListAccessibleCustomersResponse;
}

export namespace ListAccessibleCustomersResponse {
  export type AsObject = {
    resourceNamesList: Array<string>,
  }
}

