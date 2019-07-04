// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/keyword_plan_campaign_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanCampaignErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanCampaignErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanCampaignErrorEnum): KeywordPlanCampaignErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanCampaignErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanCampaignErrorEnum;
  static deserializeBinaryFromReader(message: KeywordPlanCampaignErrorEnum, reader: jspb.BinaryReader): KeywordPlanCampaignErrorEnum;
}

export namespace KeywordPlanCampaignErrorEnum {
  export type AsObject = {
  }

  export enum KeywordPlanCampaignError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_NAME = 2,
    INVALID_LANGUAGES = 3,
    INVALID_GEOS = 4,
    DUPLICATE_NAME = 5,
    MAX_GEOS_EXCEEDED = 6,
  }
}

