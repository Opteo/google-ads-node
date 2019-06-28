// package: google.ads.googleads.v2.enums
// file: google/ads/googleads/v2/enums/search_engine_results_page_type.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../../../google/api/annotations_pb";

export class SearchEngineResultsPageTypeEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEngineResultsPageTypeEnum.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEngineResultsPageTypeEnum): SearchEngineResultsPageTypeEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchEngineResultsPageTypeEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEngineResultsPageTypeEnum;
  static deserializeBinaryFromReader(message: SearchEngineResultsPageTypeEnum, reader: jspb.BinaryReader): SearchEngineResultsPageTypeEnum;
}

export namespace SearchEngineResultsPageTypeEnum {
  export type AsObject = {
  }

  export enum SearchEngineResultsPageType {
    UNSPECIFIED = 0,
    UNKNOWN = 1,
    ADS_ONLY = 2,
    ORGANIC_ONLY = 3,
    ADS_AND_ORGANIC = 4,
  }
}

