// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/campaign_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignErrorEnum): CampaignErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignErrorEnum;
  static deserializeBinaryFromReader(message: CampaignErrorEnum, reader: jspb.BinaryReader): CampaignErrorEnum;
}

export namespace CampaignErrorEnum {
  export type AsObject = {
  }

  export enum CampaignError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_TARGET_CONTENT_NETWORK = 3,
    CANNOT_TARGET_SEARCH_NETWORK = 4,
    CANNOT_TARGET_SEARCH_NETWORK_WITHOUT_GOOGLE_SEARCH = 5,
    CANNOT_TARGET_GOOGLE_SEARCH_FOR_CPM_CAMPAIGN = 6,
    CAMPAIGN_MUST_TARGET_AT_LEAST_ONE_NETWORK = 7,
    CANNOT_TARGET_PARTNER_SEARCH_NETWORK = 8,
    CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CRITERIA_LEVEL_BIDDING_STRATEGY = 9,
    CAMPAIGN_DURATION_MUST_CONTAIN_ALL_RUNNABLE_TRIALS = 10,
    CANNOT_MODIFY_FOR_TRIAL_CAMPAIGN = 11,
    DUPLICATE_CAMPAIGN_NAME = 12,
    INCOMPATIBLE_CAMPAIGN_FIELD = 13,
    INVALID_CAMPAIGN_NAME = 14,
    INVALID_AD_SERVING_OPTIMIZATION_STATUS = 15,
    INVALID_TRACKING_URL = 16,
    CANNOT_SET_BOTH_TRACKING_URL_TEMPLATE_AND_TRACKING_SETTING = 17,
    MAX_IMPRESSIONS_NOT_IN_RANGE = 18,
    TIME_UNIT_NOT_SUPPORTED = 19,
    INVALID_OPERATION_IF_SERVING_STATUS_HAS_ENDED = 20,
    BUDGET_CANNOT_BE_SHARED = 21,
    CAMPAIGN_CANNOT_USE_SHARED_BUDGET = 22,
    CANNOT_CHANGE_BUDGET_ON_CAMPAIGN_WITH_TRIALS = 23,
    CAMPAIGN_LABEL_DOES_NOT_EXIST = 24,
    CAMPAIGN_LABEL_ALREADY_EXISTS = 25,
    MISSING_SHOPPING_SETTING = 26,
    INVALID_SHOPPING_SALES_COUNTRY = 27,
    MISSING_UNIVERSAL_APP_CAMPAIGN_SETTING = 30,
    ADVERTISING_CHANNEL_TYPE_NOT_AVAILABLE_FOR_ACCOUNT_TYPE = 31,
    INVALID_ADVERTISING_CHANNEL_SUB_TYPE = 32,
    AT_LEAST_ONE_CONVERSION_MUST_BE_SELECTED = 33,
    CANNOT_SET_AD_ROTATION_MODE = 34,
    CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 35,
    CANNOT_SET_DATE_TO_PAST = 36,
    MISSING_HOTEL_CUSTOMER_LINK = 37,
    INVALID_HOTEL_CUSTOMER_LINK = 38,
    MISSING_HOTEL_SETTING = 39,
    CANNOT_USE_SHARED_CAMPAIGN_BUDGET_WHILE_PART_OF_CAMPAIGN_GROUP = 40,
    APP_NOT_FOUND = 41,
    SHOPPING_ENABLE_LOCAL_NOT_SUPPORTED_FOR_CAMPAIGN_TYPE = 42,
    MERCHANT_NOT_ALLOWED_FOR_COMPARISON_LISTING_ADS = 43,
    INSUFFICIENT_APP_INSTALLS_COUNT = 44,
  }
}

