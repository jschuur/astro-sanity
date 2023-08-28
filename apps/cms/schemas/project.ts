import {defineArrayMember, defineField, defineType} from '@sanity-typed/types'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'listProject',
      title: 'List Project?',
      description: 'Temporarily hide a project.',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'repoUrl',
      title: 'Project Git Repository URL',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'Content with markup shown on the Projects page.',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'Shorter description without markup for featured content cards.',
    }),
    defineField({
      name: 'releasedAt',
      title: 'Released At',
      type: 'date',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'tech'} as const],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      url: 'url',
      listProject: 'listProject',
      releasedAt: 'releasedAt',
    },
    prepare: ({name, url, listProject, releasedAt}) => ({
      title: name,
      subtitle:
        (listProject ? '' : 'HIDDEN: ') +
        url +
        (releasedAt ? ' (' + releasedAt.split('Z')[0] + ')' : ''),
    }),
  },
})
