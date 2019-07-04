// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/custom_interest_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomInterestErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomInterestErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomInterestErrorEnum): CustomInterestErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomInterestErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomInterestErrorEnum;
  static deserializeBinaryFromReader(message: CustomInterestErrorEnum, reader: jspb.BinaryReader): CustomInterestErrorEnum;
}

export namespace CustomInterestErrorEnum {
  export type AsObject = {
  }

  export enum CustomInterestError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NAME_ALREADY_USED = 2,
    CUSTOM_INTEREST_MEMBER_ID_AND_TYPE_PARAMETER_NOT_PRESENT_IN_REMOVE = 3,
    TYPE_AND_PARAMETER_NOT_FOUND = 4,
    TYPE_AND_PARAMETER_ALREADY_EXISTED = 5,
    INVALID_CUSTOM_INTEREST_MEMBER_TYPE = 6,
    CANNOT_REMOVE_WHILE_IN_USE = 7,
    CANNOT_CHANGE_TYPE = 8,
  }
}

