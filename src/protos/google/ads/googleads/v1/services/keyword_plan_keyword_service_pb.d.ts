// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/keyword_plan_keyword_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_keyword_plan_keyword_pb from "../../../../../google/ads/googleads/v1/resources/keyword_plan_keyword_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetKeywordPlanKeywordRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordPlanKeywordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordPlanKeywordRequest): GetKeywordPlanKeywordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeywordPlanKeywordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordPlanKeywordRequest;
  static deserializeBinaryFromReader(message: GetKeywordPlanKeywordRequest, reader: jspb.BinaryReader): GetKeywordPlanKeywordRequest;
}

export namespace GetKeywordPlanKeywordRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateKeywordPlanKeywordsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<KeywordPlanKeywordOperation>;
  setOperationsList(value: Array<KeywordPlanKeywordOperation>): void;
  addOperations(value?: KeywordPlanKeywordOperation, index?: number): KeywordPlanKeywordOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanKeywordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanKeywordsRequest): MutateKeywordPlanKeywordsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanKeywordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanKeywordsRequest;
  static deserializeBinaryFromReader(message: MutateKeywordPlanKeywordsRequest, reader: jspb.BinaryReader): MutateKeywordPlanKeywordsRequest;
}

export namespace MutateKeywordPlanKeywordsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<KeywordPlanKeywordOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class KeywordPlanKeywordOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): KeywordPlanKeywordOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanKeywordOperation.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanKeywordOperation): KeywordPlanKeywordOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanKeywordOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanKeywordOperation;
  static deserializeBinaryFromReader(message: KeywordPlanKeywordOperation, reader: jspb.BinaryReader): KeywordPlanKeywordOperation;
}

export namespace KeywordPlanKeywordOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword.AsObject,
    update?: google_ads_googleads_v1_resources_keyword_plan_keyword_pb.KeywordPlanKeyword.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateKeywordPlanKeywordsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateKeywordPlanKeywordResult>;
  setResultsList(value: Array<MutateKeywordPlanKeywordResult>): void;
  addResults(value?: MutateKeywordPlanKeywordResult, index?: number): MutateKeywordPlanKeywordResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanKeywordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanKeywordsResponse): MutateKeywordPlanKeywordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanKeywordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanKeywordsResponse;
  static deserializeBinaryFromReader(message: MutateKeywordPlanKeywordsResponse, reader: jspb.BinaryReader): MutateKeywordPlanKeywordsResponse;
}

export namespace MutateKeywordPlanKeywordsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateKeywordPlanKeywordResult.AsObject>,
  }
}

export class MutateKeywordPlanKeywordResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanKeywordResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanKeywordResult): MutateKeywordPlanKeywordResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanKeywordResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanKeywordResult;
  static deserializeBinaryFromReader(message: MutateKeywordPlanKeywordResult, reader: jspb.BinaryReader): MutateKeywordPlanKeywordResult;
}

export namespace MutateKeywordPlanKeywordResult {
  export type AsObject = {
    resourceName: string,
  }
}

