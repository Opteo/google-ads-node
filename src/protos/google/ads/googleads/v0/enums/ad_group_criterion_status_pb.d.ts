// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/ad_group_criterion_status.proto

import * as jspb from "google-protobuf";

export class AdGroupCriterionStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionStatusEnum): AdGroupCriterionStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupCriterionStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionStatusEnum;
  static deserializeBinaryFromReader(message: AdGroupCriterionStatusEnum, reader: jspb.BinaryReader): AdGroupCriterionStatusEnum;
}

export namespace AdGroupCriterionStatusEnum {
  export type AsObject = {
  }

  export enum AdGroupCriterionStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

