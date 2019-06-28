// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/bidding_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BiddingErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingErrorEnum): BiddingErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiddingErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingErrorEnum;
  static deserializeBinaryFromReader(message: BiddingErrorEnum, reader: jspb.BinaryReader): BiddingErrorEnum;
}

export namespace BiddingErrorEnum {
  export type AsObject = {
  }

  export enum BiddingError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BIDDING_STRATEGY_TRANSITION_NOT_ALLOWED = 2,
    CANNOT_ATTACH_BIDDING_STRATEGY_TO_CAMPAIGN = 7,
    INVALID_ANONYMOUS_BIDDING_STRATEGY_TYPE = 10,
    INVALID_BIDDING_STRATEGY_TYPE = 14,
    INVALID_BID = 17,
    BIDDING_STRATEGY_NOT_AVAILABLE_FOR_ACCOUNT_TYPE = 18,
    CONVERSION_TRACKING_NOT_ENABLED = 19,
    NOT_ENOUGH_CONVERSIONS = 20,
    CANNOT_CREATE_CAMPAIGN_WITH_BIDDING_STRATEGY = 21,
    CANNOT_TARGET_CONTENT_NETWORK_ONLY_WITH_CAMPAIGN_LEVEL_POP_BIDDING_STRATEGY = 23,
    BIDDING_STRATEGY_NOT_SUPPORTED_WITH_AD_SCHEDULE = 24,
    PAY_PER_CONVERSION_NOT_AVAILABLE_FOR_CUSTOMER = 25,
    PAY_PER_CONVERSION_NOT_ALLOWED_WITH_TARGET_CPA = 26,
    BIDDING_STRATEGY_NOT_ALLOWED_FOR_SEARCH_ONLY_CAMPAIGNS = 27,
    BIDDING_STRATEGY_NOT_SUPPORTED_IN_DRAFTS_OR_EXPERIMENTS = 28,
    BIDDING_STRATEGY_TYPE_DOES_NOT_SUPPORT_PRODUCT_TYPE_ADGROUP_CRITERION = 29,
    BID_TOO_SMALL = 30,
    BID_TOO_BIG = 31,
    BID_TOO_MANY_FRACTIONAL_DIGITS = 32,
    INVALID_DOMAIN_NAME = 33,
    NOT_COMPATIBLE_WITH_PAYMENT_MODE = 34,
    NOT_COMPATIBLE_WITH_BUDGET_TYPE = 35,
    NOT_COMPATIBLE_WITH_BIDDING_STRATEGY_TYPE = 36,
  }
}

