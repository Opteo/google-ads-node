// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_feed_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_ad_group_feed_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_feed_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetAdGroupFeedRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupFeedRequest): GetAdGroupFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdGroupFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupFeedRequest;
  static deserializeBinaryFromReader(message: GetAdGroupFeedRequest, reader: jspb.BinaryReader): GetAdGroupFeedRequest;
}

export namespace GetAdGroupFeedRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupFeedsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<AdGroupFeedOperation>;
  setOperationsList(value: Array<AdGroupFeedOperation>): void;
  addOperations(value?: AdGroupFeedOperation, index?: number): AdGroupFeedOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupFeedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupFeedsRequest): MutateAdGroupFeedsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupFeedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupFeedsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupFeedsRequest, reader: jspb.BinaryReader): MutateAdGroupFeedsRequest;
}

export namespace MutateAdGroupFeedsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupFeedOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupFeedOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupFeedOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupFeedOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupFeedOperation): AdGroupFeedOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupFeedOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupFeedOperation;
  static deserializeBinaryFromReader(message: AdGroupFeedOperation, reader: jspb.BinaryReader): AdGroupFeedOperation;
}

export namespace AdGroupFeedOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed.AsObject,
    update?: google_ads_googleads_v1_resources_ad_group_feed_pb.AdGroupFeed.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdGroupFeedsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateAdGroupFeedResult>;
  setResultsList(value: Array<MutateAdGroupFeedResult>): void;
  addResults(value?: MutateAdGroupFeedResult, index?: number): MutateAdGroupFeedResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupFeedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupFeedsResponse): MutateAdGroupFeedsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupFeedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupFeedsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupFeedsResponse, reader: jspb.BinaryReader): MutateAdGroupFeedsResponse;
}

export namespace MutateAdGroupFeedsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupFeedResult.AsObject>,
  }
}

export class MutateAdGroupFeedResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupFeedResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupFeedResult): MutateAdGroupFeedResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupFeedResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupFeedResult;
  static deserializeBinaryFromReader(message: MutateAdGroupFeedResult, reader: jspb.BinaryReader): MutateAdGroupFeedResult;
}

export namespace MutateAdGroupFeedResult {
  export type AsObject = {
    resourceName: string,
  }
}

