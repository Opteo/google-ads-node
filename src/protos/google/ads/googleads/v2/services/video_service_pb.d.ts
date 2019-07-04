// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/video_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_video_pb from "../../../../../google/ads/googleads/v2/resources/video_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetVideoRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVideoRequest): GetVideoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVideoRequest;
  static deserializeBinaryFromReader(message: GetVideoRequest, reader: jspb.BinaryReader): GetVideoRequest;
}

export namespace GetVideoRequest {
  export type AsObject = {
    resourceName: string,
  }
}

