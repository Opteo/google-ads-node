// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/campaign_experiment_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignExperimentErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExperimentErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExperimentErrorEnum): CampaignExperimentErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignExperimentErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExperimentErrorEnum;
  static deserializeBinaryFromReader(message: CampaignExperimentErrorEnum, reader: jspb.BinaryReader): CampaignExperimentErrorEnum;
}

export namespace CampaignExperimentErrorEnum {
  export type AsObject = {
  }

  export enum CampaignExperimentError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DUPLICATE_NAME = 2,
    INVALID_TRANSITION = 3,
    CANNOT_CREATE_EXPERIMENT_WITH_SHARED_BUDGET = 4,
    CANNOT_CREATE_EXPERIMENT_FOR_REMOVED_BASE_CAMPAIGN = 5,
    CANNOT_CREATE_EXPERIMENT_FOR_NON_PROPOSED_DRAFT = 6,
    CUSTOMER_CANNOT_CREATE_EXPERIMENT = 7,
    CAMPAIGN_CANNOT_CREATE_EXPERIMENT = 8,
    EXPERIMENT_DURATIONS_MUST_NOT_OVERLAP = 9,
    EXPERIMENT_DURATION_MUST_BE_WITHIN_CAMPAIGN_DURATION = 10,
    CANNOT_MUTATE_EXPERIMENT_DUE_TO_STATUS = 11,
  }
}

