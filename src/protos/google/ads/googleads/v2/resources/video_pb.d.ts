// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/video.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class Video extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasChannelId(): boolean;
  clearChannelId(): void;
  getChannelId(): google_protobuf_wrappers_pb.StringValue | undefined;
  setChannelId(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasDurationMillis(): boolean;
  clearDurationMillis(): void;
  getDurationMillis(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setDurationMillis(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTitle(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Video.AsObject;
  static toObject(includeInstance: boolean, msg: Video): Video.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Video, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Video;
  static deserializeBinaryFromReader(message: Video, reader: jspb.BinaryReader): Video;
}

export namespace Video {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.StringValue.AsObject,
    channelId?: google_protobuf_wrappers_pb.StringValue.AsObject,
    durationMillis?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    title?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

