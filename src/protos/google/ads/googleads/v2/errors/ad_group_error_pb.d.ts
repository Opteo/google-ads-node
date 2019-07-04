// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/ad_group_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupErrorEnum): AdGroupErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupErrorEnum;
  static deserializeBinaryFromReader(message: AdGroupErrorEnum, reader: jspb.BinaryReader): AdGroupErrorEnum;
}

export namespace AdGroupErrorEnum {
  export type AsObject = {
  }

  export enum AdGroupError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DUPLICATE_ADGROUP_NAME = 2,
    INVALID_ADGROUP_NAME = 3,
    ADVERTISER_NOT_ON_CONTENT_NETWORK = 5,
    BID_TOO_BIG = 6,
    BID_TYPE_AND_BIDDING_STRATEGY_MISMATCH = 7,
    MISSING_ADGROUP_NAME = 8,
    ADGROUP_LABEL_DOES_NOT_EXIST = 9,
    ADGROUP_LABEL_ALREADY_EXISTS = 10,
    INVALID_CONTENT_BID_CRITERION_TYPE_GROUP = 11,
    AD_GROUP_TYPE_NOT_VALID_FOR_ADVERTISING_CHANNEL_TYPE = 12,
    ADGROUP_TYPE_NOT_SUPPORTED_FOR_CAMPAIGN_SALES_COUNTRY = 13,
    CANNOT_ADD_ADGROUP_OF_TYPE_DSA_TO_CAMPAIGN_WITHOUT_DSA_SETTING = 14,
  }
}

