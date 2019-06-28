// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/new_resource_creation_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class NewResourceCreationErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewResourceCreationErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: NewResourceCreationErrorEnum): NewResourceCreationErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewResourceCreationErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewResourceCreationErrorEnum;
  static deserializeBinaryFromReader(message: NewResourceCreationErrorEnum, reader: jspb.BinaryReader): NewResourceCreationErrorEnum;
}

export namespace NewResourceCreationErrorEnum {
  export type AsObject = {
  }

  export enum NewResourceCreationError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_SET_ID_FOR_CREATE = 2,
    DUPLICATE_TEMP_IDS = 3,
    TEMP_ID_RESOURCE_HAD_ERRORS = 4,
  }
}

