import type { FileAsset, PortableTextBlock } from '@sanity/types';

export type SiteCollection =
  | 'post'
  | 'project'
  | 'projectspage'
  | 'homepage'
  | 'sitesettings'
  | 'category';

export interface Post {
  _type: 'post';
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  headerImage: FileAsset;
  body: PortableTextBlock[];
}

export interface Category {
  _type: 'category';
  name: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: PortableTextBlock[];
}

export type FeaturedItem = Post | Project;

export interface HomePage {
  _type: 'homepage';
  pageTitle: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroText: PortableTextBlock[];
  heroAvatarImage: FileAsset;
  recentBlogPostCount: number;
  showFeaturedItems: boolean;
  featuredItems: FeaturedItem[];
}

export interface Project {
  name: string;
  listProject: boolean;
  url: string;
  repoUrl: string;
  description: PortableTextBlock[];
  summary: string;
  releasedAt: string;
}

export interface ProjectsPage {
  _type: 'projectspage';
  pageTitle: string;
  pageHeader?: string;
  description: string;
  projects: Project[];
}

export interface Social {
  name: string;
  altText: string;
  url: string;
  icon: string;
  pack: string;
}

export interface NavMenuEntry {
  _type: 'navmenu';
  name: string;
  link: string;
  prefetch: boolean;
}

export interface SiteSettings {
  _type: 'sitesettings';
  titleTemplate: string;
  homeNavLinkText: string;
  socials: Social[];
  navMenu: NavMenuEntry[];
  googleAnalyticsId: string;
  footerText: string;
}
