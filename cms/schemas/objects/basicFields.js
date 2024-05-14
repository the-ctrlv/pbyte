import {defineType, defineField} from 'sanity'

export const basicFields = defineType({
  name: 'basicFields',
  type: 'object',
  title: 'Basic Fields',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'id',
      type: 'slug',
      title: 'Id',
      options: {
        source: (doc, options) => options.parent.title,
      },
    }),
    defineField({
      name: 'heading',
      type: 'conditionalHeading',
      title: 'Heading (e.g. H1, H2, H3)',
    }),
    defineField({
      name: 'conditionalSubHeading',
      title: 'Do you want to add a Sub heading?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'subHeading',
      type: 'string',
      title: 'Sub Heading',
      hidden: ({parent}) => !parent?.conditionalSubHeading,
      options: {
        collapsed: false,
      },
    }),
    defineField({
      name: 'conditionalTagline',
      title: 'Do you want to add a tagline?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tagline',
      type: 'blockContent',
      title: 'Tagline',
      rows: 1,
      hidden: ({parent}) => !parent?.conditionalTagline,
      options: {
        collapsed: false,
      },
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
      title: 'Body',
    }),
  ],
})
