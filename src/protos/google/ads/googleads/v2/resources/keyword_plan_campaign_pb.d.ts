// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/keyword_plan_campaign.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_keyword_plan_network_pb from "../../../../../google/ads/googleads/v2/enums/keyword_plan_network_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanCampaign extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasKeywordPlan(): boolean;
  clearKeywordPlan(): void;
  getKeywordPlan(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlan(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearLanguageConstantsList(): void;
  getLanguageConstantsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setLanguageConstantsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addLanguageConstants(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  getKeywordPlanNetwork(): google_ads_googleads_v2_enums_keyword_plan_network_pb.KeywordPlanNetworkEnum.KeywordPlanNetwork;
  setKeywordPlanNetwork(value: google_ads_googleads_v2_enums_keyword_plan_network_pb.KeywordPlanNetworkEnum.KeywordPlanNetwork): void;

  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;
  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearGeoTargetsList(): void;
  getGeoTargetsList(): Array<KeywordPlanGeoTarget>;
  setGeoTargetsList(value: Array<KeywordPlanGeoTarget>): void;
  addGeoTargets(value?: KeywordPlanGeoTarget, index?: number): KeywordPlanGeoTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCampaign.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCampaign): KeywordPlanCampaign.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanCampaign, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCampaign;
  static deserializeBinaryFromReader(message: KeywordPlanCampaign, reader: jspb.BinaryReader): KeywordPlanCampaign;
}

export namespace KeywordPlanCampaign {
  export type AsObject = {
    resourceName: string,
    keywordPlan?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    languageConstantsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    keywordPlanNetwork: google_ads_googleads_v2_enums_keyword_plan_network_pb.KeywordPlanNetworkEnum.KeywordPlanNetwork,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    geoTargetsList: Array<KeywordPlanGeoTarget.AsObject>,
  }
}

export class KeywordPlanGeoTarget extends jspb.Message {
  hasGeoTargetConstant(): boolean;
  clearGeoTargetConstant(): void;
  getGeoTargetConstant(): google_protobuf_wrappers_pb.StringValue | undefined;
  setGeoTargetConstant(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanGeoTarget.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanGeoTarget): KeywordPlanGeoTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanGeoTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanGeoTarget;
  static deserializeBinaryFromReader(message: KeywordPlanGeoTarget, reader: jspb.BinaryReader): KeywordPlanGeoTarget;
}

export namespace KeywordPlanGeoTarget {
  export type AsObject = {
    geoTargetConstant?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

