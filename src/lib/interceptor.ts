import grpc from "grpc";

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

  public intercept(options: any, nextCall: any) {
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

export class ExceptionInterceptor {
  public intercept(options: grpc.CallOptions, nextCall: any) {
    return new grpc.InterceptingCall(nextCall(options), {
      start: (metadata: grpc.Metadata, _listener: grpc.Listener, next: any) => {
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
