// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/keyword_plan_negative_keyword_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb from "../../../../../google/ads/googleads/v2/resources/keyword_plan_negative_keyword_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetKeywordPlanNegativeKeywordRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordPlanNegativeKeywordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordPlanNegativeKeywordRequest): GetKeywordPlanNegativeKeywordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeywordPlanNegativeKeywordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordPlanNegativeKeywordRequest;
  static deserializeBinaryFromReader(message: GetKeywordPlanNegativeKeywordRequest, reader: jspb.BinaryReader): GetKeywordPlanNegativeKeywordRequest;
}

export namespace GetKeywordPlanNegativeKeywordRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateKeywordPlanNegativeKeywordsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<KeywordPlanNegativeKeywordOperation>;
  setOperationsList(value: Array<KeywordPlanNegativeKeywordOperation>): void;
  addOperations(value?: KeywordPlanNegativeKeywordOperation, index?: number): KeywordPlanNegativeKeywordOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanNegativeKeywordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanNegativeKeywordsRequest): MutateKeywordPlanNegativeKeywordsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanNegativeKeywordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanNegativeKeywordsRequest;
  static deserializeBinaryFromReader(message: MutateKeywordPlanNegativeKeywordsRequest, reader: jspb.BinaryReader): MutateKeywordPlanNegativeKeywordsRequest;
}

export namespace MutateKeywordPlanNegativeKeywordsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<KeywordPlanNegativeKeywordOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class KeywordPlanNegativeKeywordOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): KeywordPlanNegativeKeywordOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanNegativeKeywordOperation.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanNegativeKeywordOperation): KeywordPlanNegativeKeywordOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanNegativeKeywordOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanNegativeKeywordOperation;
  static deserializeBinaryFromReader(message: KeywordPlanNegativeKeywordOperation, reader: jspb.BinaryReader): KeywordPlanNegativeKeywordOperation;
}

export namespace KeywordPlanNegativeKeywordOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword.AsObject,
    update?: google_ads_googleads_v2_resources_keyword_plan_negative_keyword_pb.KeywordPlanNegativeKeyword.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateKeywordPlanNegativeKeywordsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateKeywordPlanNegativeKeywordResult>;
  setResultsList(value: Array<MutateKeywordPlanNegativeKeywordResult>): void;
  addResults(value?: MutateKeywordPlanNegativeKeywordResult, index?: number): MutateKeywordPlanNegativeKeywordResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanNegativeKeywordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanNegativeKeywordsResponse): MutateKeywordPlanNegativeKeywordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanNegativeKeywordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanNegativeKeywordsResponse;
  static deserializeBinaryFromReader(message: MutateKeywordPlanNegativeKeywordsResponse, reader: jspb.BinaryReader): MutateKeywordPlanNegativeKeywordsResponse;
}

export namespace MutateKeywordPlanNegativeKeywordsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateKeywordPlanNegativeKeywordResult.AsObject>,
  }
}

export class MutateKeywordPlanNegativeKeywordResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanNegativeKeywordResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanNegativeKeywordResult): MutateKeywordPlanNegativeKeywordResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanNegativeKeywordResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanNegativeKeywordResult;
  static deserializeBinaryFromReader(message: MutateKeywordPlanNegativeKeywordResult, reader: jspb.BinaryReader): MutateKeywordPlanNegativeKeywordResult;
}

export namespace MutateKeywordPlanNegativeKeywordResult {
  export type AsObject = {
    resourceName: string,
  }
}

