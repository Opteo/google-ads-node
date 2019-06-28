// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/policy_topic_entry_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyTopicEntryTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyTopicEntryTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyTopicEntryTypeEnum): PolicyTopicEntryTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyTopicEntryTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyTopicEntryTypeEnum;
  static deserializeBinaryFromReader(message: PolicyTopicEntryTypeEnum, reader: jspb.BinaryReader): PolicyTopicEntryTypeEnum;
}

export namespace PolicyTopicEntryTypeEnum {
  export type AsObject = {
  }

  export enum PolicyTopicEntryType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PROHIBITED = 2,
    LIMITED = 4,
    FULLY_LIMITED = 8,
    DESCRIPTIVE = 5,
    BROADENING = 6,
    AREA_OF_INTEREST_ONLY = 7,
  }
}

