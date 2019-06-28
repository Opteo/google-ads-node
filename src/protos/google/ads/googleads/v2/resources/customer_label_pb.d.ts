// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/customer_label.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerLabel extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): google_protobuf_wrappers_pb.StringValue | undefined;
  setCustomer(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLabel(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerLabel.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerLabel): CustomerLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerLabel;
  static deserializeBinaryFromReader(message: CustomerLabel, reader: jspb.BinaryReader): CustomerLabel;
}

export namespace CustomerLabel {
  export type AsObject = {
    resourceName: string,
    customer?: google_protobuf_wrappers_pb.StringValue.AsObject,
    label?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

