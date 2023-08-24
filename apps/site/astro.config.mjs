import sanity from 'astro-sanity';
import aws from 'astro-sst/lambda';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';

export default defineConfig({
  output: 'server',
  adapter: aws(),
  integrations: [
    tailwind(),
    sanity({
      projectId,
      dataset,
      apiVersion: '2021-03-25',
      useCdn: true,
    }),
  ],
  site: 'https://astrosanity.joostschuur.com',
});
