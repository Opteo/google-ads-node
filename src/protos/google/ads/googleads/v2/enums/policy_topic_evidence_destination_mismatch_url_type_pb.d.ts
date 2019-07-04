// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/policy_topic_evidence_destination_mismatch_url_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyTopicEvidenceDestinationMismatchUrlTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicEvidenceDestinationMismatchUrlTypeEnum): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyTopicEvidenceDestinationMismatchUrlTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum;
  static deserializeBinaryFromReader(message: PolicyTopicEvidenceDestinationMismatchUrlTypeEnum, reader: jspb.BinaryReader): PolicyTopicEvidenceDestinationMismatchUrlTypeEnum;
}

export namespace PolicyTopicEvidenceDestinationMismatchUrlTypeEnum {
  export type AsObject = {
  }

  export enum PolicyTopicEvidenceDestinationMismatchUrlType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DISPLAY_URL = 2,
    FINAL_URL = 3,
    FINAL_MOBILE_URL = 4,
    TRACKING_URL = 5,
    MOBILE_TRACKING_URL = 6,
  }
}

