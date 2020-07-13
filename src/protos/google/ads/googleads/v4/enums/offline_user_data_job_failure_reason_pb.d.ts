// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/offline_user_data_job_failure_reason.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OfflineUserDataJobFailureReasonEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineUserDataJobFailureReasonEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineUserDataJobFailureReasonEnum): OfflineUserDataJobFailureReasonEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineUserDataJobFailureReasonEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineUserDataJobFailureReasonEnum;
  static deserializeBinaryFromReader(message: OfflineUserDataJobFailureReasonEnum, reader: jspb.BinaryReader): OfflineUserDataJobFailureReasonEnum;
}

export namespace OfflineUserDataJobFailureReasonEnum {
  export type AsObject = {
  }

  export interface OfflineUserDataJobFailureReasonMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    INSUFFICIENT_MATCHED_TRANSACTIONS: 2;
    INSUFFICIENT_TRANSACTIONS: 3;
  }

  export const OfflineUserDataJobFailureReason: OfflineUserDataJobFailureReasonMap;
}

