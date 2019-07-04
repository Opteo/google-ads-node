// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/negative_geo_target_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class NegativeGeoTargetTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NegativeGeoTargetTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: NegativeGeoTargetTypeEnum): NegativeGeoTargetTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NegativeGeoTargetTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NegativeGeoTargetTypeEnum;
  static deserializeBinaryFromReader(message: NegativeGeoTargetTypeEnum, reader: jspb.BinaryReader): NegativeGeoTargetTypeEnum;
}

export namespace NegativeGeoTargetTypeEnum {
  export type AsObject = {
  }

  export enum NegativeGeoTargetType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PRESENCE_OR_INTEREST = 4,
    PRESENCE = 5,
  }
}

