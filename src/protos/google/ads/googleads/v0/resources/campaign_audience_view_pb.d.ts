// package: google.ads.googleads.v0.resources
// file: google/ads/googleads/v0/resources/campaign_audience_view.proto

import * as jspb from "google-protobuf";

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

