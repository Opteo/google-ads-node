// package: google.ads.googleads.v0.resources
// file: google/ads/googleads/v0/resources/topic_view.proto

import * as jspb from "google-protobuf";

export class TopicView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicView.AsObject;
  static toObject(includeInstance: boolean, msg: TopicView): TopicView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicView;
  static deserializeBinaryFromReader(message: TopicView, reader: jspb.BinaryReader): TopicView;
}

export namespace TopicView {
  export type AsObject = {
    resourceName: string,
  }
}

