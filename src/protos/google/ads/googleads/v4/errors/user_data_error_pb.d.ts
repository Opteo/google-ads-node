// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/user_data_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserDataErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDataErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserDataErrorEnum): UserDataErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDataErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDataErrorEnum;
  static deserializeBinaryFromReader(message: UserDataErrorEnum, reader: jspb.BinaryReader): UserDataErrorEnum;
}

export namespace UserDataErrorEnum {
  export type AsObject = {
  }

  export interface UserDataErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    OPERATIONS_FOR_CUSTOMER_MATCH_NOT_ALLOWED: 2;
    TOO_MANY_USER_IDENTIFIERS: 3;
    USER_LIST_NOT_APPLICABLE: 4;
  }

  export const UserDataError: UserDataErrorMap;
}

