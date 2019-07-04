// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/account_budget_proposal.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_account_budget_proposal_status_pb from "../../../../../google/ads/googleads/v2/enums/account_budget_proposal_status_pb";
import * as google_ads_googleads_v2_enums_account_budget_proposal_type_pb from "../../../../../google/ads/googleads/v2/enums/account_budget_proposal_type_pb";
import * as google_ads_googleads_v2_enums_spending_limit_type_pb from "../../../../../google/ads/googleads/v2/enums/spending_limit_type_pb";
import * as google_ads_googleads_v2_enums_time_type_pb from "../../../../../google/ads/googleads/v2/enums/time_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccountBudgetProposal extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBillingSetup(): boolean;
  clearBillingSetup(): void;
  getBillingSetup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBillingSetup(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAccountBudget(): boolean;
  clearAccountBudget(): void;
  getAccountBudget(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAccountBudget(value?: google_protobuf_wrappers_pb.StringValue): void;

  getProposalType(): google_ads_googleads_v2_enums_account_budget_proposal_type_pb.AccountBudgetProposalTypeEnum.AccountBudgetProposalType;
  setProposalType(value: google_ads_googleads_v2_enums_account_budget_proposal_type_pb.AccountBudgetProposalTypeEnum.AccountBudgetProposalType): void;

  getStatus(): google_ads_googleads_v2_enums_account_budget_proposal_status_pb.AccountBudgetProposalStatusEnum.AccountBudgetProposalStatus;
  setStatus(value: google_ads_googleads_v2_enums_account_budget_proposal_status_pb.AccountBudgetProposalStatusEnum.AccountBudgetProposalStatus): void;

  hasProposedName(): boolean;
  clearProposedName(): void;
  getProposedName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProposedName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasApprovedStartDateTime(): boolean;
  clearApprovedStartDateTime(): void;
  getApprovedStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApprovedStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProposedPurchaseOrderNumber(): boolean;
  clearProposedPurchaseOrderNumber(): void;
  getProposedPurchaseOrderNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProposedPurchaseOrderNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProposedNotes(): boolean;
  clearProposedNotes(): void;
  getProposedNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProposedNotes(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCreationDateTime(): boolean;
  clearCreationDateTime(): void;
  getCreationDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCreationDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasApprovalDateTime(): boolean;
  clearApprovalDateTime(): void;
  getApprovalDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApprovalDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProposedStartDateTime(): boolean;
  clearProposedStartDateTime(): void;
  getProposedStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProposedStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProposedStartTimeType(): boolean;
  clearProposedStartTimeType(): void;
  getProposedStartTimeType(): google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType;
  setProposedStartTimeType(value: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType): void;

  hasProposedEndDateTime(): boolean;
  clearProposedEndDateTime(): void;
  getProposedEndDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProposedEndDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProposedEndTimeType(): boolean;
  clearProposedEndTimeType(): void;
  getProposedEndTimeType(): google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType;
  setProposedEndTimeType(value: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType): void;

  hasApprovedEndDateTime(): boolean;
  clearApprovedEndDateTime(): void;
  getApprovedEndDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApprovedEndDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasApprovedEndTimeType(): boolean;
  clearApprovedEndTimeType(): void;
  getApprovedEndTimeType(): google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType;
  setApprovedEndTimeType(value: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType): void;

  hasProposedSpendingLimitMicros(): boolean;
  clearProposedSpendingLimitMicros(): void;
  getProposedSpendingLimitMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setProposedSpendingLimitMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasProposedSpendingLimitType(): boolean;
  clearProposedSpendingLimitType(): void;
  getProposedSpendingLimitType(): google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType;
  setProposedSpendingLimitType(value: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType): void;

  hasApprovedSpendingLimitMicros(): boolean;
  clearApprovedSpendingLimitMicros(): void;
  getApprovedSpendingLimitMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setApprovedSpendingLimitMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasApprovedSpendingLimitType(): boolean;
  clearApprovedSpendingLimitType(): void;
  getApprovedSpendingLimitType(): google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType;
  setApprovedSpendingLimitType(value: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType): void;

  getProposedStartTimeCase(): AccountBudgetProposal.ProposedStartTimeCase;
  getProposedEndTimeCase(): AccountBudgetProposal.ProposedEndTimeCase;
  getApprovedEndTimeCase(): AccountBudgetProposal.ApprovedEndTimeCase;
  getProposedSpendingLimitCase(): AccountBudgetProposal.ProposedSpendingLimitCase;
  getApprovedSpendingLimitCase(): AccountBudgetProposal.ApprovedSpendingLimitCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBudgetProposal.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBudgetProposal): AccountBudgetProposal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBudgetProposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBudgetProposal;
  static deserializeBinaryFromReader(message: AccountBudgetProposal, reader: jspb.BinaryReader): AccountBudgetProposal;
}

export namespace AccountBudgetProposal {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    billingSetup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    accountBudget?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposalType: google_ads_googleads_v2_enums_account_budget_proposal_type_pb.AccountBudgetProposalTypeEnum.AccountBudgetProposalType,
    status: google_ads_googleads_v2_enums_account_budget_proposal_status_pb.AccountBudgetProposalStatusEnum.AccountBudgetProposalStatus,
    proposedName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    approvedStartDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposedPurchaseOrderNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposedNotes?: google_protobuf_wrappers_pb.StringValue.AsObject,
    creationDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    approvalDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposedStartDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposedStartTimeType: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType,
    proposedEndDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposedEndTimeType: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType,
    approvedEndDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    approvedEndTimeType: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType,
    proposedSpendingLimitMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    proposedSpendingLimitType: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType,
    approvedSpendingLimitMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    approvedSpendingLimitType: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType,
  }

  export enum ProposedStartTimeCase {
    PROPOSED_START_TIME_NOT_SET = 0,
    PROPOSED_START_DATE_TIME = 18,
    PROPOSED_START_TIME_TYPE = 7,
  }

  export enum ProposedEndTimeCase {
    PROPOSED_END_TIME_NOT_SET = 0,
    PROPOSED_END_DATE_TIME = 19,
    PROPOSED_END_TIME_TYPE = 9,
  }

  export enum ApprovedEndTimeCase {
    APPROVED_END_TIME_NOT_SET = 0,
    APPROVED_END_DATE_TIME = 21,
    APPROVED_END_TIME_TYPE = 22,
  }

  export enum ProposedSpendingLimitCase {
    PROPOSED_SPENDING_LIMIT_NOT_SET = 0,
    PROPOSED_SPENDING_LIMIT_MICROS = 10,
    PROPOSED_SPENDING_LIMIT_TYPE = 11,
  }

  export enum ApprovedSpendingLimitCase {
    APPROVED_SPENDING_LIMIT_NOT_SET = 0,
    APPROVED_SPENDING_LIMIT_MICROS = 23,
    APPROVED_SPENDING_LIMIT_TYPE = 24,
  }
}

