// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/income_range_view.proto

import * as jspb from "google-protobuf";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class IncomeRangeView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncomeRangeView.AsObject;
  static toObject(includeInstance: boolean, msg: IncomeRangeView): IncomeRangeView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncomeRangeView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncomeRangeView;
  static deserializeBinaryFromReader(message: IncomeRangeView, reader: jspb.BinaryReader): IncomeRangeView;
}

export namespace IncomeRangeView {
  export type AsObject = {
    resourceName: string,
  }
}

