// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/final_app_url.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_app_url_operating_system_type_pb from "../../../../../google/ads/googleads/v2/enums/app_url_operating_system_type_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class FinalAppUrl extends jspb.Message {
  getOsType(): google_ads_googleads_v2_enums_app_url_operating_system_type_pb.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType;
  setOsType(value: google_ads_googleads_v2_enums_app_url_operating_system_type_pb.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrl(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalAppUrl.AsObject;
  static toObject(includeInstance: boolean, msg: FinalAppUrl): FinalAppUrl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinalAppUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalAppUrl;
  static deserializeBinaryFromReader(message: FinalAppUrl, reader: jspb.BinaryReader): FinalAppUrl;
}

export namespace FinalAppUrl {
  export type AsObject = {
    osType: google_ads_googleads_v2_enums_app_url_operating_system_type_pb.AppUrlOperatingSystemTypeEnum.AppUrlOperatingSystemType,
    url?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

