// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/device.proto

import * as jspb from "google-protobuf";

export class DeviceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceEnum): DeviceEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceEnum;
  static deserializeBinaryFromReader(message: DeviceEnum, reader: jspb.BinaryReader): DeviceEnum;
}

export namespace DeviceEnum {
  export type AsObject = {
  }

  export enum Device {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
    TABLET = 3,
    DESKTOP = 4,
  }
}

