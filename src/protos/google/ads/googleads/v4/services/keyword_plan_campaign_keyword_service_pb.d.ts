// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/keyword_plan_campaign_keyword_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_keyword_plan_campaign_keyword_pb from "../../../../../google/ads/googleads/v4/resources/keyword_plan_campaign_keyword_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetKeywordPlanCampaignKeywordRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordPlanCampaignKeywordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordPlanCampaignKeywordRequest): GetKeywordPlanCampaignKeywordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeywordPlanCampaignKeywordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordPlanCampaignKeywordRequest;
  static deserializeBinaryFromReader(message: GetKeywordPlanCampaignKeywordRequest, reader: jspb.BinaryReader): GetKeywordPlanCampaignKeywordRequest;
}

export namespace GetKeywordPlanCampaignKeywordRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateKeywordPlanCampaignKeywordsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<KeywordPlanCampaignKeywordOperation>;
  setOperationsList(value: Array<KeywordPlanCampaignKeywordOperation>): void;
  addOperations(value?: KeywordPlanCampaignKeywordOperation, index?: number): KeywordPlanCampaignKeywordOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanCampaignKeywordsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanCampaignKeywordsRequest): MutateKeywordPlanCampaignKeywordsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanCampaignKeywordsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanCampaignKeywordsRequest;
  static deserializeBinaryFromReader(message: MutateKeywordPlanCampaignKeywordsRequest, reader: jspb.BinaryReader): MutateKeywordPlanCampaignKeywordsRequest;
}

export namespace MutateKeywordPlanCampaignKeywordsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<KeywordPlanCampaignKeywordOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class KeywordPlanCampaignKeywordOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v4_resources_keyword_plan_campaign_keyword_pb.KeywordPlanCampaignKeyword | undefined;
  setCreate(value?: google_ads_googleads_v4_resources_keyword_plan_campaign_keyword_pb.KeywordPlanCampaignKeyword): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v4_resources_keyword_plan_campaign_keyword_pb.KeywordPlanCampaignKeyword | undefined;
  setUpdate(value?: google_ads_googleads_v4_resources_keyword_plan_campaign_keyword_pb.KeywordPlanCampaignKeyword): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): KeywordPlanCampaignKeywordOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCampaignKeywordOperation.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCampaignKeywordOperation): KeywordPlanCampaignKeywordOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanCampaignKeywordOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCampaignKeywordOperation;
  static deserializeBinaryFromReader(message: KeywordPlanCampaignKeywordOperation, reader: jspb.BinaryReader): KeywordPlanCampaignKeywordOperation;
}

export namespace KeywordPlanCampaignKeywordOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v4_resources_keyword_plan_campaign_keyword_pb.KeywordPlanCampaignKeyword.AsObject,
    update?: google_ads_googleads_v4_resources_keyword_plan_campaign_keyword_pb.KeywordPlanCampaignKeyword.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateKeywordPlanCampaignKeywordsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateKeywordPlanCampaignKeywordResult>;
  setResultsList(value: Array<MutateKeywordPlanCampaignKeywordResult>): void;
  addResults(value?: MutateKeywordPlanCampaignKeywordResult, index?: number): MutateKeywordPlanCampaignKeywordResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanCampaignKeywordsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanCampaignKeywordsResponse): MutateKeywordPlanCampaignKeywordsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanCampaignKeywordsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanCampaignKeywordsResponse;
  static deserializeBinaryFromReader(message: MutateKeywordPlanCampaignKeywordsResponse, reader: jspb.BinaryReader): MutateKeywordPlanCampaignKeywordsResponse;
}

export namespace MutateKeywordPlanCampaignKeywordsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateKeywordPlanCampaignKeywordResult.AsObject>,
  }
}

export class MutateKeywordPlanCampaignKeywordResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateKeywordPlanCampaignKeywordResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateKeywordPlanCampaignKeywordResult): MutateKeywordPlanCampaignKeywordResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateKeywordPlanCampaignKeywordResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateKeywordPlanCampaignKeywordResult;
  static deserializeBinaryFromReader(message: MutateKeywordPlanCampaignKeywordResult, reader: jspb.BinaryReader): MutateKeywordPlanCampaignKeywordResult;
}

export namespace MutateKeywordPlanCampaignKeywordResult {
  export type AsObject = {
    resourceName: string,
  }
}

