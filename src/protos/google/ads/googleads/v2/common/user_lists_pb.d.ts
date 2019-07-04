// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/user_lists.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_customer_match_upload_key_type_pb from "../../../../../google/ads/googleads/v2/enums/customer_match_upload_key_type_pb";
import * as google_ads_googleads_v2_enums_user_list_combined_rule_operator_pb from "../../../../../google/ads/googleads/v2/enums/user_list_combined_rule_operator_pb";
import * as google_ads_googleads_v2_enums_user_list_crm_data_source_type_pb from "../../../../../google/ads/googleads/v2/enums/user_list_crm_data_source_type_pb";
import * as google_ads_googleads_v2_enums_user_list_date_rule_item_operator_pb from "../../../../../google/ads/googleads/v2/enums/user_list_date_rule_item_operator_pb";
import * as google_ads_googleads_v2_enums_user_list_logical_rule_operator_pb from "../../../../../google/ads/googleads/v2/enums/user_list_logical_rule_operator_pb";
import * as google_ads_googleads_v2_enums_user_list_number_rule_item_operator_pb from "../../../../../google/ads/googleads/v2/enums/user_list_number_rule_item_operator_pb";
import * as google_ads_googleads_v2_enums_user_list_prepopulation_status_pb from "../../../../../google/ads/googleads/v2/enums/user_list_prepopulation_status_pb";
import * as google_ads_googleads_v2_enums_user_list_rule_type_pb from "../../../../../google/ads/googleads/v2/enums/user_list_rule_type_pb";
import * as google_ads_googleads_v2_enums_user_list_string_rule_item_operator_pb from "../../../../../google/ads/googleads/v2/enums/user_list_string_rule_item_operator_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SimilarUserListInfo extends jspb.Message {
  hasSeedUserList(): boolean;
  clearSeedUserList(): void;
  getSeedUserList(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSeedUserList(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimilarUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SimilarUserListInfo): SimilarUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimilarUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimilarUserListInfo;
  static deserializeBinaryFromReader(message: SimilarUserListInfo, reader: jspb.BinaryReader): SimilarUserListInfo;
}

export namespace SimilarUserListInfo {
  export type AsObject = {
    seedUserList?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CrmBasedUserListInfo extends jspb.Message {
  hasAppId(): boolean;
  clearAppId(): void;
  getAppId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAppId(value?: google_protobuf_wrappers_pb.StringValue): void;

  getUploadKeyType(): google_ads_googleads_v2_enums_customer_match_upload_key_type_pb.CustomerMatchUploadKeyTypeEnum.CustomerMatchUploadKeyType;
  setUploadKeyType(value: google_ads_googleads_v2_enums_customer_match_upload_key_type_pb.CustomerMatchUploadKeyTypeEnum.CustomerMatchUploadKeyType): void;

  getDataSourceType(): google_ads_googleads_v2_enums_user_list_crm_data_source_type_pb.UserListCrmDataSourceTypeEnum.UserListCrmDataSourceType;
  setDataSourceType(value: google_ads_googleads_v2_enums_user_list_crm_data_source_type_pb.UserListCrmDataSourceTypeEnum.UserListCrmDataSourceType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CrmBasedUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CrmBasedUserListInfo): CrmBasedUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CrmBasedUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CrmBasedUserListInfo;
  static deserializeBinaryFromReader(message: CrmBasedUserListInfo, reader: jspb.BinaryReader): CrmBasedUserListInfo;
}

export namespace CrmBasedUserListInfo {
  export type AsObject = {
    appId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    uploadKeyType: google_ads_googleads_v2_enums_customer_match_upload_key_type_pb.CustomerMatchUploadKeyTypeEnum.CustomerMatchUploadKeyType,
    dataSourceType: google_ads_googleads_v2_enums_user_list_crm_data_source_type_pb.UserListCrmDataSourceTypeEnum.UserListCrmDataSourceType,
  }
}

export class UserListRuleInfo extends jspb.Message {
  getRuleType(): google_ads_googleads_v2_enums_user_list_rule_type_pb.UserListRuleTypeEnum.UserListRuleType;
  setRuleType(value: google_ads_googleads_v2_enums_user_list_rule_type_pb.UserListRuleTypeEnum.UserListRuleType): void;

  clearRuleItemGroupsList(): void;
  getRuleItemGroupsList(): Array<UserListRuleItemGroupInfo>;
  setRuleItemGroupsList(value: Array<UserListRuleItemGroupInfo>): void;
  addRuleItemGroups(value?: UserListRuleItemGroupInfo, index?: number): UserListRuleItemGroupInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRuleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRuleInfo): UserListRuleInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListRuleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRuleInfo;
  static deserializeBinaryFromReader(message: UserListRuleInfo, reader: jspb.BinaryReader): UserListRuleInfo;
}

export namespace UserListRuleInfo {
  export type AsObject = {
    ruleType: google_ads_googleads_v2_enums_user_list_rule_type_pb.UserListRuleTypeEnum.UserListRuleType,
    ruleItemGroupsList: Array<UserListRuleItemGroupInfo.AsObject>,
  }
}

export class UserListRuleItemGroupInfo extends jspb.Message {
  clearRuleItemsList(): void;
  getRuleItemsList(): Array<UserListRuleItemInfo>;
  setRuleItemsList(value: Array<UserListRuleItemInfo>): void;
  addRuleItems(value?: UserListRuleItemInfo, index?: number): UserListRuleItemInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRuleItemGroupInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRuleItemGroupInfo): UserListRuleItemGroupInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListRuleItemGroupInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRuleItemGroupInfo;
  static deserializeBinaryFromReader(message: UserListRuleItemGroupInfo, reader: jspb.BinaryReader): UserListRuleItemGroupInfo;
}

