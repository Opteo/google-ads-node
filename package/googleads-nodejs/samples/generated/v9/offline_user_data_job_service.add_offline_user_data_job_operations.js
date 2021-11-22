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

function main(resourceName, operations) {
  // [START googleads_v9_generated_OfflineUserDataJobService_AddOfflineUserDataJobOperations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the OfflineUserDataJob.
   */
  // const resourceName = 'abc123'
  /**
   *  True to enable partial failure for the offline user data job.
   */
  // const enablePartialFailure = true
  /**
   *  True to enable warnings for the offline user data job. When enabled, a
   *  warning will not block the OfflineUserDataJobOperation, and will also
   *  return warning messages about malformed field values.
   */
  // const enableWarnings = true
  /**
   *  Required. The list of operations to be done.
   */
  // const operations = 1234
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {OfflineUserDataJobServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new OfflineUserDataJobServiceClient();

  async function callAddOfflineUserDataJobOperations() {
    // Construct request
    const request = {
      resourceName,
      operations,
    };

    // Run request
    const response = await googleadsClient.addOfflineUserDataJobOperations(request);
    console.log(response);
  }

  callAddOfflineUserDataJobOperations();
  // [END googleads_v9_generated_OfflineUserDataJobService_AddOfflineUserDataJobOperations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
