import grpc from "grpc";

import Auth from "./auth";
import { GoogleAdsFailure, GoogleAdsError, ErrorCode } from "./types";
import {
  formatCallResults,
  getErrorLocationPath,
  isMutationRequest,
  safeguardMutationProtobufRequest,
} from "./utils";

const FAILURE_KEY = "google.ads.googleads.v2.errors.googleadsfailure-bin";
const REQUEST_ID_KEY = "request-id";
const RETRY_STATUS_CODES = [grpc.status.INTERNAL, grpc.status.RESOURCE_EXHAUSTED];

type NextCall = (options: grpc.CallOptions) => grpc.InterceptingCall | null;
export type InterceptorMethod = (options: grpc.CallOptions, nextCall: NextCall) => any;

export class MetadataInterceptor {
  private developer_token: string;
  private login_customer_id: string | undefined;
  private access_token: string | undefined;
  private auth: Auth | undefined;
  private requestInterceptor: grpc.Requester;

  constructor(
    developer_token: string,
    login_customer_id: string | undefined,
    access_token: string | undefined,
    auth: Auth | undefined
  ) {
    this.developer_token = developer_token;
    this.login_customer_id = login_customer_id;
    this.access_token = access_token;
    this.auth = auth;
    this.requestInterceptor = this.buildRequester();
  }

  public intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall {
    return new grpc.InterceptingCall(nextCall(options), this.requestInterceptor);
  }

  private buildRequester(): grpc.Requester {
    return new grpc.RequesterBuilder()
      .withStart(async (metadata: grpc.Metadata, listener: grpc.Listener, next: Function) => {
        const access_token = this.auth ? await this.auth.getAccessToken() : this.access_token;

        metadata.add(`Authorization`, `Bearer ${access_token}`);
        metadata.add(`developer-token`, this.developer_token);

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

  public intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall {
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
          // TODO: Throw this error instead of returning a new status?
          const error = this.handleGrpcFailure(status);

          if (error.hasOwnProperty("error_code")) {
            // @ts-ignore Custom error field "error_code"
            status.metadata.add("error-code", JSON.stringify(error.error_code));
          }
          if (error.hasOwnProperty("location")) {
            // @ts-ignore Custom error field "location"
            status.metadata.add("location", error.location);
          }

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

  private getRequestId(metadata: grpc.Metadata): string | undefined {
    if (metadata.get(REQUEST_ID_KEY)) {
      return metadata.get(REQUEST_ID_KEY)[0] as string;
    }
    return "";
  }

  private handleGrpcFailure(status: grpc.StatusObject): Error {
    const { code, metadata } = status;

    if (RETRY_STATUS_CODES.includes(code)) {
      /* Throw error if code one of INTERNAL or RESOURCE_EXHAUSTED */
      return new Error(status.details);
    }

    const gaFailure = this.getGoogleAdsFailure(metadata);

    if (!gaFailure) {
      /* Throw error with status details if not a Google Ads API error */
      return new Error(status.details);
    }

    const requestId = this.getRequestId(metadata);
    let error: ClientError;

    const errorsList: GoogleAdsError[] = gaFailure.getErrorsList();

    if (errorsList && errorsList.length > 0) {
      const firstError = errorsList[0] as GoogleAdsError;
      const firstErrorObj = firstError.toObject();
      let path = "";
      if (firstErrorObj.hasOwnProperty("location")) {
        path = getErrorLocationPath(firstErrorObj.location as object);
      }
      return new ClientError(firstErrorObj.message, requestId, gaFailure, path);
    }

    try {
      /* Try to parse the error */
      const errorPieces = gaFailure.toString().split(",");
      const errorMessage = errorPieces[errorPieces.length - 1];
      error = new ClientError(errorMessage, requestId, gaFailure);
    } catch (err) {
      /* Use the original error message if parsing fails */
      error = new ClientError(status.details, requestId, gaFailure);
    }

    return error;
  }
}

export class ResponseParsingInterceptor {
  private requestInterceptor: grpc.Requester;

  constructor() {
    this.requestInterceptor = this.buildRequester();
  }

  public intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall {
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
        next(status);
      })
      .withOnReceiveMessage((message: any, next: Function) => {
        if (message && message.toObject) {
          let results = message.toObject();

          if (results.partialFailureError && results.partialFailureError.detailsList) {
            const errors = [];

            const failure: GoogleAdsFailure = GoogleAdsFailure.deserializeBinary(
              results.partialFailureError.detailsList[0].value as Uint8Array
            );

            const errorsList: GoogleAdsError[] = failure.getErrorsList();

            for (const error of errorsList) {
              errors.push(error.toObject());
            }

            results.partialFailureError.errors = formatCallResults(errors, undefined);
          }

          const parsedResults = formatCallResults(
            /* 
              When retrieving a single entity via a service (e.g. CampaignService), the API
              returns a single object, instead of an array
            */
            results.resultsList ? results.resultsList : [results],
            results.fieldMask
          );
          if (parsedResults && results.resultsList) {
            results.resultsList = parsedResults;
          }
          /* Return an object if it's a single entity via a service */
          if (parsedResults && !results.resultsList) {
            results = parsedResults[0];
          }
          next(results);
        } else {
          next(message);
        }
      })
      .build();
  }
}

export class PreventMutationsInterceptor {
  private requestInterceptor: grpc.Requester;
  private blankInterceptor: grpc.Requester;

  constructor() {
    this.requestInterceptor = this.buildRequester();
    this.blankInterceptor = buildBlankInterceptor();
  }

  public intercept(options: grpc.CallOptions, nextCall: NextCall): grpc.InterceptingCall {
    if (isMutationRequest(options)) {
      return new grpc.InterceptingCall(nextCall(options), this.requestInterceptor);
    }
    return new grpc.InterceptingCall(nextCall(options), this.blankInterceptor);
  }

  private buildRequester(): grpc.Requester {
    return new grpc.RequesterBuilder()
      .withSendMessage((message: any, next: Function) => {
        safeguardMutationProtobufRequest(message, next);
      })
      .build();
  }
}

class ClientError extends Error {
  public readonly request_id: string | undefined;
  public readonly failure: GoogleAdsFailure;
  public readonly error_code: object;
  public readonly location: string;

  constructor(
    public message: string,
    requestId: string | undefined,
    failure: GoogleAdsFailure,
    path?: string
  ) {
    super(message);

    this.location = path || "";
    this.request_id = requestId;
    this.failure = failure;

    if (failure.getErrorsList() && failure.getErrorsList().length > 0) {
      const errorCode = failure.getErrorsList()[0].getErrorCode() as ErrorCode;
      this.error_code = errorCode.toObject();
    } else {
      this.error_code = {};
    }
  }
}

function buildBlankInterceptor(): grpc.Requester {
  return new grpc.RequesterBuilder().build();
}
