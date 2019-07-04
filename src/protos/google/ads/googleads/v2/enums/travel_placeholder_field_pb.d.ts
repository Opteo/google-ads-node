// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/travel_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TravelPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TravelPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TravelPlaceholderFieldEnum): TravelPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TravelPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TravelPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: TravelPlaceholderFieldEnum, reader: jspb.BinaryReader): TravelPlaceholderFieldEnum;
}

export namespace TravelPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum TravelPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DESTINATION_ID = 2,
    ORIGIN_ID = 3,
    TITLE = 4,
    DESTINATION_NAME = 5,
    ORIGIN_NAME = 6,
    PRICE = 7,
    FORMATTED_PRICE = 8,
    SALE_PRICE = 9,
    FORMATTED_SALE_PRICE = 10,
    IMAGE_URL = 11,
    CATEGORY = 12,
    CONTEXTUAL_KEYWORDS = 13,
    DESTINATION_ADDRESS = 14,
    FINAL_URL = 15,
    FINAL_MOBILE_URLS = 16,
    TRACKING_URL = 17,
    ANDROID_APP_LINK = 18,
    SIMILAR_DESTINATION_IDS = 19,
    IOS_APP_LINK = 20,
    IOS_APP_STORE_ID = 21,
  }
}

