// package: google.ads.googleads.v4.resources
// file: google/ads/googleads/v4/resources/offline_user_data_job.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_offline_user_data_pb from "../../../../../google/ads/googleads/v4/common/offline_user_data_pb";
import * as google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb from "../../../../../google/ads/googleads/v4/enums/offline_user_data_job_failure_reason_pb";
import * as google_ads_googleads_v4_enums_offline_user_data_job_status_pb from "../../../../../google/ads/googleads/v4/enums/offline_user_data_job_status_pb";
import * as google_ads_googleads_v4_enums_offline_user_data_job_type_pb from "../../../../../google/ads/googleads/v4/enums/offline_user_data_job_type_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_api_resource_pb from "../../../../../google/api/resource_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class OfflineUserDataJob extends jspb.Message {
  getResourceName(): string;
  setResourceName(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  hasExternalId(): boolean;
  clearExternalId(): void;
  getExternalId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setExternalId(value?: google_protobuf_wrappers_pb.Int64Value): void;

  getType(): google_ads_googleads_v4_enums_offline_user_data_job_type_pb.OfflineUserDataJobTypeEnum.OfflineUserDataJobTypeMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_type_pb.OfflineUserDataJobTypeEnum.OfflineUserDataJobTypeMap];
  setType(value: google_ads_googleads_v4_enums_offline_user_data_job_type_pb.OfflineUserDataJobTypeEnum.OfflineUserDataJobTypeMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_type_pb.OfflineUserDataJobTypeEnum.OfflineUserDataJobTypeMap]): void;

  getStatus(): google_ads_googleads_v4_enums_offline_user_data_job_status_pb.OfflineUserDataJobStatusEnum.OfflineUserDataJobStatusMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_status_pb.OfflineUserDataJobStatusEnum.OfflineUserDataJobStatusMap];
  setStatus(value: google_ads_googleads_v4_enums_offline_user_data_job_status_pb.OfflineUserDataJobStatusEnum.OfflineUserDataJobStatusMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_status_pb.OfflineUserDataJobStatusEnum.OfflineUserDataJobStatusMap]): void;

  getFailureReason(): google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb.OfflineUserDataJobFailureReasonEnum.OfflineUserDataJobFailureReasonMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb.OfflineUserDataJobFailureReasonEnum.OfflineUserDataJobFailureReasonMap];
  setFailureReason(value: google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb.OfflineUserDataJobFailureReasonEnum.OfflineUserDataJobFailureReasonMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb.OfflineUserDataJobFailureReasonEnum.OfflineUserDataJobFailureReasonMap]): void;

  hasCustomerMatchUserListMetadata(): boolean;
  clearCustomerMatchUserListMetadata(): void;
  getCustomerMatchUserListMetadata(): google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata | undefined;
  setCustomerMatchUserListMetadata(value?: google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata): void;

  hasStoreSalesMetadata(): boolean;
  clearStoreSalesMetadata(): void;
  getStoreSalesMetadata(): google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata | undefined;
  setStoreSalesMetadata(value?: google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata): void;

  getMetadataCase(): OfflineUserDataJob.MetadataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OfflineUserDataJob.AsObject;
  static toObject(includeInstance: boolean, msg: OfflineUserDataJob): OfflineUserDataJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OfflineUserDataJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OfflineUserDataJob;
  static deserializeBinaryFromReader(message: OfflineUserDataJob, reader: jspb.BinaryReader): OfflineUserDataJob;
}

export namespace OfflineUserDataJob {
  export type AsObject = {
    resourceName: string,
    id?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    externalId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    type: google_ads_googleads_v4_enums_offline_user_data_job_type_pb.OfflineUserDataJobTypeEnum.OfflineUserDataJobTypeMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_type_pb.OfflineUserDataJobTypeEnum.OfflineUserDataJobTypeMap],
    status: google_ads_googleads_v4_enums_offline_user_data_job_status_pb.OfflineUserDataJobStatusEnum.OfflineUserDataJobStatusMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_status_pb.OfflineUserDataJobStatusEnum.OfflineUserDataJobStatusMap],
    failureReason: google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb.OfflineUserDataJobFailureReasonEnum.OfflineUserDataJobFailureReasonMap[keyof google_ads_googleads_v4_enums_offline_user_data_job_failure_reason_pb.OfflineUserDataJobFailureReasonEnum.OfflineUserDataJobFailureReasonMap],
    customerMatchUserListMetadata?: google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.AsObject,
    storeSalesMetadata?: google_ads_googleads_v4_common_offline_user_data_pb.StoreSalesMetadata.AsObject,
  }

  export enum MetadataCase {
    METADATA_NOT_SET = 0,
    CUSTOMER_MATCH_USER_LIST_METADATA = 7,
    STORE_SALES_METADATA = 8,
  }
}

