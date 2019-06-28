// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/asset_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AssetErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AssetErrorEnum): AssetErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetErrorEnum;
  static deserializeBinaryFromReader(message: AssetErrorEnum, reader: jspb.BinaryReader): AssetErrorEnum;
}

export namespace AssetErrorEnum {
  export type AsObject = {
  }

  export enum AssetError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CUSTOMER_NOT_WHITELISTED_FOR_ASSET_TYPE = 2,
    DUPLICATE_ASSET = 3,
    DUPLICATE_ASSET_NAME = 4,
    ASSET_DATA_IS_MISSING = 5,
    CANNOT_MODIFY_ASSET_NAME = 6,
  }
}

