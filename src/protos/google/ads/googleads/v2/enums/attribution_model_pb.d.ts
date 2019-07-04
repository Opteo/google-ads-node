// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/attribution_model.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AttributionModelEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttributionModelEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AttributionModelEnum): AttributionModelEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttributionModelEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttributionModelEnum;
  static deserializeBinaryFromReader(message: AttributionModelEnum, reader: jspb.BinaryReader): AttributionModelEnum;
}

export namespace AttributionModelEnum {
  export type AsObject = {
  }

  export enum AttributionModel {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EXTERNAL = 100,
    GOOGLE_ADS_LAST_CLICK = 101,
    GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK = 102,
    GOOGLE_SEARCH_ATTRIBUTION_LINEAR = 103,
    GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY = 104,
    GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED = 105,
    GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN = 106,
  }
}

