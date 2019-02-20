// package: google.ads.googleads.v0.errors
// file: google/ads/googleads/v0/errors/collection_size_error.proto

import * as jspb from "google-protobuf";

export class CollectionSizeErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionSizeErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionSizeErrorEnum): CollectionSizeErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CollectionSizeErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionSizeErrorEnum;
  static deserializeBinaryFromReader(message: CollectionSizeErrorEnum, reader: jspb.BinaryReader): CollectionSizeErrorEnum;
}

export namespace CollectionSizeErrorEnum {
  export type AsObject = {
  }

  export enum CollectionSizeError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    TOO_FEW = 2,
    TOO_MANY = 3,
  }
}

