// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/mime_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MimeTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MimeTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MimeTypeEnum): MimeTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MimeTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MimeTypeEnum;
  static deserializeBinaryFromReader(message: MimeTypeEnum, reader: jspb.BinaryReader): MimeTypeEnum;
}

export namespace MimeTypeEnum {
  export type AsObject = {
  }

  export enum MimeType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    IMAGE_JPEG = 2,
    IMAGE_GIF = 3,
    IMAGE_PNG = 4,
    FLASH = 5,
    TEXT_HTML = 6,
    PDF = 7,
    MSWORD = 8,
    MSEXCEL = 9,
    RTF = 10,
    AUDIO_WAV = 11,
    AUDIO_MP3 = 12,
    HTML5_AD_ZIP = 13,
  }
}

