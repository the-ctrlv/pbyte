import {defineType, defineField} from 'sanity'

export const siteIndex = defineType({
  name: 'siteIndex',
  type: 'object',
  title: 'Site Index',

  fields: [
    defineField({
      name: 'index',
      title: 'Site Index Status',
      type: 'string',
      description:
        'Do you want this page to be indexed by search engines? If you are not sure, leave it as "Yes"',
      options: {
        layout: 'radio',
        list: [
          {title: 'Index', value: 'index'},
          {title: 'No Index', value: 'noindex'},
        ],
      },
    }),
  ],
  options: {
    collapsible: true,
  },
})
