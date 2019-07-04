// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/search_term_view.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_search_term_targeting_status_pb from "../../../../../google/ads/googleads/v2/enums/search_term_targeting_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SearchTermView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasSearchTerm(): boolean;
  clearSearchTerm(): void;
  getSearchTerm(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSearchTerm(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): google_ads_googleads_v2_enums_search_term_targeting_status_pb.SearchTermTargetingStatusEnum.SearchTermTargetingStatus;
  setStatus(value: google_ads_googleads_v2_enums_search_term_targeting_status_pb.SearchTermTargetingStatusEnum.SearchTermTargetingStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchTermView.AsObject;
  static toObject(includeInstance: boolean, msg: SearchTermView): SearchTermView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchTermView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchTermView;
  static deserializeBinaryFromReader(message: SearchTermView, reader: jspb.BinaryReader): SearchTermView;
}

export namespace SearchTermView {
  export type AsObject = {
    resourceName: string,
    searchTerm?: google_protobuf_wrappers_pb.StringValue.AsObject,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_search_term_targeting_status_pb.SearchTermTargetingStatusEnum.SearchTermTargetingStatus,
  }
}

