// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/promotion_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PromotionPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionPlaceholderFieldEnum): PromotionPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: PromotionPlaceholderFieldEnum, reader: jspb.BinaryReader): PromotionPlaceholderFieldEnum;
}

export namespace PromotionPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum PromotionPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PROMOTION_TARGET = 2,
    DISCOUNT_MODIFIER = 3,
    PERCENT_OFF = 4,
    MONEY_AMOUNT_OFF = 5,
    PROMOTION_CODE = 6,
    ORDERS_OVER_AMOUNT = 7,
    PROMOTION_START = 8,
    PROMOTION_END = 9,
    OCCASION = 10,
    FINAL_URLS = 11,
    FINAL_MOBILE_URLS = 12,
    TRACKING_URL = 13,
    LANGUAGE = 14,
    FINAL_URL_SUFFIX = 15,
  }
}

