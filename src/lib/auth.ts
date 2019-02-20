import { OAuth2Client, Credentials } from "google-auth-library";

interface AuthOptions {
  clientId: string;
  clientSecret: string;
  refreshToken: string;
}

export default class Auth {
  private options: AuthOptions;
  private client: OAuth2Client;

  constructor(options: AuthOptions) {
    this.options = options;
    this.client = this.buildOAuth2Client(this.options.clientId, this.options.clientSecret);
    this.setRefreshToken(this.options.refreshToken);
  }

  public async getAccessToken(): Promise<string> {
    try {
      const { token } = await this.client.getAccessToken();
      return token as string;
    } catch (err) {
      throw new Error(`Failed to refresh access token, reason=${err.message}`);
    }
  }

  private buildOAuth2Client(clientId: string, clientSecret: string): OAuth2Client {
    return new OAuth2Client({
      clientId,
      clientSecret,
    });
  }

  private setRefreshToken(refreshToken: string): void {
    const credentials: Credentials = {
      refresh_token: refreshToken,
    };
    this.client.setCredentials(credentials);
  }
}
