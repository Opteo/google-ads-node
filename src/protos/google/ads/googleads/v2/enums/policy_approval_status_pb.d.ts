// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/policy_approval_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyApprovalStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyApprovalStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyApprovalStatusEnum): PolicyApprovalStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyApprovalStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyApprovalStatusEnum;
  static deserializeBinaryFromReader(message: PolicyApprovalStatusEnum, reader: jspb.BinaryReader): PolicyApprovalStatusEnum;
}

export namespace PolicyApprovalStatusEnum {
  export type AsObject = {
  }

  export enum PolicyApprovalStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DISAPPROVED = 2,
    APPROVED_LIMITED = 3,
    APPROVED = 4,
    AREA_OF_INTEREST_ONLY = 5,
  }
}

