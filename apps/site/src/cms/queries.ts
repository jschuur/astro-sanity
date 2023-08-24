import { groq, useSanityClient } from 'astro-sanity';
import type { Category, HomePage, Post, ProjectsPage, SiteCollection, SiteSettings } from './types';

export const getAll = <T>(collection: SiteCollection): Promise<T[]> =>
  useSanityClient().fetch(groq`*[_type == "${collection}"]`);

export const getPosts = () => getAll<Post>('post');
export const getCategories = () => getAll<Category>('category');

export const getSiteSettings = () => getAll<SiteSettings>('sitesettings');
export const getHomePage = () => getAll<HomePage>('projectspage');
export const getProjectsPage = () => getAll<ProjectsPage>('projectspage');

export const getProjects = () =>
  getAll<ProjectsPage>('projectspage').then((settings) => settings?.[0]?.projects || []);
export const getSocials = () =>
  getAll<SiteSettings>('sitesettings').then((settings) => settings?.[0]?.socials || []);
