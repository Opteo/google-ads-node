// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/ad_group_label.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroup(): boolean;
  clearAdGroup(): void;
  getAdGroup(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroup(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupLabel): AdGroupLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupLabel;
  static deserializeBinaryFromReader(message: AdGroupLabel, reader: jspb.BinaryReader): AdGroupLabel;
}

export namespace AdGroupLabel {
  export type AsObject = {
    resourceName: string,
    adGroup?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

