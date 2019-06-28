// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/mobile_app_category_constant.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class MobileAppCategoryConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int32Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileAppCategoryConstant.AsObject;
  static toObject(includeInstance: boolean, msg: MobileAppCategoryConstant): MobileAppCategoryConstant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileAppCategoryConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileAppCategoryConstant;
  static deserializeBinaryFromReader(message: MobileAppCategoryConstant, reader: jspb.BinaryReader): MobileAppCategoryConstant;
}

export namespace MobileAppCategoryConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

