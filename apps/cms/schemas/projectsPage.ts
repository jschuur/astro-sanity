import {defineArrayMember, defineField, defineType} from '@sanity-typed/types'

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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageHeader',
      title: 'Page Header',
      type: 'string',
      description: 'Uses Page Title unless specified.',
      group: 'content',
    }),
    defineField({
      name: 'pageBody',
      title: 'Page Body',
      type: 'blockContent',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'project'} as const],
        }),
      ],
    }),
  ],
})
