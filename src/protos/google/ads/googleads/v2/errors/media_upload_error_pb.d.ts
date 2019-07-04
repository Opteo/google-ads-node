// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/media_upload_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MediaUploadErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaUploadErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MediaUploadErrorEnum): MediaUploadErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaUploadErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaUploadErrorEnum;
  static deserializeBinaryFromReader(message: MediaUploadErrorEnum, reader: jspb.BinaryReader): MediaUploadErrorEnum;
}

export namespace MediaUploadErrorEnum {
  export type AsObject = {
  }

  export enum MediaUploadError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    FILE_TOO_BIG = 2,
    UNPARSEABLE_IMAGE = 3,
    ANIMATED_IMAGE_NOT_ALLOWED = 4,
    FORMAT_NOT_ALLOWED = 5,
  }
}

