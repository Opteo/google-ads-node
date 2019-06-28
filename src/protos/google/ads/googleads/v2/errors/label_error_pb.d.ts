// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/label_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LabelErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LabelErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LabelErrorEnum): LabelErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LabelErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LabelErrorEnum;
  static deserializeBinaryFromReader(message: LabelErrorEnum, reader: jspb.BinaryReader): LabelErrorEnum;
}

export namespace LabelErrorEnum {
  export type AsObject = {
  }

  export enum LabelError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_APPLY_INACTIVE_LABEL = 2,
    CANNOT_APPLY_LABEL_TO_DISABLED_AD_GROUP_CRITERION = 3,
    CANNOT_APPLY_LABEL_TO_NEGATIVE_AD_GROUP_CRITERION = 4,
    EXCEEDED_LABEL_LIMIT_PER_TYPE = 5,
    INVALID_RESOURCE_FOR_MANAGER_LABEL = 6,
    DUPLICATE_NAME = 7,
    INVALID_LABEL_NAME = 8,
    CANNOT_ATTACH_LABEL_TO_DRAFT = 9,
    CANNOT_ATTACH_NON_MANAGER_LABEL_TO_CUSTOMER = 10,
  }
}

