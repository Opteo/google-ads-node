// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/user_list_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_user_list_pb from "../../../../../google/ads/googleads/v1/resources/user_list_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetUserListRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserListRequest): GetUserListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserListRequest;
  static deserializeBinaryFromReader(message: GetUserListRequest, reader: jspb.BinaryReader): GetUserListRequest;
}

export namespace GetUserListRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateUserListsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<UserListOperation>;
  setOperationsList(value: Array<UserListOperation>): void;
  addOperations(value?: UserListOperation, index?: number): UserListOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateUserListsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateUserListsRequest): MutateUserListsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateUserListsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateUserListsRequest;
  static deserializeBinaryFromReader(message: MutateUserListsRequest, reader: jspb.BinaryReader): MutateUserListsRequest;
}

export namespace MutateUserListsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<UserListOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class UserListOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_user_list_pb.UserList | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_user_list_pb.UserList): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_user_list_pb.UserList | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_user_list_pb.UserList): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): UserListOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListOperation.AsObject;
  static toObject(includeInstance: boolean, msg: UserListOperation): UserListOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListOperation;
  static deserializeBinaryFromReader(message: UserListOperation, reader: jspb.BinaryReader): UserListOperation;
}

export namespace UserListOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_user_list_pb.UserList.AsObject,
    update?: google_ads_googleads_v1_resources_user_list_pb.UserList.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateUserListsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateUserListResult>;
  setResultsList(value: Array<MutateUserListResult>): void;
  addResults(value?: MutateUserListResult, index?: number): MutateUserListResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateUserListsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateUserListsResponse): MutateUserListsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateUserListsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateUserListsResponse;
  static deserializeBinaryFromReader(message: MutateUserListsResponse, reader: jspb.BinaryReader): MutateUserListsResponse;
}

export namespace MutateUserListsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateUserListResult.AsObject>,
  }
}

export class MutateUserListResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateUserListResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateUserListResult): MutateUserListResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateUserListResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateUserListResult;
  static deserializeBinaryFromReader(message: MutateUserListResult, reader: jspb.BinaryReader): MutateUserListResult;
}

export namespace MutateUserListResult {
  export type AsObject = {
    resourceName: string,
  }
}

