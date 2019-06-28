// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/legacy_app_install_ad_app_store.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LegacyAppInstallAdAppStoreEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegacyAppInstallAdAppStoreEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LegacyAppInstallAdAppStoreEnum): LegacyAppInstallAdAppStoreEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LegacyAppInstallAdAppStoreEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegacyAppInstallAdAppStoreEnum;
  static deserializeBinaryFromReader(message: LegacyAppInstallAdAppStoreEnum, reader: jspb.BinaryReader): LegacyAppInstallAdAppStoreEnum;
}

export namespace LegacyAppInstallAdAppStoreEnum {
  export type AsObject = {
  }

  export enum LegacyAppInstallAdAppStore {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    APPLE_APP_STORE = 2,
    GOOGLE_PLAY = 3,
    WINDOWS_STORE = 4,
    WINDOWS_PHONE_STORE = 5,
    CN_APP_STORE = 6,
  }
}

