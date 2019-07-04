// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/account_budget_proposal_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccountBudgetProposalErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBudgetProposalErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBudgetProposalErrorEnum): AccountBudgetProposalErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBudgetProposalErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBudgetProposalErrorEnum;
  static deserializeBinaryFromReader(message: AccountBudgetProposalErrorEnum, reader: jspb.BinaryReader): AccountBudgetProposalErrorEnum;
}

export namespace AccountBudgetProposalErrorEnum {
  export type AsObject = {
  }

  export enum AccountBudgetProposalError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FIELD_MASK_NOT_ALLOWED = 2,
    IMMUTABLE_FIELD = 3,
    REQUIRED_FIELD_MISSING = 4,
    CANNOT_CANCEL_APPROVED_PROPOSAL = 5,
    CANNOT_REMOVE_UNAPPROVED_BUDGET = 6,
    CANNOT_REMOVE_RUNNING_BUDGET = 7,
    CANNOT_END_UNAPPROVED_BUDGET = 8,
    CANNOT_END_INACTIVE_BUDGET = 9,
    BUDGET_NAME_REQUIRED = 10,
    CANNOT_UPDATE_OLD_BUDGET = 11,
    CANNOT_END_IN_PAST = 12,
    CANNOT_EXTEND_END_TIME = 13,
    PURCHASE_ORDER_NUMBER_REQUIRED = 14,
    PENDING_UPDATE_PROPOSAL_EXISTS = 15,
    MULTIPLE_BUDGETS_NOT_ALLOWED_FOR_UNAPPROVED_BILLING_SETUP = 16,
    CANNOT_UPDATE_START_TIME_FOR_STARTED_BUDGET = 17,
    SPENDING_LIMIT_LOWER_THAN_ACCRUED_COST_NOT_ALLOWED = 18,
    UPDATE_IS_NO_OP = 19,
    END_TIME_MUST_FOLLOW_START_TIME = 20,
    BUDGET_DATE_RANGE_INCOMPATIBLE_WITH_BILLING_SETUP = 21,
    NOT_AUTHORIZED = 22,
    INVALID_BILLING_SETUP = 23,
  }
}

