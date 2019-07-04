// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/campaign_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignStatusEnum): CampaignStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignStatusEnum;
  static deserializeBinaryFromReader(message: CampaignStatusEnum, reader: jspb.BinaryReader): CampaignStatusEnum;
}

export namespace CampaignStatusEnum {
  export type AsObject = {
  }

  export enum CampaignStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ENABLED = 2,
    PAUSED = 3,
    REMOVED = 4,
  }
}

