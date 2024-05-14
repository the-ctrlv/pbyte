import {defineField, defineType} from 'sanity'
import {area} from './area'

export const column = defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'header',
      title: 'Header',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    ...area.fields,
  ],
})
