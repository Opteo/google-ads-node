// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/frequency_cap_level.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FrequencyCapLevelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyCapLevelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyCapLevelEnum): FrequencyCapLevelEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrequencyCapLevelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyCapLevelEnum;
  static deserializeBinaryFromReader(message: FrequencyCapLevelEnum, reader: jspb.BinaryReader): FrequencyCapLevelEnum;
}

export namespace FrequencyCapLevelEnum {
  export type AsObject = {
  }

  export interface FrequencyCapLevelMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    AD_GROUP_AD: 2;
    AD_GROUP: 3;
    CAMPAIGN: 4;
  }

  export const FrequencyCapLevel: FrequencyCapLevelMap;
}

