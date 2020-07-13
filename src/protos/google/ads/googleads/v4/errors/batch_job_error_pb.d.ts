// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/batch_job_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BatchJobErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchJobErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BatchJobErrorEnum): BatchJobErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchJobErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchJobErrorEnum;
  static deserializeBinaryFromReader(message: BatchJobErrorEnum, reader: jspb.BinaryReader): BatchJobErrorEnum;
}

export namespace BatchJobErrorEnum {
  export type AsObject = {
  }

  export interface BatchJobErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    CANNOT_MODIFY_JOB_AFTER_JOB_STARTS_RUNNING: 2;
    EMPTY_OPERATIONS: 3;
    INVALID_SEQUENCE_TOKEN: 4;
    RESULTS_NOT_READY: 5;
    INVALID_PAGE_SIZE: 6;
    CAN_ONLY_REMOVE_PENDING_JOB: 7;
  }

  export const BatchJobError: BatchJobErrorMap;
}

