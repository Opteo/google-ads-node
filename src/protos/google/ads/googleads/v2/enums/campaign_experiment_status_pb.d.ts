// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/campaign_experiment_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignExperimentStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExperimentStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExperimentStatusEnum): CampaignExperimentStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignExperimentStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExperimentStatusEnum;
  static deserializeBinaryFromReader(message: CampaignExperimentStatusEnum, reader: jspb.BinaryReader): CampaignExperimentStatusEnum;
}

export namespace CampaignExperimentStatusEnum {
  export type AsObject = {
  }

  export enum CampaignExperimentStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INITIALIZING = 2,
    INITIALIZATION_FAILED = 8,
    ENABLED = 3,
    GRADUATED = 4,
    REMOVED = 5,
    PROMOTING = 6,
    PROMOTION_FAILED = 9,
    PROMOTED = 7,
    ENDED_MANUALLY = 10,
  }
}

