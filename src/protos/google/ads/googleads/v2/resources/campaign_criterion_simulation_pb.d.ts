// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_criterion_simulation.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_simulation_pb from "../../../../../google/ads/googleads/v2/common/simulation_pb";
import * as google_ads_googleads_v2_enums_simulation_modification_method_pb from "../../../../../google/ads/googleads/v2/enums/simulation_modification_method_pb";
import * as google_ads_googleads_v2_enums_simulation_type_pb from "../../../../../google/ads/googleads/v2/enums/simulation_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignCriterionSimulation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCampaignId(): boolean;
  clearCampaignId(): void;
  getCampaignId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCampaignId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasCriterionId(): boolean;
  clearCriterionId(): void;
  getCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getType(): google_ads_googleads_v2_enums_simulation_type_pb.SimulationTypeEnum.SimulationType;
  setType(value: google_ads_googleads_v2_enums_simulation_type_pb.SimulationTypeEnum.SimulationType): void;

  getModificationMethod(): google_ads_googleads_v2_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethod;
  setModificationMethod(value: google_ads_googleads_v2_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethod): void;

  hasStartDate(): boolean;
  clearStartDate(): void;
  getStartDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setStartDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasEndDate(): boolean;
  clearEndDate(): void;
  getEndDate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEndDate(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasBidModifierPointList(): boolean;
  clearBidModifierPointList(): void;
  getBidModifierPointList(): google_ads_googleads_v2_common_simulation_pb.BidModifierSimulationPointList | undefined;
  setBidModifierPointList(value?: google_ads_googleads_v2_common_simulation_pb.BidModifierSimulationPointList): void;

  getPointListCase(): CampaignCriterionSimulation.PointListCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCriterionSimulation.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCriterionSimulation): CampaignCriterionSimulation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignCriterionSimulation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCriterionSimulation;
  static deserializeBinaryFromReader(message: CampaignCriterionSimulation, reader: jspb.BinaryReader): CampaignCriterionSimulation;
}

export namespace CampaignCriterionSimulation {
  export type AsObject = {
    resourceName: string,
    campaignId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_simulation_type_pb.SimulationTypeEnum.SimulationType,
    modificationMethod: google_ads_googleads_v2_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethod,
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    bidModifierPointList?: google_ads_googleads_v2_common_simulation_pb.BidModifierSimulationPointList.AsObject,
  }

  export enum PointListCase {
    POINT_LIST_NOT_SET = 0,
    BID_MODIFIER_POINT_LIST = 8,
  }
}

