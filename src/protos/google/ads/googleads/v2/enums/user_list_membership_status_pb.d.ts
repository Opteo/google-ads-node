// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_list_membership_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListMembershipStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListMembershipStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListMembershipStatusEnum): UserListMembershipStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListMembershipStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListMembershipStatusEnum;
  static deserializeBinaryFromReader(message: UserListMembershipStatusEnum, reader: jspb.BinaryReader): UserListMembershipStatusEnum;
}

export namespace UserListMembershipStatusEnum {
  export type AsObject = {
  }

  export enum UserListMembershipStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPEN = 2,
    CLOSED = 3,
  }
}

