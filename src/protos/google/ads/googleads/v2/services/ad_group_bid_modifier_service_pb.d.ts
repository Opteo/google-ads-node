// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_bid_modifier_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_ad_group_bid_modifier_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_bid_modifier_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAdGroupBidModifierRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupBidModifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupBidModifierRequest): GetAdGroupBidModifierRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdGroupBidModifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupBidModifierRequest;
  static deserializeBinaryFromReader(message: GetAdGroupBidModifierRequest, reader: jspb.BinaryReader): GetAdGroupBidModifierRequest;
}

export namespace GetAdGroupBidModifierRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupBidModifiersRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<AdGroupBidModifierOperation>;
  setOperationsList(value: Array<AdGroupBidModifierOperation>): void;
  addOperations(value?: AdGroupBidModifierOperation, index?: number): AdGroupBidModifierOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupBidModifiersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupBidModifiersRequest): MutateAdGroupBidModifiersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupBidModifiersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupBidModifiersRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupBidModifiersRequest, reader: jspb.BinaryReader): MutateAdGroupBidModifiersRequest;
}

export namespace MutateAdGroupBidModifiersRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupBidModifierOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupBidModifierOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupBidModifierOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupBidModifierOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupBidModifierOperation): AdGroupBidModifierOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupBidModifierOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupBidModifierOperation;
  static deserializeBinaryFromReader(message: AdGroupBidModifierOperation, reader: jspb.BinaryReader): AdGroupBidModifierOperation;
}

export namespace AdGroupBidModifierOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    update?: google_ads_googleads_v2_resources_ad_group_bid_modifier_pb.AdGroupBidModifier.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupBidModifiersResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateAdGroupBidModifierResult>;
  setResultsList(value: Array<MutateAdGroupBidModifierResult>): void;
  addResults(value?: MutateAdGroupBidModifierResult, index?: number): MutateAdGroupBidModifierResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupBidModifiersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupBidModifiersResponse): MutateAdGroupBidModifiersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupBidModifiersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupBidModifiersResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupBidModifiersResponse, reader: jspb.BinaryReader): MutateAdGroupBidModifiersResponse;
}

export namespace MutateAdGroupBidModifiersResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupBidModifierResult.AsObject>,
  }
}

export class MutateAdGroupBidModifierResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupBidModifierResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupBidModifierResult): MutateAdGroupBidModifierResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupBidModifierResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupBidModifierResult;
  static deserializeBinaryFromReader(message: MutateAdGroupBidModifierResult, reader: jspb.BinaryReader): MutateAdGroupBidModifierResult;
}

export namespace MutateAdGroupBidModifierResult {
  export type AsObject = {
    resourceName: string,
  }
}

