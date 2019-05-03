// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/ad_group_simulation_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_ad_group_simulation_pb from "../../../../../google/ads/googleads/v1/resources/ad_group_simulation_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetAdGroupSimulationRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdGroupSimulationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdGroupSimulationRequest): GetAdGroupSimulationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdGroupSimulationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdGroupSimulationRequest;
  static deserializeBinaryFromReader(message: GetAdGroupSimulationRequest, reader: jspb.BinaryReader): GetAdGroupSimulationRequest;
}

export namespace GetAdGroupSimulationRequest {
  export type AsObject = {
    resourceName: string,
  }
}

