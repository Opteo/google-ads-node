// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/billing_setup_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class BillingSetupErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BillingSetupErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: BillingSetupErrorEnum): BillingSetupErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BillingSetupErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BillingSetupErrorEnum;
  static deserializeBinaryFromReader(message: BillingSetupErrorEnum, reader: jspb.BinaryReader): BillingSetupErrorEnum;
}

export namespace BillingSetupErrorEnum {
  export type AsObject = {
  }

  export enum BillingSetupError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CANNOT_USE_EXISTING_AND_NEW_ACCOUNT = 2,
    CANNOT_REMOVE_STARTED_BILLING_SETUP = 3,
    CANNOT_CHANGE_BILLING_TO_SAME_PAYMENTS_ACCOUNT = 4,
    BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_STATUS = 5,
    INVALID_PAYMENTS_ACCOUNT = 6,
    BILLING_SETUP_NOT_PERMITTED_FOR_CUSTOMER_CATEGORY = 7,
    INVALID_START_TIME_TYPE = 8,
    THIRD_PARTY_ALREADY_HAS_BILLING = 9,
    BILLING_SETUP_IN_PROGRESS = 10,
    NO_SIGNUP_PERMISSION = 11,
    CHANGE_OF_BILL_TO_IN_PROGRESS = 12,
    PAYMENTS_PROFILE_NOT_FOUND = 13,
    PAYMENTS_ACCOUNT_NOT_FOUND = 14,
    PAYMENTS_PROFILE_INELIGIBLE = 15,
    PAYMENTS_ACCOUNT_INELIGIBLE = 16,
  }
}

