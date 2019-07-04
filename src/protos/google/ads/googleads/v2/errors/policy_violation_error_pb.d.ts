// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/policy_violation_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyViolationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyViolationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyViolationErrorEnum): PolicyViolationErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyViolationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyViolationErrorEnum;
  static deserializeBinaryFromReader(message: PolicyViolationErrorEnum, reader: jspb.BinaryReader): PolicyViolationErrorEnum;
}

export namespace PolicyViolationErrorEnum {
  export type AsObject = {
  }

  export enum PolicyViolationError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    POLICY_ERROR = 2,
  }
}

