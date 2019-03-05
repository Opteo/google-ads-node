// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/label_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_label_pb from "../../../../../google/ads/googleads/v1/resources/label_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetLabelRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelRequest): GetLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelRequest;
  static deserializeBinaryFromReader(message: GetLabelRequest, reader: jspb.BinaryReader): GetLabelRequest;
}

export namespace GetLabelRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateLabelsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<LabelOperation>;
  setOperationsList(value: Array<LabelOperation>): void;
  addOperations(value?: LabelOperation, index?: number): LabelOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateLabelsRequest): MutateLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateLabelsRequest;
  static deserializeBinaryFromReader(message: MutateLabelsRequest, reader: jspb.BinaryReader): MutateLabelsRequest;
}

export namespace MutateLabelsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<LabelOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class LabelOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_label_pb.Label | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_label_pb.Label): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_label_pb.Label | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_label_pb.Label): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): LabelOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelOperation.AsObject;
  static toObject(includeInstance: boolean, msg: LabelOperation): LabelOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelOperation;
  static deserializeBinaryFromReader(message: LabelOperation, reader: jspb.BinaryReader): LabelOperation;
}

export namespace LabelOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_label_pb.Label.AsObject,
    update?: google_ads_googleads_v1_resources_label_pb.Label.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateLabelsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateLabelResult>;
  setResultsList(value: Array<MutateLabelResult>): void;
  addResults(value?: MutateLabelResult, index?: number): MutateLabelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateLabelsResponse): MutateLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateLabelsResponse;
  static deserializeBinaryFromReader(message: MutateLabelsResponse, reader: jspb.BinaryReader): MutateLabelsResponse;
}

export namespace MutateLabelsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateLabelResult.AsObject>,
  }
}

export class MutateLabelResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateLabelResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateLabelResult): MutateLabelResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateLabelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateLabelResult;
  static deserializeBinaryFromReader(message: MutateLabelResult, reader: jspb.BinaryReader): MutateLabelResult;
}

export namespace MutateLabelResult {
  export type AsObject = {
    resourceName: string,
  }
}

