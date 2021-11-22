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
  // [START googleads_v9_generated_KeywordThemeConstantService_SuggestKeywordThemeConstants_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The query text of a keyword theme that will be used to map to similar
   *  keyword themes. E.g. "plumber" or "roofer".
   */
  // const queryText = 'abc123'
  /**
   *  Upper-case, two-letter country code as defined by ISO-3166. This for
   *  refining the scope of the query, default to 'US' if not set.
   */
  // const countryCode = 'abc123'
  /**
   *  The two letter language code for get corresponding keyword theme for
   *  refining the scope of the query, default to 'en' if not set.
   */
  // const languageCode = 'abc123'

  // Imports the Googleads library
  const {KeywordThemeConstantServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new KeywordThemeConstantServiceClient();

  async function callSuggestKeywordThemeConstants() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await googleadsClient.suggestKeywordThemeConstants(request);
    console.log(response);
  }

  callSuggestKeywordThemeConstants();
  // [END googleads_v9_generated_KeywordThemeConstantService_SuggestKeywordThemeConstants_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
