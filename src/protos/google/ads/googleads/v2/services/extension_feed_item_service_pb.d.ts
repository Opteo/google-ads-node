// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/extension_feed_item_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_extension_feed_item_pb from "../../../../../google/ads/googleads/v2/resources/extension_feed_item_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetExtensionFeedItemRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExtensionFeedItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExtensionFeedItemRequest): GetExtensionFeedItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExtensionFeedItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExtensionFeedItemRequest;
  static deserializeBinaryFromReader(message: GetExtensionFeedItemRequest, reader: jspb.BinaryReader): GetExtensionFeedItemRequest;
}

export namespace GetExtensionFeedItemRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateExtensionFeedItemsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<ExtensionFeedItemOperation>;
  setOperationsList(value: Array<ExtensionFeedItemOperation>): void;
  addOperations(value?: ExtensionFeedItemOperation, index?: number): ExtensionFeedItemOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateExtensionFeedItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateExtensionFeedItemsRequest): MutateExtensionFeedItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateExtensionFeedItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateExtensionFeedItemsRequest;
  static deserializeBinaryFromReader(message: MutateExtensionFeedItemsRequest, reader: jspb.BinaryReader): MutateExtensionFeedItemsRequest;
}

export namespace MutateExtensionFeedItemsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<ExtensionFeedItemOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class ExtensionFeedItemOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): ExtensionFeedItemOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionFeedItemOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionFeedItemOperation): ExtensionFeedItemOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionFeedItemOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionFeedItemOperation;
  static deserializeBinaryFromReader(message: ExtensionFeedItemOperation, reader: jspb.BinaryReader): ExtensionFeedItemOperation;
}

export namespace ExtensionFeedItemOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem.AsObject,
    update?: google_ads_googleads_v2_resources_extension_feed_item_pb.ExtensionFeedItem.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateExtensionFeedItemsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateExtensionFeedItemResult>;
  setResultsList(value: Array<MutateExtensionFeedItemResult>): void;
  addResults(value?: MutateExtensionFeedItemResult, index?: number): MutateExtensionFeedItemResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateExtensionFeedItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateExtensionFeedItemsResponse): MutateExtensionFeedItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateExtensionFeedItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateExtensionFeedItemsResponse;
  static deserializeBinaryFromReader(message: MutateExtensionFeedItemsResponse, reader: jspb.BinaryReader): MutateExtensionFeedItemsResponse;
}

export namespace MutateExtensionFeedItemsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateExtensionFeedItemResult.AsObject>,
  }
}

export class MutateExtensionFeedItemResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateExtensionFeedItemResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateExtensionFeedItemResult): MutateExtensionFeedItemResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateExtensionFeedItemResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateExtensionFeedItemResult;
  static deserializeBinaryFromReader(message: MutateExtensionFeedItemResult, reader: jspb.BinaryReader): MutateExtensionFeedItemResult;
}

export namespace MutateExtensionFeedItemResult {
  export type AsObject = {
    resourceName: string,
  }
}

