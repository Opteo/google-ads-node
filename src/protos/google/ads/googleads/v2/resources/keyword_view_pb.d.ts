// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/keyword_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordView.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordView): KeywordView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordView;
  static deserializeBinaryFromReader(message: KeywordView, reader: jspb.BinaryReader): KeywordView;
}

export namespace KeywordView {
  export type AsObject = {
    resourceName: string,
  }
}

