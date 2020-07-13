// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/time_zone_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TimeZoneErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeZoneErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: TimeZoneErrorEnum): TimeZoneErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeZoneErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeZoneErrorEnum;
  static deserializeBinaryFromReader(message: TimeZoneErrorEnum, reader: jspb.BinaryReader): TimeZoneErrorEnum;
}

export namespace TimeZoneErrorEnum {
  export type AsObject = {
  }

  export interface TimeZoneErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    INVALID_TIME_ZONE: 5;
  }

  export const TimeZoneError: TimeZoneErrorMap;
}

