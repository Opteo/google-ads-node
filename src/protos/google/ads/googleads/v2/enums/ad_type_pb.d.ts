// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdTypeEnum): AdTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdTypeEnum;
  static deserializeBinaryFromReader(message: AdTypeEnum, reader: jspb.BinaryReader): AdTypeEnum;
}

export namespace AdTypeEnum {
  export type AsObject = {
  }

  export enum AdType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TEXT_AD = 2,
    EXPANDED_TEXT_AD = 3,
    CALL_ONLY_AD = 6,
    EXPANDED_DYNAMIC_SEARCH_AD = 7,
    HOTEL_AD = 8,
    SHOPPING_SMART_AD = 9,
    SHOPPING_PRODUCT_AD = 10,
    VIDEO_AD = 12,
    GMAIL_AD = 13,
    IMAGE_AD = 14,
    RESPONSIVE_SEARCH_AD = 15,
    LEGACY_RESPONSIVE_DISPLAY_AD = 16,
    APP_AD = 17,
    LEGACY_APP_INSTALL_AD = 18,
    RESPONSIVE_DISPLAY_AD = 19,
    HTML5_UPLOAD_AD = 21,
    DYNAMIC_HTML5_AD = 22,
    APP_ENGAGEMENT_AD = 23,
    SHOPPING_COMPARISON_LISTING_AD = 24,
  }
}

