// package: google.ads.googleads.v1.resources
// file: google/ads/googleads/v1/resources/campaign_audience_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignAudienceView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignAudienceView.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignAudienceView): CampaignAudienceView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignAudienceView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignAudienceView;
  static deserializeBinaryFromReader(message: CampaignAudienceView, reader: jspb.BinaryReader): CampaignAudienceView;
}

export namespace CampaignAudienceView {
  export type AsObject = {
    resourceName: string,
  }
}

