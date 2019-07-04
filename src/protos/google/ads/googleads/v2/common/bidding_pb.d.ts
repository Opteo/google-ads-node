// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/bidding.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_page_one_promoted_strategy_goal_pb from "../../../../../google/ads/googleads/v2/enums/page_one_promoted_strategy_goal_pb";
import * as google_ads_googleads_v2_enums_target_impression_share_location_pb from "../../../../../google/ads/googleads/v2/enums/target_impression_share_location_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Commission extends jspb.Message {
  hasCommissionRateMicros(): boolean;
  clearCommissionRateMicros(): void;
  getCommissionRateMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCommissionRateMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Commission.AsObject;
  static toObject(includeInstance: boolean, msg: Commission): Commission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Commission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Commission;
  static deserializeBinaryFromReader(message: Commission, reader: jspb.BinaryReader): Commission;
}

export namespace Commission {
  export type AsObject = {
    commissionRateMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class EnhancedCpc extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnhancedCpc.AsObject;
  static toObject(includeInstance: boolean, msg: EnhancedCpc): EnhancedCpc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnhancedCpc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnhancedCpc;
  static deserializeBinaryFromReader(message: EnhancedCpc, reader: jspb.BinaryReader): EnhancedCpc;
}

export namespace EnhancedCpc {
  export type AsObject = {
  }
}

export class ManualCpc extends jspb.Message {
  hasEnhancedCpcEnabled(): boolean;
  clearEnhancedCpcEnabled(): void;
  getEnhancedCpcEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnhancedCpcEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualCpc.AsObject;
  static toObject(includeInstance: boolean, msg: ManualCpc): ManualCpc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualCpc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualCpc;
  static deserializeBinaryFromReader(message: ManualCpc, reader: jspb.BinaryReader): ManualCpc;
}

export namespace ManualCpc {
  export type AsObject = {
    enhancedCpcEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class ManualCpm extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualCpm.AsObject;
  static toObject(includeInstance: boolean, msg: ManualCpm): ManualCpm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualCpm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualCpm;
  static deserializeBinaryFromReader(message: ManualCpm, reader: jspb.BinaryReader): ManualCpm;
}

export namespace ManualCpm {
  export type AsObject = {
  }
}

export class ManualCpv extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManualCpv.AsObject;
  static toObject(includeInstance: boolean, msg: ManualCpv): ManualCpv.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManualCpv, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManualCpv;
  static deserializeBinaryFromReader(message: ManualCpv, reader: jspb.BinaryReader): ManualCpv;
}

export namespace ManualCpv {
  export type AsObject = {
  }
}

export class MaximizeConversions extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaximizeConversions.AsObject;
  static toObject(includeInstance: boolean, msg: MaximizeConversions): MaximizeConversions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaximizeConversions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaximizeConversions;
  static deserializeBinaryFromReader(message: MaximizeConversions, reader: jspb.BinaryReader): MaximizeConversions;
}

export namespace MaximizeConversions {
  export type AsObject = {
  }
}

