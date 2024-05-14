import {defineType, defineField} from 'sanity'

export const conditionalHeading = defineType({
  name: 'conditionalHeading',
  type: 'object',
  title: 'Conditional Heading (e.g. H1, H2, H3)',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'conditionalHeading',
      title: 'Do you want to add the Heading using HTML?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'codeHeading',
      type: 'code',
      title: 'Code Heading',
      hidden: ({parent}) => !parent?.conditionalHeading,
      options: {
        language: 'html',
        languageAlternatives: [
          {title: 'HTML', value: 'html'},
          {title: 'Javascript', value: 'javascript'},
          {title: 'CSS', value: 'css'},
        ],
        collapsed: false,
      },
    }),
  ],
})
