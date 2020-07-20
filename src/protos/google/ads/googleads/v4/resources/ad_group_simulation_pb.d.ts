// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/ad_group_simulation.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_simulation_pb from "../../../../../google/ads/googleads/v4/common/simulation_pb";
import * as google_ads_googleads_v4_enums_simulation_modification_method_pb from "../../../../../google/ads/googleads/v4/enums/simulation_modification_method_pb";
import * as google_ads_googleads_v4_enums_simulation_type_pb from "../../../../../google/ads/googleads/v4/enums/simulation_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupSimulation extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroupId(): boolean;
  clearAdGroupId(): void;
  getAdGroupId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setAdGroupId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getType(): google_ads_googleads_v4_enums_simulation_type_pb.SimulationTypeEnum.SimulationTypeMap[keyof google_ads_googleads_v4_enums_simulation_type_pb.SimulationTypeEnum.SimulationTypeMap];
  setType(value: google_ads_googleads_v4_enums_simulation_type_pb.SimulationTypeEnum.SimulationTypeMap[keyof google_ads_googleads_v4_enums_simulation_type_pb.SimulationTypeEnum.SimulationTypeMap]): void;

  getModificationMethod(): google_ads_googleads_v4_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethodMap[keyof google_ads_googleads_v4_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethodMap];
  setModificationMethod(value: google_ads_googleads_v4_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethodMap[keyof google_ads_googleads_v4_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethodMap]): void;

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
  getCpcBidPointList(): google_ads_googleads_v4_common_simulation_pb.CpcBidSimulationPointList | undefined;
  setCpcBidPointList(value?: google_ads_googleads_v4_common_simulation_pb.CpcBidSimulationPointList): void;

  hasCpvBidPointList(): boolean;
  clearCpvBidPointList(): void;
  getCpvBidPointList(): google_ads_googleads_v4_common_simulation_pb.CpvBidSimulationPointList | undefined;
  setCpvBidPointList(value?: google_ads_googleads_v4_common_simulation_pb.CpvBidSimulationPointList): void;

  hasTargetCpaPointList(): boolean;
  clearTargetCpaPointList(): void;
  getTargetCpaPointList(): google_ads_googleads_v4_common_simulation_pb.TargetCpaSimulationPointList | undefined;
  setTargetCpaPointList(value?: google_ads_googleads_v4_common_simulation_pb.TargetCpaSimulationPointList): void;

  hasTargetRoasPointList(): boolean;
  clearTargetRoasPointList(): void;
  getTargetRoasPointList(): google_ads_googleads_v4_common_simulation_pb.TargetRoasSimulationPointList | undefined;
  setTargetRoasPointList(value?: google_ads_googleads_v4_common_simulation_pb.TargetRoasSimulationPointList): void;

  getPointListCase(): AdGroupSimulation.PointListCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupSimulation.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupSimulation): AdGroupSimulation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupSimulation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupSimulation;
  static deserializeBinaryFromReader(message: AdGroupSimulation, reader: jspb.BinaryReader): AdGroupSimulation;
}

export namespace AdGroupSimulation {
  export type AsObject = {
    resourceName: string,
    adGroupId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v4_enums_simulation_type_pb.SimulationTypeEnum.SimulationTypeMap[keyof google_ads_googleads_v4_enums_simulation_type_pb.SimulationTypeEnum.SimulationTypeMap],
    modificationMethod: google_ads_googleads_v4_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethodMap[keyof google_ads_googleads_v4_enums_simulation_modification_method_pb.SimulationModificationMethodEnum.SimulationModificationMethodMap],
    startDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    endDate?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidPointList?: google_ads_googleads_v4_common_simulation_pb.CpcBidSimulationPointList.AsObject,
    cpvBidPointList?: google_ads_googleads_v4_common_simulation_pb.CpvBidSimulationPointList.AsObject,
    targetCpaPointList?: google_ads_googleads_v4_common_simulation_pb.TargetCpaSimulationPointList.AsObject,
    targetRoasPointList?: google_ads_googleads_v4_common_simulation_pb.TargetRoasSimulationPointList.AsObject,
  }

  export enum PointListCase {
    POINT_LIST_NOT_SET = 0,
    CPC_BID_POINT_LIST = 8,
    CPV_BID_POINT_LIST = 10,
    TARGET_CPA_POINT_LIST = 9,
    TARGET_ROAS_POINT_LIST = 11,
  }
}

