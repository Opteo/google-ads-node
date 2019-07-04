// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/date_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DateErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DateErrorEnum): DateErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateErrorEnum;
  static deserializeBinaryFromReader(message: DateErrorEnum, reader: jspb.BinaryReader): DateErrorEnum;
}

export namespace DateErrorEnum {
  export type AsObject = {
  }

  export enum DateError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_FIELD_VALUES_IN_DATE = 2,
    INVALID_FIELD_VALUES_IN_DATE_TIME = 3,
    INVALID_STRING_DATE = 4,
    INVALID_STRING_DATE_TIME_MICROS = 6,
    INVALID_STRING_DATE_TIME_SECONDS = 11,
    INVALID_STRING_DATE_TIME_SECONDS_WITH_OFFSET = 12,
    EARLIER_THAN_MINIMUM_DATE = 7,
    LATER_THAN_MAXIMUM_DATE = 8,
    DATE_RANGE_MINIMUM_DATE_LATER_THAN_MAXIMUM_DATE = 9,
    DATE_RANGE_MINIMUM_AND_MAXIMUM_DATES_BOTH_NULL = 10,
  }
}

