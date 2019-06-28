// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/vanity_pharma_display_url_mode.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class VanityPharmaDisplayUrlModeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VanityPharmaDisplayUrlModeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: VanityPharmaDisplayUrlModeEnum): VanityPharmaDisplayUrlModeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VanityPharmaDisplayUrlModeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VanityPharmaDisplayUrlModeEnum;
  static deserializeBinaryFromReader(message: VanityPharmaDisplayUrlModeEnum, reader: jspb.BinaryReader): VanityPharmaDisplayUrlModeEnum;
}

export namespace VanityPharmaDisplayUrlModeEnum {
  export type AsObject = {
  }

  export enum VanityPharmaDisplayUrlMode {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    MANUFACTURER_WEBSITE_URL = 2,
    WEBSITE_DESCRIPTION = 3,
  }
}

