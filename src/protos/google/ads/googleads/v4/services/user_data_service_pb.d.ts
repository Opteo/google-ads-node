// package: google.ads.googleads.v4.services
// file: google/ads/googleads/v4/services/user_data_service.proto

import * as jspb from "google-protobuf";
import * as google_ads_googleads_v4_common_offline_user_data_pb from "../../../../../google/ads/googleads/v4/common/offline_user_data_pb";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";
import * as google_api_field_behavior_pb from "../../../../../google/api/field_behavior_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_api_client_pb from "../../../../../google/api/client_pb";

export class UploadUserDataRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): void;

  clearOperationsList(): void;
  getOperationsList(): Array<UserDataOperation>;
  setOperationsList(value: Array<UserDataOperation>): void;
  addOperations(value?: UserDataOperation, index?: number): UserDataOperation;

  hasCustomerMatchUserListMetadata(): boolean;
  clearCustomerMatchUserListMetadata(): void;
  getCustomerMatchUserListMetadata(): google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata | undefined;
  setCustomerMatchUserListMetadata(value?: google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata): void;

  getMetadataCase(): UploadUserDataRequest.MetadataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadUserDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadUserDataRequest): UploadUserDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadUserDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadUserDataRequest;
  static deserializeBinaryFromReader(message: UploadUserDataRequest, reader: jspb.BinaryReader): UploadUserDataRequest;
}

export namespace UploadUserDataRequest {
  export type AsObject = {
    customerId: string,
    operationsList: Array<UserDataOperation.AsObject>,
    customerMatchUserListMetadata?: google_ads_googleads_v4_common_offline_user_data_pb.CustomerMatchUserListMetadata.AsObject,
  }

  export enum MetadataCase {
    METADATA_NOT_SET = 0,
    CUSTOMER_MATCH_USER_LIST_METADATA = 2,
  }
}

export class UserDataOperation extends jspb.Message {
  hasCreate(): boolean;
  clearCreate(): void;
  getCreate(): google_ads_googleads_v4_common_offline_user_data_pb.UserData | undefined;
  setCreate(value?: google_ads_googleads_v4_common_offline_user_data_pb.UserData): void;

  hasRemove(): boolean;
  clearRemove(): void;
  getRemove(): google_ads_googleads_v4_common_offline_user_data_pb.UserData | undefined;
  setRemove(value?: google_ads_googleads_v4_common_offline_user_data_pb.UserData): void;

  getOperationCase(): UserDataOperation.OperationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDataOperation.AsObject;
  static toObject(includeInstance: boolean, msg: UserDataOperation): UserDataOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserDataOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDataOperation;
  static deserializeBinaryFromReader(message: UserDataOperation, reader: jspb.BinaryReader): UserDataOperation;
}

export namespace UserDataOperation {
  export type AsObject = {
    create?: google_ads_googleads_v4_common_offline_user_data_pb.UserData.AsObject,
    remove?: google_ads_googleads_v4_common_offline_user_data_pb.UserData.AsObject,
  }

  export enum OperationCase {
    OPERATION_NOT_SET = 0,
    CREATE = 1,
    REMOVE = 2,
  }
}

export class UploadUserDataResponse extends jspb.Message {
  hasUploadDateTime(): boolean;
  clearUploadDateTime(): void;
  getUploadDateTime(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUploadDateTime(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasReceivedOperationsCount(): boolean;
  clearReceivedOperationsCount(): void;
  getReceivedOperationsCount(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setReceivedOperationsCount(value?: google_protobuf_wrappers_pb.Int32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadUserDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadUserDataResponse): UploadUserDataResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadUserDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadUserDataResponse;
  static deserializeBinaryFromReader(message: UploadUserDataResponse, reader: jspb.BinaryReader): UploadUserDataResponse;
}

export namespace UploadUserDataResponse {
  export type AsObject = {
    uploadDateTime?: google_protobuf_wrappers_pb.StringValue.AsObject,
    receivedOperationsCount?: google_protobuf_wrappers_pb.Int32Value.AsObject,
  }
}

