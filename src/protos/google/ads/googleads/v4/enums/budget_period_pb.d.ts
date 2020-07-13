// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/budget_period.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BudgetPeriodEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetPeriodEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetPeriodEnum): BudgetPeriodEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BudgetPeriodEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetPeriodEnum;
  static deserializeBinaryFromReader(message: BudgetPeriodEnum, reader: jspb.BinaryReader): BudgetPeriodEnum;
}

export namespace BudgetPeriodEnum {
  export type AsObject = {
  }

  export interface BudgetPeriodMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    DAILY: 2;
  }

  export const BudgetPeriod: BudgetPeriodMap;
}

