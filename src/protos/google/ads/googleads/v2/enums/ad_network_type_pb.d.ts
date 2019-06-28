// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_network_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdNetworkTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdNetworkTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdNetworkTypeEnum): AdNetworkTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdNetworkTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdNetworkTypeEnum;
  static deserializeBinaryFromReader(message: AdNetworkTypeEnum, reader: jspb.BinaryReader): AdNetworkTypeEnum;
}

export namespace AdNetworkTypeEnum {
  export type AsObject = {
  }

  export enum AdNetworkType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    SEARCH = 2,
    SEARCH_PARTNERS = 3,
    CONTENT = 4,
    YOUTUBE_SEARCH = 5,
    YOUTUBE_WATCH = 6,
    MIXED = 7,
  }
}

