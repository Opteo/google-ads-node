// package: google.ads.googleads.v2.errors
// file: google/ads/googleads/v2/errors/campaign_criterion_error.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CampaignCriterionErrorEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignCriterionErrorEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignCriterionErrorEnum): CampaignCriterionErrorEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CampaignCriterionErrorEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignCriterionErrorEnum;
  static deserializeBinaryFromReader(message: CampaignCriterionErrorEnum, reader: jspb.BinaryReader): CampaignCriterionErrorEnum;
}

export namespace CampaignCriterionErrorEnum {
  export type AsObject = {
  }

  export enum CampaignCriterionError {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    CONCRETE_TYPE_REQUIRED = 2,
    INVALID_PLACEMENT_URL = 3,
    CANNOT_EXCLUDE_CRITERIA_TYPE = 4,
    CANNOT_SET_STATUS_FOR_CRITERIA_TYPE = 5,
    CANNOT_SET_STATUS_FOR_EXCLUDED_CRITERIA = 6,
    CANNOT_TARGET_AND_EXCLUDE = 7,
    TOO_MANY_OPERATIONS = 8,
    OPERATOR_NOT_SUPPORTED_FOR_CRITERION_TYPE = 9,
    SHOPPING_CAMPAIGN_SALES_COUNTRY_NOT_SUPPORTED_FOR_SALES_CHANNEL = 10,
    CANNOT_ADD_EXISTING_FIELD = 11,
    CANNOT_UPDATE_NEGATIVE_CRITERION = 12,
  }
}

