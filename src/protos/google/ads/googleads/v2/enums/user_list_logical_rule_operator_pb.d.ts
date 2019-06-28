// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_list_logical_rule_operator.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListLogicalRuleOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListLogicalRuleOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListLogicalRuleOperatorEnum): UserListLogicalRuleOperatorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListLogicalRuleOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListLogicalRuleOperatorEnum;
  static deserializeBinaryFromReader(message: UserListLogicalRuleOperatorEnum, reader: jspb.BinaryReader): UserListLogicalRuleOperatorEnum;
}

export namespace UserListLogicalRuleOperatorEnum {
  export type AsObject = {
  }

  export enum UserListLogicalRuleOperator {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ALL = 2,
    ANY = 3,
    NONE = 4,
  }
}

