// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/date_range_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DateRangeErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateRangeErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DateRangeErrorEnum): DateRangeErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateRangeErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateRangeErrorEnum;
  static deserializeBinaryFromReader(message: DateRangeErrorEnum, reader: jspb.BinaryReader): DateRangeErrorEnum;
}

export namespace DateRangeErrorEnum {
  export type AsObject = {
  }

  export enum DateRangeError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_DATE = 2,
    START_DATE_AFTER_END_DATE = 3,
    CANNOT_SET_DATE_TO_PAST = 4,
    AFTER_MAXIMUM_ALLOWABLE_DATE = 5,
    CANNOT_MODIFY_START_DATE_IF_ALREADY_STARTED = 6,
  }
}

