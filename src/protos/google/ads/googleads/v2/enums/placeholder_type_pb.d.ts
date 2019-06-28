// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/placeholder_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PlaceholderTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaceholderTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PlaceholderTypeEnum): PlaceholderTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlaceholderTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaceholderTypeEnum;
  static deserializeBinaryFromReader(message: PlaceholderTypeEnum, reader: jspb.BinaryReader): PlaceholderTypeEnum;
}

export namespace PlaceholderTypeEnum {
  export type AsObject = {
  }

  export enum PlaceholderType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SITELINK = 2,
    CALL = 3,
    APP = 4,
    LOCATION = 5,
    AFFILIATE_LOCATION = 6,
    CALLOUT = 7,
    STRUCTURED_SNIPPET = 8,
    MESSAGE = 9,
    PRICE = 10,
    PROMOTION = 11,
    AD_CUSTOMIZER = 12,
    DYNAMIC_EDUCATION = 13,
    DYNAMIC_FLIGHT = 14,
    DYNAMIC_CUSTOM = 15,
    DYNAMIC_HOTEL = 16,
    DYNAMIC_REAL_ESTATE = 17,
    DYNAMIC_TRAVEL = 18,
    DYNAMIC_LOCAL = 19,
    DYNAMIC_JOB = 20,
  }
}

