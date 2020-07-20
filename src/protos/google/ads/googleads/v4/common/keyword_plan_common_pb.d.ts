// package: google.ads.googleads.v4.common
// file: google/ads/googleads/v4/common/keyword_plan_common.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_keyword_plan_competition_level_pb from "../../../../../google/ads/googleads/v4/enums/keyword_plan_competition_level_pb";
import * as google_ads_googleads_v4_enums_month_of_year_pb from "../../../../../google/ads/googleads/v4/enums/month_of_year_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanHistoricalMetrics extends jspb.Message {
  hasAvgMonthlySearches(): boolean;
  clearAvgMonthlySearches(): void;
  getAvgMonthlySearches(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAvgMonthlySearches(value?: google_protobuf_wrappers_pb.Int64Value): void;

  clearMonthlySearchVolumesList(): void;
  getMonthlySearchVolumesList(): Array<MonthlySearchVolume>;
  setMonthlySearchVolumesList(value: Array<MonthlySearchVolume>): void;
  addMonthlySearchVolumes(value?: MonthlySearchVolume, index?: number): MonthlySearchVolume;

  getCompetition(): google_ads_googleads_v4_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevelMap[keyof google_ads_googleads_v4_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevelMap];
  setCompetition(value: google_ads_googleads_v4_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevelMap[keyof google_ads_googleads_v4_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevelMap]): void;

  hasCompetitionIndex(): boolean;
  clearCompetitionIndex(): void;
  getCompetitionIndex(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCompetitionIndex(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasLowTopOfPageBidMicros(): boolean;
  clearLowTopOfPageBidMicros(): void;
  getLowTopOfPageBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setLowTopOfPageBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasHighTopOfPageBidMicros(): boolean;
  clearHighTopOfPageBidMicros(): void;
  getHighTopOfPageBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setHighTopOfPageBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

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
    monthlySearchVolumesList: Array<MonthlySearchVolume.AsObject>,
    competition: google_ads_googleads_v4_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevelMap[keyof google_ads_googleads_v4_enums_keyword_plan_competition_level_pb.KeywordPlanCompetitionLevelEnum.KeywordPlanCompetitionLevelMap],
    competitionIndex?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    lowTopOfPageBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    highTopOfPageBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

export class MonthlySearchVolume extends jspb.Message {
  hasYear(): boolean;
  clearYear(): void;
  getYear(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setYear(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getMonth(): google_ads_googleads_v4_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYearMap[keyof google_ads_googleads_v4_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYearMap];
  setMonth(value: google_ads_googleads_v4_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYearMap[keyof google_ads_googleads_v4_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYearMap]): void;

  hasMonthlySearches(): boolean;
  clearMonthlySearches(): void;
  getMonthlySearches(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setMonthlySearches(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonthlySearchVolume.AsObject;
  static toObject(includeInstance: boolean, msg: MonthlySearchVolume): MonthlySearchVolume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonthlySearchVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonthlySearchVolume;
  static deserializeBinaryFromReader(message: MonthlySearchVolume, reader: jspb.BinaryReader): MonthlySearchVolume;
}

export namespace MonthlySearchVolume {
  export type AsObject = {
    year?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    month: google_ads_googleads_v4_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYearMap[keyof google_ads_googleads_v4_enums_month_of_year_pb.MonthOfYearEnum.MonthOfYearMap],
    monthlySearches?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

