// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/ad_group_criterion_label.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdGroupCriterionLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;
  getAdGroupCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdGroupCriterionLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AdGroupCriterionLabel): AdGroupCriterionLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdGroupCriterionLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdGroupCriterionLabel;
  static deserializeBinaryFromReader(message: AdGroupCriterionLabel, reader: jspb.BinaryReader): AdGroupCriterionLabel;
}

export namespace AdGroupCriterionLabel {
  export type AsObject = {
    resourceName: string,
    adGroupCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

