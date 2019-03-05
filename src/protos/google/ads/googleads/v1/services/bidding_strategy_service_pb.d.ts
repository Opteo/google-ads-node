// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/bidding_strategy_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_bidding_strategy_pb from "../../../../../google/ads/googleads/v1/resources/bidding_strategy_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetBiddingStrategyRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBiddingStrategyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBiddingStrategyRequest): GetBiddingStrategyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBiddingStrategyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBiddingStrategyRequest;
  static deserializeBinaryFromReader(message: GetBiddingStrategyRequest, reader: jspb.BinaryReader): GetBiddingStrategyRequest;
}

export namespace GetBiddingStrategyRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateBiddingStrategiesRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<BiddingStrategyOperation>;
  setOperationsList(value: Array<BiddingStrategyOperation>): void;
  addOperations(value?: BiddingStrategyOperation, index?: number): BiddingStrategyOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBiddingStrategiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBiddingStrategiesRequest): MutateBiddingStrategiesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBiddingStrategiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBiddingStrategiesRequest;
  static deserializeBinaryFromReader(message: MutateBiddingStrategiesRequest, reader: jspb.BinaryReader): MutateBiddingStrategiesRequest;
}

export namespace MutateBiddingStrategiesRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<BiddingStrategyOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class BiddingStrategyOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): BiddingStrategyOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingStrategyOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingStrategyOperation): BiddingStrategyOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiddingStrategyOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingStrategyOperation;
  static deserializeBinaryFromReader(message: BiddingStrategyOperation, reader: jspb.BinaryReader): BiddingStrategyOperation;
}

export namespace BiddingStrategyOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    update?: google_ads_googleads_v1_resources_bidding_strategy_pb.BiddingStrategy.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateBiddingStrategiesResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateBiddingStrategyResult>;
  setResultsList(value: Array<MutateBiddingStrategyResult>): void;
  addResults(value?: MutateBiddingStrategyResult, index?: number): MutateBiddingStrategyResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBiddingStrategiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBiddingStrategiesResponse): MutateBiddingStrategiesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBiddingStrategiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBiddingStrategiesResponse;
  static deserializeBinaryFromReader(message: MutateBiddingStrategiesResponse, reader: jspb.BinaryReader): MutateBiddingStrategiesResponse;
}

export namespace MutateBiddingStrategiesResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateBiddingStrategyResult.AsObject>,
  }
}

export class MutateBiddingStrategyResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBiddingStrategyResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBiddingStrategyResult): MutateBiddingStrategyResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBiddingStrategyResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBiddingStrategyResult;
  static deserializeBinaryFromReader(message: MutateBiddingStrategyResult, reader: jspb.BinaryReader): MutateBiddingStrategyResult;
}

export namespace MutateBiddingStrategyResult {
  export type AsObject = {
    resourceName: string,
  }
}

