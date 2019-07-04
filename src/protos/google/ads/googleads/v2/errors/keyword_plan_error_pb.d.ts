// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/keyword_plan_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanErrorEnum): KeywordPlanErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanErrorEnum, reader: jspb.BinaryReader): KeywordPlanErrorEnum;
}

export namespace KeywordPlanErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BID_MULTIPLIER_OUT_OF_RANGE = 2,
    BID_TOO_HIGH = 3,
    BID_TOO_LOW = 4,
    BID_TOO_MANY_FRACTIONAL_DIGITS = 5,
    DAILY_BUDGET_TOO_LOW = 6,
    DAILY_BUDGET_TOO_MANY_FRACTIONAL_DIGITS = 7,
    INVALID_VALUE = 8,
    KEYWORD_PLAN_HAS_NO_KEYWORDS = 9,
    KEYWORD_PLAN_NOT_ENABLED = 10,
    KEYWORD_PLAN_NOT_FOUND = 11,
    MISSING_BID = 13,
    MISSING_FORECAST_PERIOD = 14,
    INVALID_FORECAST_DATE_RANGE = 15,
    INVALID_NAME = 16,
  }
}

