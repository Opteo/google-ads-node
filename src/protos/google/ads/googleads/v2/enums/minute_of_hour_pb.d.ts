// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/minute_of_hour.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MinuteOfHourEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinuteOfHourEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MinuteOfHourEnum): MinuteOfHourEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MinuteOfHourEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinuteOfHourEnum;
  static deserializeBinaryFromReader(message: MinuteOfHourEnum, reader: jspb.BinaryReader): MinuteOfHourEnum;
}

export namespace MinuteOfHourEnum {
  export type AsObject = {
  }

  export enum MinuteOfHour {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ZERO = 2,
    FIFTEEN = 3,
    THIRTY = 4,
    FORTY_FIVE = 5,
  }
}

