// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/campaign_criterion_simulation_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_campaign_criterion_simulation_pb from "../../../../../google/ads/googleads/v2/resources/campaign_criterion_simulation_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetCampaignCriterionSimulationRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignCriterionSimulationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignCriterionSimulationRequest): GetCampaignCriterionSimulationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignCriterionSimulationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignCriterionSimulationRequest;
  static deserializeBinaryFromReader(message: GetCampaignCriterionSimulationRequest, reader: jspb.BinaryReader): GetCampaignCriterionSimulationRequest;
}

export namespace GetCampaignCriterionSimulationRequest {
  export type AsObject = {
    resourceName: string,
  }
}

