// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/placement_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PlacementTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlacementTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PlacementTypeEnum): PlacementTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlacementTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlacementTypeEnum;
  static deserializeBinaryFromReader(message: PlacementTypeEnum, reader: jspb.BinaryReader): PlacementTypeEnum;
}

export namespace PlacementTypeEnum {
  export type AsObject = {
  }

  export enum PlacementType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    WEBSITE = 2,
    MOBILE_APP_CATEGORY = 3,
    MOBILE_APPLICATION = 4,
    YOUTUBE_VIDEO = 5,
    YOUTUBE_CHANNEL = 6,
  }
}

