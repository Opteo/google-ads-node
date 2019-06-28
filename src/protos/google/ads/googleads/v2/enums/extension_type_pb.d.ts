// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/extension_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ExtensionTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionTypeEnum): ExtensionTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionTypeEnum;
  static deserializeBinaryFromReader(message: ExtensionTypeEnum, reader: jspb.BinaryReader): ExtensionTypeEnum;
}

export namespace ExtensionTypeEnum {
  export type AsObject = {
  }

  export enum ExtensionType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NONE = 2,
    APP = 3,
    CALL = 4,
    CALLOUT = 5,
    MESSAGE = 6,
    PRICE = 7,
    PROMOTION = 8,
    SITELINK = 10,
    STRUCTURED_SNIPPET = 11,
    LOCATION = 12,
    AFFILIATE_LOCATION = 13,
  }
}

