// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/bidding_strategy_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BiddingStrategyErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiddingStrategyErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BiddingStrategyErrorEnum): BiddingStrategyErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiddingStrategyErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiddingStrategyErrorEnum;
  static deserializeBinaryFromReader(message: BiddingStrategyErrorEnum, reader: jspb.BinaryReader): BiddingStrategyErrorEnum;
}

export namespace BiddingStrategyErrorEnum {
  export type AsObject = {
  }

  export enum BiddingStrategyError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DUPLICATE_NAME = 2,
    CANNOT_CHANGE_BIDDING_STRATEGY_TYPE = 3,
    CANNOT_REMOVE_ASSOCIATED_STRATEGY = 4,
    BIDDING_STRATEGY_NOT_SUPPORTED = 5,
    INCOMPATIBLE_BIDDING_STRATEGY_AND_BIDDING_STRATEGY_GOAL_TYPE = 6,
  }
}

