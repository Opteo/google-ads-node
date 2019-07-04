// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/advertising_channel_sub_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdvertisingChannelSubTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdvertisingChannelSubTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdvertisingChannelSubTypeEnum): AdvertisingChannelSubTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdvertisingChannelSubTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvertisingChannelSubTypeEnum;
  static deserializeBinaryFromReader(message: AdvertisingChannelSubTypeEnum, reader: jspb.BinaryReader): AdvertisingChannelSubTypeEnum;
}

export namespace AdvertisingChannelSubTypeEnum {
  export type AsObject = {
  }

  export enum AdvertisingChannelSubType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH_MOBILE_APP = 2,
    DISPLAY_MOBILE_APP = 3,
    SEARCH_EXPRESS = 4,
    DISPLAY_EXPRESS = 5,
    SHOPPING_SMART_ADS = 6,
    DISPLAY_GMAIL_AD = 7,
    DISPLAY_SMART_CAMPAIGN = 8,
    VIDEO_OUTSTREAM = 9,
    VIDEO_ACTION = 10,
    VIDEO_NON_SKIPPABLE = 11,
    APP_CAMPAIGN = 12,
    APP_CAMPAIGN_FOR_ENGAGEMENT = 13,
    SHOPPING_COMPARISON_LISTING_ADS = 15,
  }
}

