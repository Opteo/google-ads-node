// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_parameter_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_ad_parameter_pb from "../../../../../google/ads/googleads/v2/resources/ad_parameter_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAdParameterRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdParameterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdParameterRequest): GetAdParameterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdParameterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdParameterRequest;
  static deserializeBinaryFromReader(message: GetAdParameterRequest, reader: jspb.BinaryReader): GetAdParameterRequest;
}

export namespace GetAdParameterRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdParametersRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<AdParameterOperation>;
  setOperationsList(value: Array<AdParameterOperation>): void;
  addOperations(value?: AdParameterOperation, index?: number): AdParameterOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdParametersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdParametersRequest): MutateAdParametersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdParametersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdParametersRequest;
  static deserializeBinaryFromReader(message: MutateAdParametersRequest, reader: jspb.BinaryReader): MutateAdParametersRequest;
}

export namespace MutateAdParametersRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdParameterOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdParameterOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdParameterOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdParameterOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdParameterOperation): AdParameterOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdParameterOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdParameterOperation;
  static deserializeBinaryFromReader(message: AdParameterOperation, reader: jspb.BinaryReader): AdParameterOperation;
}

export namespace AdParameterOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter.AsObject,
    update?: google_ads_googleads_v2_resources_ad_parameter_pb.AdParameter.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
    REMOVE = 3,
  }
}

export class MutateAdParametersResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateAdParameterResult>;
  setResultsList(value: Array<MutateAdParameterResult>): void;
  addResults(value?: MutateAdParameterResult, index?: number): MutateAdParameterResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdParametersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdParametersResponse): MutateAdParametersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdParametersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdParametersResponse;
  static deserializeBinaryFromReader(message: MutateAdParametersResponse, reader: jspb.BinaryReader): MutateAdParametersResponse;
}

export namespace MutateAdParametersResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdParameterResult.AsObject>,
  }
}

export class MutateAdParameterResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdParameterResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdParameterResult): MutateAdParameterResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdParameterResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdParameterResult;
  static deserializeBinaryFromReader(message: MutateAdParameterResult, reader: jspb.BinaryReader): MutateAdParameterResult;
}

export namespace MutateAdParameterResult {
  export type AsObject = {
    resourceName: string,
  }
}