export namespace UserListRuleItemGroupInfo {
  export type AsObject = {
    ruleItemsList: Array<UserListRuleItemInfo.AsObject>,
  }
}

export class UserListRuleItemInfo extends jspb.Message {
  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasNumberRuleItem(): boolean;
  clearNumberRuleItem(): void;
  getNumberRuleItem(): UserListNumberRuleItemInfo | undefined;
  setNumberRuleItem(value?: UserListNumberRuleItemInfo): void;

  hasStringRuleItem(): boolean;
  clearStringRuleItem(): void;
  getStringRuleItem(): UserListStringRuleItemInfo | undefined;
  setStringRuleItem(value?: UserListStringRuleItemInfo): void;

  hasDateRuleItem(): boolean;
  clearDateRuleItem(): void;
  getDateRuleItem(): UserListDateRuleItemInfo | undefined;
  setDateRuleItem(value?: UserListDateRuleItemInfo): void;

  getRuleItemCase(): UserListRuleItemInfo.RuleItemCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListRuleItemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListRuleItemInfo): UserListRuleItemInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListRuleItemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListRuleItemInfo;
  static deserializeBinaryFromReader(message: UserListRuleItemInfo, reader: jspb.BinaryReader): UserListRuleItemInfo;
}

export namespace UserListRuleItemInfo {
  export type AsObject = {
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    numberRuleItem?: UserListNumberRuleItemInfo.AsObject,
    stringRuleItem?: UserListStringRuleItemInfo.AsObject,
    dateRuleItem?: UserListDateRuleItemInfo.AsObject,
  }

  export enum RuleItemCase {
    RULE_ITEM_NOT_SET = 0,
    NUMBER_RULE_ITEM = 2,
    STRING_RULE_ITEM = 3,
    DATE_RULE_ITEM = 4,
  }
}

