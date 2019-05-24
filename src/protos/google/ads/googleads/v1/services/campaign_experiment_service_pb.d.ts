// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_experiment_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_campaign_experiment_pb from "../../../../../google/ads/googleads/v1/resources/campaign_experiment_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class GetCampaignExperimentRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignExperimentRequest): GetCampaignExperimentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignExperimentRequest;
  static deserializeBinaryFromReader(message: GetCampaignExperimentRequest, reader: jspb.BinaryReader): GetCampaignExperimentRequest;
}

export namespace GetCampaignExperimentRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class MutateCampaignExperimentsRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<CampaignExperimentOperation>;
  setOperationsList(value: Array<CampaignExperimentOperation>): void;
  addOperations(value?: CampaignExperimentOperation, index?: number): CampaignExperimentOperation;

  getPartialFailure(): boolean;
  setPartialFailure(value: boolean): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignExperimentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignExperimentsRequest): MutateCampaignExperimentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignExperimentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignExperimentsRequest;
  static deserializeBinaryFromReader(message: MutateCampaignExperimentsRequest, reader: jspb.BinaryReader): MutateCampaignExperimentsRequest;
}

export namespace MutateCampaignExperimentsRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<CampaignExperimentOperation.AsObject>,
    partialFailure: boolean,
    validateOnly: boolean,
  }
}

export class CampaignExperimentOperation extends jspb.Message {
  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment | undefined;
  setUpdate(value?: google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): CampaignExperimentOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExperimentOperation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExperimentOperation): CampaignExperimentOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignExperimentOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExperimentOperation;
  static deserializeBinaryFromReader(message: CampaignExperimentOperation, reader: jspb.BinaryReader): CampaignExperimentOperation;
}

export namespace CampaignExperimentOperation {
  export type AsObject = {
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
    update?: google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    UPDATE = 1,
    REMOVE = 2,
  }
}

export class MutateCampaignExperimentsResponse extends jspb.Message {
  hasPartialFailureError(): boolean;
  clearPartialFailureError(): void;
  getPartialFailureError(): google_rpc_status_pb.Status | undefined;
  setPartialFailureError(value?: google_rpc_status_pb.Status): void;

  clearResultsList(): void;
  getResultsList(): Array<MutateCampaignExperimentResult>;
  setResultsList(value: Array<MutateCampaignExperimentResult>): void;
  addResults(value?: MutateCampaignExperimentResult, index?: number): MutateCampaignExperimentResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignExperimentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignExperimentsResponse): MutateCampaignExperimentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignExperimentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignExperimentsResponse;
  static deserializeBinaryFromReader(message: MutateCampaignExperimentsResponse, reader: jspb.BinaryReader): MutateCampaignExperimentsResponse;
}

export namespace MutateCampaignExperimentsResponse {
  export type AsObject = {
    partialFailureError?: google_rpc_status_pb.Status.AsObject,
    resultsList: Array<MutateCampaignExperimentResult.AsObject>,
  }
}

export class MutateCampaignExperimentResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateCampaignExperimentResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateCampaignExperimentResult): MutateCampaignExperimentResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateCampaignExperimentResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateCampaignExperimentResult;
  static deserializeBinaryFromReader(message: MutateCampaignExperimentResult, reader: jspb.BinaryReader): MutateCampaignExperimentResult;
}

export namespace MutateCampaignExperimentResult {
  export type AsObject = {
    resourceName: string,
  }
}

export class CreateCampaignExperimentRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasCampaignExperiment(): boolean;
  clearCampaignExperiment(): void;
  getCampaignExperiment(): google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment | undefined;
  setCampaignExperiment(value?: google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment): void;

  getValidateOnly(): boolean;
  setValidateOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCampaignExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCampaignExperimentRequest): CreateCampaignExperimentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCampaignExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCampaignExperimentRequest;
  static deserializeBinaryFromReader(message: CreateCampaignExperimentRequest, reader: jspb.BinaryReader): CreateCampaignExperimentRequest;
}

export namespace CreateCampaignExperimentRequest {
  export type AsObject = {
    customerId: string,
    campaignExperiment?: google_ads_googleads_v1_resources_campaign_experiment_pb.CampaignExperiment.AsObject,
    validateOnly: boolean,
  }
}

