// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/frequency_cap_event_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FrequencyCapEventTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyCapEventTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyCapEventTypeEnum): FrequencyCapEventTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrequencyCapEventTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyCapEventTypeEnum;
  static deserializeBinaryFromReader(message: FrequencyCapEventTypeEnum, reader: jspb.BinaryReader): FrequencyCapEventTypeEnum;
}

export namespace FrequencyCapEventTypeEnum {
  export type AsObject = {
  }

  export enum FrequencyCapEventType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    IMPRESSION = 2,
    VIDEO_VIEW = 3,
  }
}

