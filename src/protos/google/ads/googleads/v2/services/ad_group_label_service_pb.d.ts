// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_label_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_ad_group_label_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_label_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAdGroupLabelRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupLabelRequest): GetAdGroupLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdGroupLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupLabelRequest;
  static deserializeBinaryFromReader(message: GetAdGroupLabelRequest, reader: jspb.BinaryReader): GetAdGroupLabelRequest;
}

export namespace GetAdGroupLabelRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateAdGroupLabelsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<AdGroupLabelOperation>;
  setOperationsList(value: Array<AdGroupLabelOperation>): void;
  addOperations(value?: AdGroupLabelOperation, index?: number): AdGroupLabelOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupLabelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupLabelsRequest): MutateAdGroupLabelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupLabelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupLabelsRequest;
  static deserializeBinaryFromReader(message: MutateAdGroupLabelsRequest, reader: jspb.BinaryReader): MutateAdGroupLabelsRequest;
}

export namespace MutateAdGroupLabelsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<AdGroupLabelOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class AdGroupLabelOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): AdGroupLabelOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupLabelOperation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupLabelOperation): AdGroupLabelOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupLabelOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupLabelOperation;
  static deserializeBinaryFromReader(message: AdGroupLabelOperation, reader: jspb.BinaryReader): AdGroupLabelOperation;
}

export namespace AdGroupLabelOperation {
  export type AsObject = {
    create?: google_ads_googleads_v2_resources_ad_group_label_pb.AdGroupLabel.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class MutateAdGroupLabelsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateAdGroupLabelResult>;
  setResultsList(value: Array<MutateAdGroupLabelResult>): void;
  addResults(value?: MutateAdGroupLabelResult, index?: number): MutateAdGroupLabelResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupLabelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupLabelsResponse): MutateAdGroupLabelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupLabelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupLabelsResponse;
  static deserializeBinaryFromReader(message: MutateAdGroupLabelsResponse, reader: jspb.BinaryReader): MutateAdGroupLabelsResponse;
}

export namespace MutateAdGroupLabelsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateAdGroupLabelResult.AsObject>,
  }
}

export class MutateAdGroupLabelResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateAdGroupLabelResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateAdGroupLabelResult): MutateAdGroupLabelResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateAdGroupLabelResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateAdGroupLabelResult;
  static deserializeBinaryFromReader(message: MutateAdGroupLabelResult, reader: jspb.BinaryReader): MutateAdGroupLabelResult;
}

export namespace MutateAdGroupLabelResult {
  export type AsObject = {
    resourceName: string,
  }
}

