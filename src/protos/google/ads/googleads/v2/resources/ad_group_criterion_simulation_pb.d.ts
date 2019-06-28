// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/ad_group_criterion_simulation.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_simulation_pb from "../../../../../google/ads/googleads/v2/common/simulation_pb";
import * as google_ads_googleads_v2_enums_simulation_modification_method_pb from "../../../../../google/ads/googleads/v2/enums/simulation_modification_method_pb";
import * as google_ads_googleads_v2_enums_simulation_type_pb from "../../../../../google/ads/googleads/v2/enums/simulation_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupCriterionSimulation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroupId(): boolean;
  clearAdGroupId(): void;
  getAdGroupId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAdGroupId(value?: google_protobuf_wrappers_pb.Int64Value): void;

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

  hasCpcBidPointList(): boolean;
  clearCpcBidPointList(): void;
  getCpcBidPointList(): google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList | undefined;
  setCpcBidPointList(value?: google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList): void;

  getPointListCase(): AdGroupCriterionSimulation.PointListCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionSimulation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionSimulation): AdGroupCriterionSimulation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupCriterionSimulation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionSimulation;
  static deserializeBinaryFromReader(message: AdGroupCriterionSimulation, reader: jspb.BinaryReader): AdGroupCriterionSimulation;
}

export namespace AdGroupCriterionSimulation {
  export type AsObject = {
    resourceName: string,
    adGroupId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    criterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v2_enums_simulation_type_pb.SimulationTypeEnum.SimulationType,
    modificationMethod: google_ads_googleads_v2_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethod,
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidPointList?: google_ads_googleads_v2_common_simulation_pb.CpcBidSimulationPointList.AsObject,
  }

  export enum PointListCase {
    POINT_LIST_NOT_SET = 0,
    CPC_BID_POINT_LIST = 8,
  }
}

