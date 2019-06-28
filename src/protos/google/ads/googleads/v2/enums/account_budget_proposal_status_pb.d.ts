// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/account_budget_proposal_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AccountBudgetProposalStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountBudgetProposalStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AccountBudgetProposalStatusEnum): AccountBudgetProposalStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountBudgetProposalStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountBudgetProposalStatusEnum;
  static deserializeBinaryFromReader(message: AccountBudgetProposalStatusEnum, reader: jspb.BinaryReader): AccountBudgetProposalStatusEnum;
}

export namespace AccountBudgetProposalStatusEnum {
  export type AsObject = {
  }

  export enum AccountBudgetProposalStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    APPROVED_HELD = 3,
    APPROVED = 4,
    CANCELLED = 5,
    REJECTED = 6,
  }
}

