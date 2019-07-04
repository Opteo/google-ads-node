// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/keyword_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_keyword_view_pb from "../../../../../google/ads/googleads/v2/resources/keyword_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetKeywordViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeywordViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeywordViewRequest): GetKeywordViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetKeywordViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeywordViewRequest;
  static deserializeBinaryFromReader(message: GetKeywordViewRequest, reader: jspb.BinaryReader): GetKeywordViewRequest;
}

export namespace GetKeywordViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

