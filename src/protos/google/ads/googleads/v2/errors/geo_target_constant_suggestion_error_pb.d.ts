// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/geo_target_constant_suggestion_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GeoTargetConstantSuggestionErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeoTargetConstantSuggestionErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: GeoTargetConstantSuggestionErrorEnum): GeoTargetConstantSuggestionErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GeoTargetConstantSuggestionErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeoTargetConstantSuggestionErrorEnum;
  static deserializeBinaryFromReader(message: GeoTargetConstantSuggestionErrorEnum, reader: jspb.BinaryReader): GeoTargetConstantSuggestionErrorEnum;
}

export namespace GeoTargetConstantSuggestionErrorEnum {
  export type AsObject = {
  }

  export enum GeoTargetConstantSuggestionError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LOCATION_NAME_SIZE_LIMIT = 2,
    LOCATION_NAME_LIMIT = 3,
    INVALID_COUNTRY_CODE = 4,
    REQUEST_PARAMETERS_UNSET = 5,
  }
}

