// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/campaign_draft.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_campaign_draft_status_pb from "../../../../../google/ads/googleads/v2/enums/campaign_draft_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignDraft extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasDraftId(): boolean;
  clearDraftId(): void;
  getDraftId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setDraftId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasBaseCampaign(): boolean;
  clearBaseCampaign(): void;
  getBaseCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBaseCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDraftCampaign(): boolean;
  clearDraftCampaign(): void;
  getDraftCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDraftCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): google_ads_googleads_v2_enums_campaign_draft_status_pb.CampaignDraftStatusEnum.CampaignDraftStatus;
  setStatus(value: google_ads_googleads_v2_enums_campaign_draft_status_pb.CampaignDraftStatusEnum.CampaignDraftStatus): void;

  hasHasExperimentRunning(): boolean;
  clearHasExperimentRunning(): void;
  getHasExperimentRunning(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setHasExperimentRunning(value?: google_protobuf_wrappers_pb.BoolValue): void;

  hasLongRunningOperation(): boolean;
  clearLongRunningOperation(): void;
  getLongRunningOperation(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLongRunningOperation(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignDraft.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignDraft): CampaignDraft.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignDraft, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignDraft;
  static deserializeBinaryFromReader(message: CampaignDraft, reader: jspb.BinaryReader): CampaignDraft;
}

export namespace CampaignDraft {
  export type AsObject = {
    resourceName: string,
    draftId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    baseCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    draftCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_campaign_draft_status_pb.CampaignDraftStatusEnum.CampaignDraftStatus,
    hasExperimentRunning?: google_protobuf_wrappers_pb.BoolValue.AsObject,
    longRunningOperation?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

