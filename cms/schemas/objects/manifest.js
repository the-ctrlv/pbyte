import {defineType, defineField} from 'sanity'

export const manifest = defineType({
  name: 'manifest',
  type: 'object',
  title: 'Progressive Web App Configuration',
  fields: [
    defineField({
      type: 'string',
      name: 'short_name',
      title: 'Short Name',
    }),
    defineField({
      type: 'string',
      name: 'start_url',
      title: 'App Start URL',
      initialValue: '/',
    }),
    defineField({
      type: 'color',
      name: 'theme_color',
      title: 'Theme Color',
    }),
    defineField({
      type: 'color',
      name: 'background_color',
      title: 'Background Color',
    }),
    defineField({
      name: 'display',
      type: 'string',
      title: 'display',
    }),
  ],
  initialValues: {
    start_url: '/',
  },
})
