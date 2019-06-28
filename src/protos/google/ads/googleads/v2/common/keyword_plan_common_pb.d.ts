// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/keyword_plan_common.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_keyword_plan_competition_level_pb from "../../../../../google/ads/googleads/v2/enums/keyword_plan_competition_level_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanHistoricalMetrics extends jspb.Message {
  hasAvgMonthlySearches(): boolean;
  clearAvgMonthlySearches(): void;
  getAvgMonthlySearches(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAvgMonthlySearches(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getCompetition(): google_ads_googleads_v2_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel;
  setCompetition(value: google_ads_googleads_v2_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanHistoricalMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanHistoricalMetrics): KeywordPlanHistoricalMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanHistoricalMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanHistoricalMetrics;
  static deserializeBinaryFromReader(message: KeywordPlanHistoricalMetrics, reader: jspb.BinaryReader): KeywordPlanHistoricalMetrics;
}

export namespace KeywordPlanHistoricalMetrics {
  export type AsObject = {
    avgMonthlySearches?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    competition: google_ads_googleads_v2_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevel,
  }
}

