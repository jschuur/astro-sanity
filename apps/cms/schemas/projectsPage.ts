import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectspage',
  title: 'Project Page',
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
      name: 'projects',
      title: 'Projects',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
    }),
  ],
})
