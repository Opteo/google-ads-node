// package: google.ads.googleads.v4.errors
// file: google/ads/googleads/v4/errors/asset_link_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AssetLinkErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetLinkErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: AssetLinkErrorEnum): AssetLinkErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetLinkErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetLinkErrorEnum;
  static deserializeBinaryFromReader(message: AssetLinkErrorEnum, reader: jspb.BinaryReader): AssetLinkErrorEnum;
}

export namespace AssetLinkErrorEnum {
  export type AsObject = {
  }

  export interface AssetLinkErrorMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    PINNING_UNSUPPORTED: 2;
  }

  export const AssetLinkError: AssetLinkErrorMap;
}

