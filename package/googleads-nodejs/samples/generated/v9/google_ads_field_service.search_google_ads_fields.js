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

function main(query) {
  // [START googleads_v9_generated_GoogleAdsFieldService_SearchGoogleAdsFields_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The query string.
   */
  // const query = 'abc123'
  /**
   *  Token of the page to retrieve. If not specified, the first page of
   *  results will be returned. Use the value obtained from `next_page_token`
   *  in the previous response in order to request the next page of results.
   */
  // const pageToken = 'abc123'
  /**
   *  Number of elements to retrieve in a single page.
   *  When too large a page is requested, the server may decide to further
   *  limit the number of returned resources.
   */
  // const pageSize = 1234

  // Imports the Googleads library
  const {GoogleAdsFieldServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new GoogleAdsFieldServiceClient();

  async function callSearchGoogleAdsFields() {
    // Construct request
    const request = {
      query,
    };

    // Run request
    const iterable = await googleadsClient.searchGoogleAdsFieldsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearchGoogleAdsFields();
  // [END googleads_v9_generated_GoogleAdsFieldService_SearchGoogleAdsFields_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
