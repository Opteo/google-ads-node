import cosmiconfig from "cosmiconfig";
import grpc from "grpc";
import get from "lodash.get";

import Auth from "./auth";
import {
  MetadataInterceptor,
  ExceptionInterceptor,
  ResponseParsingInterceptor,
  PreventMutationsInterceptor,
  InterceptorMethod,
} from "./interceptor";
import * as services from "./services";
import * as GrpcTypes from "./types";
import { promisifyServiceClient, convertToProtoFormat } from "./utils";

// @ts-ignore
import compiledResources from "../protos/compiled-resources.js";

const DEFAULT_VERSION = "v2";
const GOOGLE_ADS_ENDPOINT = "googleads.googleapis.com:443";

const PROTO_ROOT = `google.ads.googleads.${DEFAULT_VERSION}`;
const allProtos = get(compiledResources, PROTO_ROOT);

interface CommonClientOptions {
  developer_token: string;
  login_customer_id?: string;
  parseResults?: boolean;
  preventMutations?: boolean;
}

interface ClientOptionsWithToken extends CommonClientOptions {
  access_token: string;
}

interface ClientOptionsNoToken extends CommonClientOptions {
  client_id: string;
  client_secret: string;
  refresh_token: string;
  accessTokenGetter?(
    clientId?: string,
    clientSecret?: string,
    refreshToken?: string
  ): Promise<string>;
}

export class GoogleAdsClient {
  private options: ClientOptionsNoToken | ClientOptionsWithToken;
  private auth: Auth | undefined;

  constructor(options?: string | ClientOptionsNoToken | ClientOptionsWithToken) {
    if (typeof options === "string" || typeof options === "undefined") {
      const configPath = options;
      const { config = {} } = this.loadConfig(configPath) || {};
      options = config as ClientOptionsNoToken | ClientOptionsWithToken;
    }

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
        accessTokenGetter: this.options.accessTokenGetter,
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

    const interceptors = this.buildInterceptors();
    const serviceClientConstructor = (services as any)[serviceClientName];

    const service = new serviceClientConstructor(
      GOOGLE_ADS_ENDPOINT,
      grpc.credentials.createSsl(),
      {
        interceptors,
        /*
          By default, the maximum size of a gRPC message is 4MB.
          Google Ads results can sometimes be quite big, so 4MB can be insufficient.
          Here, we set it to 1GB to essentially remove that limit.
        */
        "grpc.max_send_message_length": 1024 * 1024 * 1024,
        "grpc.max_receive_message_length": 1024 * 1024 * 1024,
      }
    );

    /* Promisify gRPC service methods (callbacks are kept as well) */
    promisifyServiceClient(service);

    return service;
  }

  public buildResource(resource: string, data: any): unknown {
    if (
      !allProtos.resources.hasOwnProperty(resource) &&
      !allProtos.services.hasOwnProperty(resource)
    ) {
      throw new Error(
        `Specified type "${resource}" does not exist in Google Ads API ${DEFAULT_VERSION}`
      );
    }

    /* Load the relevant types */
    const type = allProtos.resources[resource] || allProtos.services[resource];
    const grpcType = (GrpcTypes as any)[resource];

    /*
      This translates ts values, such as string, to the protobuf format
      e.g. {some_name: "campaign"} -> {someName: { value: "campaign" }}
    */
    const protoFormatData = convertToProtoFormat(data, type, resource);

    /* Create a new protobuf Message of the specified type */
    const message = type.fromObject(protoFormatData);

    // TODO: Include debug option that also returns the readable version of the protobuf
    /* Create a readable js object from the protobuf (useful for debugging) */
    // const readable = type.toObject(message, {
    //   enums: String, // enums as string names
    //   longs: String, // longs as strings (requires long.js)
    //   bytes: String, // bytes as base64 encoded strings
    //   defaults: true, // includes default values
    //   arrays: true, // populates empty arrays (repeated fields) even if defaults=false
    //   objects: true, // populates empty objects (map fields) even if defaults=false
    //   oneofs: true, // includes virtual oneof fields set to the present field's name
    // });

    /* Encode the protobuf so it can be translated to the specific gRPC type */
    const encoded: Buffer = type.encode(message).finish();

    /* Translate the encoded protobuf type to the grpc type */
    const protobuf = grpcType.deserializeBinary(encoded);

    // return { protobuf, readable };
    return protobuf;
  }

  private buildInterceptors(): InterceptorMethod[] {
    const metadataInterceptor = new MetadataInterceptor(
      this.options.developer_token,
      this.options.login_customer_id,
      (this.options as ClientOptionsWithToken).access_token,
      this.auth
    );
    const exceptionInterceptor = new ExceptionInterceptor();
    const responseParsingInterceptor = new ResponseParsingInterceptor();
    const preventMutationsInterceptor = new PreventMutationsInterceptor();

    const interceptors: InterceptorMethod[] = [
      (
        options: grpc.CallOptions,
        nextCall: (options: grpc.CallOptions) => grpc.InterceptingCall | null
      ) => metadataInterceptor.intercept(options, nextCall),
      (
        options: grpc.CallOptions,
        nextCall: (options: grpc.CallOptions) => grpc.InterceptingCall | null
      ) => exceptionInterceptor.intercept(options, nextCall),
    ];

    if (this.options.parseResults) {
      interceptors.push(
        (
          options: grpc.CallOptions,
          nextCall: (options: grpc.CallOptions) => grpc.InterceptingCall | null
        ) => responseParsingInterceptor.intercept(options, nextCall)
      );
    }

    if (this.options.preventMutations) {
      interceptors.push(
        (
          options: grpc.CallOptions,
          nextCall: (options: grpc.CallOptions) => grpc.InterceptingCall | null
        ) => preventMutationsInterceptor.intercept(options, nextCall)
      );
    }

    return interceptors;
  }

  private loadConfig(configPath?: string): cosmiconfig.CosmiconfigResult {
    const explorer = cosmiconfig("googleads");

    if (configPath) {
      return explorer.loadSync(configPath);
    }

    return explorer.searchSync();
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
          `Missing required keys in options, expected "client_id", "client_secret", "refresh_token"`
        );
      }
    }
  }

  private usingToken(options: ClientOptionsNoToken | ClientOptionsWithToken): boolean {
    return "access_token" in options;
  }
}
