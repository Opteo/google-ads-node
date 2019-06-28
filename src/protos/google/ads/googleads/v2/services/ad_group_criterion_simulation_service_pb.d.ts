// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_group_criterion_simulation_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_ad_group_criterion_simulation_pb from "../../../../../google/ads/googleads/v2/resources/ad_group_criterion_simulation_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAdGroupCriterionSimulationRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupCriterionSimulationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupCriterionSimulationRequest): GetAdGroupCriterionSimulationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdGroupCriterionSimulationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupCriterionSimulationRequest;
  static deserializeBinaryFromReader(message: GetAdGroupCriterionSimulationRequest, reader: jspb.BinaryReader): GetAdGroupCriterionSimulationRequest;
}

export namespace GetAdGroupCriterionSimulationRequest {
  export type AsObject = {
    resourceName: string,
  }
}

