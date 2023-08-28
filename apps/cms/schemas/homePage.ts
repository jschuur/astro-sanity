import {defineArrayMember, defineField, defineType} from '@sanity-typed/types'

const MAX_FEATURED_ITEMS = 8

export default defineType({
  name: 'homepage',
  title: 'Home Page',
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
    {
      name: 'featured',
      title: 'Featured',
    },
  ],
  fields: [
    defineField({
      name: 'heroTitle',
      type: 'string',
      group: 'content',
      title: 'Hero Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'string',
      group: 'content',
      title: 'Hero Subtitle',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroText',
      type: 'blockContent',
      group: 'content',
      title: 'Hero Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroAvatar',
      type: 'image',
      group: 'content',
      title: 'Hero Avatar Image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'recentPostCount',
      type: 'number',
      group: 'content',
      title: 'Recent Blog Post Count',
      initialValue: 4,
      description: 'Set to 0 to hide recent posts.',
      validation: (Rule) => Rule.required().min(0).max(16),
    }),
    defineField({
      name: 'showFeaturedItems',
      title: 'Show Featured Items?',
      description: 'Temporarily hide all featured items.',
      type: 'boolean',
      group: 'featured',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featuredItems',
      type: 'array',
      group: 'featured',
      title: 'Featured Items',
      of: [
        defineArrayMember({
          type: 'reference',
          title: 'Featured Items',
          to: [
            {
              type: 'post' as const,
            },
            {
              type: 'project' as const,
            },
          ],
        }),
      ],
      description: `Posts or Projects to feature (up to ${MAX_FEATURED_ITEMS}).`,
      validation: (Rule) => Rule.max(MAX_FEATURED_ITEMS),
    }),
  ],
})
