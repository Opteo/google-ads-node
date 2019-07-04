// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/click_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_click_view_pb from "../../../../../google/ads/googleads/v2/resources/click_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetClickViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetClickViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetClickViewRequest): GetClickViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetClickViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetClickViewRequest;
  static deserializeBinaryFromReader(message: GetClickViewRequest, reader: jspb.BinaryReader): GetClickViewRequest;
}

export namespace GetClickViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

