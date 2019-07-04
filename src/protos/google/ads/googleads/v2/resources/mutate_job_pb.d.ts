// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/mutate_job.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_mutate_job_status_pb from "../../../../../google/ads/googleads/v2/enums/mutate_job_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MutateJob extends jspb.Message {
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
  getMetadata(): MutateJob.MutateJobMetadata | undefined;
  setMetadata(value?: MutateJob.MutateJobMetadata): void;

  getStatus(): google_ads_googleads_v2_enums_mutate_job_status_pb.MutateJobStatusEnum.MutateJobStatus;
  setStatus(value: google_ads_googleads_v2_enums_mutate_job_status_pb.MutateJobStatusEnum.MutateJobStatus): void;

  hasLongRunningOperation(): boolean;
  clearLongRunningOperation(): void;
  getLongRunningOperation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongRunningOperation(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateJob.AsObject;
  static toObject(includeInstance: boolean, msg: MutateJob): MutateJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateJob;
  static deserializeBinaryFromReader(message: MutateJob, reader: jspb.BinaryReader): MutateJob;
}

export namespace MutateJob {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    nextAddSequenceToken?: google_protobuf_wrappers_pb.StringValue.AsObject,
    metadata?: MutateJob.MutateJobMetadata.AsObject,
    status: google_ads_googleads_v2_enums_mutate_job_status_pb.MutateJobStatusEnum.MutateJobStatus,
    longRunningOperation?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export class MutateJobMetadata extends jspb.Message {
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
    toObject(includeInstance?: boolean): MutateJobMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: MutateJobMetadata): MutateJobMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MutateJobMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MutateJobMetadata;
    static deserializeBinaryFromReader(message: MutateJobMetadata, reader: jspb.BinaryReader): MutateJobMetadata;
  }

  export namespace MutateJobMetadata {
    export type AsObject = {
      creationDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      completionDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      estimatedCompletionRatio?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
      operationCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      executedOperationCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    }
  }
}

