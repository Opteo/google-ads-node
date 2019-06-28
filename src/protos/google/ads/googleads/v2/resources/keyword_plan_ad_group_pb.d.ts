// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/keyword_plan_ad_group.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class KeywordPlanAdGroup extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasKeywordPlanCampaign(): boolean;
  clearKeywordPlanCampaign(): void;
  getKeywordPlanCampaign(): google_protobuf_wrappers_pb.StringValue | undefined;
  setKeywordPlanCampaign(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCpcBidMicros(): boolean;
  clearCpcBidMicros(): void;
  getCpcBidMicros(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCpcBidMicros(value?: google_protobuf_wrappers_pb.Int64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeywordPlanAdGroup.AsObject;
  static toObject(includeInstance: boolean, msg: KeywordPlanAdGroup): KeywordPlanAdGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeywordPlanAdGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeywordPlanAdGroup;
  static deserializeBinaryFromReader(message: KeywordPlanAdGroup, reader: jspb.BinaryReader): KeywordPlanAdGroup;
}

export namespace KeywordPlanAdGroup {
  export type AsObject = {
    resourceName: string,
    keywordPlanCampaign?: google_protobuf_wrappers_pb.StringValue.AsObject,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    cpcBidMicros?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }
}

