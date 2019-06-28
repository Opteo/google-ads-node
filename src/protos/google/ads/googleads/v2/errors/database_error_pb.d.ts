// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/database_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DatabaseErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatabaseErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: DatabaseErrorEnum): DatabaseErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatabaseErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatabaseErrorEnum;
  static deserializeBinaryFromReader(message: DatabaseErrorEnum, reader: jspb.BinaryReader): DatabaseErrorEnum;
}

export namespace DatabaseErrorEnum {
  export type AsObject = {
  }

  export enum DatabaseError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CONCURRENT_MODIFICATION = 2,
    DATA_CONSTRAINT_VIOLATION = 3,
  }
}

