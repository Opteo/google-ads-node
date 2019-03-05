// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/campaign_audience_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_campaign_audience_view_pb from "../../../../../google/ads/googleads/v1/resources/campaign_audience_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetCampaignAudienceViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCampaignAudienceViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCampaignAudienceViewRequest): GetCampaignAudienceViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCampaignAudienceViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCampaignAudienceViewRequest;
  static deserializeBinaryFromReader(message: GetCampaignAudienceViewRequest, reader: jspb.BinaryReader): GetCampaignAudienceViewRequest;
}

export namespace GetCampaignAudienceViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

