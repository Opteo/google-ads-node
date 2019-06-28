// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/spending_limit_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SpendingLimitTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendingLimitTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SpendingLimitTypeEnum): SpendingLimitTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpendingLimitTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendingLimitTypeEnum;
  static deserializeBinaryFromReader(message: SpendingLimitTypeEnum, reader: jspb.BinaryReader): SpendingLimitTypeEnum;
}

export namespace SpendingLimitTypeEnum {
  export type AsObject = {
  }

  export enum SpendingLimitType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    INFINITE = 2,
  }
}

