// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/custom_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomPlaceholderFieldEnum): CustomPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: CustomPlaceholderFieldEnum, reader: jspb.BinaryReader): CustomPlaceholderFieldEnum;
}

export namespace CustomPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum CustomPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ID = 2,
    ID2 = 3,
    ITEM_TITLE = 4,
    ITEM_SUBTITLE = 5,
    ITEM_DESCRIPTION = 6,
    ITEM_ADDRESS = 7,
    PRICE = 8,
    FORMATTED_PRICE = 9,
    SALE_PRICE = 10,
    FORMATTED_SALE_PRICE = 11,
    IMAGE_URL = 12,
    ITEM_CATEGORY = 13,
    FINAL_URLS = 14,
    FINAL_MOBILE_URLS = 15,
    TRACKING_URL = 16,
    CONTEXTUAL_KEYWORDS = 17,
    ANDROID_APP_LINK = 18,
    SIMILAR_IDS = 19,
    IOS_APP_LINK = 20,
    IOS_APP_STORE_ID = 21,
  }
}

