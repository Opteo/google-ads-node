// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/custom_interest_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_custom_interest_pb from "../../../../../google/ads/googleads/v2/resources/custom_interest_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetCustomInterestRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCustomInterestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCustomInterestRequest): GetCustomInterestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCustomInterestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCustomInterestRequest;
  static deserializeBinaryFromReader(message: GetCustomInterestRequest, reader: jspb.BinaryReader): GetCustomInterestRequest;
}

export namespace GetCustomInterestRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCustomInterestsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CustomInterestOperation>;
  setOperationsList(value: Array<CustomInterestOperation>): void;
  addOperations(value?: CustomInterestOperation, index?: number): CustomInterestOperation;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomInterestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomInterestsRequest): MutateCustomInterestsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomInterestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomInterestsRequest;
  static deserializeBinaryFromReader(message: MutateCustomInterestsRequest, reader: jspb.BinaryReader): MutateCustomInterestsRequest;
}

export namespace MutateCustomInterestsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CustomInterestOperation.AsObject>,
    validateOnly: boolean,
  }
}

export class CustomInterestOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest | undefined;
  setCreate(value?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest | undefined;
  setUpdate(value?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest): void;

  getOperationCase(): CustomInterestOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterestOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterestOperation): CustomInterestOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomInterestOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterestOperation;
  static deserializeBinaryFromReader(message: CustomInterestOperation, reader: jspb.BinaryReader): CustomInterestOperation;
}

export namespace CustomInterestOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    create?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest.AsObject,
    update?: google_ads_googleads_v2_resources_custom_interest_pb.CustomInterest.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    UPDATE = 2,
  }
}

export class MutateCustomInterestsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<MutateCustomInterestResult>;
  setResultsList(value: Array<MutateCustomInterestResult>): void;
  addResults(value?: MutateCustomInterestResult, index?: number): MutateCustomInterestResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomInterestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomInterestsResponse): MutateCustomInterestsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomInterestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomInterestsResponse;
  static deserializeBinaryFromReader(message: MutateCustomInterestsResponse, reader: jspb.BinaryReader): MutateCustomInterestsResponse;
}

export namespace MutateCustomInterestsResponse {
  export type AsObject = {
    resultsList: Array<MutateCustomInterestResult.AsObject>,
  }
}

export class MutateCustomInterestResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCustomInterestResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCustomInterestResult): MutateCustomInterestResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCustomInterestResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCustomInterestResult;
  static deserializeBinaryFromReader(message: MutateCustomInterestResult, reader: jspb.BinaryReader): MutateCustomInterestResult;
}

export namespace MutateCustomInterestResult {
  export type AsObject = {
    resourceName: string,
  }
}

