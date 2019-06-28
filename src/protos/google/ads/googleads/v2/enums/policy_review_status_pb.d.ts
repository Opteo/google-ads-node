// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/policy_review_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyReviewStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyReviewStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyReviewStatusEnum): PolicyReviewStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyReviewStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyReviewStatusEnum;
  static deserializeBinaryFromReader(message: PolicyReviewStatusEnum, reader: jspb.BinaryReader): PolicyReviewStatusEnum;
}

export namespace PolicyReviewStatusEnum {
  export type AsObject = {
  }

  export enum PolicyReviewStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    REVIEW_IN_PROGRESS = 2,
    REVIEWED = 3,
    UNDER_APPEAL = 4,
  }
}

