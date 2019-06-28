// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/request_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class RequestErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RequestErrorEnum): RequestErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestErrorEnum;
  static deserializeBinaryFromReader(message: RequestErrorEnum, reader: jspb.BinaryReader): RequestErrorEnum;
}

export namespace RequestErrorEnum {
  export type AsObject = {
  }

  export enum RequestError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RESOURCE_NAME_MISSING = 3,
    RESOURCE_NAME_MALFORMED = 4,
    BAD_RESOURCE_ID = 17,
    INVALID_CUSTOMER_ID = 16,
    OPERATION_REQUIRED = 5,
    RESOURCE_NOT_FOUND = 6,
    INVALID_PAGE_TOKEN = 7,
    EXPIRED_PAGE_TOKEN = 8,
    INVALID_PAGE_SIZE = 22,
    REQUIRED_FIELD_MISSING = 9,
    IMMUTABLE_FIELD = 11,
    TOO_MANY_MUTATE_OPERATIONS = 13,
    CANNOT_BE_EXECUTED_BY_MANAGER_ACCOUNT = 14,
    CANNOT_MODIFY_FOREIGN_FIELD = 15,
    INVALID_ENUM_VALUE = 18,
    DEVELOPER_TOKEN_PARAMETER_MISSING = 19,
    LOGIN_CUSTOMER_ID_PARAMETER_MISSING = 20,
    VALIDATE_ONLY_REQUEST_HAS_PAGE_TOKEN = 21,
    CANNOT_RETURN_SUMMARY_ROW_FOR_REQUEST_WITHOUT_METRICS = 29,
    CANNOT_RETURN_SUMMARY_ROW_FOR_VALIDATE_ONLY_REQUESTS = 30,
    INCONSISTENT_RETURN_SUMMARY_ROW_VALUE = 31,
  }
}

