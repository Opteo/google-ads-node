// package: google.ads.googleads.v0.enums
// file: google/ads/googleads/v0/enums/quality_score_bucket.proto

import * as jspb from "google-protobuf";

export class QualityScoreBucketEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QualityScoreBucketEnum.AsObject;
  static toObject(includeInstance: boolean, msg: QualityScoreBucketEnum): QualityScoreBucketEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QualityScoreBucketEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QualityScoreBucketEnum;
  static deserializeBinaryFromReader(message: QualityScoreBucketEnum, reader: jspb.BinaryReader): QualityScoreBucketEnum;
}

export namespace QualityScoreBucketEnum {
  export type AsObject = {
  }

  export enum QualityScoreBucket {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    BELOW_AVERAGE = 2,
    AVERAGE = 3,
    ABOVE_AVERAGE = 4,
  }
}

