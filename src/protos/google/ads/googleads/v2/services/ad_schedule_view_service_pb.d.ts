// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/ad_schedule_view_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_ad_schedule_view_pb from "../../../../../google/ads/googleads/v2/resources/ad_schedule_view_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetAdScheduleViewRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAdScheduleViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAdScheduleViewRequest): GetAdScheduleViewRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAdScheduleViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAdScheduleViewRequest;
  static deserializeBinaryFromReader(message: GetAdScheduleViewRequest, reader: jspb.BinaryReader): GetAdScheduleViewRequest;
}

export namespace GetAdScheduleViewRequest {
  export type AsObject = {
    resourceName: string,
  }
}

