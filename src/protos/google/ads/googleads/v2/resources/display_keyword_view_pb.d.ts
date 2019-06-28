// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/display_keyword_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DisplayKeywordView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisplayKeywordView.AsObject;
  static toObject(includeInstance: boolean, msg: DisplayKeywordView): DisplayKeywordView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisplayKeywordView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisplayKeywordView;
  static deserializeBinaryFromReader(message: DisplayKeywordView, reader: jspb.BinaryReader): DisplayKeywordView;
}

export namespace DisplayKeywordView {
  export type AsObject = {
    resourceName: string,
  }
}

