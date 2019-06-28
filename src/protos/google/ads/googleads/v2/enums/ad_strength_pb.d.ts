// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/ad_strength.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdStrengthEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdStrengthEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AdStrengthEnum): AdStrengthEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdStrengthEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdStrengthEnum;
  static deserializeBinaryFromReader(message: AdStrengthEnum, reader: jspb.BinaryReader): AdStrengthEnum;
}

export namespace AdStrengthEnum {
  export type AsObject = {
  }

  export enum AdStrength {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    PENDING = 2,
    NO_ADS = 3,
    POOR = 4,
    AVERAGE = 5,
    GOOD = 6,
    EXCELLENT = 7,
  }
}

