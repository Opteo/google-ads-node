import service from "../protos/google/ads/googleads/v0/services/google_ads_service_grpc_pb";

interface GoogleAdsClientOptions {
  client_id: string;
  client_secret: string;
  refresh_token: string;
  developer_token: string;
}

export default class GoogleAdsClient {
  private options: GoogleAdsClientOptions;

  constructor(options: GoogleAdsClientOptions) {
    this.options = options;

    console.log(this.options);
    console.log(service);
  }
}
