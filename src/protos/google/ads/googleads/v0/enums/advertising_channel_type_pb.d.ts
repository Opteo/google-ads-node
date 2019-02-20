// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/advertising_channel_type.proto

import * as jspb from "google-protobuf";

export class AdvertisingChannelTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdvertisingChannelTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdvertisingChannelTypeEnum): AdvertisingChannelTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdvertisingChannelTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdvertisingChannelTypeEnum;
  static deserializeBinaryFromReader(message: AdvertisingChannelTypeEnum, reader: jspb.BinaryReader): AdvertisingChannelTypeEnum;
}

export namespace AdvertisingChannelTypeEnum {
  export type AsObject = {
  }

  export enum AdvertisingChannelType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH = 2,
    DISPLAY = 3,
    SHOPPING = 4,
    HOTEL = 5,
    VIDEO = 6,
  }
}

