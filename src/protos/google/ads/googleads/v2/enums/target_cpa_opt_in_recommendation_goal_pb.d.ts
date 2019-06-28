// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/target_cpa_opt_in_recommendation_goal.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TargetCpaOptInRecommendationGoalEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetCpaOptInRecommendationGoalEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TargetCpaOptInRecommendationGoalEnum): TargetCpaOptInRecommendationGoalEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetCpaOptInRecommendationGoalEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetCpaOptInRecommendationGoalEnum;
  static deserializeBinaryFromReader(message: TargetCpaOptInRecommendationGoalEnum, reader: jspb.BinaryReader): TargetCpaOptInRecommendationGoalEnum;
}

export namespace TargetCpaOptInRecommendationGoalEnum {
  export type AsObject = {
  }

  export enum TargetCpaOptInRecommendationGoal {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SAME_COST = 2,
    SAME_CONVERSIONS = 3,
    SAME_CPA = 4,
    CLOSEST_CPA = 5,
  }
}

