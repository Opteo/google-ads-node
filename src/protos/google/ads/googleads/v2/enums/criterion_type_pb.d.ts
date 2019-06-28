// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/criterion_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CriterionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CriterionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CriterionTypeEnum): CriterionTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CriterionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CriterionTypeEnum;
  static deserializeBinaryFromReader(message: CriterionTypeEnum, reader: jspb.BinaryReader): CriterionTypeEnum;
}

export namespace CriterionTypeEnum {
  export type AsObject = {
  }

  export enum CriterionType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    KEYWORD = 2,
    PLACEMENT = 3,
    MOBILE_APP_CATEGORY = 4,
    MOBILE_APPLICATION = 5,
    DEVICE = 6,
    LOCATION = 7,
    LISTING_GROUP = 8,
    AD_SCHEDULE = 9,
    AGE_RANGE = 10,
    GENDER = 11,
    INCOME_RANGE = 12,
    PARENTAL_STATUS = 13,
    YOUTUBE_VIDEO = 14,
    YOUTUBE_CHANNEL = 15,
    USER_LIST = 16,
    PROXIMITY = 17,
    TOPIC = 18,
    LISTING_SCOPE = 19,
    LANGUAGE = 20,
    IP_BLOCK = 21,
    CONTENT_LABEL = 22,
    CARRIER = 23,
    USER_INTEREST = 24,
    WEBPAGE = 25,
    OPERATING_SYSTEM_VERSION = 26,
    APP_PAYMENT_MODEL = 27,
    MOBILE_DEVICE = 28,
    CUSTOM_AFFINITY = 29,
    CUSTOM_INTENT = 30,
    LOCATION_GROUP = 31,
  }
}

