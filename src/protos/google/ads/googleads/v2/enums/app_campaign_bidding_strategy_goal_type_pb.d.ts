// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/app_campaign_bidding_strategy_goal_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AppCampaignBiddingStrategyGoalTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppCampaignBiddingStrategyGoalTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AppCampaignBiddingStrategyGoalTypeEnum): AppCampaignBiddingStrategyGoalTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppCampaignBiddingStrategyGoalTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppCampaignBiddingStrategyGoalTypeEnum;
  static deserializeBinaryFromReader(message: AppCampaignBiddingStrategyGoalTypeEnum, reader: jspb.BinaryReader): AppCampaignBiddingStrategyGoalTypeEnum;
}

export namespace AppCampaignBiddingStrategyGoalTypeEnum {
  export type AsObject = {
  }

  export enum AppCampaignBiddingStrategyGoalType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    OPTIMIZE_INSTALLS_TARGET_INSTALL_COST = 2,
    OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST = 3,
    OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST = 4,
    OPTIMIZE_RETURN_ON_ADVERTISING_SPEND = 5,
  }
}

