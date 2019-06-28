// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/ad_parameter.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class AdParameter extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasAdGroupCriterion(): boolean;
  clearAdGroupCriterion(): void;
  getAdGroupCriterion(): google_protobuf_wrappers_pb.StringValue | undefined;
  setAdGroupCriterion(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasParameterIndex(): boolean;
  clearParameterIndex(): void;
  getParameterIndex(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParameterIndex(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasInsertionText(): boolean;
  clearInsertionText(): void;
  getInsertionText(): google_protobuf_wrappers_pb.StringValue | undefined;
  setInsertionText(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdParameter.AsObject;
  static toObject(includeInstance: boolean, msg: AdParameter): AdParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdParameter;
  static deserializeBinaryFromReader(message: AdParameter, reader: jspb.BinaryReader): AdParameter;
}

export namespace AdParameter {
  export type AsObject = {
    resourceName: string,
    adGroupCriterion?: google_protobuf_wrappers_pb.StringValue.AsObject,
    parameterIndex?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    insertionText?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

