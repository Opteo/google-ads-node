// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/landing_page_view.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class LandingPageView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasUnexpandedFinalUrl(): boolean;
  clearUnexpandedFinalUrl(): void;
  getUnexpandedFinalUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUnexpandedFinalUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LandingPageView.AsObject;
  static toObject(includeInstance: boolean, msg: LandingPageView): LandingPageView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LandingPageView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LandingPageView;
  static deserializeBinaryFromReader(message: LandingPageView, reader: jspb.BinaryReader): LandingPageView;
}

export namespace LandingPageView {
  export type AsObject = {
    resourceName: string,
    unexpandedFinalUrl?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

