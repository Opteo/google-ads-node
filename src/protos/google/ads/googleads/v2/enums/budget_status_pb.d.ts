// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/budget_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BudgetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BudgetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BudgetStatusEnum): BudgetStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BudgetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BudgetStatusEnum;
  static deserializeBinaryFromReader(message: BudgetStatusEnum, reader: jspb.BinaryReader): BudgetStatusEnum;
}

export namespace BudgetStatusEnum {
  export type AsObject = {
  }

  export enum BudgetStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

