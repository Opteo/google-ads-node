// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/product_group_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class ProductGroupView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductGroupView.AsObject;
  static toObject(includeInstance: boolean, msg: ProductGroupView): ProductGroupView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductGroupView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductGroupView;
  static deserializeBinaryFromReader(message: ProductGroupView, reader: jspb.BinaryReader): ProductGroupView;
}

export namespace ProductGroupView {
  export type AsObject = {
    resourceName: string,
  }
}

