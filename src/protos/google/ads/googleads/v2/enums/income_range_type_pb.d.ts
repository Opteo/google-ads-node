// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/income_range_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class IncomeRangeTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncomeRangeTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: IncomeRangeTypeEnum): IncomeRangeTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncomeRangeTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncomeRangeTypeEnum;
  static deserializeBinaryFromReader(message: IncomeRangeTypeEnum, reader: jspb.BinaryReader): IncomeRangeTypeEnum;
}

export namespace IncomeRangeTypeEnum {
  export type AsObject = {
  }

  export enum IncomeRangeType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INCOME_RANGE_0_50 = 510001,
    INCOME_RANGE_50_60 = 510002,
    INCOME_RANGE_60_70 = 510003,
    INCOME_RANGE_70_80 = 510004,
    INCOME_RANGE_80_90 = 510005,
    INCOME_RANGE_90_UP = 510006,
    INCOME_RANGE_UNDETERMINED = 510000,
  }
}

