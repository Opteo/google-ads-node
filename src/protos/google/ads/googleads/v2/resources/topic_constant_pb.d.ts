// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/topic_constant.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class TopicConstant extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasTopicConstantParent(): boolean;
  clearTopicConstantParent(): void;
  getTopicConstantParent(): google_protobuf_wrappers_pb.StringValue | undefined;
  setTopicConstantParent(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearPathList(): void;
  getPathList(): Array<google_protobuf_wrappers_pb.StringValue>;
  setPathList(value: Array<google_protobuf_wrappers_pb.StringValue>): void;
  addPath(value?: google_protobuf_wrappers_pb.StringValue, index?: number): google_protobuf_wrappers_pb.StringValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopicConstant.AsObject;
  static toObject(includeInstance: boolean, msg: TopicConstant): TopicConstant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TopicConstant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopicConstant;
  static deserializeBinaryFromReader(message: TopicConstant, reader: jspb.BinaryReader): TopicConstant;
}

export namespace TopicConstant {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    topicConstantParent?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pathList: Array<google_protobuf_wrappers_pb.StringValue.AsObject>,
  }
}

