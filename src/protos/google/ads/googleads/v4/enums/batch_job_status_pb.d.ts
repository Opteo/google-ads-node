// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/batch_job_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BatchJobStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchJobStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BatchJobStatusEnum): BatchJobStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchJobStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchJobStatusEnum;
  static deserializeBinaryFromReader(message: BatchJobStatusEnum, reader: jspb.BinaryReader): BatchJobStatusEnum;
}

export namespace BatchJobStatusEnum {
  export type AsObject = {
  }

  export interface BatchJobStatusMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    PENDING: 2;
    RUNNING: 3;
    DONE: 4;
  }

  export const BatchJobStatus: BatchJobStatusMap;
}

