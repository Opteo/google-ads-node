module.exports = {
  // Credential for accessing Google's OAuth servers.
  // Provided by https://console.developers.google.com.
  client_id: "INSERT_CLIENT_ID_HERE",

  // Credential for accessing Google's OAuth servers.
  // Provided by https://console.developers.google.com.
  client_secret: "INSERT_CLIENT_SECRET_HERE",

  // Renewable OAuth credential associated with 1 or more Google Ads accounts.
  refresh_token: "INSERT_REFRESH_TOKEN_HERE",

  // Token which provides access to the Google Ads API in general. It does not grant access to any
  // particular ad account (OAuth is used for this purpose).
  developer_token: "INSERT_DEVELOPER_TOKEN_HERE",

  // Required for manager accounts only: Specify the login customer ID used to
  // authenticate API calls. This will be the customer ID of the authenticated
  // manager account. You can also specify this later in code if your application
  // uses multiple manager account + OAuth pairs.
  login_customer_id: "INSERT_LOGIN_CUSTOMER_ID_HERE",
};
