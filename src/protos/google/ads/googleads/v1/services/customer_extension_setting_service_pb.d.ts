// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/customer_extension_setting_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_customer_extension_setting_pb from "../../../../../google/ads/googleads/v1/resources/customer_extension_setting_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetCustomerExtensionSettingRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomerExtensionSettingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomerExtensionSettingRequest): GetCustomerExtensionSettingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomerExtensionSettingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomerExtensionSettingRequest;
  static deserializeBinaryFromReader(message: GetCustomerExtensionSettingRequest, reader: jspb.BinaryReader): GetCustomerExtensionSettingRequest;
}

export namespace GetCustomerExtensionSettingRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomerExtensionSettingsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CustomerExtensionSettingOperation>;
  setOperationsList(value: Array<CustomerExtensionSettingOperation>): void;
  addOperations(value?: CustomerExtensionSettingOperation, index?: number): CustomerExtensionSettingOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerExtensionSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerExtensionSettingsRequest): MutateCustomerExtensionSettingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerExtensionSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerExtensionSettingsRequest;
  static deserializeBinaryFromReader(message: MutateCustomerExtensionSettingsRequest, reader: jspb.BinaryReader): MutateCustomerExtensionSettingsRequest;
}

export namespace MutateCustomerExtensionSettingsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomerExtensionSettingOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CustomerExtensionSettingOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CustomerExtensionSettingOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerExtensionSettingOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerExtensionSettingOperation): CustomerExtensionSettingOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerExtensionSettingOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerExtensionSettingOperation;
  static deserializeBinaryFromReader(message: CustomerExtensionSettingOperation, reader: jspb.BinaryReader): CustomerExtensionSettingOperation;
}

export namespace CustomerExtensionSettingOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting.AsObject,
    update?: google_ads_googleads_v1_resources_customer_extension_setting_pb.CustomerExtensionSetting.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCustomerExtensionSettingsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCustomerExtensionSettingResult>;
  setResultsList(value: Array<MutateCustomerExtensionSettingResult>): void;
  addResults(value?: MutateCustomerExtensionSettingResult, index?: number): MutateCustomerExtensionSettingResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerExtensionSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerExtensionSettingsResponse): MutateCustomerExtensionSettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerExtensionSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerExtensionSettingsResponse;
  static deserializeBinaryFromReader(message: MutateCustomerExtensionSettingsResponse, reader: jspb.BinaryReader): MutateCustomerExtensionSettingsResponse;
}

export namespace MutateCustomerExtensionSettingsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCustomerExtensionSettingResult.AsObject>,
  }
}

export class MutateCustomerExtensionSettingResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomerExtensionSettingResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomerExtensionSettingResult): MutateCustomerExtensionSettingResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomerExtensionSettingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomerExtensionSettingResult;
  static deserializeBinaryFromReader(message: MutateCustomerExtensionSettingResult, reader: jspb.BinaryReader): MutateCustomerExtensionSettingResult;
}

export namespace MutateCustomerExtensionSettingResult {
  export type AsObject = {
    resourceName: string,
  }
}

