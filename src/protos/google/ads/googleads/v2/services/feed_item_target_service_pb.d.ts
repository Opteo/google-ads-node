// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/feed_item_target_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_feed_item_target_pb from "../../../../../google/ads/googleads/v2/resources/feed_item_target_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetFeedItemTargetRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedItemTargetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedItemTargetRequest): GetFeedItemTargetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFeedItemTargetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedItemTargetRequest;
  static deserializeBinaryFromReader(message: GetFeedItemTargetRequest, reader: jspb.BinaryReader): GetFeedItemTargetRequest;
}

export namespace GetFeedItemTargetRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateFeedItemTargetsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<FeedItemTargetOperation>;
  setOperationsList(value: Array<FeedItemTargetOperation>): void;
  addOperations(value?: FeedItemTargetOperation, index?: number): FeedItemTargetOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedItemTargetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedItemTargetsRequest): MutateFeedItemTargetsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedItemTargetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedItemTargetsRequest;
  static deserializeBinaryFromReader(message: MutateFeedItemTargetsRequest, reader: jspb.BinaryReader): MutateFeedItemTargetsRequest;
}

export namespace MutateFeedItemTargetsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<FeedItemTargetOperation.AsObject>,
  }
}

export class FeedItemTargetOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): FeedItemTargetOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedItemTargetOperation.AsObject;
  static toObject(includeInstance: boolean, msg: FeedItemTargetOperation): FeedItemTargetOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedItemTargetOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedItemTargetOperation;
  static deserializeBinaryFromReader(message: FeedItemTargetOperation, reader: jspb.BinaryReader): FeedItemTargetOperation;
}

export namespace FeedItemTargetOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_feed_item_target_pb.FeedItemTarget.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateFeedItemTargetsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<MutateFeedItemTargetResult>;
  setResultsList(value: Array<MutateFeedItemTargetResult>): void;
  addResults(value?: MutateFeedItemTargetResult, index?: number): MutateFeedItemTargetResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedItemTargetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedItemTargetsResponse): MutateFeedItemTargetsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedItemTargetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedItemTargetsResponse;
  static deserializeBinaryFromReader(message: MutateFeedItemTargetsResponse, reader: jspb.BinaryReader): MutateFeedItemTargetsResponse;
}

export namespace MutateFeedItemTargetsResponse {
  export type AsObject = {
    resultsList: Array<MutateFeedItemTargetResult.AsObject>,
  }
}

export class MutateFeedItemTargetResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateFeedItemTargetResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateFeedItemTargetResult): MutateFeedItemTargetResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateFeedItemTargetResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateFeedItemTargetResult;
  static deserializeBinaryFromReader(message: MutateFeedItemTargetResult, reader: jspb.BinaryReader): MutateFeedItemTargetResult;
}

export namespace MutateFeedItemTargetResult {
  export type AsObject = {
    resourceName: string,
  }
}

