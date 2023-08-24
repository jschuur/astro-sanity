import type { SSTConfig } from 'sst';
import { AstroSite } from 'sst/constructs';

export default {
  config(_input) {
    return {
      name: 'site',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new AstroSite(stack, 'site', {
        environment: {
          SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
          SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
        },
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
