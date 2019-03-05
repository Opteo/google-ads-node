// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/feed_mapping_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_feed_mapping_pb from "../../../../../google/ads/googleads/v1/resources/feed_mapping_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetFeedMappingRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedMappingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedMappingRequest): GetFeedMappingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFeedMappingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedMappingRequest;
  static deserializeBinaryFromReader(message: GetFeedMappingRequest, reader: jspb.BinaryReader): GetFeedMappingRequest;
}

export namespace GetFeedMappingRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateFeedMappingsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<FeedMappingOperation>;
  setOperationsList(value: Array<FeedMappingOperation>): void;
  addOperations(value?: FeedMappingOperation, index?: number): FeedMappingOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedMappingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedMappingsRequest): MutateFeedMappingsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedMappingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedMappingsRequest;
  static deserializeBinaryFromReader(message: MutateFeedMappingsRequest, reader: jspb.BinaryReader): MutateFeedMappingsRequest;
}

export namespace MutateFeedMappingsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<FeedMappingOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class FeedMappingOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_feed_mapping_pb.FeedMapping | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_feed_mapping_pb.FeedMapping): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): FeedMappingOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedMappingOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FeedMappingOperation): FeedMappingOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedMappingOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedMappingOperation;
  static deserializeBinaryFromReader(message: FeedMappingOperation, reader: jspb.BinaryReader): FeedMappingOperation;
}

export namespace FeedMappingOperation {
  export type AsObject = {
    create?: google_ads_googleads_v1_resources_feed_mapping_pb.FeedMapping.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 3,
  }
}

export class MutateFeedMappingsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateFeedMappingResult>;
  setResultsList(value: Array<MutateFeedMappingResult>): void;
  addResults(value?: MutateFeedMappingResult, index?: number): MutateFeedMappingResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedMappingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedMappingsResponse): MutateFeedMappingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedMappingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedMappingsResponse;
  static deserializeBinaryFromReader(message: MutateFeedMappingsResponse, reader: jspb.BinaryReader): MutateFeedMappingsResponse;
}

export namespace MutateFeedMappingsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateFeedMappingResult.AsObject>,
  }
}

export class MutateFeedMappingResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedMappingResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedMappingResult): MutateFeedMappingResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedMappingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedMappingResult;
  static deserializeBinaryFromReader(message: MutateFeedMappingResult, reader: jspb.BinaryReader): MutateFeedMappingResult;
}

export namespace MutateFeedMappingResult {
  export type AsObject = {
    resourceName: string,
  }
}

