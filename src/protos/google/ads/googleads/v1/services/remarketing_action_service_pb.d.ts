// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/remarketing_action_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_remarketing_action_pb from "../../../../../google/ads/googleads/v1/resources/remarketing_action_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetRemarketingActionRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRemarketingActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRemarketingActionRequest): GetRemarketingActionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRemarketingActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRemarketingActionRequest;
  static deserializeBinaryFromReader(message: GetRemarketingActionRequest, reader: jspb.BinaryReader): GetRemarketingActionRequest;
}

export namespace GetRemarketingActionRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateRemarketingActionsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<RemarketingActionOperation>;
  setOperationsList(value: Array<RemarketingActionOperation>): void;
  addOperations(value?: RemarketingActionOperation, index?: number): RemarketingActionOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRemarketingActionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRemarketingActionsRequest): MutateRemarketingActionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateRemarketingActionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRemarketingActionsRequest;
  static deserializeBinaryFromReader(message: MutateRemarketingActionsRequest, reader: jspb.BinaryReader): MutateRemarketingActionsRequest;
}

export namespace MutateRemarketingActionsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<RemarketingActionOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class RemarketingActionOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction | undefined;
  setCreate(value?: google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction): void;

  getOperationCase(): RemarketingActionOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemarketingActionOperation.AsObject;
  static toObject(includeInstance: boolean, msg: RemarketingActionOperation): RemarketingActionOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemarketingActionOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemarketingActionOperation;
  static deserializeBinaryFromReader(message: RemarketingActionOperation, reader: jspb.BinaryReader): RemarketingActionOperation;
}

export namespace RemarketingActionOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction.AsObject,
    update?: google_ads_googleads_v1_resources_remarketing_action_pb.RemarketingAction.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
  }
}

export class MutateRemarketingActionsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateRemarketingActionResult>;
  setResultsList(value: Array<MutateRemarketingActionResult>): void;
  addResults(value?: MutateRemarketingActionResult, index?: number): MutateRemarketingActionResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRemarketingActionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRemarketingActionsResponse): MutateRemarketingActionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateRemarketingActionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRemarketingActionsResponse;
  static deserializeBinaryFromReader(message: MutateRemarketingActionsResponse, reader: jspb.BinaryReader): MutateRemarketingActionsResponse;
}

export namespace MutateRemarketingActionsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateRemarketingActionResult.AsObject>,
  }
}

export class MutateRemarketingActionResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateRemarketingActionResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateRemarketingActionResult): MutateRemarketingActionResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateRemarketingActionResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateRemarketingActionResult;
  static deserializeBinaryFromReader(message: MutateRemarketingActionResult, reader: jspb.BinaryReader): MutateRemarketingActionResult;
}

export namespace MutateRemarketingActionResult {
  export type AsObject = {
    resourceName: string,
  }
}

