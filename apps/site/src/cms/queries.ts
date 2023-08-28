import type { SanityValues } from "@joostschuur/cms";
import { createClient } from "@sanity-typed/client";

import type { SiteCollection } from "./types";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

const client = createClient<SanityValues>()({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-05-23",
});

export const getSingleton = async (page: string) =>
  (await client.fetch(`*[_type == "${page}"] `))?.[0];

export const getAll = (collection: SiteCollection) =>
  client.fetch(`*[_type == "${collection}"] `);

export const getPosts = () => getAll("post");
export const getCategories = () => getAll("category");
export const getTech = () => getAll("tech");

export const getSiteSettings = () => getSingleton("sitesettings");
export const getHomePage = () => getSingleton("homepage");
export const getProjectsPage = async () =>
  (await client.fetch(`*[_type == "projectspage"]{...,projects[]->}`))?.[0];
