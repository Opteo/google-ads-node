import grpc from "grpc";

import { GoogleAdsFailure } from "./types";

const FAILURE_KEY = "google.ads.googleads.v0.errors.googleadsfailure-bin";
const REQUEST_ID_KEY = "request-id";
const RETRY_STATUS_CODES = [grpc.status.INTERNAL, grpc.status.RESOURCE_EXHAUSTED];

export class MetadataInterceptor {
  private access_token: string;
  private developer_token: string;
  private login_customer_id: string | undefined;
  private requestInterceptor: grpc.Requester;

  constructor(
    access_token: string,
    developer_token: string,
    login_customer_id: string | undefined
  ) {
    this.access_token = access_token;
    this.developer_token = developer_token;
    this.login_customer_id = login_customer_id;
    this.requestInterceptor = this.buildRequester();
  }

  public intercept(options: grpc.CallOptions, nextCall: Function) {
    return new grpc.InterceptingCall(nextCall(options), this.requestInterceptor);
  }

  private buildRequester(): grpc.Requester {
    return new grpc.RequesterBuilder()
      .withStart((metadata: grpc.Metadata, listener: grpc.Listener, next: Function) => {
        metadata.add(`authorization`, `Bearer ${this.access_token}`);
        metadata.add(`developer-token`, `${this.developer_token}`);

        if (this.login_customer_id) {
          metadata.add(`login-customer-id`, this.login_customer_id);
        }
        next(metadata, listener);
      })
      .build();
  }
}

export class ExceptionInterceptor {
  private requestInterceptor: grpc.Requester;

  constructor() {
    this.requestInterceptor = this.buildRequester();
  }

  public intercept(options: grpc.CallOptions, nextCall: Function) {
    return new grpc.InterceptingCall(nextCall(options), this.requestInterceptor);
  }

  private buildRequester(): grpc.Requester {
    return new grpc.RequesterBuilder()
      .withStart((metadata: grpc.Metadata, _listener: grpc.Listener, next: Function) => {
        const newListener = this.buildListener();
        next(metadata, newListener);
      })
      .build();
  }

  private buildListener(): grpc.Listener {
    return new grpc.ListenerBuilder()
      .withOnReceiveStatus((status: grpc.StatusObject, next: Function) => {
        if (status.code !== grpc.status.OK) {
          // TODO: Throw this error
          const error = this.handleGrpcFailure(status);
          const errorStatus = new grpc.StatusBuilder()
            .withCode(status.code)
            .withDetails(error.message)
            .withMetadata(status.metadata)
            .build();
          next(errorStatus);
        } else {
          next(status);
        }
      })
      .build();
  }

  private getGoogleAdsFailure(metadata: grpc.Metadata): GoogleAdsFailure | null {
    if (!metadata) {
      return null;
    }
    for (const key in metadata.getMap()) {
      if (key === FAILURE_KEY) {
        const message = metadata.get(key);
        try {
          const failure: GoogleAdsFailure = GoogleAdsFailure.deserializeBinary(
            message[0] as Uint8Array
          );
          return failure;
        } catch (err) {
          return null;
        }
      }
    }
    return null;
  }

  private getRequestId(metadata: grpc.Metadata): string | null {
    if (metadata.get(REQUEST_ID_KEY)) {
      return metadata.get(REQUEST_ID_KEY)[0] as string;
    }
    return null;
  }

  private handleGrpcFailure(status: grpc.StatusObject): Error {
    const { code, metadata } = status;

    if (RETRY_STATUS_CODES.includes(code)) {
      /* Throw error if code one of INTERNAL or RESOURCE_EXHAUSTED */
      throw new Error(status.details);
    }

    const ga_failure = this.getGoogleAdsFailure(metadata);

    if (!ga_failure) {
      /* Throw error with status details if not a Google Ads API error */
      // throw new Error(status.details);
      return new Error(status.details);
    }

    const request_id = this.getRequestId(metadata);
    let error: ClientError;

    try {
      /* Try to parse the error */
      const error_pieces = ga_failure.toString().split(",");
      const error_message = error_pieces[error_pieces.length - 1];
      error = new ClientError(error_message, request_id, ga_failure);
    } catch (err) {
      /* Use the original error message if parsing fails */
      error = new ClientError(status.details, request_id, ga_failure);
    }

    return error;
    // Promise.reject(error);
  }
}

class ClientError extends Error {
  public request_id: string | null;
  public failure: GoogleAdsFailure;

  constructor(public message: string, request_id: string | null, failure: GoogleAdsFailure) {
    super(message);
    // this.stack = (new Error() as any).stack;
    this.request_id = request_id;
    this.failure = failure;
  }
}
