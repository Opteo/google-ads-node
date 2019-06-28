// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/mutate_job_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MutateJobStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateJobStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MutateJobStatusEnum): MutateJobStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateJobStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateJobStatusEnum;
  static deserializeBinaryFromReader(message: MutateJobStatusEnum, reader: jspb.BinaryReader): MutateJobStatusEnum;
}

export namespace MutateJobStatusEnum {
  export type AsObject = {
  }

  export enum MutateJobStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    RUNNING = 3,
    DONE = 4,
  }
}

