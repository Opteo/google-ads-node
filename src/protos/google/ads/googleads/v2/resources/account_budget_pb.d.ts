// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/account_budget.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_account_budget_proposal_type_pb from "../../../../../google/ads/googleads/v2/enums/account_budget_proposal_type_pb";
import * as google_ads_googleads_v2_enums_account_budget_status_pb from "../../../../../google/ads/googleads/v2/enums/account_budget_status_pb";
import * as google_ads_googleads_v2_enums_spending_limit_type_pb from "../../../../../google/ads/googleads/v2/enums/spending_limit_type_pb";
import * as google_ads_googleads_v2_enums_time_type_pb from "../../../../../google/ads/googleads/v2/enums/time_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccountBudget extends jspb.Message {
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

  getStatus(): google_ads_googleads_v2_enums_account_budget_status_pb.AccountBudgetStatusEnum.AccountBudgetStatus;
  setStatus(value: google_ads_googleads_v2_enums_account_budget_status_pb.AccountBudgetStatusEnum.AccountBudgetStatus): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasProposedStartDateTime(): boolean;
  clearProposedStartDateTime(): void;
  getProposedStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setProposedStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasApprovedStartDateTime(): boolean;
  clearApprovedStartDateTime(): void;
  getApprovedStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setApprovedStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTotalAdjustmentsMicros(): boolean;
  clearTotalAdjustmentsMicros(): void;
  getTotalAdjustmentsMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalAdjustmentsMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAmountServedMicros(): boolean;
  clearAmountServedMicros(): void;
  getAmountServedMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAmountServedMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasPurchaseOrderNumber(): boolean;
  clearPurchaseOrderNumber(): void;
  getPurchaseOrderNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPurchaseOrderNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasNotes(): boolean;
  clearNotes(): void;
  getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
  setNotes(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPendingProposal(): boolean;
  clearPendingProposal(): void;
  getPendingProposal(): AccountBudget.PendingAccountBudgetProposal | undefined;
  setPendingProposal(value?: AccountBudget.PendingAccountBudgetProposal): void;

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

  hasAdjustedSpendingLimitMicros(): boolean;
  clearAdjustedSpendingLimitMicros(): void;
  getAdjustedSpendingLimitMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAdjustedSpendingLimitMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasAdjustedSpendingLimitType(): boolean;
  clearAdjustedSpendingLimitType(): void;
  getAdjustedSpendingLimitType(): google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType;
  setAdjustedSpendingLimitType(value: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType): void;

  getProposedEndTimeCase(): AccountBudget.ProposedEndTimeCase;
  getApprovedEndTimeCase(): AccountBudget.ApprovedEndTimeCase;
  getProposedSpendingLimitCase(): AccountBudget.ProposedSpendingLimitCase;
  getApprovedSpendingLimitCase(): AccountBudget.ApprovedSpendingLimitCase;
  getAdjustedSpendingLimitCase(): AccountBudget.AdjustedSpendingLimitCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBudget.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBudget): AccountBudget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBudget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBudget;
  static deserializeBinaryFromReader(message: AccountBudget, reader: jspb.BinaryReader): AccountBudget;
}

