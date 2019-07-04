// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/media_bundle_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MediaBundleErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaBundleErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MediaBundleErrorEnum): MediaBundleErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaBundleErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaBundleErrorEnum;
  static deserializeBinaryFromReader(message: MediaBundleErrorEnum, reader: jspb.BinaryReader): MediaBundleErrorEnum;
}

export namespace MediaBundleErrorEnum {
  export type AsObject = {
  }

  export enum MediaBundleError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BAD_REQUEST = 3,
    DOUBLECLICK_BUNDLE_NOT_ALLOWED = 4,
    EXTERNAL_URL_NOT_ALLOWED = 5,
    FILE_TOO_LARGE = 6,
    GOOGLE_WEB_DESIGNER_ZIP_FILE_NOT_PUBLISHED = 7,
    INVALID_INPUT = 8,
    INVALID_MEDIA_BUNDLE = 9,
    INVALID_MEDIA_BUNDLE_ENTRY = 10,
    INVALID_MIME_TYPE = 11,
    INVALID_PATH = 12,
    INVALID_URL_REFERENCE = 13,
    MEDIA_DATA_TOO_LARGE = 14,
    MISSING_PRIMARY_MEDIA_BUNDLE_ENTRY = 15,
    SERVER_ERROR = 16,
    STORAGE_ERROR = 17,
    SWIFFY_BUNDLE_NOT_ALLOWED = 18,
    TOO_MANY_FILES = 19,
    UNEXPECTED_SIZE = 20,
    UNSUPPORTED_GOOGLE_WEB_DESIGNER_ENVIRONMENT = 21,
    UNSUPPORTED_HTML5_FEATURE = 22,
    URL_IN_MEDIA_BUNDLE_NOT_SSL_COMPLIANT = 23,
    CUSTOM_EXIT_NOT_ALLOWED = 24,
  }
}

