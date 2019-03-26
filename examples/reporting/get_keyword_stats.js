const {
  GoogleAdsClient,
  SearchGoogleAdsRequest,
  KeywordMatchTypeEnum,
} = require("google-ads-node");

/* Make sure to set your own authentication details here */
const CLIENT_ID = "<CLIENT_ID>";
const CLIENT_SECRET = "<CLIENT_SECRET>";
const REFRESH_TOKEN = "<REFRESH_TOKEN>";
const DEVELOPER_TOKEN = "<DEVELOPER_TOKEN>";
const LOGIN_CUSTOMER_ID = "<LOGIN_CUSTOMER_ID>";
const CUSTOMER_ID = "<CUSTOMER_ID>";

/* Create a new GoogleAdsClient instance */
const client = new GoogleAdsClient({
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
  refresh_token: REFRESH_TOKEN,
  developer_token: DEVELOPER_TOKEN,
  login_customer_id: LOGIN_CUSTOMER_ID,

  /* This option unmarshals the gRPC response blobs to plain Javscript objects automatically */
  parseResults: true,
});

async function main() {
  /* 
    In most cases, the "GoogleAdsService" is all you need to for accessing reporting data, 
    including metrics and segments 
  */
  const service = client.getService("GoogleAdsService");

  /* Create a new service request */
  const request = new SearchGoogleAdsRequest();

  /* SearchGoogleAdsRequest requires a valid customer id and a GAQL query string */
  request.setCustomerId(CUSTOMER_ID);
  request.setQuery(`
    SELECT 
        campaign.id, 
        campaign.name, 
        ad_group.id, 
        ad_group.name,
        ad_group_criterion.criterion_id,
        ad_group_criterion.keyword.text,
        ad_group_criterion.keyword.match_type,
        metrics.impressions, 
        metrics.clicks, 
        metrics.cost_micros
    FROM 
        keyword_view 
    WHERE 
        segments.date DURING LAST_7_DAYS
        AND campaign.advertising_channel_type = "SEARCH"
        AND ad_group.status = "ENABLED"
        AND ad_group_criterion.status IN ("ENABLED", "PAUSED")
    ORDER BY 
        metrics.impressions DESC
    LIMIT 50
  `);

  /* Call the Search method of the GoogleAdsService (Note: Methods are camel case in this library) */
  const response = await service.search(request);

  /* Iterate over the response rows */
  for (const row of response.resultsList) {
    const { adGroupCriterion, metrics } = row;

    /* Use the KeywordMatchType to filter keywords with Phrase match */
    if (adGroupCriterion.keyword.matchType === KeywordMatchTypeEnum.KeywordMatchType.PHRASE) {
      const { text } = adGroupCriterion.keyword;
      const { impressions } = metrics;

      console.log(
        `Keyword text "${text}" had ${impressions} impression(s) during the last 7 days.`
      );
    }
  }
}

main();
