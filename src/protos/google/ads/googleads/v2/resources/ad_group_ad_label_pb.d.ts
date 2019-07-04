// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/ad_group_ad_label.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupAdLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroupAd(): boolean;
  clearAdGroupAd(): void;
  getAdGroupAd(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupAd(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupAdLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupAdLabel): AdGroupAdLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupAdLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupAdLabel;
  static deserializeBinaryFromReader(message: AdGroupAdLabel, reader: jspb.BinaryReader): AdGroupAdLabel;
}

export namespace AdGroupAdLabel {
  export type AsObject = {
    resourceName: string,
    adGroupAd?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

