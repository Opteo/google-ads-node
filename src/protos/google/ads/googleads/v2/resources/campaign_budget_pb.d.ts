// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_budget.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_budget_delivery_method_pb from "../../../../../google/ads/googleads/v2/enums/budget_delivery_method_pb";
import * as google_ads_googleads_v2_enums_budget_period_pb from "../../../../../google/ads/googleads/v2/enums/budget_period_pb";
import * as google_ads_googleads_v2_enums_budget_status_pb from "../../../../../google/ads/googleads/v2/enums/budget_status_pb";
import * as google_ads_googleads_v2_enums_budget_type_pb from "../../../../../google/ads/googleads/v2/enums/budget_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignBudget extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAmountMicros(): boolean;
  clearAmountMicros(): void;
  getAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTotalAmountMicros(): boolean;
  clearTotalAmountMicros(): void;
  getTotalAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTotalAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getStatus(): google_ads_googleads_v2_enums_budget_status_pb.BudgetStatusEnum.BudgetStatus;
  setStatus(value: google_ads_googleads_v2_enums_budget_status_pb.BudgetStatusEnum.BudgetStatus): void;

  getDeliveryMethod(): google_ads_googleads_v2_enums_budget_delivery_method_pb.BudgetDeliveryMethodEnum.BudgetDeliveryMethod;
  setDeliveryMethod(value: google_ads_googleads_v2_enums_budget_delivery_method_pb.BudgetDeliveryMethodEnum.BudgetDeliveryMethod): void;

  hasExplicitlyShared(): boolean;
  clearExplicitlyShared(): void;
  getExplicitlyShared(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setExplicitlyShared(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasReferenceCount(): boolean;
  clearReferenceCount(): void;
  getReferenceCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setReferenceCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHasRecommendedBudget(): boolean;
  clearHasRecommendedBudget(): void;
  getHasRecommendedBudget(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasRecommendedBudget(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasRecommendedBudgetAmountMicros(): boolean;
  clearRecommendedBudgetAmountMicros(): void;
  getRecommendedBudgetAmountMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRecommendedBudgetAmountMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getPeriod(): google_ads_googleads_v2_enums_budget_period_pb.BudgetPeriodEnum.BudgetPeriod;
  setPeriod(value: google_ads_googleads_v2_enums_budget_period_pb.BudgetPeriodEnum.BudgetPeriod): void;

  hasRecommendedBudgetEstimatedChangeWeeklyClicks(): boolean;
  clearRecommendedBudgetEstimatedChangeWeeklyClicks(): void;
  getRecommendedBudgetEstimatedChangeWeeklyClicks(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRecommendedBudgetEstimatedChangeWeeklyClicks(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasRecommendedBudgetEstimatedChangeWeeklyCostMicros(): boolean;
  clearRecommendedBudgetEstimatedChangeWeeklyCostMicros(): void;
  getRecommendedBudgetEstimatedChangeWeeklyCostMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRecommendedBudgetEstimatedChangeWeeklyCostMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasRecommendedBudgetEstimatedChangeWeeklyInteractions(): boolean;
  clearRecommendedBudgetEstimatedChangeWeeklyInteractions(): void;
  getRecommendedBudgetEstimatedChangeWeeklyInteractions(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRecommendedBudgetEstimatedChangeWeeklyInteractions(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasRecommendedBudgetEstimatedChangeWeeklyViews(): boolean;
  clearRecommendedBudgetEstimatedChangeWeeklyViews(): void;
  getRecommendedBudgetEstimatedChangeWeeklyViews(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setRecommendedBudgetEstimatedChangeWeeklyViews(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getType(): google_ads_googleads_v2_enums_budget_type_pb.BudgetTypeEnum.BudgetType;
  setType(value: google_ads_googleads_v2_enums_budget_type_pb.BudgetTypeEnum.BudgetType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignBudget.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignBudget): CampaignBudget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignBudget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignBudget;
  static deserializeBinaryFromReader(message: CampaignBudget, reader: jspb.BinaryReader): CampaignBudget;
}

export namespace CampaignBudget {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    amountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    totalAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    status: google_ads_googleads_v2_enums_budget_status_pb.BudgetStatusEnum.BudgetStatus,
    deliveryMethod: google_ads_googleads_v2_enums_budget_delivery_method_pb.BudgetDeliveryMethodEnum.BudgetDeliveryMethod,
    explicitlyShared?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    referenceCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    hasRecommendedBudget?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    recommendedBudgetAmountMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    period: google_ads_googleads_v2_enums_budget_period_pb.BudgetPeriodEnum.BudgetPeriod,
    recommendedBudgetEstimatedChangeWeeklyClicks?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    recommendedBudgetEstimatedChangeWeeklyCostMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    recommendedBudgetEstimatedChangeWeeklyInteractions?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    recommendedBudgetEstimatedChangeWeeklyViews?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_budget_type_pb.BudgetTypeEnum.BudgetType,
  }
}

