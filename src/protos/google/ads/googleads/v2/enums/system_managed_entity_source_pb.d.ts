// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/system_managed_entity_source.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SystemManagedResourceSourceEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemManagedResourceSourceEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SystemManagedResourceSourceEnum): SystemManagedResourceSourceEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemManagedResourceSourceEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemManagedResourceSourceEnum;
  static deserializeBinaryFromReader(message: SystemManagedResourceSourceEnum, reader: jspb.BinaryReader): SystemManagedResourceSourceEnum;
}

export namespace SystemManagedResourceSourceEnum {
  export type AsObject = {
  }

  export enum SystemManagedResourceSource {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    AD_VARIATIONS = 2,
  }
}

