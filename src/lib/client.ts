import grpc, { ListenerBuilder } from "grpc";

import * as services from "./services";
import { MetadataInterceptor, ExceptionInterceptor } from "./interceptor";

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
    // const exceptionInterceptor = new ExceptionInterceptor();

    const serviceClientConstructor = (services as any)[serviceClientName];

    const requester = new grpc.RequesterBuilder()
      .withStart((metadata: grpc.Metadata, listener: grpc.Listener, next: Function) => {
        // listener.onReceiveStatus(status: grpc.StatusObject, next: Function)

        const newListener = new grpc.ListenerBuilder()
          .withOnReceiveStatus((status: any, next: Function) => {
            console.log(status);

            next(status);
          })
          .build();

        //   var newListener = {
        //     onReceiveMetadata: function(metadata, next) {
        //         next(metadata);
        //     },
        //     onReceiveMessage: function(message, next) {
        //         next(message);
        //     },
        //     onReceiveStatus: function(status, next) {
        //         next(status);
        //     }
        // };
        // next(metadata, newListener);

        next(metadata, newListener);
      })
      .withSendMessage((message, next) => next(message))
      .withHalfClose((next: any) => next())
      .withCancel((next: any) => next())
      .build();

    const service = new serviceClientConstructor(
      GOOGLE_ADS_ENDPOINT,
      grpc.credentials.createSsl(),
      {
        interceptors: [
          // (options: grpc.CallOptions, nextCall: Function) =>
          //   metadataInterceptor.intercept(options, nextCall),

          // (options: grpc.CallOptions, nextCall: Function) =>
          //   new grpc.InterceptingCall(nextCall(options), ExceptionInterceptor),
          requester,
        ],
      }
    );

    return service;
  }
}
