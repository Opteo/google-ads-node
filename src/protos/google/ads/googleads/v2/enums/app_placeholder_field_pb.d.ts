// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/app_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AppPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AppPlaceholderFieldEnum): AppPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: AppPlaceholderFieldEnum, reader: jspb.BinaryReader): AppPlaceholderFieldEnum;
}

export namespace AppPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum AppPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    STORE = 2,
    ID = 3,
    LINK_TEXT = 4,
    URL = 5,
    FINAL_URLS = 6,
    FINAL_MOBILE_URLS = 7,
    TRACKING_URL = 8,
    FINAL_URL_SUFFIX = 9,
  }
}

