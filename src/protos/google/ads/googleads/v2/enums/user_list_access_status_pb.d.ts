// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_list_access_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListAccessStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListAccessStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListAccessStatusEnum): UserListAccessStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListAccessStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListAccessStatusEnum;
  static deserializeBinaryFromReader(message: UserListAccessStatusEnum, reader: jspb.BinaryReader): UserListAccessStatusEnum;
}

export namespace UserListAccessStatusEnum {
  export type AsObject = {
  }

  export enum UserListAccessStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    DISABLED = 3,
  }
}

