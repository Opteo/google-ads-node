// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/batch_job_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_resources_batch_job_pb from "../../../../../google/ads/googleads/v4/resources/batch_job_pb";
import * as google_ads_googleads_v4_services_google_ads_service_pb from "../../../../../google/ads/googleads/v4/services/google_ads_service_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_longrunning_operations_pb from "../../../../../google/longrunning/operations_pb";
import * as google_rpc_status_pb from "../../../../../google/rpc/status_pb";

export class MutateBatchJobRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  hasOperation(): boolean;
  clearOperation(): void;
  getOperation(): BatchJobOperation | undefined;
  setOperation(value?: BatchJobOperation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBatchJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBatchJobRequest): MutateBatchJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBatchJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBatchJobRequest;
  static deserializeBinaryFromReader(message: MutateBatchJobRequest, reader: jspb.BinaryReader): MutateBatchJobRequest;
}

export namespace MutateBatchJobRequest {
  export type AsObject = {
    customerId: string,
    operation?: BatchJobOperation.AsObject,
  }
}

export class BatchJobOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v4_resources_batch_job_pb.BatchJob | undefined;
  setCreate(value?: google_ads_googleads_v4_resources_batch_job_pb.BatchJob): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): string;
  setRemove(value: string): void;

  getOperationCase(): BatchJobOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchJobOperation.AsObject;
  static toObject(includeInstance: boolean, msg: BatchJobOperation): BatchJobOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchJobOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchJobOperation;
  static deserializeBinaryFromReader(message: BatchJobOperation, reader: jspb.BinaryReader): BatchJobOperation;
}

export namespace BatchJobOperation {
  export type AsObject = {
    create?: google_ads_googleads_v4_resources_batch_job_pb.BatchJob.AsObject,
    remove: string,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 3,
  }
}

export class MutateBatchJobResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): MutateBatchJobResult | undefined;
  setResult(value?: MutateBatchJobResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBatchJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBatchJobResponse): MutateBatchJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBatchJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBatchJobResponse;
  static deserializeBinaryFromReader(message: MutateBatchJobResponse, reader: jspb.BinaryReader): MutateBatchJobResponse;
}

export namespace MutateBatchJobResponse {
  export type AsObject = {
    result?: MutateBatchJobResult.AsObject,
  }
}

export class MutateBatchJobResult extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateBatchJobResult.AsObject;
  static toObject(includeInstance: boolean, msg: MutateBatchJobResult): MutateBatchJobResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateBatchJobResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateBatchJobResult;
  static deserializeBinaryFromReader(message: MutateBatchJobResult, reader: jspb.BinaryReader): MutateBatchJobResult;
}

export namespace MutateBatchJobResult {
  export type AsObject = {
    resourceName: string,
  }
}

export class GetBatchJobRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBatchJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBatchJobRequest): GetBatchJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBatchJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBatchJobRequest;
  static deserializeBinaryFromReader(message: GetBatchJobRequest, reader: jspb.BinaryReader): GetBatchJobRequest;
}

export namespace GetBatchJobRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class RunBatchJobRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunBatchJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunBatchJobRequest): RunBatchJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RunBatchJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunBatchJobRequest;
  static deserializeBinaryFromReader(message: RunBatchJobRequest, reader: jspb.BinaryReader): RunBatchJobRequest;
}

export namespace RunBatchJobRequest {
  export type AsObject = {
    resourceName: string,
  }
}

export class AddBatchJobOperationsRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getSequenceToken(): string;
  setSequenceToken(value: string): void;

  clearMutateOperationsList(): void;
  getMutateOperationsList(): Array<google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation>;
  setMutateOperationsList(value: Array<google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation>): void;
  addMutateOperations(value?: google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation, index?: number): google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBatchJobOperationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddBatchJobOperationsRequest): AddBatchJobOperationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBatchJobOperationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBatchJobOperationsRequest;
  static deserializeBinaryFromReader(message: AddBatchJobOperationsRequest, reader: jspb.BinaryReader): AddBatchJobOperationsRequest;
}

export namespace AddBatchJobOperationsRequest {
  export type AsObject = {
    resourceName: string,
    sequenceToken: string,
    mutateOperationsList: Array<google_ads_googleads_v4_services_google_ads_service_pb.MutateOperation.AsObject>,
  }
}

export class AddBatchJobOperationsResponse extends jspb.Message {
  getTotalOperations(): number;
  setTotalOperations(value: number): void;

  getNextSequenceToken(): string;
  setNextSequenceToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddBatchJobOperationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddBatchJobOperationsResponse): AddBatchJobOperationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddBatchJobOperationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddBatchJobOperationsResponse;
  static deserializeBinaryFromReader(message: AddBatchJobOperationsResponse, reader: jspb.BinaryReader): AddBatchJobOperationsResponse;
}

export namespace AddBatchJobOperationsResponse {
  export type AsObject = {
    totalOperations: number,
    nextSequenceToken: string,
  }
}

export class ListBatchJobResultsRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBatchJobResultsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBatchJobResultsRequest): ListBatchJobResultsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBatchJobResultsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBatchJobResultsRequest;
  static deserializeBinaryFromReader(message: ListBatchJobResultsRequest, reader: jspb.BinaryReader): ListBatchJobResultsRequest;
}

export namespace ListBatchJobResultsRequest {
  export type AsObject = {
    resourceName: string,
    pageToken: string,
    pageSize: number,
  }
}

export class ListBatchJobResultsResponse extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<BatchJobResult>;
  setResultsList(value: Array<BatchJobResult>): void;
  addResults(value?: BatchJobResult, index?: number): BatchJobResult;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBatchJobResultsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBatchJobResultsResponse): ListBatchJobResultsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListBatchJobResultsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBatchJobResultsResponse;
  static deserializeBinaryFromReader(message: ListBatchJobResultsResponse, reader: jspb.BinaryReader): ListBatchJobResultsResponse;
}

export namespace ListBatchJobResultsResponse {
  export type AsObject = {
    resultsList: Array<BatchJobResult.AsObject>,
    nextPageToken: string,
  }
}

export class BatchJobResult extends jspb.Message {
  getOperationIndex(): number;
  setOperationIndex(value: number): void;

  hasMutateOperationResponse(): boolean;
  clearMutateOperationResponse(): void;
  getMutateOperationResponse(): google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse | undefined;
  setMutateOperationResponse(value?: google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchJobResult.AsObject;
  static toObject(includeInstance: boolean, msg: BatchJobResult): BatchJobResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchJobResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchJobResult;
  static deserializeBinaryFromReader(message: BatchJobResult, reader: jspb.BinaryReader): BatchJobResult;
}

export namespace BatchJobResult {
  export type AsObject = {
    operationIndex: number,
    mutateOperationResponse?: google_ads_googleads_v4_services_google_ads_service_pb.MutateOperationResponse.AsObject,
    status?: google_rpc_status_pb.Status.AsObject,
  }
}

