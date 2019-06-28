// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/campaign_budget_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignBudgetErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignBudgetErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignBudgetErrorEnum): CampaignBudgetErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignBudgetErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignBudgetErrorEnum;
  static deserializeBinaryFromReader(message: CampaignBudgetErrorEnum, reader: jspb.BinaryReader): CampaignBudgetErrorEnum;
}

export namespace CampaignBudgetErrorEnum {
  export type AsObject = {
  }

  export enum CampaignBudgetError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CAMPAIGN_BUDGET_CANNOT_BE_SHARED = 17,
    CAMPAIGN_BUDGET_REMOVED = 2,
    CAMPAIGN_BUDGET_IN_USE = 3,
    CAMPAIGN_BUDGET_PERIOD_NOT_AVAILABLE = 4,
    CANNOT_MODIFY_FIELD_OF_IMPLICITLY_SHARED_CAMPAIGN_BUDGET = 6,
    CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_IMPLICITLY_SHARED = 7,
    CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED_WITHOUT_NAME = 8,
    CANNOT_UPDATE_CAMPAIGN_BUDGET_TO_EXPLICITLY_SHARED = 9,
    CANNOT_USE_IMPLICITLY_SHARED_CAMPAIGN_BUDGET_WITH_MULTIPLE_CAMPAIGNS = 10,
    DUPLICATE_NAME = 11,
    MONEY_AMOUNT_IN_WRONG_CURRENCY = 12,
    MONEY_AMOUNT_LESS_THAN_CURRENCY_MINIMUM_CPC = 13,
    MONEY_AMOUNT_TOO_LARGE = 14,
    NEGATIVE_MONEY_AMOUNT = 15,
    NON_MULTIPLE_OF_MINIMUM_CURRENCY_UNIT = 16,
  }
}

