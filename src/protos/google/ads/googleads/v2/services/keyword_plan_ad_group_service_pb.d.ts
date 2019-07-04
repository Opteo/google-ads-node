// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/keyword_plan_ad_group_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_keyword_plan_ad_group_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_ad_group_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetKeywordPlanAdGroupRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordPlanAdGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordPlanAdGroupRequest): GetKeywordPlanAdGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeywordPlanAdGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordPlanAdGroupRequest;
  static deserializeBinaryFromReader(message: GetKeywordPlanAdGroupRequest, reader: jspb.BinaryReader): GetKeywordPlanAdGroupRequest;
}

export namespace GetKeywordPlanAdGroupRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateKeywordPlanAdGroupsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<KeywordPlanAdGroupOperation>;
  setOperationsList(value: Array<KeywordPlanAdGroupOperation>): void;
  addOperations(value?: KeywordPlanAdGroupOperation, index?: number): KeywordPlanAdGroupOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanAdGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanAdGroupsRequest): MutateKeywordPlanAdGroupsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanAdGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanAdGroupsRequest;
  static deserializeBinaryFromReader(message: MutateKeywordPlanAdGroupsRequest, reader: jspb.BinaryReader): MutateKeywordPlanAdGroupsRequest;
}

export namespace MutateKeywordPlanAdGroupsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<KeywordPlanAdGroupOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class KeywordPlanAdGroupOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): KeywordPlanAdGroupOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroupOperation.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroupOperation): KeywordPlanAdGroupOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanAdGroupOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroupOperation;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroupOperation, reader: jspb.BinaryReader): KeywordPlanAdGroupOperation;
}

export namespace KeywordPlanAdGroupOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup.AsObject,
    update?: google_ads_googleads_v2_resources_keyword_plan_ad_group_pb.KeywordPlanAdGroup.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateKeywordPlanAdGroupsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateKeywordPlanAdGroupResult>;
  setResultsList(value: Array<MutateKeywordPlanAdGroupResult>): void;
  addResults(value?: MutateKeywordPlanAdGroupResult, index?: number): MutateKeywordPlanAdGroupResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanAdGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanAdGroupsResponse): MutateKeywordPlanAdGroupsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanAdGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanAdGroupsResponse;
  static deserializeBinaryFromReader(message: MutateKeywordPlanAdGroupsResponse, reader: jspb.BinaryReader): MutateKeywordPlanAdGroupsResponse;
}

export namespace MutateKeywordPlanAdGroupsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateKeywordPlanAdGroupResult.AsObject>,
  }
}

export class MutateKeywordPlanAdGroupResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanAdGroupResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanAdGroupResult): MutateKeywordPlanAdGroupResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanAdGroupResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanAdGroupResult;
  static deserializeBinaryFromReader(message: MutateKeywordPlanAdGroupResult, reader: jspb.BinaryReader): MutateKeywordPlanAdGroupResult;
}

export namespace MutateKeywordPlanAdGroupResult {
  export type AsObject = {
    resourceName: string,
  }
}

