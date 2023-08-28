import rss from "@astrojs/rss";

import { getPosts, getSiteSettings } from "../cms/queries";

export async function get(context) {
  const siteSettings = await getSiteSettings();
  const { siteTitle, siteDescription } = siteSettings;

  const posts = await getPosts();

  const items = posts.map((post) => ({
    title: post.title,
    pubDate: new Date(post.publishedAt),
    description: post.summary,
    link: `/blog/${post.slug.current}`,
  }));

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items,
  });
}
