// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/media_file_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MediaFileErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaFileErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MediaFileErrorEnum): MediaFileErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MediaFileErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaFileErrorEnum;
  static deserializeBinaryFromReader(message: MediaFileErrorEnum, reader: jspb.BinaryReader): MediaFileErrorEnum;
}

export namespace MediaFileErrorEnum {
  export type AsObject = {
  }

  export enum MediaFileError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_CREATE_STANDARD_ICON = 2,
    CANNOT_SELECT_STANDARD_ICON_WITH_OTHER_TYPES = 3,
    CANNOT_SPECIFY_MEDIA_FILE_ID_AND_DATA = 4,
    DUPLICATE_MEDIA = 5,
    EMPTY_FIELD = 6,
    RESOURCE_REFERENCED_IN_MULTIPLE_OPS = 7,
    FIELD_NOT_SUPPORTED_FOR_MEDIA_SUB_TYPE = 8,
    INVALID_MEDIA_FILE_ID = 9,
    INVALID_MEDIA_SUB_TYPE = 10,
    INVALID_MEDIA_FILE_TYPE = 11,
    INVALID_MIME_TYPE = 12,
    INVALID_REFERENCE_ID = 13,
    INVALID_YOU_TUBE_ID = 14,
    MEDIA_FILE_FAILED_TRANSCODING = 15,
    MEDIA_NOT_TRANSCODED = 16,
    MEDIA_TYPE_DOES_NOT_MATCH_MEDIA_FILE_TYPE = 17,
    NO_FIELDS_SPECIFIED = 18,
    NULL_REFERENCE_ID_AND_MEDIA_ID = 19,
    TOO_LONG = 20,
    UNSUPPORTED_TYPE = 21,
    YOU_TUBE_SERVICE_UNAVAILABLE = 22,
    YOU_TUBE_VIDEO_HAS_NON_POSITIVE_DURATION = 23,
    YOU_TUBE_VIDEO_NOT_FOUND = 24,
  }
}

