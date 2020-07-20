// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/offline_user_data_job_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OfflineUserDataJobStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineUserDataJobStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineUserDataJobStatusEnum): OfflineUserDataJobStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineUserDataJobStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineUserDataJobStatusEnum;
  static deserializeBinaryFromReader(message: OfflineUserDataJobStatusEnum, reader: jspb.BinaryReader): OfflineUserDataJobStatusEnum;
}

export namespace OfflineUserDataJobStatusEnum {
  export type AsObject = {
  }

  export interface OfflineUserDataJobStatusMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    PENDING: 2;
    RUNNING: 3;
    SUCCESS: 4;
    FAILED: 5;
  }

  export const OfflineUserDataJobStatus: OfflineUserDataJobStatusMap;
}

