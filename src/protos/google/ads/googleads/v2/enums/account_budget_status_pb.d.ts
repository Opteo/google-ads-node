// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/account_budget_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccountBudgetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBudgetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBudgetStatusEnum): AccountBudgetStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBudgetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBudgetStatusEnum;
  static deserializeBinaryFromReader(message: AccountBudgetStatusEnum, reader: jspb.BinaryReader): AccountBudgetStatusEnum;
}

export namespace AccountBudgetStatusEnum {
  export type AsObject = {
  }

  export enum AccountBudgetStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    APPROVED = 3,
    CANCELLED = 4,
  }
}

