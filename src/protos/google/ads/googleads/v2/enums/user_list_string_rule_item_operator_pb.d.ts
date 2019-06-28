// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_list_string_rule_item_operator.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListStringRuleItemOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListStringRuleItemOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListStringRuleItemOperatorEnum): UserListStringRuleItemOperatorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListStringRuleItemOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListStringRuleItemOperatorEnum;
  static deserializeBinaryFromReader(message: UserListStringRuleItemOperatorEnum, reader: jspb.BinaryReader): UserListStringRuleItemOperatorEnum;
}

export namespace UserListStringRuleItemOperatorEnum {
  export type AsObject = {
  }

  export enum UserListStringRuleItemOperator {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CONTAINS = 2,
    EQUALS = 3,
    STARTS_WITH = 4,
    ENDS_WITH = 5,
    NOT_EQUALS = 6,
    NOT_CONTAINS = 7,
    NOT_STARTS_WITH = 8,
    NOT_ENDS_WITH = 9,
  }
}

