import {defineType, defineField} from 'sanity'

export const textItem = defineType({
  name: 'textItem',
  type: 'object',
  title: 'Text Item',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
    defineField({
      name: 'conditionalBody',
      title: 'Do you want to add body content to this text item?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      type: 'text',
      title: 'Body',
      hidden: ({parent}) => !parent?.conditionalBody,
      options: {
        collapsed: false,
      },
    }),
  ],
})
