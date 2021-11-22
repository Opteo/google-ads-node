// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START googleads_v9_generated_KeywordPlanIdeaService_GenerateKeywordIdeas_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The ID of the customer with the recommendation.
   */
  // const customerId = 'abc123'
  /**
   *  The resource name of the language to target.
   *  Required
   */
  // const language = 'abc123'
  /**
   *  The resource names of the location to target.
   *  Max 10
   */
  // const geoTargetConstants = 'abc123'
  /**
   *  If true, adult keywords will be included in response.
   *  The default value is false.
   */
  // const includeAdultKeywords = true
  /**
   *  Token of the page to retrieve. If not specified, the first
   *  page of results will be returned. To request next page of results use the
   *  value obtained from `next_page_token` in the previous response.
   *  The request fields must match across pages.
   */
  // const pageToken = 'abc123'
  /**
   *  Number of results to retrieve in a single page.
   *  A maximum of 10,000 results may be returned, if the page_size
   *  exceeds this, it is ignored.
   *  If unspecified, at most 10,000 results will be returned.
   *  The server may decide to further limit the number of returned resources.
   *  If the response contains fewer than 10,000 results it may not be assumed
   *  as last page of results.
   */
  // const pageSize = 1234
  /**
   *  Targeting network.
   */
  // const keywordPlanNetwork = {}
  /**
   *  The keyword annotations to include in response.
   */
  // const keywordAnnotation = 1234
  /**
   *  The aggregate fields to include in response.
   */
  // const aggregateMetrics = {}
  /**
   *  The options for historical metrics data.
   */
  // const historicalMetricsOptions = {}
  /**
   *  A Keyword and a specific Url to generate ideas from
   *  e.g. cars, www.example.com/cars.
   */
  // const keywordAndUrlSeed = {}
  /**
   *  A Keyword or phrase to generate ideas from, e.g. cars.
   */
  // const keywordSeed = {}
  /**
   *  A specific url to generate ideas from, e.g. www.example.com/cars.
   */
  // const urlSeed = {}
  /**
   *  The site to generate ideas from, e.g. www.example.com.
   */
  // const siteSeed = {}

  // Imports the Googleads library
  const {KeywordPlanIdeaServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new KeywordPlanIdeaServiceClient();

  async function callGenerateKeywordIdeas() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await googleadsClient.generateKeywordIdeasAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callGenerateKeywordIdeas();
  // [END googleads_v9_generated_KeywordPlanIdeaService_GenerateKeywordIdeas_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
