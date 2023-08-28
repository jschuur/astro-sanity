import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import aws from "astro-sst/lambda";
import { defineConfig } from "astro/config";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ["*"],
        logos: ["*"],
        "fa-brands": ["*"],
        "fa-solid": ["*"],
        "fa-regular": ["*"],
        "fa6-brands": ["*"],
        "fa6-solid": ["*"],
        "fa6-regular": ["*"],
      },
    }),
  ],
  site: "https://astrosanity.joostschuur.com",
});
