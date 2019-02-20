// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/media_type.proto

import * as jspb from "google-protobuf";

export class MediaTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MediaTypeEnum): MediaTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaTypeEnum;
  static deserializeBinaryFromReader(message: MediaTypeEnum, reader: jspb.BinaryReader): MediaTypeEnum;
}

export namespace MediaTypeEnum {
  export type AsObject = {
  }

  export enum MediaType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    IMAGE = 2,
    ICON = 3,
    MEDIA_BUNDLE = 4,
    AUDIO = 5,
    VIDEO = 6,
    DYNAMIC_IMAGE = 7,
  }
}

