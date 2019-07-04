// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/bidding_strategy_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BiddingStrategyTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingStrategyTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingStrategyTypeEnum): BiddingStrategyTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiddingStrategyTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingStrategyTypeEnum;
  static deserializeBinaryFromReader(message: BiddingStrategyTypeEnum, reader: jspb.BinaryReader): BiddingStrategyTypeEnum;
}

export namespace BiddingStrategyTypeEnum {
  export type AsObject = {
  }

  export enum BiddingStrategyType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    COMMISSION = 16,
    ENHANCED_CPC = 2,
    MANUAL_CPC = 3,
    MANUAL_CPM = 4,
    MANUAL_CPV = 13,
    MAXIMIZE_CONVERSIONS = 10,
    MAXIMIZE_CONVERSION_VALUE = 11,
    PAGE_ONE_PROMOTED = 5,
    PERCENT_CPC = 12,
    TARGET_CPA = 6,
    TARGET_CPM = 14,
    TARGET_IMPRESSION_SHARE = 15,
    TARGET_OUTRANK_SHARE = 7,
    TARGET_ROAS = 8,
    TARGET_SPEND = 9,
  }
}

