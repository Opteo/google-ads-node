// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/managed_placement_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ManagedPlacementView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManagedPlacementView.AsObject;
  static toObject(includeInstance: boolean, msg: ManagedPlacementView): ManagedPlacementView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManagedPlacementView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManagedPlacementView;
  static deserializeBinaryFromReader(message: ManagedPlacementView, reader: jspb.BinaryReader): ManagedPlacementView;
}

export namespace ManagedPlacementView {
  export type AsObject = {
    resourceName: string,
  }
}

