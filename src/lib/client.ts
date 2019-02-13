// import service from "../protos/google/ads/googleads/v0/services/google_ads_service_grpc_pb";
import grpc from "grpc";
import { SearchGoogleAdsRequest } from "../protos/google/ads/googleads/v0/services/google_ads_service_pb";
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
  private headers: grpc.Metadata;

  constructor(options: GoogleAdsClientOptions) {
    this.options = options;

    console.log(this.options);
    // console.log(service);

    this.headers = this.buildRequestHeaders();

    console.log(this.headers);
    // console.log(service);
  }

  public getService(serviceName: string): Promise<grpc.Client> {
    const serviceClientName = `${serviceName}Client`;

    if (!services.hasOwnProperty(serviceClientName)) {
      throw new Error(
        `Specified service "${serviceName}" does not exist in Google Ads API ${DEFAULT_VERSION}.`
      );
    }

    // const interceptor = function(options: any, nextCall: any) {
    //   console.log(options);

    //   return new grpc.InterceptingCall(nextCall(options), {
    //     start(metadata: any, _listener: any, next: any) {
    //       next(metadata, {
    //         onReceiveMetadata: function(metadata: any, next: any) {
    //           console.log("metadata", metadata);
    //           next(metadata);
    //         },
    //         onReceiveMessage: function(message: any, next: any) {
    //           console.log("message", message);
    //           next(message);
    //         },
    //         onReceiveStatus: function(status: any, next: any) {
    //           console.log("status", status);
    //           next(status);
    //         },
    //       });
    //     },
    //     sendMessage: function(message, next) {
    //       next(message);
    //     },
    //     halfClose: function(next) {
    //       next();
    //     },
    //   });
    // };

    const serviceClientConstructor = (services as any)[serviceClientName];
    const service = new serviceClientConstructor(
      GOOGLE_ADS_ENDPOINT,
      grpc.credentials.createSsl()
      // {
      //   interceptors: [interceptor],
      // }
    );

    // const c = new grpc.Channel(GOOGLE_ADS_ENDPOINT, grpc.credentials.createSsl(), {});

    const req = new SearchGoogleAdsRequest();
    req.setCustomerId("");

    // return new Promise((resolve, reject) => {
    //   service.search(req, this.headers, (err: any, res: any) => {
    //     if (err) {
    //       console.log(err);
    //       reject(err);
    //     } else {
    //       console.log(res);
    //       resolve(service);
    //     }
    //   });
    // });

    return service;
  }

  public getRequestMetadata(): object {
    return this.headers.getMap();
  }

  private buildRequestHeaders(): grpc.Metadata {
    const headers = new grpc.Metadata();

    headers.add(`Authorization`, `Bearer ${this.options.access_token}`);
    headers.add(`developer-token`, this.options.developer_token);

    if (this.options.login_customer_id) {
      headers.add(`login-customer-id`, this.options.login_customer_id);
    }

    return headers;
  }
}
