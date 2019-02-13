import grpc from "grpc";

export class MetadataInterceptor {
  private readonly access_token: string;
  private readonly developer_token: string;
  private readonly login_customer_id: string | undefined;

  constructor(
    access_token: string,
    developer_token: string,
    login_customer_id: string | undefined
  ) {
    this.access_token = access_token;
    this.developer_token = developer_token;
    this.login_customer_id = login_customer_id;

    console.log(this.access_token, this.developer_token, this.login_customer_id);
  }

  public intercept(options: any, nextCall: any) {
    console.log(options);

    return new grpc.InterceptingCall(nextCall(options), {
      start(metadata: grpc.Metadata, _listener: any, next: any) {
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
            // console.log("message", message);
            next(message);
          },

          onReceiveStatus(status: any, next: any) {
            if (status.code !== grpc.status.OK) {
              throw new Error(status.details);
            }
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