export class MaximizeConversionValue extends jspb.Message {
  hasTargetRoas(): boolean;
  clearTargetRoas(): void;
  getTargetRoas(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTargetRoas(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaximizeConversionValue.AsObject;
  static toObject(includeInstance: boolean, msg: MaximizeConversionValue): MaximizeConversionValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaximizeConversionValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaximizeConversionValue;
  static deserializeBinaryFromReader(message: MaximizeConversionValue, reader: jspb.BinaryReader): MaximizeConversionValue;
}

export namespace MaximizeConversionValue {
  export type AsObject = {
    targetRoas?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
  }
}

export class PageOnePromoted extends jspb.Message {
  getStrategyGoal(): google_ads_googleads_v2_enums_page_one_promoted_strategy_goal_pb.PageOnePromotedStrategyGoalEnum.PageOnePromotedStrategyGoal;
  setStrategyGoal(value: google_ads_googleads_v2_enums_page_one_promoted_strategy_goal_pb.PageOnePromotedStrategyGoalEnum.PageOnePromotedStrategyGoal): void;

  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): void;
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBidModifier(): boolean;
  clearBidModifier(): void;
  getBidModifier(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setBidModifier(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasOnlyRaiseCpcBids(): boolean;
  clearOnlyRaiseCpcBids(): void;
  getOnlyRaiseCpcBids(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setOnlyRaiseCpcBids(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasRaiseCpcBidWhenBudgetConstrained(): boolean;
  clearRaiseCpcBidWhenBudgetConstrained(): void;
  getRaiseCpcBidWhenBudgetConstrained(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRaiseCpcBidWhenBudgetConstrained(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasRaiseCpcBidWhenQualityScoreIsLow(): boolean;
  clearRaiseCpcBidWhenQualityScoreIsLow(): void;
  getRaiseCpcBidWhenQualityScoreIsLow(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRaiseCpcBidWhenQualityScoreIsLow(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageOnePromoted.AsObject;
  static toObject(includeInstance: boolean, msg: PageOnePromoted): PageOnePromoted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageOnePromoted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageOnePromoted;
  static deserializeBinaryFromReader(message: PageOnePromoted, reader: jspb.BinaryReader): PageOnePromoted;
}

export namespace PageOnePromoted {
  export type AsObject = {
    strategyGoal: google_ads_googleads_v2_enums_page_one_promoted_strategy_goal_pb.PageOnePromotedStrategyGoalEnum.PageOnePromotedStrategyGoal,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    bidModifier?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    onlyRaiseCpcBids?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    raiseCpcBidWhenBudgetConstrained?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    raiseCpcBidWhenQualityScoreIsLow?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class TargetCpa extends jspb.Message {
  hasTargetCpaMicros(): boolean;
  clearTargetCpaMicros(): void;
  getTargetCpaMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTargetCpaMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): void;
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCpcBidFloorMicros(): boolean;
  clearCpcBidFloorMicros(): void;
  getCpcBidFloorMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidFloorMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetCpa.AsObject;
  static toObject(includeInstance: boolean, msg: TargetCpa): TargetCpa.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetCpa, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetCpa;
  static deserializeBinaryFromReader(message: TargetCpa, reader: jspb.BinaryReader): TargetCpa;
}

export namespace TargetCpa {
  export type AsObject = {
    targetCpaMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidFloorMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class TargetCpm extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetCpm.AsObject;
  static toObject(includeInstance: boolean, msg: TargetCpm): TargetCpm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetCpm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetCpm;
  static deserializeBinaryFromReader(message: TargetCpm, reader: jspb.BinaryReader): TargetCpm;
}

export namespace TargetCpm {
  export type AsObject = {
  }
}

export class TargetImpressionShare extends jspb.Message {
  getLocation(): google_ads_googleads_v2_enums_target_impression_share_location_pb.TargetImpressionShareLocationEnum.TargetImpressionShareLocation;
  setLocation(value: google_ads_googleads_v2_enums_target_impression_share_location_pb.TargetImpressionShareLocationEnum.TargetImpressionShareLocation): void;

  hasLocationFractionMicros(): boolean;
  clearLocationFractionMicros(): void;
  getLocationFractionMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLocationFractionMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): void;
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetImpressionShare.AsObject;
  static toObject(includeInstance: boolean, msg: TargetImpressionShare): TargetImpressionShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetImpressionShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetImpressionShare;
  static deserializeBinaryFromReader(message: TargetImpressionShare, reader: jspb.BinaryReader): TargetImpressionShare;
}

export namespace TargetImpressionShare {
  export type AsObject = {
    location: google_ads_googleads_v2_enums_target_impression_share_location_pb.TargetImpressionShareLocationEnum.TargetImpressionShareLocation,
    locationFractionMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class TargetOutrankShare extends jspb.Message {
  hasTargetOutrankShareMicros(): boolean;
  clearTargetOutrankShareMicros(): void;
  getTargetOutrankShareMicros(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setTargetOutrankShareMicros(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasCompetitorDomain(): boolean;
  clearCompetitorDomain(): void;
  getCompetitorDomain(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCompetitorDomain(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): void;
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasOnlyRaiseCpcBids(): boolean;
  clearOnlyRaiseCpcBids(): void;
  getOnlyRaiseCpcBids(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setOnlyRaiseCpcBids(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasRaiseCpcBidWhenQualityScoreIsLow(): boolean;
  clearRaiseCpcBidWhenQualityScoreIsLow(): void;
  getRaiseCpcBidWhenQualityScoreIsLow(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setRaiseCpcBidWhenQualityScoreIsLow(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetOutrankShare.AsObject;
  static toObject(includeInstance: boolean, msg: TargetOutrankShare): TargetOutrankShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetOutrankShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetOutrankShare;
  static deserializeBinaryFromReader(message: TargetOutrankShare, reader: jspb.BinaryReader): TargetOutrankShare;
}

export namespace TargetOutrankShare {
  export type AsObject = {
    targetOutrankShareMicros?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    competitorDomain?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    onlyRaiseCpcBids?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    raiseCpcBidWhenQualityScoreIsLow?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

export class TargetRoas extends jspb.Message {
  hasTargetRoas(): boolean;
  clearTargetRoas(): void;
  getTargetRoas(): google_protobuf_wrappers_pb.DoubleValue | undefined;
  setTargetRoas(value?: google_protobuf_wrappers_pb.DoubleValue): void;

  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): void;
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCpcBidFloorMicros(): boolean;
  clearCpcBidFloorMicros(): void;
  getCpcBidFloorMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidFloorMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetRoas.AsObject;
  static toObject(includeInstance: boolean, msg: TargetRoas): TargetRoas.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetRoas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetRoas;
  static deserializeBinaryFromReader(message: TargetRoas, reader: jspb.BinaryReader): TargetRoas;
}

export namespace TargetRoas {
  export type AsObject = {
    targetRoas?: google_protobuf_wrappers_pb.DoubleValue.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidFloorMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class TargetSpend extends jspb.Message {
  hasTargetSpendMicros(): boolean;
  clearTargetSpendMicros(): void;
  getTargetSpendMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTargetSpendMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): void;
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetSpend.AsObject;
  static toObject(includeInstance: boolean, msg: TargetSpend): TargetSpend.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetSpend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetSpend;
  static deserializeBinaryFromReader(message: TargetSpend, reader: jspb.BinaryReader): TargetSpend;
}

export namespace TargetSpend {
  export type AsObject = {
    targetSpendMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class PercentCpc extends jspb.Message {
  hasCpcBidCeilingMicros(): boolean;
  clearCpcBidCeilingMicros(): void;
  getCpcBidCeilingMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidCeilingMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasEnhancedCpcEnabled(): boolean;
  clearEnhancedCpcEnabled(): void;
  getEnhancedCpcEnabled(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setEnhancedCpcEnabled(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PercentCpc.AsObject;
  static toObject(includeInstance: boolean, msg: PercentCpc): PercentCpc.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PercentCpc, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PercentCpc;
  static deserializeBinaryFromReader(message: PercentCpc, reader: jspb.BinaryReader): PercentCpc;
}

export namespace PercentCpc {
  export type AsObject = {
    cpcBidCeilingMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    enhancedCpcEnabled?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

