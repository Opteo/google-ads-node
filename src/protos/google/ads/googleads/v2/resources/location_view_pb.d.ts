// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/location_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LocationView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationView.AsObject;
  static toObject(includeInstance: boolean, msg: LocationView): LocationView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationView;
  static deserializeBinaryFromReader(message: LocationView, reader: jspb.BinaryReader): LocationView;
}

export namespace LocationView {
  export type AsObject = {
    resourceName: string,
  }
}

