// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/hotel_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class HotelPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: HotelPlaceholderFieldEnum): HotelPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: HotelPlaceholderFieldEnum, reader: jspb.BinaryReader): HotelPlaceholderFieldEnum;
}

export namespace HotelPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum HotelPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PROPERTY_ID = 2,
    PROPERTY_NAME = 3,
    DESTINATION_NAME = 4,
    DESCRIPTION = 5,
    ADDRESS = 6,
    PRICE = 7,
    FORMATTED_PRICE = 8,
    SALE_PRICE = 9,
    FORMATTED_SALE_PRICE = 10,
    IMAGE_URL = 11,
    CATEGORY = 12,
    STAR_RATING = 13,
    CONTEXTUAL_KEYWORDS = 14,
    FINAL_URLS = 15,
    FINAL_MOBILE_URLS = 16,
    TRACKING_URL = 17,
    ANDROID_APP_LINK = 18,
    SIMILAR_PROPERTY_IDS = 19,
    IOS_APP_LINK = 20,
    IOS_APP_STORE_ID = 21,
  }
}

