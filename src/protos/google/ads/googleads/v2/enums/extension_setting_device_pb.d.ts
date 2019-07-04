// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/extension_setting_device.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ExtensionSettingDeviceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionSettingDeviceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionSettingDeviceEnum): ExtensionSettingDeviceEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionSettingDeviceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionSettingDeviceEnum;
  static deserializeBinaryFromReader(message: ExtensionSettingDeviceEnum, reader: jspb.BinaryReader): ExtensionSettingDeviceEnum;
}

export namespace ExtensionSettingDeviceEnum {
  export type AsObject = {
  }

  export enum ExtensionSettingDevice {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
    DESKTOP = 3,
  }
}

