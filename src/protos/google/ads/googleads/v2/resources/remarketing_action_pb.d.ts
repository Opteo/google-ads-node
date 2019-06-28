// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/remarketing_action.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_common_tag_snippet_pb from "../../../../../google/ads/googleads/v2/common/tag_snippet_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class RemarketingAction extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearTagSnippetsList(): void;
  getTagSnippetsList(): Array<google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet>;
  setTagSnippetsList(value: Array<google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet>): void;
  addTagSnippets(value?: google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet, index?: number): google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemarketingAction.AsObject;
  static toObject(includeInstance: boolean, msg: RemarketingAction): RemarketingAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemarketingAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemarketingAction;
  static deserializeBinaryFromReader(message: RemarketingAction, reader: jspb.BinaryReader): RemarketingAction;
}

export namespace RemarketingAction {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    tagSnippetsList: Array<google_ads_googleads_v2_common_tag_snippet_pb.TagSnippet.AsObject>,
  }
}

