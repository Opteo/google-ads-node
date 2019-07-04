// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/explorer_auto_optimizer_setting.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ExplorerAutoOptimizerSetting extends jspb.Message {
  hasOptIn(): boolean;
  clearOptIn(): void;
  getOptIn(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setOptIn(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplorerAutoOptimizerSetting.AsObject;
  static toObject(includeInstance: boolean, msg: ExplorerAutoOptimizerSetting): ExplorerAutoOptimizerSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplorerAutoOptimizerSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplorerAutoOptimizerSetting;
  static deserializeBinaryFromReader(message: ExplorerAutoOptimizerSetting, reader: jspb.BinaryReader): ExplorerAutoOptimizerSetting;
}

export namespace ExplorerAutoOptimizerSetting {
  export type AsObject = {
    optIn?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

