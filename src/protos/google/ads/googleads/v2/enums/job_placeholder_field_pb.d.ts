// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/job_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class JobPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JobPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: JobPlaceholderFieldEnum): JobPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JobPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JobPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: JobPlaceholderFieldEnum, reader: jspb.BinaryReader): JobPlaceholderFieldEnum;
}

export namespace JobPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum JobPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    JOB_ID = 2,
    LOCATION_ID = 3,
    TITLE = 4,
    SUBTITLE = 5,
    DESCRIPTION = 6,
    IMAGE_URL = 7,
    CATEGORY = 8,
    CONTEXTUAL_KEYWORDS = 9,
    ADDRESS = 10,
    SALARY = 11,
    FINAL_URLS = 12,
    FINAL_MOBILE_URLS = 14,
    TRACKING_URL = 15,
    ANDROID_APP_LINK = 16,
    SIMILAR_JOB_IDS = 17,
    IOS_APP_LINK = 18,
    IOS_APP_STORE_ID = 19,
  }
}

