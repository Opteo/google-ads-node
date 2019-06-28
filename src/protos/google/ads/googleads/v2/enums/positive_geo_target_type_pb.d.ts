// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/positive_geo_target_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PositiveGeoTargetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositiveGeoTargetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PositiveGeoTargetTypeEnum): PositiveGeoTargetTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositiveGeoTargetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositiveGeoTargetTypeEnum;
  static deserializeBinaryFromReader(message: PositiveGeoTargetTypeEnum, reader: jspb.BinaryReader): PositiveGeoTargetTypeEnum;
}

export namespace PositiveGeoTargetTypeEnum {
  export type AsObject = {
  }

  export enum PositiveGeoTargetType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PRESENCE_OR_INTEREST = 5,
    SEARCH_INTEREST = 6,
    PRESENCE = 7,
  }
}

