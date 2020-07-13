// package: google.ads.googleads.v4.enums
// file: google/ads/googleads/v4/enums/linked_account_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LinkedAccountTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkedAccountTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: LinkedAccountTypeEnum): LinkedAccountTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkedAccountTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkedAccountTypeEnum;
  static deserializeBinaryFromReader(message: LinkedAccountTypeEnum, reader: jspb.BinaryReader): LinkedAccountTypeEnum;
}

export namespace LinkedAccountTypeEnum {
  export type AsObject = {
  }

  export interface LinkedAccountTypeMap {
    UNSPECIFIED: 0;
    UNKNOWN: 1;
    THIRD_PARTY_APP_ANALYTICS: 2;
  }

  export const LinkedAccountType: LinkedAccountTypeMap;
}

