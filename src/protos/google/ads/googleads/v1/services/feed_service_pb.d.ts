// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/feed_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_feed_pb from "../../../../../google/ads/googleads/v1/resources/feed_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetFeedRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedRequest): GetFeedRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFeedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedRequest;
  static deserializeBinaryFromReader(message: GetFeedRequest, reader: jspb.BinaryReader): GetFeedRequest;
}

export namespace GetFeedRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateFeedsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<FeedOperation>;
  setOperationsList(value: Array<FeedOperation>): void;
  addOperations(value?: FeedOperation, index?: number): FeedOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedsRequest): MutateFeedsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedsRequest;
  static deserializeBinaryFromReader(message: MutateFeedsRequest, reader: jspb.BinaryReader): MutateFeedsRequest;
}

export namespace MutateFeedsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<FeedOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class FeedOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_feed_pb.Feed | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_feed_pb.Feed): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_feed_pb.Feed | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_feed_pb.Feed): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): FeedOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FeedOperation): FeedOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedOperation;
  static deserializeBinaryFromReader(message: FeedOperation, reader: jspb.BinaryReader): FeedOperation;
}

export namespace FeedOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_feed_pb.Feed.AsObject,
    update?: google_ads_googleads_v1_resources_feed_pb.Feed.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateFeedsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateFeedResult>;
  setResultsList(value: Array<MutateFeedResult>): void;
  addResults(value?: MutateFeedResult, index?: number): MutateFeedResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedsResponse): MutateFeedsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedsResponse;
  static deserializeBinaryFromReader(message: MutateFeedsResponse, reader: jspb.BinaryReader): MutateFeedsResponse;
}

export namespace MutateFeedsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateFeedResult.AsObject>,
  }
}

export class MutateFeedResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedResult): MutateFeedResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedResult;
  static deserializeBinaryFromReader(message: MutateFeedResult, reader: jspb.BinaryReader): MutateFeedResult;
}

export namespace MutateFeedResult {
  export type AsObject = {
    resourceName: string,
  }
}

