// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/sitelink_placeholder_field.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SitelinkPlaceholderFieldEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SitelinkPlaceholderFieldEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SitelinkPlaceholderFieldEnum): SitelinkPlaceholderFieldEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SitelinkPlaceholderFieldEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SitelinkPlaceholderFieldEnum;
  static deserializeBinaryFromReader(message: SitelinkPlaceholderFieldEnum, reader: jspb.BinaryReader): SitelinkPlaceholderFieldEnum;
}

export namespace SitelinkPlaceholderFieldEnum {
  export type AsObject = {
  }

  export enum SitelinkPlaceholderField {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TEXT = 2,
    LINE_1 = 3,
    LINE_2 = 4,
    FINAL_URLS = 5,
    FINAL_MOBILE_URLS = 6,
    TRACKING_URL = 7,
    FINAL_URL_SUFFIX = 8,
  }
}

