// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/month_of_year.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MonthOfYearEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MonthOfYearEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MonthOfYearEnum): MonthOfYearEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MonthOfYearEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MonthOfYearEnum;
  static deserializeBinaryFromReader(message: MonthOfYearEnum, reader: jspb.BinaryReader): MonthOfYearEnum;
}

export namespace MonthOfYearEnum {
  export type AsObject = {
  }

  export enum MonthOfYear {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    JANUARY = 2,
    FEBRUARY = 3,
    MARCH = 4,
    APRIL = 5,
    MAY = 6,
    JUNE = 7,
    JULY = 8,
    AUGUST = 9,
    SEPTEMBER = 10,
    OCTOBER = 11,
    NOVEMBER = 12,
    DECEMBER = 13,
  }
}

