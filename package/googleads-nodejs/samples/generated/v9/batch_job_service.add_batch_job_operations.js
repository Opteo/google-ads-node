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

function main(resourceName, mutateOperations) {
  // [START googleads_v9_generated_BatchJobService_AddBatchJobOperations_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the batch job.
   */
  // const resourceName = 'abc123'
  /**
   *  A token used to enforce sequencing.
   *  The first AddBatchJobOperations request for a batch job should not set
   *  sequence_token. Subsequent requests must set sequence_token to the value of
   *  next_sequence_token received in the previous AddBatchJobOperations
   *  response.
   */
  // const sequenceToken = 'abc123'
  /**
   *  Required. The list of mutates being added.
   *  Operations can use negative integers as temp ids to signify dependencies
   *  between entities created in this batch job. For example, a customer with
   *  id = 1234 can create a campaign and an ad group in that same campaign by
   *  creating a campaign in the first operation with the resource name
   *  explicitly set to "customers/1234/campaigns/-1", and creating an ad group
   *  in the second operation with the campaign field also set to
   *  "customers/1234/campaigns/-1".
   */
  // const mutateOperations = 1234

  // Imports the Googleads library
  const {BatchJobServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new BatchJobServiceClient();

  async function callAddBatchJobOperations() {
    // Construct request
    const request = {
      resourceName,
      mutateOperations,
    };

    // Run request
    const response = await googleadsClient.addBatchJobOperations(request);
    console.log(response);
  }

  callAddBatchJobOperations();
  // [END googleads_v9_generated_BatchJobService_AddBatchJobOperations_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
