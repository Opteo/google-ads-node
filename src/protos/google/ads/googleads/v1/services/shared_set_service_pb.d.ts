// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/shared_set_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_shared_set_pb from "../../../../../google/ads/googleads/v1/resources/shared_set_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetSharedSetRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSharedSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSharedSetRequest): GetSharedSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSharedSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSharedSetRequest;
  static deserializeBinaryFromReader(message: GetSharedSetRequest, reader: jspb.BinaryReader): GetSharedSetRequest;
}

export namespace GetSharedSetRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateSharedSetsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<SharedSetOperation>;
  setOperationsList(value: Array<SharedSetOperation>): void;
  addOperations(value?: SharedSetOperation, index?: number): SharedSetOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedSetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedSetsRequest): MutateSharedSetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateSharedSetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedSetsRequest;
  static deserializeBinaryFromReader(message: MutateSharedSetsRequest, reader: jspb.BinaryReader): MutateSharedSetsRequest;
}

export namespace MutateSharedSetsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<SharedSetOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class SharedSetOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_shared_set_pb.SharedSet | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_shared_set_pb.SharedSet): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_shared_set_pb.SharedSet | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_shared_set_pb.SharedSet): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): SharedSetOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSetOperation.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSetOperation): SharedSetOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedSetOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSetOperation;
  static deserializeBinaryFromReader(message: SharedSetOperation, reader: jspb.BinaryReader): SharedSetOperation;
}

export namespace SharedSetOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_shared_set_pb.SharedSet.AsObject,
    update?: google_ads_googleads_v1_resources_shared_set_pb.SharedSet.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateSharedSetsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateSharedSetResult>;
  setResultsList(value: Array<MutateSharedSetResult>): void;
  addResults(value?: MutateSharedSetResult, index?: number): MutateSharedSetResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedSetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedSetsResponse): MutateSharedSetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateSharedSetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedSetsResponse;
  static deserializeBinaryFromReader(message: MutateSharedSetsResponse, reader: jspb.BinaryReader): MutateSharedSetsResponse;
}

export namespace MutateSharedSetsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateSharedSetResult.AsObject>,
  }
}

export class MutateSharedSetResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateSharedSetResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateSharedSetResult): MutateSharedSetResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateSharedSetResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateSharedSetResult;
  static deserializeBinaryFromReader(message: MutateSharedSetResult, reader: jspb.BinaryReader): MutateSharedSetResult;
}

export namespace MutateSharedSetResult {
  export type AsObject = {
    resourceName: string,
  }
}

