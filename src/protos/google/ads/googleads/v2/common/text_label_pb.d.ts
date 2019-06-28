// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/text_label.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TextLabel extends jspb.Message {
  hasBackgroundColor(): boolean;
  clearBackgroundColor(): void;
  getBackgroundColor(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBackgroundColor(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TextLabel.AsObject;
  static toObject(includeInstance: boolean, msg: TextLabel): TextLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TextLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TextLabel;
  static deserializeBinaryFromReader(message: TextLabel, reader: jspb.BinaryReader): TextLabel;
}

export namespace TextLabel {
  export type AsObject = {
    backgroundColor?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

