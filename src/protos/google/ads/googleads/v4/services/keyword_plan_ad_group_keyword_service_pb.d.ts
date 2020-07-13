// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/keyword_plan_ad_group_keyword_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb from "../../../../../google/ads/googleads/v4/resources/keyword_plan_ad_group_keyword_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetKeywordPlanAdGroupKeywordRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordPlanAdGroupKeywordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordPlanAdGroupKeywordRequest): GetKeywordPlanAdGroupKeywordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeywordPlanAdGroupKeywordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordPlanAdGroupKeywordRequest;
  static deserializeBinaryFromReader(message: GetKeywordPlanAdGroupKeywordRequest, reader: jspb.BinaryReader): GetKeywordPlanAdGroupKeywordRequest;
}

export namespace GetKeywordPlanAdGroupKeywordRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateKeywordPlanAdGroupKeywordsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<KeywordPlanAdGroupKeywordOperation>;
  setOperationsList(value: Array<KeywordPlanAdGroupKeywordOperation>): void;
  addOperations(value?: KeywordPlanAdGroupKeywordOperation, index?: number): KeywordPlanAdGroupKeywordOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanAdGroupKeywordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanAdGroupKeywordsRequest): MutateKeywordPlanAdGroupKeywordsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanAdGroupKeywordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanAdGroupKeywordsRequest;
  static deserializeBinaryFromReader(message: MutateKeywordPlanAdGroupKeywordsRequest, reader: jspb.BinaryReader): MutateKeywordPlanAdGroupKeywordsRequest;
}

export namespace MutateKeywordPlanAdGroupKeywordsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<KeywordPlanAdGroupKeywordOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class KeywordPlanAdGroupKeywordOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword | undefined;
  setCreate(value?: google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword | undefined;
  setUpdate(value?: google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): KeywordPlanAdGroupKeywordOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroupKeywordOperation.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroupKeywordOperation): KeywordPlanAdGroupKeywordOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanAdGroupKeywordOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroupKeywordOperation;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroupKeywordOperation, reader: jspb.BinaryReader): KeywordPlanAdGroupKeywordOperation;
}

export namespace KeywordPlanAdGroupKeywordOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.AsObject,
    update?: google_ads_googleads_v4_resources_keyword_plan_ad_group_keyword_pb.KeywordPlanAdGroupKeyword.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateKeywordPlanAdGroupKeywordsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateKeywordPlanAdGroupKeywordResult>;
  setResultsList(value: Array<MutateKeywordPlanAdGroupKeywordResult>): void;
  addResults(value?: MutateKeywordPlanAdGroupKeywordResult, index?: number): MutateKeywordPlanAdGroupKeywordResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanAdGroupKeywordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanAdGroupKeywordsResponse): MutateKeywordPlanAdGroupKeywordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanAdGroupKeywordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanAdGroupKeywordsResponse;
  static deserializeBinaryFromReader(message: MutateKeywordPlanAdGroupKeywordsResponse, reader: jspb.BinaryReader): MutateKeywordPlanAdGroupKeywordsResponse;
}

export namespace MutateKeywordPlanAdGroupKeywordsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateKeywordPlanAdGroupKeywordResult.AsObject>,
  }
}

export class MutateKeywordPlanAdGroupKeywordResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanAdGroupKeywordResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanAdGroupKeywordResult): MutateKeywordPlanAdGroupKeywordResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanAdGroupKeywordResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanAdGroupKeywordResult;
  static deserializeBinaryFromReader(message: MutateKeywordPlanAdGroupKeywordResult, reader: jspb.BinaryReader): MutateKeywordPlanAdGroupKeywordResult;
}

export namespace MutateKeywordPlanAdGroupKeywordResult {
  export type AsObject = {
    resourceName: string,
  }
}

