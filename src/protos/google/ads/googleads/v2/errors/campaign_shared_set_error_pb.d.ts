// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/campaign_shared_set_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignSharedSetErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignSharedSetErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignSharedSetErrorEnum): CampaignSharedSetErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignSharedSetErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignSharedSetErrorEnum;
  static deserializeBinaryFromReader(message: CampaignSharedSetErrorEnum, reader: jspb.BinaryReader): CampaignSharedSetErrorEnum;
}

export namespace CampaignSharedSetErrorEnum {
  export type AsObject = {
  }

  export enum CampaignSharedSetError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SHARED_SET_ACCESS_DENIED = 2,
  }
}

