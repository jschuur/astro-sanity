import {defineArrayMember, defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'sitesettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
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
      name: 'titleTemplate',
      type: 'string',
      title: 'Title Template',
      initialValue: 'The GREAT Project - {PAGE_TITLE}',
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
                "Use name/pack from https://icon-sets.iconify.design (e.g. 'entypo:email' is icon 'email' from pack 'entypo')",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'pack',
              title: 'Pack',
              type: 'string',
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
