// package: google.ads.googleads.v0.resources
// file: google/ads/googleads/v0/resources/product_group_view.proto

import * as jspb from "google-protobuf";

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

