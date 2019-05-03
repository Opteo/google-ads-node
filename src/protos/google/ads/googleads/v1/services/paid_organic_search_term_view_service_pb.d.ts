// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/paid_organic_search_term_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_paid_organic_search_term_view_pb from "../../../../../google/ads/googleads/v1/resources/paid_organic_search_term_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetPaidOrganicSearchTermViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaidOrganicSearchTermViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaidOrganicSearchTermViewRequest): GetPaidOrganicSearchTermViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaidOrganicSearchTermViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaidOrganicSearchTermViewRequest;
  static deserializeBinaryFromReader(message: GetPaidOrganicSearchTermViewRequest, reader: jspb.BinaryReader): GetPaidOrganicSearchTermViewRequest;
}

export namespace GetPaidOrganicSearchTermViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

