// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/keyword_plan_campaign_keyword_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanCampaignKeywordErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCampaignKeywordErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCampaignKeywordErrorEnum): KeywordPlanCampaignKeywordErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanCampaignKeywordErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCampaignKeywordErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanCampaignKeywordErrorEnum, reader: jspb.BinaryReader): KeywordPlanCampaignKeywordErrorEnum;
}

export namespace KeywordPlanCampaignKeywordErrorEnum {
  export type AsObject = {
  }

  export interface KeywordPlanCampaignKeywordErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    CAMPAIGN_KEYWORD_IS_POSITIVE: 8;
  }

  export const KeywordPlanCampaignKeywordError: KeywordPlanCampaignKeywordErrorMap;
}

