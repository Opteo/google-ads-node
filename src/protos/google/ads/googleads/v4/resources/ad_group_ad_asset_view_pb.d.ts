// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/ad_group_ad_asset_view.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_policy_pb from "../../../../../google/ads/googleads/v4/common/policy_pb";
import * as google_ads_googleads_v4_enums_asset_field_type_pb from "../../../../../google/ads/googleads/v4/enums/asset_field_type_pb";
import * as google_ads_googleads_v4_enums_asset_performance_label_pb from "../../../../../google/ads/googleads/v4/enums/asset_performance_label_pb";
import * as google_ads_googleads_v4_enums_policy_approval_status_pb from "../../../../../google/ads/googleads/v4/enums/policy_approval_status_pb";
import * as google_ads_googleads_v4_enums_policy_review_status_pb from "../../../../../google/ads/googleads/v4/enums/policy_review_status_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupAdAssetView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;
  getAdGroupAd(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupAd(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAsset(value?: google_protobuf_wrappers_pb.StringValue): void;

  getFieldType(): google_ads_googleads_v4_enums_asset_field_type_pb.AssetFieldTypeEnum.AssetFieldTypeMap[keyof google_ads_googleads_v4_enums_asset_field_type_pb.AssetFieldTypeEnum.AssetFieldTypeMap];
  setFieldType(value: google_ads_googleads_v4_enums_asset_field_type_pb.AssetFieldTypeEnum.AssetFieldTypeMap[keyof google_ads_googleads_v4_enums_asset_field_type_pb.AssetFieldTypeEnum.AssetFieldTypeMap]): void;

  hasPolicySummary(): boolean;
  clearPolicySummary(): void;
  getPolicySummary(): AdGroupAdAssetPolicySummary | undefined;
  setPolicySummary(value?: AdGroupAdAssetPolicySummary): void;

  getPerformanceLabel(): google_ads_googleads_v4_enums_asset_performance_label_pb.AssetPerformanceLabelEnum.AssetPerformanceLabelMap[keyof google_ads_googleads_v4_enums_asset_performance_label_pb.AssetPerformanceLabelEnum.AssetPerformanceLabelMap];
  setPerformanceLabel(value: google_ads_googleads_v4_enums_asset_performance_label_pb.AssetPerformanceLabelEnum.AssetPerformanceLabelMap[keyof google_ads_googleads_v4_enums_asset_performance_label_pb.AssetPerformanceLabelEnum.AssetPerformanceLabelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdAssetView.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdAssetView): AdGroupAdAssetView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupAdAssetView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdAssetView;
  static deserializeBinaryFromReader(message: AdGroupAdAssetView, reader: jspb.BinaryReader): AdGroupAdAssetView;
}

export namespace AdGroupAdAssetView {
  export type AsObject = {
    resourceName: string,
    adGroupAd?: google_protobuf_wrappers_pb.StringValue.AsObject,
    asset?: google_protobuf_wrappers_pb.StringValue.AsObject,
    fieldType: google_ads_googleads_v4_enums_asset_field_type_pb.AssetFieldTypeEnum.AssetFieldTypeMap[keyof google_ads_googleads_v4_enums_asset_field_type_pb.AssetFieldTypeEnum.AssetFieldTypeMap],
    policySummary?: AdGroupAdAssetPolicySummary.AsObject,
    performanceLabel: google_ads_googleads_v4_enums_asset_performance_label_pb.AssetPerformanceLabelEnum.AssetPerformanceLabelMap[keyof google_ads_googleads_v4_enums_asset_performance_label_pb.AssetPerformanceLabelEnum.AssetPerformanceLabelMap],
  }
}

export class AdGroupAdAssetPolicySummary extends jspb.Message {
  clearPolicyTopicEntriesList(): void;
  getPolicyTopicEntriesList(): Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry>;
  setPolicyTopicEntriesList(value: Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry>): void;
  addPolicyTopicEntries(value?: google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry, index?: number): google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry;

  getReviewStatus(): google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap];
  setReviewStatus(value: google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap]): void;

  getApprovalStatus(): google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap];
  setApprovalStatus(value: google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdAssetPolicySummary.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdAssetPolicySummary): AdGroupAdAssetPolicySummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupAdAssetPolicySummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdAssetPolicySummary;
  static deserializeBinaryFromReader(message: AdGroupAdAssetPolicySummary, reader: jspb.BinaryReader): AdGroupAdAssetPolicySummary;
}

export namespace AdGroupAdAssetPolicySummary {
  export type AsObject = {
    policyTopicEntriesList: Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry.AsObject>,
    reviewStatus: google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap],
    approvalStatus: google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap],
  }
}

