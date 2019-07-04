// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/customer_manager_link_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerManagerLinkErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerManagerLinkErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerManagerLinkErrorEnum): CustomerManagerLinkErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerManagerLinkErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerManagerLinkErrorEnum;
  static deserializeBinaryFromReader(message: CustomerManagerLinkErrorEnum, reader: jspb.BinaryReader): CustomerManagerLinkErrorEnum;
}

export namespace CustomerManagerLinkErrorEnum {
  export type AsObject = {
  }

  export enum CustomerManagerLinkError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NO_PENDING_INVITE = 2,
    SAME_CLIENT_MORE_THAN_ONCE_PER_CALL = 3,
    MANAGER_HAS_MAX_NUMBER_OF_LINKED_ACCOUNTS = 4,
    CANNOT_UNLINK_ACCOUNT_WITHOUT_ACTIVE_USER = 5,
    CANNOT_REMOVE_LAST_CLIENT_ACCOUNT_OWNER = 6,
    CANNOT_CHANGE_ROLE_BY_NON_ACCOUNT_OWNER = 7,
    CANNOT_CHANGE_ROLE_FOR_NON_ACTIVE_LINK_ACCOUNT = 8,
    DUPLICATE_CHILD_FOUND = 9,
  }
}

