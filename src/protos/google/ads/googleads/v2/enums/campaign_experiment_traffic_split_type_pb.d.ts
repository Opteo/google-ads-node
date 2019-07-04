// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/campaign_experiment_traffic_split_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignExperimentTrafficSplitTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExperimentTrafficSplitTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExperimentTrafficSplitTypeEnum): CampaignExperimentTrafficSplitTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignExperimentTrafficSplitTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExperimentTrafficSplitTypeEnum;
  static deserializeBinaryFromReader(message: CampaignExperimentTrafficSplitTypeEnum, reader: jspb.BinaryReader): CampaignExperimentTrafficSplitTypeEnum;
}

export namespace CampaignExperimentTrafficSplitTypeEnum {
  export type AsObject = {
  }

  export enum CampaignExperimentTrafficSplitType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RANDOM_QUERY = 2,
    COOKIE = 3,
  }
}

