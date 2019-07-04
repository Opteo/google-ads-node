// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/customer_pay_per_conversion_eligibility_failure_reason.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class CustomerPayPerConversionEligibilityFailureReasonEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerPayPerConversionEligibilityFailureReasonEnum.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerPayPerConversionEligibilityFailureReasonEnum): CustomerPayPerConversionEligibilityFailureReasonEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerPayPerConversionEligibilityFailureReasonEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerPayPerConversionEligibilityFailureReasonEnum;
  static deserializeBinaryFromReader(message: CustomerPayPerConversionEligibilityFailureReasonEnum, reader: jspb.BinaryReader): CustomerPayPerConversionEligibilityFailureReasonEnum;
}

export namespace CustomerPayPerConversionEligibilityFailureReasonEnum {
  export type AsObject = {
  }

  export enum CustomerPayPerConversionEligibilityFailureReason {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    NOT_ENOUGH_CONVERSIONS = 2,
    CONVERSION_LAG_TOO_HIGH = 3,
    HAS_CAMPAIGN_WITH_SHARED_BUDGET = 4,
    HAS_UPLOAD_CLICKS_CONVERSION = 5,
    AVERAGE_DAILY_SPEND_TOO_HIGH = 6,
    ANALYSIS_NOT_COMPLETE = 7,
    OTHER = 8,
  }
}

