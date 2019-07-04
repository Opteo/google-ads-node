// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/multiplier_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MultiplierErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiplierErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MultiplierErrorEnum): MultiplierErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiplierErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiplierErrorEnum;
  static deserializeBinaryFromReader(message: MultiplierErrorEnum, reader: jspb.BinaryReader): MultiplierErrorEnum;
}

export namespace MultiplierErrorEnum {
  export type AsObject = {
  }

  export enum MultiplierError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MULTIPLIER_TOO_HIGH = 2,
    MULTIPLIER_TOO_LOW = 3,
    TOO_MANY_FRACTIONAL_DIGITS = 4,
    MULTIPLIER_NOT_ALLOWED_FOR_BIDDING_STRATEGY = 5,
    MULTIPLIER_NOT_ALLOWED_WHEN_BASE_BID_IS_MISSING = 6,
    NO_MULTIPLIER_SPECIFIED = 7,
    MULTIPLIER_CAUSES_BID_TO_EXCEED_DAILY_BUDGET = 8,
    MULTIPLIER_CAUSES_BID_TO_EXCEED_MONTHLY_BUDGET = 9,
    MULTIPLIER_CAUSES_BID_TO_EXCEED_CUSTOM_BUDGET = 10,
    MULTIPLIER_CAUSES_BID_TO_EXCEED_MAX_ALLOWED_BID = 11,
    BID_LESS_THAN_MIN_ALLOWED_BID_WITH_MULTIPLIER = 12,
    MULTIPLIER_AND_BIDDING_STRATEGY_TYPE_MISMATCH = 13,
  }
}

