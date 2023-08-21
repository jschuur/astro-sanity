import aws from 'astro-sst/lambda';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  adapter: aws(),
  site: 'https://astrosanity.joostschuur.com',
});
