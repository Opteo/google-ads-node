// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/batch_job.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_batch_job_status_pb from "../../../../../google/ads/googleads/v4/enums/batch_job_status_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BatchJob extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasNextAddSequenceToken(): boolean;
  clearNextAddSequenceToken(): void;
  getNextAddSequenceToken(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNextAddSequenceToken(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): BatchJob.BatchJobMetadata | undefined;
  setMetadata(value?: BatchJob.BatchJobMetadata): void;

  getStatus(): google_ads_googleads_v4_enums_batch_job_status_pb.BatchJobStatusEnum.BatchJobStatusMap[keyof google_ads_googleads_v4_enums_batch_job_status_pb.BatchJobStatusEnum.BatchJobStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_batch_job_status_pb.BatchJobStatusEnum.BatchJobStatusMap[keyof google_ads_googleads_v4_enums_batch_job_status_pb.BatchJobStatusEnum.BatchJobStatusMap]): void;

  hasLongRunningOperation(): boolean;
  clearLongRunningOperation(): void;
  getLongRunningOperation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongRunningOperation(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchJob.AsObject;
  static toObject(includeInstance: boolean, msg: BatchJob): BatchJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchJob;
  static deserializeBinaryFromReader(message: BatchJob, reader: jspb.BinaryReader): BatchJob;
}

export namespace BatchJob {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    nextAddSequenceToken?: google_protobuf_wrappers_pb.StringValue.AsObject,
    metadata?: BatchJob.BatchJobMetadata.AsObject,
    status: google_ads_googleads_v4_enums_batch_job_status_pb.BatchJobStatusEnum.BatchJobStatusMap[keyof google_ads_googleads_v4_enums_batch_job_status_pb.BatchJobStatusEnum.BatchJobStatusMap],
    longRunningOperation?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export class BatchJobMetadata extends jspb.Message {
    hasCreationDateTime(): boolean;
    clearCreationDateTime(): void;
    getCreationDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreationDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasCompletionDateTime(): boolean;
    clearCompletionDateTime(): void;
    getCompletionDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCompletionDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasEstimatedCompletionRatio(): boolean;
    clearEstimatedCompletionRatio(): void;
    getEstimatedCompletionRatio(): google_protobuf_wrappers_pb.DoubleValue | undefined;
    setEstimatedCompletionRatio(value?: google_protobuf_wrappers_pb.DoubleValue): void;

    hasOperationCount(): boolean;
    clearOperationCount(): void;
    getOperationCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setOperationCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasExecutedOperationCount(): boolean;
    clearExecutedOperationCount(): void;
    getExecutedOperationCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setExecutedOperationCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchJobMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: BatchJobMetadata): BatchJobMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchJobMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchJobMetadata;
    static deserializeBinaryFromReader(message: BatchJobMetadata, reader: jspb.BinaryReader): BatchJobMetadata;
  }

  export namespace BatchJobMetadata {
    export type AsObject = {
      creationDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      completionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      estimatedCompletionRatio?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      operationCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      executedOperationCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }
}

