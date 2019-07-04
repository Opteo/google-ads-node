// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/user_list_date_rule_item_operator.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserListDateRuleItemOperatorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListDateRuleItemOperatorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: UserListDateRuleItemOperatorEnum): UserListDateRuleItemOperatorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListDateRuleItemOperatorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListDateRuleItemOperatorEnum;
  static deserializeBinaryFromReader(message: UserListDateRuleItemOperatorEnum, reader: jspb.BinaryReader): UserListDateRuleItemOperatorEnum;
}

export namespace UserListDateRuleItemOperatorEnum {
  export type AsObject = {
  }

  export enum UserListDateRuleItemOperator {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EQUALS = 2,
    NOT_EQUALS = 3,
    BEFORE = 4,
    AFTER = 5,
  }
}

