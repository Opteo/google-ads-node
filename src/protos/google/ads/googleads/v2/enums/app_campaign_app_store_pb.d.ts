// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/app_campaign_app_store.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AppCampaignAppStoreEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppCampaignAppStoreEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AppCampaignAppStoreEnum): AppCampaignAppStoreEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppCampaignAppStoreEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppCampaignAppStoreEnum;
  static deserializeBinaryFromReader(message: AppCampaignAppStoreEnum, reader: jspb.BinaryReader): AppCampaignAppStoreEnum;
}

export namespace AppCampaignAppStoreEnum {
  export type AsObject = {
  }

  export enum AppCampaignAppStore {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    APPLE_APP_STORE = 2,
    GOOGLE_APP_STORE = 3,
  }
}

