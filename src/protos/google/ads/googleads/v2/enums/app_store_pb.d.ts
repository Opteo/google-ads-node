// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/app_store.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AppStoreEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppStoreEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AppStoreEnum): AppStoreEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppStoreEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppStoreEnum;
  static deserializeBinaryFromReader(message: AppStoreEnum, reader: jspb.BinaryReader): AppStoreEnum;
}

export namespace AppStoreEnum {
  export type AsObject = {
  }

  export enum AppStore {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    APPLE_ITUNES = 2,
    GOOGLE_PLAY = 3,
  }
}

