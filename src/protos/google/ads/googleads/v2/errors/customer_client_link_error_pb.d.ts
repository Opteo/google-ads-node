// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/customer_client_link_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerClientLinkErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerClientLinkErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerClientLinkErrorEnum): CustomerClientLinkErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerClientLinkErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerClientLinkErrorEnum;
  static deserializeBinaryFromReader(message: CustomerClientLinkErrorEnum, reader: jspb.BinaryReader): CustomerClientLinkErrorEnum;
}

export namespace CustomerClientLinkErrorEnum {
  export type AsObject = {
  }

  export enum CustomerClientLinkError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CLIENT_ALREADY_INVITED_BY_THIS_MANAGER = 2,
    CLIENT_ALREADY_MANAGED_IN_HIERARCHY = 3,
    CYCLIC_LINK_NOT_ALLOWED = 4,
    CUSTOMER_HAS_TOO_MANY_ACCOUNTS = 5,
    CLIENT_HAS_TOO_MANY_INVITATIONS = 6,
    CANNOT_HIDE_OR_UNHIDE_MANAGER_ACCOUNTS = 7,
    CUSTOMER_HAS_TOO_MANY_ACCOUNTS_AT_MANAGER = 8,
  }
}

