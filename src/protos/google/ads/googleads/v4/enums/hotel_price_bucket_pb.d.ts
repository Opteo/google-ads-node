// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/hotel_price_bucket.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class HotelPriceBucketEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelPriceBucketEnum.AsObject;
  static toObject(includeInstance: boolean, msg: HotelPriceBucketEnum): HotelPriceBucketEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelPriceBucketEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelPriceBucketEnum;
  static deserializeBinaryFromReader(message: HotelPriceBucketEnum, reader: jspb.BinaryReader): HotelPriceBucketEnum;
}

export namespace HotelPriceBucketEnum {
  export type AsObject = {
  }

  export interface HotelPriceBucketMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    LOWEST_TIED: 3;
    NOT_LOWEST: 4;
  }

  export const HotelPriceBucket: HotelPriceBucketMap;
}

