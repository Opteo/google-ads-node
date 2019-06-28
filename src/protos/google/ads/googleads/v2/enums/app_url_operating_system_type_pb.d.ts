// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/app_url_operating_system_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AppUrlOperatingSystemTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppUrlOperatingSystemTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AppUrlOperatingSystemTypeEnum): AppUrlOperatingSystemTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppUrlOperatingSystemTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppUrlOperatingSystemTypeEnum;
  static deserializeBinaryFromReader(message: AppUrlOperatingSystemTypeEnum, reader: jspb.BinaryReader): AppUrlOperatingSystemTypeEnum;
}

export namespace AppUrlOperatingSystemTypeEnum {
  export type AsObject = {
  }

  export enum AppUrlOperatingSystemType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    IOS = 2,
    ANDROID = 3,
  }
}

