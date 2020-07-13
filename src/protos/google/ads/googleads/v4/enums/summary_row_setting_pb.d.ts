// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/summary_row_setting.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SummaryRowSettingEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SummaryRowSettingEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SummaryRowSettingEnum): SummaryRowSettingEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SummaryRowSettingEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SummaryRowSettingEnum;
  static deserializeBinaryFromReader(message: SummaryRowSettingEnum, reader: jspb.BinaryReader): SummaryRowSettingEnum;
}

export namespace SummaryRowSettingEnum {
  export type AsObject = {
  }

  export interface SummaryRowSettingMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    NO_SUMMARY_ROW: 2;
    SUMMARY_ROW_WITH_RESULTS: 3;
    SUMMARY_ROW_ONLY: 4;
  }

  export const SummaryRowSetting: SummaryRowSettingMap;
}

