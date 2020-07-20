// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/reach_plan_age_range.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ReachPlanAgeRangeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReachPlanAgeRangeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ReachPlanAgeRangeEnum): ReachPlanAgeRangeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReachPlanAgeRangeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReachPlanAgeRangeEnum;
  static deserializeBinaryFromReader(message: ReachPlanAgeRangeEnum, reader: jspb.BinaryReader): ReachPlanAgeRangeEnum;
}

export namespace ReachPlanAgeRangeEnum {
  export type AsObject = {
  }

  export interface ReachPlanAgeRangeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    AGE_RANGE_18_24: 503001;
    AGE_RANGE_18_34: 2;
    AGE_RANGE_18_44: 3;
    AGE_RANGE_18_49: 4;
    AGE_RANGE_18_54: 5;
    AGE_RANGE_18_64: 6;
    AGE_RANGE_18_65_UP: 7;
    AGE_RANGE_21_34: 8;
    AGE_RANGE_25_34: 503002;
    AGE_RANGE_25_44: 9;
    AGE_RANGE_25_49: 10;
    AGE_RANGE_25_54: 11;
    AGE_RANGE_25_64: 12;
    AGE_RANGE_25_65_UP: 13;
    AGE_RANGE_35_44: 503003;
    AGE_RANGE_35_49: 14;
    AGE_RANGE_35_54: 15;
    AGE_RANGE_35_64: 16;
    AGE_RANGE_35_65_UP: 17;
    AGE_RANGE_45_54: 503004;
    AGE_RANGE_45_64: 18;
    AGE_RANGE_45_65_UP: 19;
    AGE_RANGE_50_65_UP: 20;
    AGE_RANGE_55_64: 503005;
    AGE_RANGE_55_65_UP: 21;
    AGE_RANGE_65_UP: 503006;
  }

  export const ReachPlanAgeRange: ReachPlanAgeRangeMap;
}

