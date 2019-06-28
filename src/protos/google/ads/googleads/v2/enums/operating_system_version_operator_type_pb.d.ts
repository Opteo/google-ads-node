// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/operating_system_version_operator_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OperatingSystemVersionOperatorTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatingSystemVersionOperatorTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: OperatingSystemVersionOperatorTypeEnum): OperatingSystemVersionOperatorTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperatingSystemVersionOperatorTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatingSystemVersionOperatorTypeEnum;
  static deserializeBinaryFromReader(message: OperatingSystemVersionOperatorTypeEnum, reader: jspb.BinaryReader): OperatingSystemVersionOperatorTypeEnum;
}

export namespace OperatingSystemVersionOperatorTypeEnum {
  export type AsObject = {
  }

  export enum OperatingSystemVersionOperatorType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    EQUALS_TO = 2,
    GREATER_THAN_EQUALS_TO = 4,
  }
}

