// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/recommendation_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class RecommendationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecommendationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RecommendationErrorEnum): RecommendationErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecommendationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecommendationErrorEnum;
  static deserializeBinaryFromReader(message: RecommendationErrorEnum, reader: jspb.BinaryReader): RecommendationErrorEnum;
}

export namespace RecommendationErrorEnum {
  export type AsObject = {
  }

  export enum RecommendationError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BUDGET_AMOUNT_TOO_SMALL = 2,
    BUDGET_AMOUNT_TOO_LARGE = 3,
    INVALID_BUDGET_AMOUNT = 4,
    POLICY_ERROR = 5,
    INVALID_BID_AMOUNT = 6,
    ADGROUP_KEYWORD_LIMIT = 7,
    RECOMMENDATION_ALREADY_APPLIED = 8,
    RECOMMENDATION_INVALIDATED = 9,
    TOO_MANY_OPERATIONS = 10,
    NO_OPERATIONS = 11,
    DIFFERENT_TYPES_NOT_SUPPORTED = 12,
    DUPLICATE_RESOURCE_NAME = 13,
    RECOMMENDATION_ALREADY_DISMISSED = 14,
    INVALID_APPLY_REQUEST = 15,
  }
}

