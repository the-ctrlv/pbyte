import {defineField, defineType} from 'sanity'
import {basicFields} from './basicFields'
import {area} from './area'

export const pageSectionContent = defineType({
  name: 'pageSectionContent',
  type: 'object',
  title: 'Section Content',
  fields: [
    ...basicFields.fields,
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'columns',
      type: 'array',
      title: 'Section Columns',
      of: [{type: 'column'}],
    }),
    defineField({
      name: 'references',
      type: 'array',
      title: 'Document References',
      of: [
        {
          title: 'Niches',
          name: 'niches',
          type: 'reference',
          to: [{type: 'niche'}],
        },
        {
          title: 'Services',
          name: 'services',
          type: 'reference',
          to: [{type: 'service'}],
        },
        {
          title: 'Projects',
          name: 'projects',
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
    }),
    ...area.fields,
  ],
})
