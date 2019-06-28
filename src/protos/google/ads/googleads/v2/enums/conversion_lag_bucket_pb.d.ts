// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/conversion_lag_bucket.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionLagBucketEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionLagBucketEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionLagBucketEnum): ConversionLagBucketEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionLagBucketEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionLagBucketEnum;
  static deserializeBinaryFromReader(message: ConversionLagBucketEnum, reader: jspb.BinaryReader): ConversionLagBucketEnum;
}

export namespace ConversionLagBucketEnum {
  export type AsObject = {
  }

  export enum ConversionLagBucket {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    LESS_THAN_ONE_DAY = 2,
    ONE_TO_TWO_DAYS = 3,
    TWO_TO_THREE_DAYS = 4,
    THREE_TO_FOUR_DAYS = 5,
    FOUR_TO_FIVE_DAYS = 6,
    FIVE_TO_SIX_DAYS = 7,
    SIX_TO_SEVEN_DAYS = 8,
    SEVEN_TO_EIGHT_DAYS = 9,
    EIGHT_TO_NINE_DAYS = 10,
    NINE_TO_TEN_DAYS = 11,
    TEN_TO_ELEVEN_DAYS = 12,
    ELEVEN_TO_TWELVE_DAYS = 13,
    TWELVE_TO_THIRTEEN_DAYS = 14,
    THIRTEEN_TO_FOURTEEN_DAYS = 15,
    FOURTEEN_TO_TWENTY_ONE_DAYS = 16,
    TWENTY_ONE_TO_THIRTY_DAYS = 17,
    THIRTY_TO_FORTY_FIVE_DAYS = 18,
    FORTY_FIVE_TO_SIXTY_DAYS = 19,
    SIXTY_TO_NINETY_DAYS = 20,
  }
}

