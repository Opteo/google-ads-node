// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_draft_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_campaign_draft_pb from "../../../../../google/ads/googleads/v2/resources/campaign_draft_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetCampaignDraftRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignDraftRequest): GetCampaignDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignDraftRequest;
  static deserializeBinaryFromReader(message: GetCampaignDraftRequest, reader: jspb.BinaryReader): GetCampaignDraftRequest;
}

export namespace GetCampaignDraftRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignDraftsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CampaignDraftOperation>;
  setOperationsList(value: Array<CampaignDraftOperation>): void;
  addOperations(value?: CampaignDraftOperation, index?: number): CampaignDraftOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignDraftsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignDraftsRequest): MutateCampaignDraftsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignDraftsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignDraftsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignDraftsRequest, reader: jspb.BinaryReader): MutateCampaignDraftsRequest;
}

export namespace MutateCampaignDraftsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignDraftOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class PromoteCampaignDraftRequest extends jspb.Message {
  getCampaignDraft(): string;
  setCampaignDraft(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteCampaignDraftRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteCampaignDraftRequest): PromoteCampaignDraftRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoteCampaignDraftRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteCampaignDraftRequest;
  static deserializeBinaryFromReader(message: PromoteCampaignDraftRequest, reader: jspb.BinaryReader): PromoteCampaignDraftRequest;
}

export namespace PromoteCampaignDraftRequest {
  export type AsObject = {
    campaignDraft: string,
  }
}

export class CampaignDraftOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignDraftOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignDraftOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignDraftOperation): CampaignDraftOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignDraftOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignDraftOperation;
  static deserializeBinaryFromReader(message: CampaignDraftOperation, reader: jspb.BinaryReader): CampaignDraftOperation;
}

export namespace CampaignDraftOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft.AsObject,
    update?: google_ads_googleads_v2_resources_campaign_draft_pb.CampaignDraft.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignDraftsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCampaignDraftResult>;
  setResultsList(value: Array<MutateCampaignDraftResult>): void;
  addResults(value?: MutateCampaignDraftResult, index?: number): MutateCampaignDraftResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignDraftsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignDraftsResponse): MutateCampaignDraftsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignDraftsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignDraftsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignDraftsResponse, reader: jspb.BinaryReader): MutateCampaignDraftsResponse;
}

export namespace MutateCampaignDraftsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignDraftResult.AsObject>,
  }
}

export class MutateCampaignDraftResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignDraftResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignDraftResult): MutateCampaignDraftResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignDraftResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignDraftResult;
  static deserializeBinaryFromReader(message: MutateCampaignDraftResult, reader: jspb.BinaryReader): MutateCampaignDraftResult;
}

export namespace MutateCampaignDraftResult {
  export type AsObject = {
    resourceName: string,
  }
}

export class ListCampaignDraftAsyncErrorsRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignDraftAsyncErrorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignDraftAsyncErrorsRequest): ListCampaignDraftAsyncErrorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignDraftAsyncErrorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignDraftAsyncErrorsRequest;
  static deserializeBinaryFromReader(message: ListCampaignDraftAsyncErrorsRequest, reader: jspb.BinaryReader): ListCampaignDraftAsyncErrorsRequest;
}

export namespace ListCampaignDraftAsyncErrorsRequest {
  export type AsObject = {
    resourceName: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListCampaignDraftAsyncErrorsResponse extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<google_rpc_status_pb.Status>;
  setErrorsList(value: Array<google_rpc_status_pb.Status>): void;
  addErrors(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignDraftAsyncErrorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignDraftAsyncErrorsResponse): ListCampaignDraftAsyncErrorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignDraftAsyncErrorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignDraftAsyncErrorsResponse;
  static deserializeBinaryFromReader(message: ListCampaignDraftAsyncErrorsResponse, reader: jspb.BinaryReader): ListCampaignDraftAsyncErrorsResponse;
}

export namespace ListCampaignDraftAsyncErrorsResponse {
  export type AsObject = {
    errorsList: Array<google_rpc_status_pb.Status.AsObject>,
    nextPageToken: string,
  }
}

