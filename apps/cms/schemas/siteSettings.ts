import {defineArrayMember, defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'sitesettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'navmenu',
      title: 'Nav Menu',
    },
    {
      name: 'socials',
      title: 'Socials',
    },
  ],
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      group: 'seo',
      initialValue: 'Joost Schuur',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleTemplate',
      type: 'string',
      title: 'Title Template',
      initialValue: '{PAGE_TITLE} | Joost Schuur',
      description:
        'Used for the HTML <title> tag. {PAGE_TITLE} marks where the page title will be inserted.',
    }),
    defineField({
      name: 'navMenu',
      title: 'Nav Menu',
      group: 'navmenu',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'prefetch',
              title: 'Prefetch?',
              type: 'boolean',
              initialValue: true,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              name: 'name',
              link: 'link',
              prefetch: 'prefetch',
            },
            prepare: ({name, link, prefetch}) => ({
              title: name,
              subtitle: link + (prefetch ? ' (prefetched)' : ''),
            }),
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      group: 'socials',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'altText',
              title: 'Alt Text',
              type: 'string',
              description: `Defaults to 'Follow on ...' if not set.`,
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description:
                "Use full name from https://icon-sets.iconify.design (e.g. 'fa6-brands:square-threads'). Supported icon packs: logos, mdi, fa-brands, fa-solid, fa-regular and fa6-* variations.",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              name: 'name',
              link: 'link',
            },
            prepare: ({name, link}) => ({
              title: name,
              subtitle: link,
            }),
          },
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleAnalyticsId',
      type: 'string',
      title: 'Google Analytics ID',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'blockContent',
    }),
  ],
})
