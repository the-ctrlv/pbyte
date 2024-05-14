import {defineType, defineField} from 'sanity'

export const link = defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'externalContent',
      title: 'Content from external source',
      type: 'boolean',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link Url',
      description:
        'Use this field to add a link to the source. For external links use full url e.g. "https://google.com/". For internal links use the page path e.g. ‘companies’',
      type: 'string',
    }),
  ],
})
