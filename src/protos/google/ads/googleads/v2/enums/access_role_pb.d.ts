// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/access_role.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccessRoleEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccessRoleEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccessRoleEnum): AccessRoleEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccessRoleEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccessRoleEnum;
  static deserializeBinaryFromReader(message: AccessRoleEnum, reader: jspb.BinaryReader): AccessRoleEnum;
}

export namespace AccessRoleEnum {
  export type AsObject = {
  }

  export enum AccessRole {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADMIN = 2,
    STANDARD = 3,
    READ_ONLY = 4,
  }
}

