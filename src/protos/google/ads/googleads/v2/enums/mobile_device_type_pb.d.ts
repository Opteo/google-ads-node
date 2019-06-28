// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/mobile_device_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MobileDeviceTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDeviceTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDeviceTypeEnum): MobileDeviceTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileDeviceTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDeviceTypeEnum;
  static deserializeBinaryFromReader(message: MobileDeviceTypeEnum, reader: jspb.BinaryReader): MobileDeviceTypeEnum;
}

export namespace MobileDeviceTypeEnum {
  export type AsObject = {
  }

  export enum MobileDeviceType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MOBILE = 2,
    TABLET = 3,
  }
}

