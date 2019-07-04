// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/mutate_job_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_mutate_job_pb from "../../../../../google/ads/googleads/v2/resources/mutate_job_pb";
import * as google_ads_googleads_v2_services_google_ads_service_pb from "../../../../../google/ads/googleads/v2/services/google_ads_service_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class CreateMutateJobRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMutateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMutateJobRequest): CreateMutateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMutateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMutateJobRequest;
  static deserializeBinaryFromReader(message: CreateMutateJobRequest, reader: jspb.BinaryReader): CreateMutateJobRequest;
}

export namespace CreateMutateJobRequest {
  export type AsObject = {
    customerId: string,
  }
}

export class CreateMutateJobResponse extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMutateJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMutateJobResponse): CreateMutateJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMutateJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMutateJobResponse;
  static deserializeBinaryFromReader(message: CreateMutateJobResponse, reader: jspb.BinaryReader): CreateMutateJobResponse;
}

export namespace CreateMutateJobResponse {
  export type AsObject = {
    resourceName: string,
  }
}

export class GetMutateJobRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMutateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMutateJobRequest): GetMutateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMutateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMutateJobRequest;
  static deserializeBinaryFromReader(message: GetMutateJobRequest, reader: jspb.BinaryReader): GetMutateJobRequest;
}

export namespace GetMutateJobRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class RunMutateJobRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunMutateJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunMutateJobRequest): RunMutateJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunMutateJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunMutateJobRequest;
  static deserializeBinaryFromReader(message: RunMutateJobRequest, reader: jspb.BinaryReader): RunMutateJobRequest;
}

export namespace RunMutateJobRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class AddMutateJobOperationsRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getSequenceToken(): string;
  setSequenceToken(value: string): void;

  clearMutateOperationsList(): void;
  getMutateOperationsList(): Array<google_ads_googleads_v2_services_google_ads_service_pb.MutateOperation>;
  setMutateOperationsList(value: Array<google_ads_googleads_v2_services_google_ads_service_pb.MutateOperation>): void;
  addMutateOperations(value?: google_ads_googleads_v2_services_google_ads_service_pb.MutateOperation, index?: number): google_ads_googleads_v2_services_google_ads_service_pb.MutateOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMutateJobOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddMutateJobOperationsRequest): AddMutateJobOperationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddMutateJobOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMutateJobOperationsRequest;
  static deserializeBinaryFromReader(message: AddMutateJobOperationsRequest, reader: jspb.BinaryReader): AddMutateJobOperationsRequest;
}

export namespace AddMutateJobOperationsRequest {
  export type AsObject = {
    resourceName: string,
    sequenceToken: string,
    mutateOperationsList: Array<google_ads_googleads_v2_services_google_ads_service_pb.MutateOperation.AsObject>,
  }
}

export class AddMutateJobOperationsResponse extends jspb.Message {
  getTotalOperations(): number;
  setTotalOperations(value: number): void;

  getNextSequenceToken(): string;
  setNextSequenceToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddMutateJobOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddMutateJobOperationsResponse): AddMutateJobOperationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddMutateJobOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddMutateJobOperationsResponse;
  static deserializeBinaryFromReader(message: AddMutateJobOperationsResponse, reader: jspb.BinaryReader): AddMutateJobOperationsResponse;
}

export namespace AddMutateJobOperationsResponse {
  export type AsObject = {
    totalOperations: number,
    nextSequenceToken: string,
  }
}

export class ListMutateJobResultsRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMutateJobResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMutateJobResultsRequest): ListMutateJobResultsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMutateJobResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMutateJobResultsRequest;
  static deserializeBinaryFromReader(message: ListMutateJobResultsRequest, reader: jspb.BinaryReader): ListMutateJobResultsRequest;
}

export namespace ListMutateJobResultsRequest {
  export type AsObject = {
    resourceName: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListMutateJobResultsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<MutateJobResult>;
  setResultsList(value: Array<MutateJobResult>): void;
  addResults(value?: MutateJobResult, index?: number): MutateJobResult;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMutateJobResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMutateJobResultsResponse): ListMutateJobResultsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMutateJobResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMutateJobResultsResponse;
  static deserializeBinaryFromReader(message: ListMutateJobResultsResponse, reader: jspb.BinaryReader): ListMutateJobResultsResponse;
}

export namespace ListMutateJobResultsResponse {
  export type AsObject = {
    resultsList: Array<MutateJobResult.AsObject>,
    nextPageToken: string,
  }
}

export class MutateJobResult extends jspb.Message {
  getOperationIndex(): number;
  setOperationIndex(value: number): void;

  hasMutateOperationResponse(): boolean;
  clearMutateOperationResponse(): void;
  getMutateOperationResponse(): google_ads_googleads_v2_services_google_ads_service_pb.MutateOperationResponse | undefined;
  setMutateOperationResponse(value?: google_ads_googleads_v2_services_google_ads_service_pb.MutateOperationResponse): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateJobResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateJobResult): MutateJobResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateJobResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateJobResult;
  static deserializeBinaryFromReader(message: MutateJobResult, reader: jspb.BinaryReader): MutateJobResult;
}

export namespace MutateJobResult {
  export type AsObject = {
    operationIndex: number,
    mutateOperationResponse?: google_ads_googleads_v2_services_google_ads_service_pb.MutateOperationResponse.AsObject,
    status?: google_rpc_status_pb.Status.AsObject,
  }
}

