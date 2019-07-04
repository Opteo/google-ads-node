// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/policy_validation_parameter_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyValidationParameterErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyValidationParameterErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyValidationParameterErrorEnum): PolicyValidationParameterErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyValidationParameterErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyValidationParameterErrorEnum;
  static deserializeBinaryFromReader(message: PolicyValidationParameterErrorEnum, reader: jspb.BinaryReader): PolicyValidationParameterErrorEnum;
}

export namespace PolicyValidationParameterErrorEnum {
  export type AsObject = {
  }

  export enum PolicyValidationParameterError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    UNSUPPORTED_AD_TYPE_FOR_IGNORABLE_POLICY_TOPICS = 2,
    UNSUPPORTED_AD_TYPE_FOR_EXEMPT_POLICY_VIOLATION_KEYS = 3,
    CANNOT_SET_BOTH_IGNORABLE_POLICY_TOPICS_AND_EXEMPT_POLICY_VIOLATION_KEYS = 4,
  }
}

