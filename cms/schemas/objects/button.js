import {defineType, defineField} from 'sanity'

export const button = defineType({
  name: 'button',
  type: 'object',
  title: 'button',
  fields: [
    defineField({
      name: 'title',
      title: 'Button Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'route',
      title: 'Link Url',
      type: 'link',
    }),
  ],
})