export class CreateCampaignExperimentMetadata extends jspb.Message {
  getCampaignExperiment(): string;
  setCampaignExperiment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCampaignExperimentMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCampaignExperimentMetadata): CreateCampaignExperimentMetadata.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCampaignExperimentMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCampaignExperimentMetadata;
  static deserializeBinaryFromReader(message: CreateCampaignExperimentMetadata, reader: jspb.BinaryReader): CreateCampaignExperimentMetadata;
}

export namespace CreateCampaignExperimentMetadata {
  export type AsObject = {
    campaignExperiment: string,
  }
}

export class GraduateCampaignExperimentRequest extends jspb.Message {
  getCampaignExperiment(): string;
  setCampaignExperiment(value: string): void;

  getCampaignBudget(): string;
  setCampaignBudget(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraduateCampaignExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GraduateCampaignExperimentRequest): GraduateCampaignExperimentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraduateCampaignExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraduateCampaignExperimentRequest;
  static deserializeBinaryFromReader(message: GraduateCampaignExperimentRequest, reader: jspb.BinaryReader): GraduateCampaignExperimentRequest;
}

export namespace GraduateCampaignExperimentRequest {
  export type AsObject = {
    campaignExperiment: string,
    campaignBudget: string,
  }
}

export class GraduateCampaignExperimentResponse extends jspb.Message {
  getGraduatedCampaign(): string;
  setGraduatedCampaign(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraduateCampaignExperimentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GraduateCampaignExperimentResponse): GraduateCampaignExperimentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraduateCampaignExperimentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraduateCampaignExperimentResponse;
  static deserializeBinaryFromReader(message: GraduateCampaignExperimentResponse, reader: jspb.BinaryReader): GraduateCampaignExperimentResponse;
}

export namespace GraduateCampaignExperimentResponse {
  export type AsObject = {
    graduatedCampaign: string,
  }
}

export class PromoteCampaignExperimentRequest extends jspb.Message {
  getCampaignExperiment(): string;
  setCampaignExperiment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteCampaignExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteCampaignExperimentRequest): PromoteCampaignExperimentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromoteCampaignExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteCampaignExperimentRequest;
  static deserializeBinaryFromReader(message: PromoteCampaignExperimentRequest, reader: jspb.BinaryReader): PromoteCampaignExperimentRequest;
}

export namespace PromoteCampaignExperimentRequest {
  export type AsObject = {
    campaignExperiment: string,
  }
}

export class EndCampaignExperimentRequest extends jspb.Message {
  getCampaignExperiment(): string;
  setCampaignExperiment(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndCampaignExperimentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EndCampaignExperimentRequest): EndCampaignExperimentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndCampaignExperimentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndCampaignExperimentRequest;
  static deserializeBinaryFromReader(message: EndCampaignExperimentRequest, reader: jspb.BinaryReader): EndCampaignExperimentRequest;
}

export namespace EndCampaignExperimentRequest {
  export type AsObject = {
    campaignExperiment: string,
  }
}

export class ListCampaignExperimentAsyncErrorsRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignExperimentAsyncErrorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignExperimentAsyncErrorsRequest): ListCampaignExperimentAsyncErrorsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignExperimentAsyncErrorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignExperimentAsyncErrorsRequest;
  static deserializeBinaryFromReader(message: ListCampaignExperimentAsyncErrorsRequest, reader: jspb.BinaryReader): ListCampaignExperimentAsyncErrorsRequest;
}

export namespace ListCampaignExperimentAsyncErrorsRequest {
  export type AsObject = {
    resourceName: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListCampaignExperimentAsyncErrorsResponse extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<google_rpc_status_pb.Status>;
  setErrorsList(value: Array<google_rpc_status_pb.Status>): void;
  addErrors(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCampaignExperimentAsyncErrorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCampaignExperimentAsyncErrorsResponse): ListCampaignExperimentAsyncErrorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCampaignExperimentAsyncErrorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCampaignExperimentAsyncErrorsResponse;
  static deserializeBinaryFromReader(message: ListCampaignExperimentAsyncErrorsResponse, reader: jspb.BinaryReader): ListCampaignExperimentAsyncErrorsResponse;
}

export namespace ListCampaignExperimentAsyncErrorsResponse {
  export type AsObject = {
    errorsList: Array<google_rpc_status_pb.Status.AsObject>,
    nextPageToken: string,
  }
}

