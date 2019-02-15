import grpc from "grpc";

import { GoogleAdsFailure } from "../protos/google/ads/googleads/v0/errors/errors_pb";

const FAILURE_KEY = "google.ads.googleads.v0.errors.googleadsfailure-bin";
const REQUEST_ID_KEY = "request-id";
const RETRY_STATUS_CODES = [grpc.status.INTERNAL, grpc.status.RESOURCE_EXHAUSTED];

export class MetadataInterceptor {
  private access_token: string;
  private developer_token: string;
  private login_customer_id: string | undefined;

  constructor(
    access_token: string,
    developer_token: string,
    login_customer_id: string | undefined
  ) {
    this.access_token = access_token;
    this.developer_token = developer_token;
    this.login_customer_id = login_customer_id;
  }

  public intercept(options: grpc.CallOptions, nextCall: Function) {
    return new grpc.InterceptingCall(nextCall(options), {
      start: (metadata: grpc.Metadata, _listener: grpc.Listener, next: any) => {
        metadata.add(`authorization`, `Bearer ${this.access_token}`);
        metadata.add(`developer-token`, `${this.developer_token}`);

        if (this.login_customer_id) {
          metadata.add(`login-customer-id`, this.login_customer_id);
        }

        next(metadata, {
          onReceiveMetadata(metadata: grpc.Metadata, next: any) {
            next(metadata);
          },

          onReceiveMessage(message: any, next: any) {
            next(message);
          },

          onReceiveStatus(status: any, next: any) {
            next(status);
          },
        });
      },

      sendMessage(message, next) {
        next(message);
      },

      halfClose(next) {
        next();
      },
    });
  }
}

function getGoogleAdsFailure(metadata: grpc.Metadata): GoogleAdsFailure | null {
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

function getRequestId(metadata: grpc.Metadata): string | null {
  if (metadata.get(REQUEST_ID_KEY)) {
    return metadata.get(REQUEST_ID_KEY)[0] as string;
  }
  return null;
}

function handleGrpcFailure(status: grpc.StatusObject) {
  const { code, metadata } = status;

  if (RETRY_STATUS_CODES.includes(code)) {
    /* Throw error if code one of INTERNAL or RESOURCE_EXHAUSTED */
    throw new Error(status.details);
  }

  const ga_failure = getGoogleAdsFailure(metadata);

  if (!ga_failure) {
    /* Throw error with status details if not a Google Ads API error */
    throw new Error(status.details);
  }

  const request_id = getRequestId(metadata);
  let error: ClientError;

  try {
    /* Try to parse the error */
    const error_message = ga_failure.toString().split(",")[1];
    error = new ClientError(error_message, request_id, ga_failure);
  } catch (err) {
    /* Use the original error message if parsing fails */
    error = new ClientError(status.details, request_id, ga_failure);
  }

  throw error;
}

export const ExceptionInterceptor: grpc.Requester = {
  start(metadata: grpc.Metadata, _listener: grpc.Listener, next: any) {
    next(metadata, {
      onReceiveStatus(status: grpc.StatusObject, next: any) {
        if (status.code !== grpc.status.OK) {
          handleGrpcFailure(status);
        } else {
          next(status);
        }
      },
    });
  },
};

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
