// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/offline_user_data_job_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OfflineUserDataJobTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineUserDataJobTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineUserDataJobTypeEnum): OfflineUserDataJobTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineUserDataJobTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineUserDataJobTypeEnum;
  static deserializeBinaryFromReader(message: OfflineUserDataJobTypeEnum, reader: jspb.BinaryReader): OfflineUserDataJobTypeEnum;
}

export namespace OfflineUserDataJobTypeEnum {
  export type AsObject = {
  }

  export interface OfflineUserDataJobTypeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    STORE_SALES_UPLOAD_FIRST_PARTY: 2;
    STORE_SALES_UPLOAD_THIRD_PARTY: 3;
    CUSTOMER_MATCH_USER_LIST: 4;
  }

  export const OfflineUserDataJobType: OfflineUserDataJobTypeMap;
}

