// package: google.ads.googleads.v2.common
// file: google/ads/googleads/v2/common/url_collection.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class UrlCollection extends jspb.Message {
  hasUrlCollectionId(): boolean;
  clearUrlCollectionId(): void;
  getUrlCollectionId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUrlCollectionId(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearFinalUrlsList(): void;
  getFinalUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  clearFinalMobileUrlsList(): void;
  getFinalMobileUrlsList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setFinalMobileUrlsList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addFinalMobileUrls(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  hasTrackingUrlTemplate(): boolean;
  clearTrackingUrlTemplate(): void;
  getTrackingUrlTemplate(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTrackingUrlTemplate(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UrlCollection.AsObject;
  static toObject(includeInstance: boolean, msg: UrlCollection): UrlCollection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UrlCollection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UrlCollection;
  static deserializeBinaryFromReader(message: UrlCollection, reader: jspb.BinaryReader): UrlCollection;
}

export namespace UrlCollection {
  export type AsObject = {
    urlCollectionId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    finalUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    finalMobileUrlsList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
    trackingUrlTemplate?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

