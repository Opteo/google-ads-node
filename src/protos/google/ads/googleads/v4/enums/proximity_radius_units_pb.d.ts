// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/proximity_radius_units.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ProximityRadiusUnitsEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProximityRadiusUnitsEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ProximityRadiusUnitsEnum): ProximityRadiusUnitsEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProximityRadiusUnitsEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProximityRadiusUnitsEnum;
  static deserializeBinaryFromReader(message: ProximityRadiusUnitsEnum, reader: jspb.BinaryReader): ProximityRadiusUnitsEnum;
}

export namespace ProximityRadiusUnitsEnum {
  export type AsObject = {
  }

  export interface ProximityRadiusUnitsMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    MILES: 2;
    KILOMETERS: 3;
  }

  export const ProximityRadiusUnits: ProximityRadiusUnitsMap;
}

