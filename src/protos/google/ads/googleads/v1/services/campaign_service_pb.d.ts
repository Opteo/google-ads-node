// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_campaign_pb from "../../../../../google/ads/googleads/v1/resources/campaign_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetCampaignRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignRequest): GetCampaignRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignRequest;
  static deserializeBinaryFromReader(message: GetCampaignRequest, reader: jspb.BinaryReader): GetCampaignRequest;
}

export namespace GetCampaignRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CampaignOperation>;
  setOperationsList(value: Array<CampaignOperation>): void;
  addOperations(value?: CampaignOperation, index?: number): CampaignOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignsRequest): MutateCampaignsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignsRequest, reader: jspb.BinaryReader): MutateCampaignsRequest;
}

export namespace MutateCampaignsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_campaign_pb.Campaign | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_campaign_pb.Campaign): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_campaign_pb.Campaign | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_campaign_pb.Campaign): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignOperation): CampaignOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignOperation;
  static deserializeBinaryFromReader(message: CampaignOperation, reader: jspb.BinaryReader): CampaignOperation;
}

export namespace CampaignOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_campaign_pb.Campaign.AsObject,
    update?: google_ads_googleads_v1_resources_campaign_pb.Campaign.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCampaignResult>;
  setResultsList(value: Array<MutateCampaignResult>): void;
  addResults(value?: MutateCampaignResult, index?: number): MutateCampaignResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignsResponse): MutateCampaignsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignsResponse, reader: jspb.BinaryReader): MutateCampaignsResponse;
}

export namespace MutateCampaignsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignResult.AsObject>,
  }
}

export class MutateCampaignResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignResult): MutateCampaignResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignResult;
  static deserializeBinaryFromReader(message: MutateCampaignResult, reader: jspb.BinaryReader): MutateCampaignResult;
}

export namespace MutateCampaignResult {
  export type AsObject = {
    resourceName: string,
  }
}

