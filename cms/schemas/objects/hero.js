import {defineType, defineField} from 'sanity'
import {basicFields} from '../objects/basicFields'
import {area} from './area'

export const hero = defineType({
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    ...basicFields.fields,
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
      media: 'backgroundImage',
    },
    prepare({title, media}) {
      return {
        title,
        subtitle: 'Hero section',
        media: media,
      }
    },
  },
})