export class UserListDateRuleItemInfo extends jspb.Message {
  getOperator(): google_ads_googleads_v2_enums_user_list_date_rule_item_operator_pb.UserListDateRuleItemOperatorEnum.UserListDateRuleItemOperator;
  setOperator(value: google_ads_googleads_v2_enums_user_list_date_rule_item_operator_pb.UserListDateRuleItemOperatorEnum.UserListDateRuleItemOperator): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasOffsetInDays(): boolean;
  clearOffsetInDays(): void;
  getOffsetInDays(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setOffsetInDays(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListDateRuleItemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListDateRuleItemInfo): UserListDateRuleItemInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListDateRuleItemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListDateRuleItemInfo;
  static deserializeBinaryFromReader(message: UserListDateRuleItemInfo, reader: jspb.BinaryReader): UserListDateRuleItemInfo;
}

export namespace UserListDateRuleItemInfo {
  export type AsObject = {
    operator: google_ads_googleads_v2_enums_user_list_date_rule_item_operator_pb.UserListDateRuleItemOperatorEnum.UserListDateRuleItemOperator,
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
    offsetInDays?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class UserListNumberRuleItemInfo extends jspb.Message {
  getOperator(): google_ads_googleads_v2_enums_user_list_number_rule_item_operator_pb.UserListNumberRuleItemOperatorEnum.UserListNumberRuleItemOperator;
  setOperator(value: google_ads_googleads_v2_enums_user_list_number_rule_item_operator_pb.UserListNumberRuleItemOperatorEnum.UserListNumberRuleItemOperator): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListNumberRuleItemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListNumberRuleItemInfo): UserListNumberRuleItemInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListNumberRuleItemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListNumberRuleItemInfo;
  static deserializeBinaryFromReader(message: UserListNumberRuleItemInfo, reader: jspb.BinaryReader): UserListNumberRuleItemInfo;
}

export namespace UserListNumberRuleItemInfo {
  export type AsObject = {
    operator: google_ads_googleads_v2_enums_user_list_number_rule_item_operator_pb.UserListNumberRuleItemOperatorEnum.UserListNumberRuleItemOperator,
    value?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

export class UserListStringRuleItemInfo extends jspb.Message {
  getOperator(): google_ads_googleads_v2_enums_user_list_string_rule_item_operator_pb.UserListStringRuleItemOperatorEnum.UserListStringRuleItemOperator;
  setOperator(value: google_ads_googleads_v2_enums_user_list_string_rule_item_operator_pb.UserListStringRuleItemOperatorEnum.UserListStringRuleItemOperator): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_wrappers_pb.StringValue | undefined;
  setValue(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListStringRuleItemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListStringRuleItemInfo): UserListStringRuleItemInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListStringRuleItemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListStringRuleItemInfo;
  static deserializeBinaryFromReader(message: UserListStringRuleItemInfo, reader: jspb.BinaryReader): UserListStringRuleItemInfo;
}

export namespace UserListStringRuleItemInfo {
  export type AsObject = {
    operator: google_ads_googleads_v2_enums_user_list_string_rule_item_operator_pb.UserListStringRuleItemOperatorEnum.UserListStringRuleItemOperator,
    value?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class CombinedRuleUserListInfo extends jspb.Message {
  hasLeftOperand(): boolean;
  clearLeftOperand(): void;
  getLeftOperand(): UserListRuleInfo | undefined;
  setLeftOperand(value?: UserListRuleInfo): void;

  hasRightOperand(): boolean;
  clearRightOperand(): void;
  getRightOperand(): UserListRuleInfo | undefined;
  setRightOperand(value?: UserListRuleInfo): void;

  getRuleOperator(): google_ads_googleads_v2_enums_user_list_combined_rule_operator_pb.UserListCombinedRuleOperatorEnum.UserListCombinedRuleOperator;
  setRuleOperator(value: google_ads_googleads_v2_enums_user_list_combined_rule_operator_pb.UserListCombinedRuleOperatorEnum.UserListCombinedRuleOperator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CombinedRuleUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CombinedRuleUserListInfo): CombinedRuleUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CombinedRuleUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CombinedRuleUserListInfo;
  static deserializeBinaryFromReader(message: CombinedRuleUserListInfo, reader: jspb.BinaryReader): CombinedRuleUserListInfo;
}

export namespace CombinedRuleUserListInfo {
  export type AsObject = {
    leftOperand?: UserListRuleInfo.AsObject,
    rightOperand?: UserListRuleInfo.AsObject,
    ruleOperator: google_ads_googleads_v2_enums_user_list_combined_rule_operator_pb.UserListCombinedRuleOperatorEnum.UserListCombinedRuleOperator,
  }
}

export class DateSpecificRuleUserListInfo extends jspb.Message {
  hasRule(): boolean;
  clearRule(): void;
  getRule(): UserListRuleInfo | undefined;
  setRule(value?: UserListRuleInfo): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateSpecificRuleUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DateSpecificRuleUserListInfo): DateSpecificRuleUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateSpecificRuleUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateSpecificRuleUserListInfo;
  static deserializeBinaryFromReader(message: DateSpecificRuleUserListInfo, reader: jspb.BinaryReader): DateSpecificRuleUserListInfo;
}

export namespace DateSpecificRuleUserListInfo {
  export type AsObject = {
    rule?: UserListRuleInfo.AsObject,
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ExpressionRuleUserListInfo extends jspb.Message {
  hasRule(): boolean;
  clearRule(): void;
  getRule(): UserListRuleInfo | undefined;
  setRule(value?: UserListRuleInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpressionRuleUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ExpressionRuleUserListInfo): ExpressionRuleUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpressionRuleUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpressionRuleUserListInfo;
  static deserializeBinaryFromReader(message: ExpressionRuleUserListInfo, reader: jspb.BinaryReader): ExpressionRuleUserListInfo;
}

export namespace ExpressionRuleUserListInfo {
  export type AsObject = {
    rule?: UserListRuleInfo.AsObject,
  }
}

export class RuleBasedUserListInfo extends jspb.Message {
  getPrepopulationStatus(): google_ads_googleads_v2_enums_user_list_prepopulation_status_pb.UserListPrepopulationStatusEnum.UserListPrepopulationStatus;
  setPrepopulationStatus(value: google_ads_googleads_v2_enums_user_list_prepopulation_status_pb.UserListPrepopulationStatusEnum.UserListPrepopulationStatus): void;

  hasCombinedRuleUserList(): boolean;
  clearCombinedRuleUserList(): void;
  getCombinedRuleUserList(): CombinedRuleUserListInfo | undefined;
  setCombinedRuleUserList(value?: CombinedRuleUserListInfo): void;

  hasDateSpecificRuleUserList(): boolean;
  clearDateSpecificRuleUserList(): void;
  getDateSpecificRuleUserList(): DateSpecificRuleUserListInfo | undefined;
  setDateSpecificRuleUserList(value?: DateSpecificRuleUserListInfo): void;

  hasExpressionRuleUserList(): boolean;
  clearExpressionRuleUserList(): void;
  getExpressionRuleUserList(): ExpressionRuleUserListInfo | undefined;
  setExpressionRuleUserList(value?: ExpressionRuleUserListInfo): void;

  getRuleBasedUserListCase(): RuleBasedUserListInfo.RuleBasedUserListCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleBasedUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RuleBasedUserListInfo): RuleBasedUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuleBasedUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleBasedUserListInfo;
  static deserializeBinaryFromReader(message: RuleBasedUserListInfo, reader: jspb.BinaryReader): RuleBasedUserListInfo;
}

export namespace RuleBasedUserListInfo {
  export type AsObject = {
    prepopulationStatus: google_ads_googleads_v2_enums_user_list_prepopulation_status_pb.UserListPrepopulationStatusEnum.UserListPrepopulationStatus,
    combinedRuleUserList?: CombinedRuleUserListInfo.AsObject,
    dateSpecificRuleUserList?: DateSpecificRuleUserListInfo.AsObject,
    expressionRuleUserList?: ExpressionRuleUserListInfo.AsObject,
  }

  export enum RuleBasedUserListCase {
    RULE_BASED_USER_LIST_NOT_SET = 0,
    COMBINED_RULE_USER_LIST = 2,
    DATE_SPECIFIC_RULE_USER_LIST = 3,
    EXPRESSION_RULE_USER_LIST = 4,
  }
}

export class LogicalUserListInfo extends jspb.Message {
  clearRulesList(): void;
  getRulesList(): Array<UserListLogicalRuleInfo>;
  setRulesList(value: Array<UserListLogicalRuleInfo>): void;
  addRules(value?: UserListLogicalRuleInfo, index?: number): UserListLogicalRuleInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogicalUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LogicalUserListInfo): LogicalUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogicalUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogicalUserListInfo;
  static deserializeBinaryFromReader(message: LogicalUserListInfo, reader: jspb.BinaryReader): LogicalUserListInfo;
}

export namespace LogicalUserListInfo {
  export type AsObject = {
    rulesList: Array<UserListLogicalRuleInfo.AsObject>,
  }
}

export class UserListLogicalRuleInfo extends jspb.Message {
  getOperator(): google_ads_googleads_v2_enums_user_list_logical_rule_operator_pb.UserListLogicalRuleOperatorEnum.UserListLogicalRuleOperator;
  setOperator(value: google_ads_googleads_v2_enums_user_list_logical_rule_operator_pb.UserListLogicalRuleOperatorEnum.UserListLogicalRuleOperator): void;

  clearRuleOperandsList(): void;
  getRuleOperandsList(): Array<LogicalUserListOperandInfo>;
  setRuleOperandsList(value: Array<LogicalUserListOperandInfo>): void;
  addRuleOperands(value?: LogicalUserListOperandInfo, index?: number): LogicalUserListOperandInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListLogicalRuleInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListLogicalRuleInfo): UserListLogicalRuleInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListLogicalRuleInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListLogicalRuleInfo;
  static deserializeBinaryFromReader(message: UserListLogicalRuleInfo, reader: jspb.BinaryReader): UserListLogicalRuleInfo;
}

export namespace UserListLogicalRuleInfo {
  export type AsObject = {
    operator: google_ads_googleads_v2_enums_user_list_logical_rule_operator_pb.UserListLogicalRuleOperatorEnum.UserListLogicalRuleOperator,
    ruleOperandsList: Array<LogicalUserListOperandInfo.AsObject>,
  }
}

export class LogicalUserListOperandInfo extends jspb.Message {
  hasUserList(): boolean;
  clearUserList(): void;
  getUserList(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUserList(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogicalUserListOperandInfo.AsObject;
  static toObject(includeInstance: boolean, msg: LogicalUserListOperandInfo): LogicalUserListOperandInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogicalUserListOperandInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogicalUserListOperandInfo;
  static deserializeBinaryFromReader(message: LogicalUserListOperandInfo, reader: jspb.BinaryReader): LogicalUserListOperandInfo;
}

export namespace LogicalUserListOperandInfo {
  export type AsObject = {
    userList?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class BasicUserListInfo extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<UserListActionInfo>;
  setActionsList(value: Array<UserListActionInfo>): void;
  addActions(value?: UserListActionInfo, index?: number): UserListActionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicUserListInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BasicUserListInfo): BasicUserListInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicUserListInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicUserListInfo;
  static deserializeBinaryFromReader(message: BasicUserListInfo, reader: jspb.BinaryReader): BasicUserListInfo;
}

export namespace BasicUserListInfo {
  export type AsObject = {
    actionsList: Array<UserListActionInfo.AsObject>,
  }
}

export class UserListActionInfo extends jspb.Message {
  hasConversionAction(): boolean;
  clearConversionAction(): void;
  getConversionAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setConversionAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasRemarketingAction(): boolean;
  clearRemarketingAction(): void;
  getRemarketingAction(): google_protobuf_wrappers_pb.StringValue | undefined;
  setRemarketingAction(value?: google_protobuf_wrappers_pb.StringValue): void;

  getUserListActionCase(): UserListActionInfo.UserListActionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserListActionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UserListActionInfo): UserListActionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserListActionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserListActionInfo;
  static deserializeBinaryFromReader(message: UserListActionInfo, reader: jspb.BinaryReader): UserListActionInfo;
}

export namespace UserListActionInfo {
  export type AsObject = {
    conversionAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
    remarketingAction?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum UserListActionCase {
    USER_LIST_ACTION_NOT_SET = 0,
    CONVERSION_ACTION = 1,
    REMARKETING_ACTION = 2,
  }
}

