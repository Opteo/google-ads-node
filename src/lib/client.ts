import grpc from "grpc";

import Auth from "./auth";
import { MetadataInterceptor, ExceptionInterceptor } from "./interceptor";
import * as services from "./services";
import { promisifyServiceClient } from "./utils";

const DEFAULT_VERSION = "v0";
const GOOGLE_ADS_ENDPOINT = "googleads.googleapis.com:443";

interface CommonClientOptions {
  developer_token: string;
  login_customer_id?: string;
}

interface ClientOptionsWithToken extends CommonClientOptions {
  access_token: string;
}

interface ClientOptionsNoToken extends CommonClientOptions {
  client_id: string;
  client_secret: string;
  refresh_token: string;
}

export class GoogleAdsClient {
  private options: ClientOptionsNoToken | ClientOptionsWithToken;
  private auth: Auth | undefined;

  constructor(options: ClientOptionsNoToken | ClientOptionsWithToken) {
    this.validateOptions(options);

    if (this.usingToken(options)) {
      this.options = options as ClientOptionsWithToken;
    } else {
      /* Access token has not been provided */
      this.options = options as ClientOptionsNoToken;
      this.auth = new Auth({
        clientId: this.options.client_id,
        clientSecret: this.options.client_secret,
        refreshToken: this.options.refresh_token,
      });
    }
  }

  public getService(serviceName: string): any {
    const serviceClientName = `${serviceName}Client`;

    if (!services.hasOwnProperty(serviceClientName)) {
      throw new Error(
        `Specified service "${serviceName}" does not exist in Google Ads API ${DEFAULT_VERSION}.`
      );
    }

    const metadataInterceptor = new MetadataInterceptor(
      this.options.developer_token,
      this.options.login_customer_id,
      (this.options as ClientOptionsWithToken).access_token,
      this.auth
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

    /* Promisify gRPC service methods (callbacks are kept as well) */
    promisifyServiceClient(service);

    return service;
  }

  private validateOptions(options: ClientOptionsNoToken | ClientOptionsWithToken): void {
    if (!options) {
      throw new Error(`Client expects initialisation options`);
    }
    if (!options.developer_token) {
      throw new Error(`Missing required key "developer_token" in options`);
    }

    if (this.usingToken(options) && !(options as ClientOptionsWithToken).access_token) {
      throw new Error(
        `Missing required keys in options, expected "access_token", "developer_token"`
      );
    }

    if (!this.usingToken(options)) {
      if (
        !(options as ClientOptionsNoToken).client_id ||
        !(options as ClientOptionsNoToken).client_secret ||
        !(options as ClientOptionsNoToken).refresh_token
      ) {
        throw new Error(
          `Missing required keys in options, expected "client_id", "client_secret", "client_secret"`
        );
      }
    }
  }

  private usingToken(options: ClientOptionsNoToken | ClientOptionsWithToken): boolean {
    return "access_token" in options;
  }
}
