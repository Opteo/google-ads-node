// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/geo_targeting_restriction.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GeoTargetingRestrictionEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetingRestrictionEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetingRestrictionEnum): GeoTargetingRestrictionEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoTargetingRestrictionEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetingRestrictionEnum;
  static deserializeBinaryFromReader(message: GeoTargetingRestrictionEnum, reader: jspb.BinaryReader): GeoTargetingRestrictionEnum;
}

export namespace GeoTargetingRestrictionEnum {
  export type AsObject = {
  }

  export enum GeoTargetingRestriction {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LOCATION_OF_PRESENCE = 2,
  }
}

