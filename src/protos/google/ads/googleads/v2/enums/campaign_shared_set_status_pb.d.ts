// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/campaign_shared_set_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignSharedSetStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignSharedSetStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignSharedSetStatusEnum): CampaignSharedSetStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignSharedSetStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignSharedSetStatusEnum;
  static deserializeBinaryFromReader(message: CampaignSharedSetStatusEnum, reader: jspb.BinaryReader): CampaignSharedSetStatusEnum;
}

export namespace CampaignSharedSetStatusEnum {
  export type AsObject = {
  }

  export enum CampaignSharedSetStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    REMOVED = 3,
  }
}

