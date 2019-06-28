// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_bid_modifier_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_campaign_bid_modifier_pb from "../../../../../google/ads/googleads/v2/resources/campaign_bid_modifier_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetCampaignBidModifierRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignBidModifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignBidModifierRequest): GetCampaignBidModifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignBidModifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignBidModifierRequest;
  static deserializeBinaryFromReader(message: GetCampaignBidModifierRequest, reader: jspb.BinaryReader): GetCampaignBidModifierRequest;
}

export namespace GetCampaignBidModifierRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignBidModifiersRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CampaignBidModifierOperation>;
  setOperationsList(value: Array<CampaignBidModifierOperation>): void;
  addOperations(value?: CampaignBidModifierOperation, index?: number): CampaignBidModifierOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignBidModifiersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignBidModifiersRequest): MutateCampaignBidModifiersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignBidModifiersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignBidModifiersRequest;
  static deserializeBinaryFromReader(message: MutateCampaignBidModifiersRequest, reader: jspb.BinaryReader): MutateCampaignBidModifiersRequest;
}

export namespace MutateCampaignBidModifiersRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignBidModifierOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignBidModifierOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignBidModifierOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignBidModifierOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignBidModifierOperation): CampaignBidModifierOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignBidModifierOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignBidModifierOperation;
  static deserializeBinaryFromReader(message: CampaignBidModifierOperation, reader: jspb.BinaryReader): CampaignBidModifierOperation;
}

export namespace CampaignBidModifierOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier.AsObject,
    update?: google_ads_googleads_v2_resources_campaign_bid_modifier_pb.CampaignBidModifier.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateCampaignBidModifiersResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCampaignBidModifierResult>;
  setResultsList(value: Array<MutateCampaignBidModifierResult>): void;
  addResults(value?: MutateCampaignBidModifierResult, index?: number): MutateCampaignBidModifierResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignBidModifiersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignBidModifiersResponse): MutateCampaignBidModifiersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignBidModifiersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignBidModifiersResponse;
  static deserializeBinaryFromReader(message: MutateCampaignBidModifiersResponse, reader: jspb.BinaryReader): MutateCampaignBidModifiersResponse;
}

export namespace MutateCampaignBidModifiersResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignBidModifierResult.AsObject>,
  }
}

export class MutateCampaignBidModifierResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignBidModifierResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignBidModifierResult): MutateCampaignBidModifierResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignBidModifierResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignBidModifierResult;
  static deserializeBinaryFromReader(message: MutateCampaignBidModifierResult, reader: jspb.BinaryReader): MutateCampaignBidModifierResult;
}

export namespace MutateCampaignBidModifierResult {
  export type AsObject = {
    resourceName: string,
  }
}

