// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_experiment.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_campaign_experiment_status_pb from "../../../../../google/ads/googleads/v2/enums/campaign_experiment_status_pb";
import * as google_ads_googleads_v2_enums_campaign_experiment_traffic_split_type_pb from "../../../../../google/ads/googleads/v2/enums/campaign_experiment_traffic_split_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignExperiment extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCampaignDraft(): boolean;
  clearCampaignDraft(): void;
  getCampaignDraft(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaignDraft(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasTrafficSplitPercent(): boolean;
  clearTrafficSplitPercent(): void;
  getTrafficSplitPercent(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setTrafficSplitPercent(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getTrafficSplitType(): google_ads_googleads_v2_enums_campaign_experiment_traffic_split_type_pb.CampaignExperimentTrafficSplitTypeEnum.CampaignExperimentTrafficSplitType;
  setTrafficSplitType(value: google_ads_googleads_v2_enums_campaign_experiment_traffic_split_type_pb.CampaignExperimentTrafficSplitTypeEnum.CampaignExperimentTrafficSplitType): void;

  hasExperimentCampaign(): boolean;
  clearExperimentCampaign(): void;
  getExperimentCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExperimentCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): google_ads_googleads_v2_enums_campaign_experiment_status_pb.CampaignExperimentStatusEnum.CampaignExperimentStatus;
  setStatus(value: google_ads_googleads_v2_enums_campaign_experiment_status_pb.CampaignExperimentStatusEnum.CampaignExperimentStatus): void;

  hasLongRunningOperation(): boolean;
  clearLongRunningOperation(): void;
  getLongRunningOperation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongRunningOperation(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignExperiment.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignExperiment): CampaignExperiment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignExperiment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignExperiment;
  static deserializeBinaryFromReader(message: CampaignExperiment, reader: jspb.BinaryReader): CampaignExperiment;
}

export namespace CampaignExperiment {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    campaignDraft?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    trafficSplitPercent?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    trafficSplitType: google_ads_googleads_v2_enums_campaign_experiment_traffic_split_type_pb.CampaignExperimentTrafficSplitTypeEnum.CampaignExperimentTrafficSplitType,
    experimentCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_campaign_experiment_status_pb.CampaignExperimentStatusEnum.CampaignExperimentStatus,
    longRunningOperation?: google_protobuf_wrappers_pb.StringValue.AsObject,
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

