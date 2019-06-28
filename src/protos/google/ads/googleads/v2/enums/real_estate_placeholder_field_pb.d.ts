// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/real_estate_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class RealEstatePlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RealEstatePlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: RealEstatePlaceholderFieldEnum): RealEstatePlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RealEstatePlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RealEstatePlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: RealEstatePlaceholderFieldEnum, reader: jspb.BinaryReader): RealEstatePlaceholderFieldEnum;
}

export namespace RealEstatePlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum RealEstatePlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LISTING_ID = 2,
    LISTING_NAME = 3,
    CITY_NAME = 4,
    DESCRIPTION = 5,
    ADDRESS = 6,
    PRICE = 7,
    FORMATTED_PRICE = 8,
    IMAGE_URL = 9,
    PROPERTY_TYPE = 10,
    LISTING_TYPE = 11,
    CONTEXTUAL_KEYWORDS = 12,
    FINAL_URLS = 13,
    FINAL_MOBILE_URLS = 14,
    TRACKING_URL = 15,
    ANDROID_APP_LINK = 16,
    SIMILAR_LISTING_IDS = 17,
    IOS_APP_LINK = 18,
    IOS_APP_STORE_ID = 19,
  }
}

