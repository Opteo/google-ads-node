// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/policy_finding_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PolicyFindingErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyFindingErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyFindingErrorEnum): PolicyFindingErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PolicyFindingErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyFindingErrorEnum;
  static deserializeBinaryFromReader(message: PolicyFindingErrorEnum, reader: jspb.BinaryReader): PolicyFindingErrorEnum;
}

export namespace PolicyFindingErrorEnum {
  export type AsObject = {
  }

  export enum PolicyFindingError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    POLICY_FINDING = 2,
    POLICY_TOPIC_NOT_FOUND = 3,
  }
}

