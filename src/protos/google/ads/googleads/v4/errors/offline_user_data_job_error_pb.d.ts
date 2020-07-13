// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/offline_user_data_job_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OfflineUserDataJobErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineUserDataJobErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineUserDataJobErrorEnum): OfflineUserDataJobErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineUserDataJobErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineUserDataJobErrorEnum;
  static deserializeBinaryFromReader(message: OfflineUserDataJobErrorEnum, reader: jspb.BinaryReader): OfflineUserDataJobErrorEnum;
}

export namespace OfflineUserDataJobErrorEnum {
  export type AsObject = {
  }

  export interface OfflineUserDataJobErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    INVALID_USER_LIST_ID: 3;
    INVALID_USER_LIST_TYPE: 4;
    NOT_WHITELISTED_FOR_USER_ID: 5;
    INCOMPATIBLE_UPLOAD_KEY_TYPE: 6;
    MISSING_USER_IDENTIFIER: 7;
    INVALID_MOBILE_ID_FORMAT: 8;
    TOO_MANY_USER_IDENTIFIERS: 9;
    NOT_WHITELISTED_FOR_STORE_SALES_DIRECT: 10;
    NOT_WHITELISTED_FOR_UNIFIED_STORE_SALES: 28;
    INVALID_PARTNER_ID: 11;
    INVALID_ENCODING: 12;
    INVALID_COUNTRY_CODE: 13;
    INCOMPATIBLE_USER_IDENTIFIER: 14;
    FUTURE_TRANSACTION_TIME: 15;
    INVALID_CONVERSION_ACTION: 16;
    MOBILE_ID_NOT_SUPPORTED: 17;
    INVALID_OPERATION_ORDER: 18;
    CONFLICTING_OPERATION: 19;
    EXTERNAL_UPDATE_ID_ALREADY_EXISTS: 21;
    JOB_ALREADY_STARTED: 22;
    REMOVE_NOT_SUPPORTED: 23;
    REMOVE_ALL_NOT_SUPPORTED: 24;
    INVALID_SHA256_FORMAT: 25;
    CUSTOM_KEY_DISABLED: 26;
    CUSTOM_KEY_NOT_PREDEFINED: 27;
    CUSTOM_KEY_NOT_SET: 29;
    CUSTOMER_NOT_ACCEPTED_CUSTOMER_DATA_TERMS: 30;
  }

  export const OfflineUserDataJobError: OfflineUserDataJobErrorMap;
}

