// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_criterion_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_policy_pb from "../../../../../google/ads/googleads/v2/common/policy_pb";
import * as google_ads_googleads_v2_resources_ad_group_criterion_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_criterion_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAdGroupCriterionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupCriterionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupCriterionRequest): GetAdGroupCriterionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdGroupCriterionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupCriterionRequest;
  static deserializeBinaryFromReader(message: GetAdGroupCriterionRequest, reader: jspb.BinaryReader): GetAdGroupCriterionRequest;
}

export namespace GetAdGroupCriterionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupCriteriaRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<AdGroupCriterionOperation>;
  setOperationsList(value: Array<AdGroupCriterionOperation>): void;
  addOperations(value?: AdGroupCriterionOperation, index?: number): AdGroupCriterionOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriteriaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriteriaRequest): MutateAdGroupCriteriaRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupCriteriaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriteriaRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupCriteriaRequest, reader: jspb.BinaryReader): MutateAdGroupCriteriaRequest;
}

export namespace MutateAdGroupCriteriaRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupCriterionOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupCriterionOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  clearExemptPolicyViolationKeysList(): void;
  getExemptPolicyViolationKeysList(): Array<google_ads_googleads_v2_common_policy_pb.PolicyViolationKey>;
  setExemptPolicyViolationKeysList(value: Array<google_ads_googleads_v2_common_policy_pb.PolicyViolationKey>): void;
  addExemptPolicyViolationKeys(value?: google_ads_googleads_v2_common_policy_pb.PolicyViolationKey, index?: number): google_ads_googleads_v2_common_policy_pb.PolicyViolationKey;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupCriterionOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionOperation): AdGroupCriterionOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupCriterionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionOperation;
  static deserializeBinaryFromReader(message: AdGroupCriterionOperation, reader: jspb.BinaryReader): AdGroupCriterionOperation;
}

export namespace AdGroupCriterionOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    exemptPolicyViolationKeysList: Array<google_ads_googleads_v2_common_policy_pb.PolicyViolationKey.AsObject>,
    create?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    update?: google_ads_googleads_v2_resources_ad_group_criterion_pb.AdGroupCriterion.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupCriteriaResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateAdGroupCriterionResult>;
  setResultsList(value: Array<MutateAdGroupCriterionResult>): void;
  addResults(value?: MutateAdGroupCriterionResult, index?: number): MutateAdGroupCriterionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriteriaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriteriaResponse): MutateAdGroupCriteriaResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupCriteriaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriteriaResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupCriteriaResponse, reader: jspb.BinaryReader): MutateAdGroupCriteriaResponse;
}

export namespace MutateAdGroupCriteriaResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupCriterionResult.AsObject>,
  }
}

export class MutateAdGroupCriterionResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupCriterionResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupCriterionResult): MutateAdGroupCriterionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupCriterionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupCriterionResult;
  static deserializeBinaryFromReader(message: MutateAdGroupCriterionResult, reader: jspb.BinaryReader): MutateAdGroupCriterionResult;
}

export namespace MutateAdGroupCriterionResult {
  export type AsObject = {
    resourceName: string,
  }
}

