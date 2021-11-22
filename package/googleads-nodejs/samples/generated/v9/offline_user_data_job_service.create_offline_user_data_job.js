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

function main(customerId, job) {
  // [START googleads_v9_generated_OfflineUserDataJobService_CreateOfflineUserDataJob_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer for which to create an offline user data job.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The offline user data job to be created.
   */
  // const job = {}
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true
  /**
   *  If true, match rate range for the offline user data job is calculated and
   *  made available in the resource.
   */
  // const enableMatchRateRangePreview = true

  // Imports the Googleads library
  const {OfflineUserDataJobServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new OfflineUserDataJobServiceClient();

  async function callCreateOfflineUserDataJob() {
    // Construct request
    const request = {
      customerId,
      job,
    };

    // Run request
    const response = await googleadsClient.createOfflineUserDataJob(request);
    console.log(response);
  }

  callCreateOfflineUserDataJob();
  // [END googleads_v9_generated_OfflineUserDataJobService_CreateOfflineUserDataJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
