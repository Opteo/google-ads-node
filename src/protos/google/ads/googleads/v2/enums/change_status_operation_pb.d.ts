// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/change_status_operation.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ChangeStatusOperationEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeStatusOperationEnum.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeStatusOperationEnum): ChangeStatusOperationEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeStatusOperationEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeStatusOperationEnum;
  static deserializeBinaryFromReader(message: ChangeStatusOperationEnum, reader: jspb.BinaryReader): ChangeStatusOperationEnum;
}

export namespace ChangeStatusOperationEnum {
  export type AsObject = {
  }

  export enum ChangeStatusOperation {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADDED = 2,
    CHANGED = 3,
    REMOVED = 4,
  }
}

