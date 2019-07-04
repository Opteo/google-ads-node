// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/conversion_action_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_conversion_action_pb from "../../../../../google/ads/googleads/v2/resources/conversion_action_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetConversionActionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversionActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversionActionRequest): GetConversionActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConversionActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversionActionRequest;
  static deserializeBinaryFromReader(message: GetConversionActionRequest, reader: jspb.BinaryReader): GetConversionActionRequest;
}

export namespace GetConversionActionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateConversionActionsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<ConversionActionOperation>;
  setOperationsList(value: Array<ConversionActionOperation>): void;
  addOperations(value?: ConversionActionOperation, index?: number): ConversionActionOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateConversionActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateConversionActionsRequest): MutateConversionActionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateConversionActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateConversionActionsRequest;
  static deserializeBinaryFromReader(message: MutateConversionActionsRequest, reader: jspb.BinaryReader): MutateConversionActionsRequest;
}

export namespace MutateConversionActionsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<ConversionActionOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class ConversionActionOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): ConversionActionOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionActionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionActionOperation): ConversionActionOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionActionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionActionOperation;
  static deserializeBinaryFromReader(message: ConversionActionOperation, reader: jspb.BinaryReader): ConversionActionOperation;
}

export namespace ConversionActionOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction.AsObject,
    update?: google_ads_googleads_v2_resources_conversion_action_pb.ConversionAction.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateConversionActionsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateConversionActionResult>;
  setResultsList(value: Array<MutateConversionActionResult>): void;
  addResults(value?: MutateConversionActionResult, index?: number): MutateConversionActionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateConversionActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateConversionActionsResponse): MutateConversionActionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateConversionActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateConversionActionsResponse;
  static deserializeBinaryFromReader(message: MutateConversionActionsResponse, reader: jspb.BinaryReader): MutateConversionActionsResponse;
}

export namespace MutateConversionActionsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateConversionActionResult.AsObject>,
  }
}

export class MutateConversionActionResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateConversionActionResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateConversionActionResult): MutateConversionActionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateConversionActionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateConversionActionResult;
  static deserializeBinaryFromReader(message: MutateConversionActionResult, reader: jspb.BinaryReader): MutateConversionActionResult;
}

export namespace MutateConversionActionResult {
  export type AsObject = {
    resourceName: string,
  }
}

