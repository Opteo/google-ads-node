// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_group_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupTypeEnum): AdGroupTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupTypeEnum;
  static deserializeBinaryFromReader(message: AdGroupTypeEnum, reader: jspb.BinaryReader): AdGroupTypeEnum;
}

export namespace AdGroupTypeEnum {
  export type AsObject = {
  }

  export enum AdGroupType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH_STANDARD = 2,
    DISPLAY_STANDARD = 3,
    SHOPPING_PRODUCT_ADS = 4,
    HOTEL_ADS = 6,
    SHOPPING_SMART_ADS = 7,
    VIDEO_BUMPER = 8,
    VIDEO_TRUE_VIEW_IN_STREAM = 9,
    VIDEO_TRUE_VIEW_IN_DISPLAY = 10,
    VIDEO_NON_SKIPPABLE_IN_STREAM = 11,
    VIDEO_OUTSTREAM = 12,
    SEARCH_DYNAMIC_ADS = 13,
    SHOPPING_COMPARISON_LISTING_ADS = 14,
  }
}

