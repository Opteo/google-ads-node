// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/keyword_plan_ad_group_keyword.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_keyword_match_type_pb from "../../../../../google/ads/googleads/v4/enums/keyword_match_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanAdGroupKeyword extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasKeywordPlanAdGroup(): boolean;
  clearKeywordPlanAdGroup(): void;
  getKeywordPlanAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

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

  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;
  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasNegative(): boolean;
  clearNegative(): void;
  getNegative(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setNegative(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroupKeyword.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroupKeyword): KeywordPlanAdGroupKeyword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanAdGroupKeyword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroupKeyword;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroupKeyword, reader: jspb.BinaryReader): KeywordPlanAdGroupKeyword;
}

export namespace KeywordPlanAdGroupKeyword {
  export type AsObject = {
    resourceName: string,
    keywordPlanAdGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    matchType: google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap[keyof google_ads_googleads_v4_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchTypeMap],
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    negative?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

