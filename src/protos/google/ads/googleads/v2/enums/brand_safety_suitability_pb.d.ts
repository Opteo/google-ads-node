// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/brand_safety_suitability.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BrandSafetySuitabilityEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrandSafetySuitabilityEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BrandSafetySuitabilityEnum): BrandSafetySuitabilityEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrandSafetySuitabilityEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrandSafetySuitabilityEnum;
  static deserializeBinaryFromReader(message: BrandSafetySuitabilityEnum, reader: jspb.BinaryReader): BrandSafetySuitabilityEnum;
}

export namespace BrandSafetySuitabilityEnum {
  export type AsObject = {
  }

  export enum BrandSafetySuitability {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EXPANDED_INVENTORY = 2,
    STANDARD_INVENTORY = 3,
    LIMITED_INVENTORY = 4,
  }
}

