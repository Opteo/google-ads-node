// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/campaign_serving_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignServingStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignServingStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignServingStatusEnum): CampaignServingStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignServingStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignServingStatusEnum;
  static deserializeBinaryFromReader(message: CampaignServingStatusEnum, reader: jspb.BinaryReader): CampaignServingStatusEnum;
}

export namespace CampaignServingStatusEnum {
  export type AsObject = {
  }

  export enum CampaignServingStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SERVING = 2,
    NONE = 3,
    ENDED = 4,
    PENDING = 5,
    SUSPENDED = 6,
  }
}

