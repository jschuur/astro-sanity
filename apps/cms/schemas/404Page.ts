import {defineField, defineType} from 'sanity'

export default defineType({
  name: '404page',
  title: '404 Page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'pageHeader',
      title: 'Page Header',
      type: 'string',
      description: 'Uses Page Title unless specified.',
      group: 'seo',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'seo',
    }),
    defineField({
      name: 'body',
      title: 'Page Body',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'recentBlogPostCount',
      title: 'Recent Blog Post Count',
      description: 'Number of recent blog posts to show after the 404 page body text.',
      type: 'number',
      group: 'content',
      initialValue: 8,
      validation: (Rule) => Rule.required().min(0).max(16),
    }),
  ],
})
