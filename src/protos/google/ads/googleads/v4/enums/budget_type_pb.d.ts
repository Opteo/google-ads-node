// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/budget_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BudgetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetTypeEnum): BudgetTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BudgetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetTypeEnum;
  static deserializeBinaryFromReader(message: BudgetTypeEnum, reader: jspb.BinaryReader): BudgetTypeEnum;
}

export namespace BudgetTypeEnum {
  export type AsObject = {
  }

  export interface BudgetTypeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    STANDARD: 2;
    HOTEL_ADS_COMMISSION: 3;
    FIXED_CPA: 4;
  }

  export const BudgetType: BudgetTypeMap;
}

