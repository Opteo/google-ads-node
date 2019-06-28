// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/campaign_draft_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignDraftErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignDraftErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignDraftErrorEnum): CampaignDraftErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignDraftErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignDraftErrorEnum;
  static deserializeBinaryFromReader(message: CampaignDraftErrorEnum, reader: jspb.BinaryReader): CampaignDraftErrorEnum;
}

export namespace CampaignDraftErrorEnum {
  export type AsObject = {
  }

  export enum CampaignDraftError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DUPLICATE_DRAFT_NAME = 2,
    INVALID_STATUS_TRANSITION_FROM_REMOVED = 3,
    INVALID_STATUS_TRANSITION_FROM_PROMOTED = 4,
    INVALID_STATUS_TRANSITION_FROM_PROMOTE_FAILED = 5,
    CUSTOMER_CANNOT_CREATE_DRAFT = 6,
    CAMPAIGN_CANNOT_CREATE_DRAFT = 7,
    INVALID_DRAFT_CHANGE = 8,
    INVALID_STATUS_TRANSITION = 9,
    MAX_NUMBER_OF_DRAFTS_PER_CAMPAIGN_REACHED = 10,
    LIST_ERRORS_FOR_PROMOTED_DRAFT_ONLY = 11,
  }
}

