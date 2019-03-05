// package: google.ads.googleads.v1.services
// file: google/ads/googleads/v1/services/display_keyword_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v1_resources_display_keyword_view_pb from "../../../../../google/ads/googleads/v1/resources/display_keyword_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GetDisplayKeywordViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDisplayKeywordViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDisplayKeywordViewRequest): GetDisplayKeywordViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDisplayKeywordViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDisplayKeywordViewRequest;
  static deserializeBinaryFromReader(message: GetDisplayKeywordViewRequest, reader: jspb.BinaryReader): GetDisplayKeywordViewRequest;
}

export namespace GetDisplayKeywordViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

