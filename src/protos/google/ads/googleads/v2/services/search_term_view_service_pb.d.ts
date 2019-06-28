// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/search_term_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_search_term_view_pb from "../../../../../google/ads/googleads/v2/resources/search_term_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetSearchTermViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSearchTermViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSearchTermViewRequest): GetSearchTermViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSearchTermViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSearchTermViewRequest;
  static deserializeBinaryFromReader(message: GetSearchTermViewRequest, reader: jspb.BinaryReader): GetSearchTermViewRequest;
}

export namespace GetSearchTermViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

