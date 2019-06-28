// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/keyword_plan_forecast_interval.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanForecastIntervalEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanForecastIntervalEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanForecastIntervalEnum): KeywordPlanForecastIntervalEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanForecastIntervalEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanForecastIntervalEnum;
  static deserializeBinaryFromReader(message: KeywordPlanForecastIntervalEnum, reader: jspb.BinaryReader): KeywordPlanForecastIntervalEnum;
}

export namespace KeywordPlanForecastIntervalEnum {
  export type AsObject = {
  }

  export enum KeywordPlanForecastInterval {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NEXT_WEEK = 3,
    NEXT_MONTH = 4,
    NEXT_QUARTER = 5,
  }
}

