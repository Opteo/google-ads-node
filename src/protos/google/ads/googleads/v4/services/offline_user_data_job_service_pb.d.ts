// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/offline_user_data_job_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_offline_user_data_pb from "../../../../../google/ads/googleads/v4/common/offline_user_data_pb";
import * as google_ads_googleads_v4_resources_offline_user_data_job_pb from "../../../../../google/ads/googleads/v4/resources/offline_user_data_job_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class CreateOfflineUserDataJobRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasJob(): boolean;
  clearJob(): void;
  getJob(): google_ads_googleads_v4_resources_offline_user_data_job_pb.OfflineUserDataJob | undefined;
  setJob(value?: google_ads_googleads_v4_resources_offline_user_data_job_pb.OfflineUserDataJob): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfflineUserDataJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfflineUserDataJobRequest): CreateOfflineUserDataJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOfflineUserDataJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfflineUserDataJobRequest;
  static deserializeBinaryFromReader(message: CreateOfflineUserDataJobRequest, reader: jspb.BinaryReader): CreateOfflineUserDataJobRequest;
}

export namespace CreateOfflineUserDataJobRequest {
  export type AsObject = {
    customerId: string,
    job?: google_ads_googleads_v4_resources_offline_user_data_job_pb.OfflineUserDataJob.AsObject,
  }
}

export class CreateOfflineUserDataJobResponse extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOfflineUserDataJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOfflineUserDataJobResponse): CreateOfflineUserDataJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOfflineUserDataJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOfflineUserDataJobResponse;
  static deserializeBinaryFromReader(message: CreateOfflineUserDataJobResponse, reader: jspb.BinaryReader): CreateOfflineUserDataJobResponse;
}

export namespace CreateOfflineUserDataJobResponse {
  export type AsObject = {
    resourceName: string,
  }
}

export class GetOfflineUserDataJobRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOfflineUserDataJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOfflineUserDataJobRequest): GetOfflineUserDataJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOfflineUserDataJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOfflineUserDataJobRequest;
  static deserializeBinaryFromReader(message: GetOfflineUserDataJobRequest, reader: jspb.BinaryReader): GetOfflineUserDataJobRequest;
}

export namespace GetOfflineUserDataJobRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class RunOfflineUserDataJobRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunOfflineUserDataJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunOfflineUserDataJobRequest): RunOfflineUserDataJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunOfflineUserDataJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunOfflineUserDataJobRequest;
  static deserializeBinaryFromReader(message: RunOfflineUserDataJobRequest, reader: jspb.BinaryReader): RunOfflineUserDataJobRequest;
}

export namespace RunOfflineUserDataJobRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class AddOfflineUserDataJobOperationsRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasEnablePartialFailure(): boolean;
  clearEnablePartialFailure(): void;
  getEnablePartialFailure(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnablePartialFailure(value?: google_protobuf_wrappers_pb.BoolValue): void;

  clearOperationsList(): void;
  getOperationsList(): Array<OfflineUserDataJobOperation>;
  setOperationsList(value: Array<OfflineUserDataJobOperation>): void;
  addOperations(value?: OfflineUserDataJobOperation, index?: number): OfflineUserDataJobOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOfflineUserDataJobOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOfflineUserDataJobOperationsRequest): AddOfflineUserDataJobOperationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOfflineUserDataJobOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOfflineUserDataJobOperationsRequest;
  static deserializeBinaryFromReader(message: AddOfflineUserDataJobOperationsRequest, reader: jspb.BinaryReader): AddOfflineUserDataJobOperationsRequest;
}

export namespace AddOfflineUserDataJobOperationsRequest {
  export type AsObject = {
    resourceName: string,
    enablePartialFailure?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    operationsList: Array<OfflineUserDataJobOperation.AsObject>,
  }
}

export class OfflineUserDataJobOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v4_common_offline_user_data_pb.UserData | undefined;
  setCreate(value?: google_ads_googleads_v4_common_offline_user_data_pb.UserData): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): google_ads_googleads_v4_common_offline_user_data_pb.UserData | undefined;
  setRemove(value?: google_ads_googleads_v4_common_offline_user_data_pb.UserData): void;

  hasRemoveAll(): boolean;
  clearRemoveAll(): void;
  getRemoveAll(): boolean;
  setRemoveAll(value: boolean): void;

  getOperationCase(): OfflineUserDataJobOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineUserDataJobOperation.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineUserDataJobOperation): OfflineUserDataJobOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineUserDataJobOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineUserDataJobOperation;
  static deserializeBinaryFromReader(message: OfflineUserDataJobOperation, reader: jspb.BinaryReader): OfflineUserDataJobOperation;
}

export namespace OfflineUserDataJobOperation {
  export type AsObject = {
    create?: google_ads_googleads_v4_common_offline_user_data_pb.UserData.AsObject,
    remove?: google_ads_googleads_v4_common_offline_user_data_pb.UserData.AsObject,
    removeAll: boolean,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
    REMOVE_ALL = 3,
  }
}

export class AddOfflineUserDataJobOperationsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOfflineUserDataJobOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddOfflineUserDataJobOperationsResponse): AddOfflineUserDataJobOperationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOfflineUserDataJobOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOfflineUserDataJobOperationsResponse;
  static deserializeBinaryFromReader(message: AddOfflineUserDataJobOperationsResponse, reader: jspb.BinaryReader): AddOfflineUserDataJobOperationsResponse;
}

export namespace AddOfflineUserDataJobOperationsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
  }
}

