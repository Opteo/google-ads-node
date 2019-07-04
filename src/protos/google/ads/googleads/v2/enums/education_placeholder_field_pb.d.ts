// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/education_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class EducationPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EducationPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: EducationPlaceholderFieldEnum): EducationPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EducationPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EducationPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: EducationPlaceholderFieldEnum, reader: jspb.BinaryReader): EducationPlaceholderFieldEnum;
}

export namespace EducationPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum EducationPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PROGRAM_ID = 2,
    LOCATION_ID = 3,
    PROGRAM_NAME = 4,
    AREA_OF_STUDY = 5,
    PROGRAM_DESCRIPTION = 6,
    SCHOOL_NAME = 7,
    ADDRESS = 8,
    THUMBNAIL_IMAGE_URL = 9,
    ALTERNATIVE_THUMBNAIL_IMAGE_URL = 10,
    FINAL_URLS = 11,
    FINAL_MOBILE_URLS = 12,
    TRACKING_URL = 13,
    CONTEXTUAL_KEYWORDS = 14,
    ANDROID_APP_LINK = 15,
    SIMILAR_PROGRAM_IDS = 16,
    IOS_APP_LINK = 17,
    IOS_APP_STORE_ID = 18,
  }
}

