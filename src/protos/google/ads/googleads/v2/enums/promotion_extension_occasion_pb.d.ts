// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/promotion_extension_occasion.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PromotionExtensionOccasionEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromotionExtensionOccasionEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PromotionExtensionOccasionEnum): PromotionExtensionOccasionEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PromotionExtensionOccasionEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromotionExtensionOccasionEnum;
  static deserializeBinaryFromReader(message: PromotionExtensionOccasionEnum, reader: jspb.BinaryReader): PromotionExtensionOccasionEnum;
}

export namespace PromotionExtensionOccasionEnum {
  export type AsObject = {
  }

  export enum PromotionExtensionOccasion {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NEW_YEARS = 2,
    CHINESE_NEW_YEAR = 3,
    VALENTINES_DAY = 4,
    EASTER = 5,
    MOTHERS_DAY = 6,
    FATHERS_DAY = 7,
    LABOR_DAY = 8,
    BACK_TO_SCHOOL = 9,
    HALLOWEEN = 10,
    BLACK_FRIDAY = 11,
    CYBER_MONDAY = 12,
    CHRISTMAS = 13,
    BOXING_DAY = 14,
    INDEPENDENCE_DAY = 15,
    NATIONAL_DAY = 16,
    END_OF_SEASON = 17,
    WINTER_SALE = 18,
    SUMMER_SALE = 19,
    FALL_SALE = 20,
    SPRING_SALE = 21,
    RAMADAN = 22,
    EID_AL_FITR = 23,
    EID_AL_ADHA = 24,
    SINGLES_DAY = 25,
    WOMENS_DAY = 26,
    HOLI = 27,
    PARENTS_DAY = 28,
    ST_NICHOLAS_DAY = 29,
    CARNIVAL = 30,
    EPIPHANY = 31,
    ROSH_HASHANAH = 32,
    PASSOVER = 33,
    HANUKKAH = 34,
    DIWALI = 35,
    NAVRATRI = 36,
    SONGKRAN = 37,
    YEAR_END_GIFT = 38,
  }
}

