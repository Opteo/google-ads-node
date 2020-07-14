// package: google.ads.googleads.v4.common
// file: google/ads/googleads/v4/common/frequency_cap.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_enums_frequency_cap_event_type_pb from "../../../../../google/ads/googleads/v4/enums/frequency_cap_event_type_pb";
import * as google_ads_googleads_v4_enums_frequency_cap_level_pb from "../../../../../google/ads/googleads/v4/enums/frequency_cap_level_pb";
import * as google_ads_googleads_v4_enums_frequency_cap_time_unit_pb from "../../../../../google/ads/googleads/v4/enums/frequency_cap_time_unit_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FrequencyCapEntry extends jspb.Message {
  hasKey(): boolean;
  clearKey(): void;
  getKey(): FrequencyCapKey | undefined;
  setKey(value?: FrequencyCapKey): void;

  hasCap(): boolean;
  clearCap(): void;
  getCap(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setCap(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyCapEntry.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyCapEntry): FrequencyCapEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrequencyCapEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyCapEntry;
  static deserializeBinaryFromReader(message: FrequencyCapEntry, reader: jspb.BinaryReader): FrequencyCapEntry;
}

export namespace FrequencyCapEntry {
  export type AsObject = {
    key?: FrequencyCapKey.AsObject,
    cap?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

export class FrequencyCapKey extends jspb.Message {
  getLevel(): google_ads_googleads_v4_enums_frequency_cap_level_pb.FrequencyCapLevelEnum.FrequencyCapLevelMap[keyof google_ads_googleads_v4_enums_frequency_cap_level_pb.FrequencyCapLevelEnum.FrequencyCapLevelMap];
  setLevel(value: google_ads_googleads_v4_enums_frequency_cap_level_pb.FrequencyCapLevelEnum.FrequencyCapLevelMap[keyof google_ads_googleads_v4_enums_frequency_cap_level_pb.FrequencyCapLevelEnum.FrequencyCapLevelMap]): void;

  getEventType(): google_ads_googleads_v4_enums_frequency_cap_event_type_pb.FrequencyCapEventTypeEnum.FrequencyCapEventTypeMap[keyof google_ads_googleads_v4_enums_frequency_cap_event_type_pb.FrequencyCapEventTypeEnum.FrequencyCapEventTypeMap];
  setEventType(value: google_ads_googleads_v4_enums_frequency_cap_event_type_pb.FrequencyCapEventTypeEnum.FrequencyCapEventTypeMap[keyof google_ads_googleads_v4_enums_frequency_cap_event_type_pb.FrequencyCapEventTypeEnum.FrequencyCapEventTypeMap]): void;

  getTimeUnit(): google_ads_googleads_v4_enums_frequency_cap_time_unit_pb.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnitMap[keyof google_ads_googleads_v4_enums_frequency_cap_time_unit_pb.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnitMap];
  setTimeUnit(value: google_ads_googleads_v4_enums_frequency_cap_time_unit_pb.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnitMap[keyof google_ads_googleads_v4_enums_frequency_cap_time_unit_pb.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnitMap]): void;

  hasTimeLength(): boolean;
  clearTimeLength(): void;
  getTimeLength(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setTimeLength(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrequencyCapKey.AsObject;
  static toObject(includeInstance: boolean, msg: FrequencyCapKey): FrequencyCapKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrequencyCapKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrequencyCapKey;
  static deserializeBinaryFromReader(message: FrequencyCapKey, reader: jspb.BinaryReader): FrequencyCapKey;
}

export namespace FrequencyCapKey {
  export type AsObject = {
    level: google_ads_googleads_v4_enums_frequency_cap_level_pb.FrequencyCapLevelEnum.FrequencyCapLevelMap[keyof google_ads_googleads_v4_enums_frequency_cap_level_pb.FrequencyCapLevelEnum.FrequencyCapLevelMap],
    eventType: google_ads_googleads_v4_enums_frequency_cap_event_type_pb.FrequencyCapEventTypeEnum.FrequencyCapEventTypeMap[keyof google_ads_googleads_v4_enums_frequency_cap_event_type_pb.FrequencyCapEventTypeEnum.FrequencyCapEventTypeMap],
    timeUnit: google_ads_googleads_v4_enums_frequency_cap_time_unit_pb.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnitMap[keyof google_ads_googleads_v4_enums_frequency_cap_time_unit_pb.FrequencyCapTimeUnitEnum.FrequencyCapTimeUnitMap],
    timeLength?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

