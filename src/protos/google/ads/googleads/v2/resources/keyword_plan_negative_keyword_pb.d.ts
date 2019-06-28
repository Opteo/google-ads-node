// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/keyword_plan_negative_keyword.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_keyword_match_type_pb from "../../../../../google/ads/googleads/v2/enums/keyword_match_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanNegativeKeyword extends jspb.Message {
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

  getMatchType(): google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType;
  setMatchType(value: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanNegativeKeyword.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanNegativeKeyword): KeywordPlanNegativeKeyword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanNegativeKeyword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanNegativeKeyword;
  static deserializeBinaryFromReader(message: KeywordPlanNegativeKeyword, reader: jspb.BinaryReader): KeywordPlanNegativeKeyword;
}

export namespace KeywordPlanNegativeKeyword {
  export type AsObject = {
    resourceName: string,
    keywordPlanCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    text?: google_protobuf_wrappers_pb.StringValue.AsObject,
    matchType: google_ads_googleads_v2_enums_keyword_match_type_pb.KeywordMatchTypeEnum.KeywordMatchType,
  }
}

