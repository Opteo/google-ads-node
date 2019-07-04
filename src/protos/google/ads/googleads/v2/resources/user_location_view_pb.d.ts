// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/user_location_view.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UserLocationView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasCountryCriterionId(): boolean;
  clearCountryCriterionId(): void;
  getCountryCriterionId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setCountryCriterionId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTargetingLocation(): boolean;
  clearTargetingLocation(): void;
  getTargetingLocation(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setTargetingLocation(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserLocationView.AsObject;
  static toObject(includeInstance: boolean, msg: UserLocationView): UserLocationView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserLocationView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserLocationView;
  static deserializeBinaryFromReader(message: UserLocationView, reader: jspb.BinaryReader): UserLocationView;
}

export namespace UserLocationView {
  export type AsObject = {
    resourceName: string,
    countryCriterionId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    targetingLocation?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

