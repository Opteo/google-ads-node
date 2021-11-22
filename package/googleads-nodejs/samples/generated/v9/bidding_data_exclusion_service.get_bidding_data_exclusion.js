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

function main(resourceName) {
  // [START googleads_v9_generated_BiddingDataExclusionService_GetBiddingDataExclusion_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the data exclusion to fetch.
   */
  // const resourceName = 'abc123'

  // Imports the Googleads library
  const {BiddingDataExclusionServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new BiddingDataExclusionServiceClient();

  async function callGetBiddingDataExclusion() {
    // Construct request
    const request = {
      resourceName,
    };

    // Run request
    const response = await googleadsClient.getBiddingDataExclusion(request);
    console.log(response);
  }

  callGetBiddingDataExclusion();
  // [END googleads_v9_generated_BiddingDataExclusionService_GetBiddingDataExclusion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
