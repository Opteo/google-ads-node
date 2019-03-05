// package: google.ads.googleads.v1.resources
// file: google/ads/googleads/v1/resources/parental_status_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ParentalStatusView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentalStatusView.AsObject;
  static toObject(includeInstance: boolean, msg: ParentalStatusView): ParentalStatusView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParentalStatusView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentalStatusView;
  static deserializeBinaryFromReader(message: ParentalStatusView, reader: jspb.BinaryReader): ParentalStatusView;
}

export namespace ParentalStatusView {
  export type AsObject = {
    resourceName: string,
  }
}

