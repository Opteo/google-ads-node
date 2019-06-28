// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/conversion_action_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ConversionActionErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversionActionErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ConversionActionErrorEnum): ConversionActionErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConversionActionErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversionActionErrorEnum;
  static deserializeBinaryFromReader(message: ConversionActionErrorEnum, reader: jspb.BinaryReader): ConversionActionErrorEnum;
}

export namespace ConversionActionErrorEnum {
  export type AsObject = {
  }

  export enum ConversionActionError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    DUPLICATE_NAME = 2,
    DUPLICATE_APP_ID = 3,
    TWO_CONVERSION_ACTIONS_BIDDING_ON_SAME_APP_DOWNLOAD = 4,
    BIDDING_ON_SAME_APP_DOWNLOAD_AS_GLOBAL_ACTION = 5,
    DATA_DRIVEN_MODEL_WAS_NEVER_GENERATED = 6,
    DATA_DRIVEN_MODEL_EXPIRED = 7,
    DATA_DRIVEN_MODEL_STALE = 8,
    DATA_DRIVEN_MODEL_UNKNOWN = 9,
  }
}

