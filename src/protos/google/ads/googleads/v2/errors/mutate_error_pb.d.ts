// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/mutate_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MutateErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MutateErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MutateErrorEnum): MutateErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MutateErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MutateErrorEnum;
  static deserializeBinaryFromReader(message: MutateErrorEnum, reader: jspb.BinaryReader): MutateErrorEnum;
}

export namespace MutateErrorEnum {
  export type AsObject = {
  }

  export enum MutateError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    RESOURCE_NOT_FOUND = 3,
    ID_EXISTS_IN_MULTIPLE_MUTATES = 7,
    INCONSISTENT_FIELD_VALUES = 8,
    MUTATE_NOT_ALLOWED = 9,
    RESOURCE_NOT_IN_GOOGLE_ADS = 10,
    RESOURCE_ALREADY_EXISTS = 11,
  }
}

