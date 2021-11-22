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

function main(customerId, conversionAdjustments, partialFailure) {
  // [START googleads_v9_generated_ConversionAdjustmentUploadService_UploadConversionAdjustments_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the customer performing the upload.
   */
  // const customerId = 'abc123'
  /**
   *  Required. The conversion adjustments that are being uploaded.
   */
  // const conversionAdjustments = 1234
  /**
   *  Required. If true, successful operations will be carried out and invalid
   *  operations will return errors. If false, all operations will be carried out
   *  in one transaction if and only if they are all valid. This should always be
   *  set to true.
   *  See
   *  https://developers.google.com/google-ads/api/docs/best-practices/partial-failures
   *  for more information about partial failure.
   */
  // const partialFailure = true
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {ConversionAdjustmentUploadServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new ConversionAdjustmentUploadServiceClient();

  async function callUploadConversionAdjustments() {
    // Construct request
    const request = {
      customerId,
      conversionAdjustments,
      partialFailure,
    };

    // Run request
    const response = await googleadsClient.uploadConversionAdjustments(request);
    console.log(response);
  }

  callUploadConversionAdjustments();
  // [END googleads_v9_generated_ConversionAdjustmentUploadService_UploadConversionAdjustments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
