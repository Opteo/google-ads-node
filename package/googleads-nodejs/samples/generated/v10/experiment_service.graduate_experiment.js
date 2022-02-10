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

function main(experiment, campaignBudgetMappings) {
  // [START googleads_v10_generated_ExperimentService_GraduateExperiment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The experiment to be graduated.
   */
  // const experiment = 'abc123'
  /**
   *  Required. List of campaign budget mappings for graduation. Each campaign that
   *  appears here will graduate, and will be assigned a new budget that is
   *  paired with it in the mapping. The maximum size is one.
   */
  // const campaignBudgetMappings = 1234
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {ExperimentServiceClient} = require('google-ads').v10;

  // Instantiates a client
  const googleadsClient = new ExperimentServiceClient();

  async function callGraduateExperiment() {
    // Construct request
    const request = {
      experiment,
      campaignBudgetMappings,
    };

    // Run request
    const response = await googleadsClient.graduateExperiment(request);
    console.log(response);
  }

  callGraduateExperiment();
  // [END googleads_v10_generated_ExperimentService_GraduateExperiment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
