import {defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'tech',
  title: 'Tech',
  type: 'document',
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
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'pack',
      title: 'Icon Pack',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Fallback Logo',
      description: 'Used when icon is not available.',
      type: 'image',
    }),
  ],
})
