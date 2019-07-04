// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/geo_targeting_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GeoTargetingTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetingTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetingTypeEnum): GeoTargetingTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoTargetingTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetingTypeEnum;
  static deserializeBinaryFromReader(message: GeoTargetingTypeEnum, reader: jspb.BinaryReader): GeoTargetingTypeEnum;
}

export namespace GeoTargetingTypeEnum {
  export type AsObject = {
  }

  export enum GeoTargetingType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AREA_OF_INTEREST = 2,
    LOCATION_OF_PRESENCE = 3,
  }
}

