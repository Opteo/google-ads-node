// package: google.ads.googleads.v2.services
// file: google/ads/googleads/v2/services/language_constant_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_resources_language_constant_pb from "../../../../../google/ads/googleads/v2/resources/language_constant_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class GetLanguageConstantRequest extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLanguageConstantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLanguageConstantRequest): GetLanguageConstantRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLanguageConstantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLanguageConstantRequest;
  static deserializeBinaryFromReader(message: GetLanguageConstantRequest, reader: jspb.BinaryReader): GetLanguageConstantRequest;
}

export namespace GetLanguageConstantRequest {
  export type AsObject = {
    resourceName: string,
  }
}

