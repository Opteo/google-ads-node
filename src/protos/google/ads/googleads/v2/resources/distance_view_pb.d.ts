// package: google.ads.googleads.v2.resources
// file: google/ads/googleads/v2/resources/distance_view.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v2_enums_distance_bucket_pb from "../../../../../google/ads/googleads/v2/enums/distance_bucket_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class DistanceView extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  getDistanceBucket(): google_ads_googleads_v2_enums_distance_bucket_pb.DistanceBucketEnum.DistanceBucket;
  setDistanceBucket(value: google_ads_googleads_v2_enums_distance_bucket_pb.DistanceBucketEnum.DistanceBucket): void;

  hasMetricSystem(): boolean;
  clearMetricSystem(): void;
  getMetricSystem(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setMetricSystem(value?: google_protobuf_wrappers_pb.BoolValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DistanceView.AsObject;
  static toObject(includeInstance: boolean, msg: DistanceView): DistanceView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DistanceView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DistanceView;
  static deserializeBinaryFromReader(message: DistanceView, reader: jspb.BinaryReader): DistanceView;
}

export namespace DistanceView {
  export type AsObject = {
    resourceName: string,
    distanceBucket: google_ads_googleads_v2_enums_distance_bucket_pb.DistanceBucketEnum.DistanceBucket,
    metricSystem?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

