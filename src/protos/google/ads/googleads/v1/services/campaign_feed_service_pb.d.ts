// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_feed_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_campaign_feed_pb from "../../../../../google/ads/googleads/v1/resources/campaign_feed_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetCampaignFeedRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignFeedRequest): GetCampaignFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignFeedRequest;
  static deserializeBinaryFromReader(message: GetCampaignFeedRequest, reader: jspb.BinaryReader): GetCampaignFeedRequest;
}

export namespace GetCampaignFeedRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignFeedsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CampaignFeedOperation>;
  setOperationsList(value: Array<CampaignFeedOperation>): void;
  addOperations(value?: CampaignFeedOperation, index?: number): CampaignFeedOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignFeedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignFeedsRequest): MutateCampaignFeedsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignFeedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignFeedsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignFeedsRequest, reader: jspb.BinaryReader): MutateCampaignFeedsRequest;
}

export namespace MutateCampaignFeedsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignFeedOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignFeedOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_campaign_feed_pb.CampaignFeed | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_campaign_feed_pb.CampaignFeed): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_campaign_feed_pb.CampaignFeed | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_campaign_feed_pb.CampaignFeed): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignFeedOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignFeedOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignFeedOperation): CampaignFeedOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignFeedOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignFeedOperation;
  static deserializeBinaryFromReader(message: CampaignFeedOperation, reader: jspb.BinaryReader): CampaignFeedOperation;
}

export namespace CampaignFeedOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_campaign_feed_pb.CampaignFeed.AsObject,
    update?: google_ads_googleads_v1_resources_campaign_feed_pb.CampaignFeed.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignFeedsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCampaignFeedResult>;
  setResultsList(value: Array<MutateCampaignFeedResult>): void;
  addResults(value?: MutateCampaignFeedResult, index?: number): MutateCampaignFeedResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignFeedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignFeedsResponse): MutateCampaignFeedsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignFeedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignFeedsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignFeedsResponse, reader: jspb.BinaryReader): MutateCampaignFeedsResponse;
}

export namespace MutateCampaignFeedsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignFeedResult.AsObject>,
  }
}

export class MutateCampaignFeedResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignFeedResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignFeedResult): MutateCampaignFeedResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignFeedResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignFeedResult;
  static deserializeBinaryFromReader(message: MutateCampaignFeedResult, reader: jspb.BinaryReader): MutateCampaignFeedResult;
}

export namespace MutateCampaignFeedResult {
  export type AsObject = {
    resourceName: string,
  }
}

