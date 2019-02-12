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
  }
}
