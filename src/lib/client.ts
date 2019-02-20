import grpc from "grpc";

import { MetadataInterceptor, ExceptionInterceptor } from "./interceptor";
import * as services from "./services";

const DEFAULT_VERSION = "v0";
const GOOGLE_ADS_ENDPOINT = "googleads.googleapis.com:443";

interface GoogleAdsClientOptions {
  access_token: string;
  developer_token: string;
  login_customer_id?: string;
}

export default class GoogleAdsClient {
  private options: GoogleAdsClientOptions;

  constructor(options: GoogleAdsClientOptions) {
    this.options = options;
  }

  public getService(serviceName: string): any {
    const serviceClientName = `${serviceName}Client`;

    if (!services.hasOwnProperty(serviceClientName)) {
      throw new Error(
        `Specified service "${serviceName}" does not exist in Google Ads API ${DEFAULT_VERSION}.`
      );
    }

    const metadataInterceptor = new MetadataInterceptor(
      this.options.access_token,
      this.options.developer_token,
      this.options.login_customer_id
    );
    const exceptionInterceptor = new ExceptionInterceptor();

    const serviceClientConstructor = (services as any)[serviceClientName];

    const service = new serviceClientConstructor(
      GOOGLE_ADS_ENDPOINT,
      grpc.credentials.createSsl(),
      {
        interceptors: [
          (
            options: grpc.CallOptions,
            nextCall: (options: grpc.CallOptions) => grpc.InterceptingCall | null
          ) => metadataInterceptor.intercept(options, nextCall),
          (
            options: grpc.CallOptions,
            nextCall: (options: grpc.CallOptions) => grpc.InterceptingCall | null
          ) => exceptionInterceptor.intercept(options, nextCall),
        ],
      }
    );

    return service;
  }
}
