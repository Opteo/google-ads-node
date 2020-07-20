// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/gender_view.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class GenderView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderView.AsObject;
  static toObject(includeInstance: boolean, msg: GenderView): GenderView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenderView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderView;
  static deserializeBinaryFromReader(message: GenderView, reader: jspb.BinaryReader): GenderView;
}

export namespace GenderView {
  export type AsObject = {
    resourceName: string,
  }
}

