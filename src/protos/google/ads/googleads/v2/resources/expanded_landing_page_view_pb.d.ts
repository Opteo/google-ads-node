// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/expanded_landing_page_view.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ExpandedLandingPageView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasExpandedFinalUrl(): boolean;
  clearExpandedFinalUrl(): void;
  getExpandedFinalUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setExpandedFinalUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpandedLandingPageView.AsObject;
  static toObject(includeInstance: boolean, msg: ExpandedLandingPageView): ExpandedLandingPageView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpandedLandingPageView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpandedLandingPageView;
  static deserializeBinaryFromReader(message: ExpandedLandingPageView, reader: jspb.BinaryReader): ExpandedLandingPageView;
}

export namespace ExpandedLandingPageView {
  export type AsObject = {
    resourceName: string,
    expandedFinalUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