export namespace AccountBudget {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    billingSetup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_account_budget_status_pb.AccountBudgetStatusEnum.AccountBudgetStatus,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposedStartDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    approvedStartDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    totalAdjustmentsMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    amountServedMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    purchaseOrderNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
    notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pendingProposal?: AccountBudget.PendingAccountBudgetProposal.AsObject,
    proposedEndDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    proposedEndTimeType: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType,
    approvedEndDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    approvedEndTimeType: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType,
    proposedSpendingLimitMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    proposedSpendingLimitType: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType,
    approvedSpendingLimitMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    approvedSpendingLimitType: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType,
    adjustedSpendingLimitMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    adjustedSpendingLimitType: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType,
  }

  export class PendingAccountBudgetProposal extends jspb.Message {
    hasAccountBudgetProposal(): boolean;
    clearAccountBudgetProposal(): void;
    getAccountBudgetProposal(): google_protobuf_wrappers_pb.StringValue | undefined;
    setAccountBudgetProposal(value?: google_protobuf_wrappers_pb.StringValue): void;

    getProposalType(): google_ads_googleads_v2_enums_account_budget_proposal_type_pb.AccountBudgetProposalTypeEnum.AccountBudgetProposalType;
    setProposalType(value: google_ads_googleads_v2_enums_account_budget_proposal_type_pb.AccountBudgetProposalTypeEnum.AccountBudgetProposalType): void;

    hasName(): boolean;
    clearName(): void;
    getName(): google_protobuf_wrappers_pb.StringValue | undefined;
    setName(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasStartDateTime(): boolean;
    clearStartDateTime(): void;
    getStartDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setStartDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasPurchaseOrderNumber(): boolean;
    clearPurchaseOrderNumber(): void;
    getPurchaseOrderNumber(): google_protobuf_wrappers_pb.StringValue | undefined;
    setPurchaseOrderNumber(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): google_protobuf_wrappers_pb.StringValue | undefined;
    setNotes(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasCreationDateTime(): boolean;
    clearCreationDateTime(): void;
    getCreationDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setCreationDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasEndDateTime(): boolean;
    clearEndDateTime(): void;
    getEndDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
    setEndDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

    hasEndTimeType(): boolean;
    clearEndTimeType(): void;
    getEndTimeType(): google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType;
    setEndTimeType(value: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType): void;

    hasSpendingLimitMicros(): boolean;
    clearSpendingLimitMicros(): void;
    getSpendingLimitMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
    setSpendingLimitMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

    hasSpendingLimitType(): boolean;
    clearSpendingLimitType(): void;
    getSpendingLimitType(): google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType;
    setSpendingLimitType(value: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType): void;

    getEndTimeCase(): PendingAccountBudgetProposal.EndTimeCase;
    getSpendingLimitCase(): PendingAccountBudgetProposal.SpendingLimitCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PendingAccountBudgetProposal.AsObject;
    static toObject(includeInstance: boolean, msg: PendingAccountBudgetProposal): PendingAccountBudgetProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PendingAccountBudgetProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PendingAccountBudgetProposal;
    static deserializeBinaryFromReader(message: PendingAccountBudgetProposal, reader: jspb.BinaryReader): PendingAccountBudgetProposal;
  }

  export namespace PendingAccountBudgetProposal {
    export type AsObject = {
      accountBudgetProposal?: google_protobuf_wrappers_pb.StringValue.AsObject,
      proposalType: google_ads_googleads_v2_enums_account_budget_proposal_type_pb.AccountBudgetProposalTypeEnum.AccountBudgetProposalType,
      name?: google_protobuf_wrappers_pb.StringValue.AsObject,
      startDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      purchaseOrderNumber?: google_protobuf_wrappers_pb.StringValue.AsObject,
      notes?: google_protobuf_wrappers_pb.StringValue.AsObject,
      creationDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      endDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
      endTimeType: google_ads_googleads_v2_enums_time_type_pb.TimeTypeEnum.TimeType,
      spendingLimitMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
      spendingLimitType: google_ads_googleads_v2_enums_spending_limit_type_pb.SpendingLimitTypeEnum.SpendingLimitType,
    }

    export enum EndTimeCase {
      END_TIME_NOT_SET = 0,
      END_DATE_TIME = 5,
      END_TIME_TYPE = 6,
    }

    export enum SpendingLimitCase {
      SPENDING_LIMIT_NOT_SET = 0,
      SPENDING_LIMIT_MICROS = 7,
      SPENDING_LIMIT_TYPE = 8,
    }
  }

  export enum ProposedEndTimeCase {
    PROPOSED_END_TIME_NOT_SET = 0,
    PROPOSED_END_DATE_TIME = 8,
    PROPOSED_END_TIME_TYPE = 9,
  }

  export enum ApprovedEndTimeCase {
    APPROVED_END_TIME_NOT_SET = 0,
    APPROVED_END_DATE_TIME = 10,
    APPROVED_END_TIME_TYPE = 11,
  }

  export enum ProposedSpendingLimitCase {
    PROPOSED_SPENDING_LIMIT_NOT_SET = 0,
    PROPOSED_SPENDING_LIMIT_MICROS = 12,
    PROPOSED_SPENDING_LIMIT_TYPE = 13,
  }

  export enum ApprovedSpendingLimitCase {
    APPROVED_SPENDING_LIMIT_NOT_SET = 0,
    APPROVED_SPENDING_LIMIT_MICROS = 14,
    APPROVED_SPENDING_LIMIT_TYPE = 15,
  }

  export enum AdjustedSpendingLimitCase {
    ADJUSTED_SPENDING_LIMIT_NOT_SET = 0,
    ADJUSTED_SPENDING_LIMIT_MICROS = 16,
    ADJUSTED_SPENDING_LIMIT_TYPE = 17,
  }
}

