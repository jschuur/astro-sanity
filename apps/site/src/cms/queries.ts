import type { SanityValues } from "@joostschuur/cms";
import { createClient } from "@sanity-typed/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";

const client = createClient<SanityValues>()({
  projectId,
  dataset,
  useCdn: true,
  apiVersion: "2023-05-23",
});

export const getSingleton = async <T>(page: string) =>
  (await client.fetch(`*[_type == "${page}"] `))?.[0] as T;

export const getPosts = () =>
  client.fetch('*[_type=="post"]') as Promise<SanityValues["post"][]>;
export const getCategories = () => client.fetch('*[_type=="category"]');
export const getTech = () => client.fetch('*[_type=="tech"]');

export const getSiteSettings = (): SanityValues["sitesettings"] =>
  client
    .fetch('*[_type=="sitesettings"]{...,socials[]->,navmenu[]->}')
    .then((settings) => settings[0]);

export const getHomePage = () =>
  getSingleton<SanityValues["homepage"]>("homepage");

export const getProjectsPage = (): SanityValues["projectspage"] =>
  client
    .fetch('*[_type=="projectspage"]{...,projects[]->}')
    .then((page) => page[0]);
