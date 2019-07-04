// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/mutate_job_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MutateJobErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateJobErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MutateJobErrorEnum): MutateJobErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateJobErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateJobErrorEnum;
  static deserializeBinaryFromReader(message: MutateJobErrorEnum, reader: jspb.BinaryReader): MutateJobErrorEnum;
}

export namespace MutateJobErrorEnum {
  export type AsObject = {
  }

  export enum MutateJobError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_MODIFY_JOB_AFTER_JOB_STARTS_RUNNING = 2,
    EMPTY_OPERATIONS = 3,
    INVALID_SEQUENCE_TOKEN = 4,
    RESULTS_NOT_READY = 5,
    INVALID_PAGE_SIZE = 6,
  }
}

