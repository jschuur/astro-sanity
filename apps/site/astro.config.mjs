import tailwind from "@astrojs/tailwind";
import aws from "astro-sst/lambda";
import { defineConfig } from "astro/config";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [tailwind()],
  site: "https://astrosanity.joostschuur.com",
});
