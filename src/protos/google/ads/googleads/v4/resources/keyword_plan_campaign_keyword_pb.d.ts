// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/keyword_plan_campaign_keyword.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_keyword_match_type_pb from "../../../../../google/ads/googleads/v4/enums/keyword_match_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanCampaignKeyword extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasKeywordPlanCampaign(): boolean;
  clearKeywordPlanCampaign(): void;
  getKeywordPlanCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasText(): boolean;
  clearText(): void;
  getText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setText(value?: google_protobuf_wrappers_pb.StringValue): void;

  getMatchType(): google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap[keyof google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap];
  setMatchType(value: google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap[keyof google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap]): void;

  hasNegative(): boolean;
  clearNegative(): void;
  getNegative(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setNegative(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCampaignKeyword.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCampaignKeyword): KeywordPlanCampaignKeyword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanCampaignKeyword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCampaignKeyword;
  static deserializeBinaryFromReader(message: KeywordPlanCampaignKeyword, reader: jspb.BinaryReader): KeywordPlanCampaignKeyword;
}

export namespace KeywordPlanCampaignKeyword {
  export type AsObject = {
    resourceName: string,
    keywordPlanCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    matchType: google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap[keyof google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap],
    negative?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

