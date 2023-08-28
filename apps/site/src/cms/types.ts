import type { SanityValues } from "@joostschuur/cms";

export type SiteCollection =
  | "post"
  | "category"
  | "tech"
  | "project"
  | "social"
  | "navmenu"
  | "sitesettings"
  | "homepage"
  | "projectspage";

export type Post = SanityValues["post"];
export type Category = SanityValues["category"];
export type Tech = SanityValues["tech"];

export type Project = SanityValues["project"];
export type Social = SanityValues["sitesettings"]["socials"][number];
export type NavMenuEntry = SanityValues["sitesettings"]["navMenu"][number];

export type FeaturedItem = Post | Project;

export type SiteSettings = SanityValues["sitesettings"];
export type HomePage = SanityValues["homepage"];
export type ProjectsPage = SanityValues["projectspage"];
