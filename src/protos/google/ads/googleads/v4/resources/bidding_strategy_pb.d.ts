// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/bidding_strategy.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_bidding_pb from "../../../../../google/ads/googleads/v4/common/bidding_pb";
import * as google_ads_googleads_v4_enums_bidding_strategy_status_pb from "../../../../../google/ads/googleads/v4/enums/bidding_strategy_status_pb";
import * as google_ads_googleads_v4_enums_bidding_strategy_type_pb from "../../../../../google/ads/googleads/v4/enums/bidding_strategy_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BiddingStrategy extends jspb.Message {
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

  getStatus(): google_ads_googleads_v4_enums_bidding_strategy_status_pb.BiddingStrategyStatusEnum.BiddingStrategyStatusMap[keyof google_ads_googleads_v4_enums_bidding_strategy_status_pb.BiddingStrategyStatusEnum.BiddingStrategyStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_bidding_strategy_status_pb.BiddingStrategyStatusEnum.BiddingStrategyStatusMap[keyof google_ads_googleads_v4_enums_bidding_strategy_status_pb.BiddingStrategyStatusEnum.BiddingStrategyStatusMap]): void;

  getType(): google_ads_googleads_v4_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyTypeMap[keyof google_ads_googleads_v4_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyTypeMap];
  setType(value: google_ads_googleads_v4_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyTypeMap[keyof google_ads_googleads_v4_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyTypeMap]): void;

  hasCampaignCount(): boolean;
  clearCampaignCount(): void;
  getCampaignCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCampaignCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasNonRemovedCampaignCount(): boolean;
  clearNonRemovedCampaignCount(): void;
  getNonRemovedCampaignCount(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setNonRemovedCampaignCount(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasEnhancedCpc(): boolean;
  clearEnhancedCpc(): void;
  getEnhancedCpc(): google_ads_googleads_v4_common_bidding_pb.EnhancedCpc | undefined;
  setEnhancedCpc(value?: google_ads_googleads_v4_common_bidding_pb.EnhancedCpc): void;

  hasTargetCpa(): boolean;
  clearTargetCpa(): void;
  getTargetCpa(): google_ads_googleads_v4_common_bidding_pb.TargetCpa | undefined;
  setTargetCpa(value?: google_ads_googleads_v4_common_bidding_pb.TargetCpa): void;

  hasTargetImpressionShare(): boolean;
  clearTargetImpressionShare(): void;
  getTargetImpressionShare(): google_ads_googleads_v4_common_bidding_pb.TargetImpressionShare | undefined;
  setTargetImpressionShare(value?: google_ads_googleads_v4_common_bidding_pb.TargetImpressionShare): void;

  hasTargetRoas(): boolean;
  clearTargetRoas(): void;
  getTargetRoas(): google_ads_googleads_v4_common_bidding_pb.TargetRoas | undefined;
  setTargetRoas(value?: google_ads_googleads_v4_common_bidding_pb.TargetRoas): void;

  hasTargetSpend(): boolean;
  clearTargetSpend(): void;
  getTargetSpend(): google_ads_googleads_v4_common_bidding_pb.TargetSpend | undefined;
  setTargetSpend(value?: google_ads_googleads_v4_common_bidding_pb.TargetSpend): void;

  getSchemeCase(): BiddingStrategy.SchemeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingStrategy.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingStrategy): BiddingStrategy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiddingStrategy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingStrategy;
  static deserializeBinaryFromReader(message: BiddingStrategy, reader: jspb.BinaryReader): BiddingStrategy;
}

export namespace BiddingStrategy {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v4_enums_bidding_strategy_status_pb.BiddingStrategyStatusEnum.BiddingStrategyStatusMap[keyof google_ads_googleads_v4_enums_bidding_strategy_status_pb.BiddingStrategyStatusEnum.BiddingStrategyStatusMap],
    type: google_ads_googleads_v4_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyTypeMap[keyof google_ads_googleads_v4_enums_bidding_strategy_type_pb.BiddingStrategyTypeEnum.BiddingStrategyTypeMap],
    campaignCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    nonRemovedCampaignCount?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    enhancedCpc?: google_ads_googleads_v4_common_bidding_pb.EnhancedCpc.AsObject,
    targetCpa?: google_ads_googleads_v4_common_bidding_pb.TargetCpa.AsObject,
    targetImpressionShare?: google_ads_googleads_v4_common_bidding_pb.TargetImpressionShare.AsObject,
    targetRoas?: google_ads_googleads_v4_common_bidding_pb.TargetRoas.AsObject,
    targetSpend?: google_ads_googleads_v4_common_bidding_pb.TargetSpend.AsObject,
  }

  export enum SchemeCase {
    SCHEME_NOT_SET = 0,
    ENHANCED_CPC = 7,
    TARGET_CPA = 9,
    TARGET_IMPRESSION_SHARE = 48,
    TARGET_ROAS = 11,
    TARGET_SPEND = 12,
  }
}

