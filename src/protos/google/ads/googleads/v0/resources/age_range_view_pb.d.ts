// package: google.ads.googleads.v0.resources
// file: google/ads/googleads/v0/resources/age_range_view.proto

import * as jspb from "google-protobuf";

export class AgeRangeView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgeRangeView.AsObject;
  static toObject(includeInstance: boolean, msg: AgeRangeView): AgeRangeView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AgeRangeView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgeRangeView;
  static deserializeBinaryFromReader(message: AgeRangeView, reader: jspb.BinaryReader): AgeRangeView;
}

export namespace AgeRangeView {
  export type AsObject = {
    resourceName: string,
  }
}

