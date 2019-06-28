// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/feed_placeholder_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_feed_placeholder_view_pb from "../../../../../google/ads/googleads/v2/resources/feed_placeholder_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetFeedPlaceholderViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeedPlaceholderViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeedPlaceholderViewRequest): GetFeedPlaceholderViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFeedPlaceholderViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeedPlaceholderViewRequest;
  static deserializeBinaryFromReader(message: GetFeedPlaceholderViewRequest, reader: jspb.BinaryReader): GetFeedPlaceholderViewRequest;
}

export namespace GetFeedPlaceholderViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

