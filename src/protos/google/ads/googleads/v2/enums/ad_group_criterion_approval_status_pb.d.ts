// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_group_criterion_approval_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupCriterionApprovalStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionApprovalStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionApprovalStatusEnum): AdGroupCriterionApprovalStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupCriterionApprovalStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionApprovalStatusEnum;
  static deserializeBinaryFromReader(message: AdGroupCriterionApprovalStatusEnum, reader: jspb.BinaryReader): AdGroupCriterionApprovalStatusEnum;
}

export namespace AdGroupCriterionApprovalStatusEnum {
  export type AsObject = {
  }

  export enum AdGroupCriterionApprovalStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    APPROVED = 2,
    DISAPPROVED = 3,
    PENDING_REVIEW = 4,
    UNDER_REVIEW = 5,
  }
}

