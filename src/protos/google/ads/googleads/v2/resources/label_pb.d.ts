// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/label.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_text_label_pb from "../../../../../google/ads/googleads/v2/common/text_label_pb";
import * as google_ads_googleads_v2_enums_label_status_pb from "../../../../../google/ads/googleads/v2/enums/label_status_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Label extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  getStatus(): google_ads_googleads_v2_enums_label_status_pb.LabelStatusEnum.LabelStatus;
  setStatus(value: google_ads_googleads_v2_enums_label_status_pb.LabelStatusEnum.LabelStatus): void;

  hasTextLabel(): boolean;
  clearTextLabel(): void;
  getTextLabel(): google_ads_googleads_v2_common_text_label_pb.TextLabel | undefined;
  setTextLabel(value?: google_ads_googleads_v2_common_text_label_pb.TextLabel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Label.AsObject;
  static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Label;
  static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
}

export namespace Label {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    status: google_ads_googleads_v2_enums_label_status_pb.LabelStatusEnum.LabelStatus,
    textLabel?: google_ads_googleads_v2_common_text_label_pb.TextLabel.AsObject,
  }
}

