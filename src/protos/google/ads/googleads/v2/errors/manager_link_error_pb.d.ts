// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/manager_link_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ManagerLinkErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagerLinkErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ManagerLinkErrorEnum): ManagerLinkErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagerLinkErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagerLinkErrorEnum;
  static deserializeBinaryFromReader(message: ManagerLinkErrorEnum, reader: jspb.BinaryReader): ManagerLinkErrorEnum;
}

export namespace ManagerLinkErrorEnum {
  export type AsObject = {
  }

  export enum ManagerLinkError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ACCOUNTS_NOT_COMPATIBLE_FOR_LINKING = 2,
    TOO_MANY_MANAGERS = 3,
    TOO_MANY_INVITES = 4,
    ALREADY_INVITED_BY_THIS_MANAGER = 5,
    ALREADY_MANAGED_BY_THIS_MANAGER = 6,
    ALREADY_MANAGED_IN_HIERARCHY = 7,
    DUPLICATE_CHILD_FOUND = 8,
    CLIENT_HAS_NO_ADMIN_USER = 9,
    MAX_DEPTH_EXCEEDED = 10,
    CYCLE_NOT_ALLOWED = 11,
    TOO_MANY_ACCOUNTS = 12,
    TOO_MANY_ACCOUNTS_AT_MANAGER = 13,
    NON_OWNER_USER_CANNOT_MODIFY_LINK = 14,
    SUSPENDED_ACCOUNT_CANNOT_ADD_CLIENTS = 15,
  }
}

