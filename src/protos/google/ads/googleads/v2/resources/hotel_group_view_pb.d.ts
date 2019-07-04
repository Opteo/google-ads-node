// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/hotel_group_view.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class HotelGroupView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HotelGroupView.AsObject;
  static toObject(includeInstance: boolean, msg: HotelGroupView): HotelGroupView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HotelGroupView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HotelGroupView;
  static deserializeBinaryFromReader(message: HotelGroupView, reader: jspb.BinaryReader): HotelGroupView;
}

export namespace HotelGroupView {
  export type AsObject = {
    resourceName: string,
  }
}

