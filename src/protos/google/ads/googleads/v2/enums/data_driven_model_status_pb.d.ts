// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/data_driven_model_status.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DataDrivenModelStatusEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataDrivenModelStatusEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DataDrivenModelStatusEnum): DataDrivenModelStatusEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataDrivenModelStatusEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataDrivenModelStatusEnum;
  static deserializeBinaryFromReader(message: DataDrivenModelStatusEnum, reader: jspb.BinaryReader): DataDrivenModelStatusEnum;
}

export namespace DataDrivenModelStatusEnum {
  export type AsObject = {
  }

  export enum DataDrivenModelStatus {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AVAILABLE = 2,
    STALE = 3,
    EXPIRED = 4,
    NEVER_GENERATED = 5,
  }
}

