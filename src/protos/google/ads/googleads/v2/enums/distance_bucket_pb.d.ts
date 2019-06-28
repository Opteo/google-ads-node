// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/distance_bucket.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DistanceBucketEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistanceBucketEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DistanceBucketEnum): DistanceBucketEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistanceBucketEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistanceBucketEnum;
  static deserializeBinaryFromReader(message: DistanceBucketEnum, reader: jspb.BinaryReader): DistanceBucketEnum;
}

export namespace DistanceBucketEnum {
  export type AsObject = {
  }

  export enum DistanceBucket {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    WITHIN_700M = 2,
    WITHIN_1KM = 3,
    WITHIN_5KM = 4,
    WITHIN_10KM = 5,
    WITHIN_15KM = 6,
    WITHIN_20KM = 7,
    WITHIN_25KM = 8,
    WITHIN_30KM = 9,
    WITHIN_35KM = 10,
    WITHIN_40KM = 11,
    WITHIN_45KM = 12,
    WITHIN_50KM = 13,
    WITHIN_55KM = 14,
    WITHIN_60KM = 15,
    WITHIN_65KM = 16,
    BEYOND_65KM = 17,
    WITHIN_0_7MILES = 18,
    WITHIN_1MILE = 19,
    WITHIN_5MILES = 20,
    WITHIN_10MILES = 21,
    WITHIN_15MILES = 22,
    WITHIN_20MILES = 23,
    WITHIN_25MILES = 24,
    WITHIN_30MILES = 25,
    WITHIN_35MILES = 26,
    WITHIN_40MILES = 27,
    BEYOND_40MILES = 28,
  }
}

