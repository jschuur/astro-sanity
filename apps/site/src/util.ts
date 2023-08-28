import type { AstroGlobal } from "astro";

export const buildCanonicalUrl = (Astro: AstroGlobal) =>
  new URL(Astro.url.pathname, Astro.site).toString().replace(/\/+$/, "");
