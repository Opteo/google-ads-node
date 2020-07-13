// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/ad_group_ad.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_policy_pb from "../../../../../google/ads/googleads/v4/common/policy_pb";
import * as google_ads_googleads_v4_enums_ad_group_ad_status_pb from "../../../../../google/ads/googleads/v4/enums/ad_group_ad_status_pb";
import * as google_ads_googleads_v4_enums_ad_strength_pb from "../../../../../google/ads/googleads/v4/enums/ad_strength_pb";
import * as google_ads_googleads_v4_enums_policy_approval_status_pb from "../../../../../google/ads/googleads/v4/enums/policy_approval_status_pb";
import * as google_ads_googleads_v4_enums_policy_review_status_pb from "../../../../../google/ads/googleads/v4/enums/policy_review_status_pb";
import * as google_ads_googleads_v4_resources_ad_pb from "../../../../../google/ads/googleads/v4/resources/ad_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupAd extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getStatus(): google_ads_googleads_v4_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatusMap[keyof google_ads_googleads_v4_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatusMap[keyof google_ads_googleads_v4_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatusMap]): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAd(): boolean;
  clearAd(): void;
  getAd(): google_ads_googleads_v4_resources_ad_pb.Ad | undefined;
  setAd(value?: google_ads_googleads_v4_resources_ad_pb.Ad): void;

  hasPolicySummary(): boolean;
  clearPolicySummary(): void;
  getPolicySummary(): AdGroupAdPolicySummary | undefined;
  setPolicySummary(value?: AdGroupAdPolicySummary): void;

  getAdStrength(): google_ads_googleads_v4_enums_ad_strength_pb.AdStrengthEnum.AdStrengthMap[keyof google_ads_googleads_v4_enums_ad_strength_pb.AdStrengthEnum.AdStrengthMap];
  setAdStrength(value: google_ads_googleads_v4_enums_ad_strength_pb.AdStrengthEnum.AdStrengthMap[keyof google_ads_googleads_v4_enums_ad_strength_pb.AdStrengthEnum.AdStrengthMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAd.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAd): AdGroupAd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupAd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAd;
  static deserializeBinaryFromReader(message: AdGroupAd, reader: jspb.BinaryReader): AdGroupAd;
}

export namespace AdGroupAd {
  export type AsObject = {
    resourceName: string,
    status: google_ads_googleads_v4_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatusMap[keyof google_ads_googleads_v4_enums_ad_group_ad_status_pb.AdGroupAdStatusEnum.AdGroupAdStatusMap],
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    ad?: google_ads_googleads_v4_resources_ad_pb.Ad.AsObject,
    policySummary?: AdGroupAdPolicySummary.AsObject,
    adStrength: google_ads_googleads_v4_enums_ad_strength_pb.AdStrengthEnum.AdStrengthMap[keyof google_ads_googleads_v4_enums_ad_strength_pb.AdStrengthEnum.AdStrengthMap],
  }
}

export class AdGroupAdPolicySummary extends jspb.Message {
  clearPolicyTopicEntriesList(): void;
  getPolicyTopicEntriesList(): Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry>;
  setPolicyTopicEntriesList(value: Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry>): void;
  addPolicyTopicEntries(value?: google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry, index?: number): google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry;

  getReviewStatus(): google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap];
  setReviewStatus(value: google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap]): void;

  getApprovalStatus(): google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap];
  setApprovalStatus(value: google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdPolicySummary.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdPolicySummary): AdGroupAdPolicySummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupAdPolicySummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdPolicySummary;
  static deserializeBinaryFromReader(message: AdGroupAdPolicySummary, reader: jspb.BinaryReader): AdGroupAdPolicySummary;
}

export namespace AdGroupAdPolicySummary {
  export type AsObject = {
    policyTopicEntriesList: Array<google_ads_googleads_v4_common_policy_pb.PolicyTopicEntry.AsObject>,
    reviewStatus: google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap[keyof google_ads_googleads_v4_enums_policy_review_status_pb.PolicyReviewStatusEnum.PolicyReviewStatusMap],
    approvalStatus: google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap[keyof google_ads_googleads_v4_enums_policy_approval_status_pb.PolicyApprovalStatusEnum.PolicyApprovalStatusMap],
  }
}

