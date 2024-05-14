import {defineField, defineType} from 'sanity'
import {basicFields} from './basicFields'
import {area} from './area'

export const cta = defineType({
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  validation: (Rule) =>
    Rule.custom((fields = {}) => !fields.route || !fields.link || 'Only one link type is allowed'),
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
    },
  ],
  fields: [
    ...basicFields.fields,
    defineField({
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
    }),
    defineField({
      title: 'Route',
      name: 'route',
      type: 'link',
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      },
    }),
    ...area.fields,
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `${title}`,
      }
    },
  },
})
