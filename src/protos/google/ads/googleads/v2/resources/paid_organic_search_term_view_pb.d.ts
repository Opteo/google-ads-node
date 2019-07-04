// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/paid_organic_search_term_view.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class PaidOrganicSearchTermView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasSearchTerm(): boolean;
  clearSearchTerm(): void;
  getSearchTerm(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSearchTerm(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaidOrganicSearchTermView.AsObject;
  static toObject(includeInstance: boolean, msg: PaidOrganicSearchTermView): PaidOrganicSearchTermView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaidOrganicSearchTermView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaidOrganicSearchTermView;
  static deserializeBinaryFromReader(message: PaidOrganicSearchTermView, reader: jspb.BinaryReader): PaidOrganicSearchTermView;
}

export namespace PaidOrganicSearchTermView {
  export type AsObject = {
    resourceName: string,
    searchTerm?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

