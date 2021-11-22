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

function main(campaignExperiment, campaignBudget) {
  // [START googleads_v9_generated_CampaignExperimentService_GraduateCampaignExperiment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the campaign experiment to graduate.
   */
  // const campaignExperiment = 'abc123'
  /**
   *  Required. Resource name of the budget to attach to the campaign graduated from the
   *  experiment.
   */
  // const campaignBudget = 'abc123'
  /**
   *  If true, the request is validated but not executed. Only errors are
   *  returned, not results.
   */
  // const validateOnly = true

  // Imports the Googleads library
  const {CampaignExperimentServiceClient} = require('google-ads').v9;

  // Instantiates a client
  const googleadsClient = new CampaignExperimentServiceClient();

  async function callGraduateCampaignExperiment() {
    // Construct request
    const request = {
      campaignExperiment,
      campaignBudget,
    };

    // Run request
    const response = await googleadsClient.graduateCampaignExperiment(request);
    console.log(response);
  }

  callGraduateCampaignExperiment();
  // [END googleads_v9_generated_CampaignExperimentService_GraduateCampaignExperiment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
