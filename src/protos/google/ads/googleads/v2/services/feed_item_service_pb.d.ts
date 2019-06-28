// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/feed_item_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_feed_item_pb from "../../../../../google/ads/googleads/v2/resources/feed_item_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetFeedItemRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedItemRequest): GetFeedItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFeedItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedItemRequest;
  static deserializeBinaryFromReader(message: GetFeedItemRequest, reader: jspb.BinaryReader): GetFeedItemRequest;
}

export namespace GetFeedItemRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateFeedItemsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<FeedItemOperation>;
  setOperationsList(value: Array<FeedItemOperation>): void;
  addOperations(value?: FeedItemOperation, index?: number): FeedItemOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedItemsRequest): MutateFeedItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedItemsRequest;
  static deserializeBinaryFromReader(message: MutateFeedItemsRequest, reader: jspb.BinaryReader): MutateFeedItemsRequest;
}

export namespace MutateFeedItemsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<FeedItemOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class FeedItemOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_feed_item_pb.FeedItem | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_feed_item_pb.FeedItem | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): FeedItemOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemOperation): FeedItemOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemOperation;
  static deserializeBinaryFromReader(message: FeedItemOperation, reader: jspb.BinaryReader): FeedItemOperation;
}

export namespace FeedItemOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem.AsObject,
    update?: google_ads_googleads_v2_resources_feed_item_pb.FeedItem.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateFeedItemsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateFeedItemResult>;
  setResultsList(value: Array<MutateFeedItemResult>): void;
  addResults(value?: MutateFeedItemResult, index?: number): MutateFeedItemResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedItemsResponse): MutateFeedItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedItemsResponse;
  static deserializeBinaryFromReader(message: MutateFeedItemsResponse, reader: jspb.BinaryReader): MutateFeedItemsResponse;
}

export namespace MutateFeedItemsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateFeedItemResult.AsObject>,
  }
}

export class MutateFeedItemResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedItemResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedItemResult): MutateFeedItemResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedItemResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedItemResult;
  static deserializeBinaryFromReader(message: MutateFeedItemResult, reader: jspb.BinaryReader): MutateFeedItemResult;
}

export namespace MutateFeedItemResult {
  export type AsObject = {
    resourceName: string,
  }
}

