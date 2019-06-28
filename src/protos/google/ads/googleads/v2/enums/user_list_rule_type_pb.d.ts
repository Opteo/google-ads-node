// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_list_rule_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListRuleTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRuleTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRuleTypeEnum): UserListRuleTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListRuleTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRuleTypeEnum;
  static deserializeBinaryFromReader(message: UserListRuleTypeEnum, reader: jspb.BinaryReader): UserListRuleTypeEnum;
}

export namespace UserListRuleTypeEnum {
  export type AsObject = {
  }

  export enum UserListRuleType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AND_OF_ORS = 2,
    OR_OF_ANDS = 3,
  }
}

