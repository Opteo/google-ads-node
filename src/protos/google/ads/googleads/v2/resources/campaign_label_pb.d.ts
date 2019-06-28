// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_label.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCampaign(): boolean;
  clearCampaign(): void;
  getCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignLabel.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignLabel): CampaignLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignLabel;
  static deserializeBinaryFromReader(message: CampaignLabel, reader: jspb.BinaryReader): CampaignLabel;
}

export namespace CampaignLabel {
  export type AsObject = {
    resourceName: string,
    campaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

