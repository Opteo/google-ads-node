// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/image_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ImageErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImageErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ImageErrorEnum): ImageErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImageErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImageErrorEnum;
  static deserializeBinaryFromReader(message: ImageErrorEnum, reader: jspb.BinaryReader): ImageErrorEnum;
}

export namespace ImageErrorEnum {
  export type AsObject = {
  }

  export enum ImageError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INVALID_IMAGE = 2,
    STORAGE_ERROR = 3,
    BAD_REQUEST = 4,
    UNEXPECTED_SIZE = 5,
    ANIMATED_NOT_ALLOWED = 6,
    ANIMATION_TOO_LONG = 7,
    SERVER_ERROR = 8,
    CMYK_JPEG_NOT_ALLOWED = 9,
    FLASH_NOT_ALLOWED = 10,
    FLASH_WITHOUT_CLICKTAG = 11,
    FLASH_ERROR_AFTER_FIXING_CLICK_TAG = 12,
    ANIMATED_VISUAL_EFFECT = 13,
    FLASH_ERROR = 14,
    LAYOUT_PROBLEM = 15,
    PROBLEM_READING_IMAGE_FILE = 16,
    ERROR_STORING_IMAGE = 17,
    ASPECT_RATIO_NOT_ALLOWED = 18,
    FLASH_HAS_NETWORK_OBJECTS = 19,
    FLASH_HAS_NETWORK_METHODS = 20,
    FLASH_HAS_URL = 21,
    FLASH_HAS_MOUSE_TRACKING = 22,
    FLASH_HAS_RANDOM_NUM = 23,
    FLASH_SELF_TARGETS = 24,
    FLASH_BAD_GETURL_TARGET = 25,
    FLASH_VERSION_NOT_SUPPORTED = 26,
    FLASH_WITHOUT_HARD_CODED_CLICK_URL = 27,
    INVALID_FLASH_FILE = 28,
    FAILED_TO_FIX_CLICK_TAG_IN_FLASH = 29,
    FLASH_ACCESSES_NETWORK_RESOURCES = 30,
    FLASH_EXTERNAL_JS_CALL = 31,
    FLASH_EXTERNAL_FS_CALL = 32,
    FILE_TOO_LARGE = 33,
    IMAGE_DATA_TOO_LARGE = 34,
    IMAGE_PROCESSING_ERROR = 35,
    IMAGE_TOO_SMALL = 36,
    INVALID_INPUT = 37,
    PROBLEM_READING_FILE = 38,
  }
}

