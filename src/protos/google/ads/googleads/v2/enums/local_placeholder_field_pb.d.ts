// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/local_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LocalPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocalPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LocalPlaceholderFieldEnum): LocalPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocalPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocalPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: LocalPlaceholderFieldEnum, reader: jspb.BinaryReader): LocalPlaceholderFieldEnum;
}

export namespace LocalPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum LocalPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DEAL_ID = 2,
    DEAL_NAME = 3,
    SUBTITLE = 4,
    DESCRIPTION = 5,
    PRICE = 6,
    FORMATTED_PRICE = 7,
    SALE_PRICE = 8,
    FORMATTED_SALE_PRICE = 9,
    IMAGE_URL = 10,
    ADDRESS = 11,
    CATEGORY = 12,
    CONTEXTUAL_KEYWORDS = 13,
    FINAL_URLS = 14,
    FINAL_MOBILE_URLS = 15,
    TRACKING_URL = 16,
    ANDROID_APP_LINK = 17,
    SIMILAR_DEAL_IDS = 18,
    IOS_APP_LINK = 19,
    IOS_APP_STORE_ID = 20,
  }
}

