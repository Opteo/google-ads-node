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

function main(customerId, query) {
  // [START googleads_v9_generated_GoogleAdsService_Search_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer being queried.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The query string.
   */
  // const query = 'abc123'
  /**
   *  Token of the page to retrieve. If not specified, the first
   *  page of results will be returned. Use the value obtained from
   *  `next_page_token` in the previous response in order to request
   *  the next page of results.
   */
  // const pageToken = 'abc123'
  /**
   *  Number of elements to retrieve in a single page.
   *  When too large a page is requested, the server may decide to
   *  further limit the number of returned resources.
   */
  // const pageSize = 1234
  /**
   *  If true, the request is validated but not executed.
   */
  // const validateOnly = true
  /**
   *  If true, the total number of results that match the query ignoring the
   *  LIMIT clause will be included in the response.
   *  Default is false.
   */
  // const returnTotalResultsCount = true
  /**
   *  Determines whether a summary row will be returned. By default, summary row
   *  is not returned. If requested, the summary row will be sent in a response
   *  by itself after all other query results are returned.
   */
  // const summaryRowSetting = {}

  // Imports the Googleads library
  const {GoogleAdsServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new GoogleAdsServiceClient();

  async function callSearch() {
    // Construct request
    const request = {
      customerId,
      query,
    };

    // Run request
    const iterable = await googleadsClient.searchAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearch();
  // [END googleads_v9_generated_GoogleAdsService_Search_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
