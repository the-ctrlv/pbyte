import {defineType, defineField} from 'sanity'

export const seo = defineType({
  name: 'seo',
  type: 'object',
  title: 'SEO & Social Sharing',
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'Title',
      type: 'string',
      description:
        'Make it as catchy as possible to covert users in social feeds and Google searches. Ideally between 15 and 70 characters.',
      validation: (Rule) => [
        Rule.length(15, 70).warning('Title should be between 15 and 70 characters long'),
      ],
    }),
    defineField({
      name: 'seoKeywords',
      title: 'Keywords',
      type: 'string',
      description: 'Insert keywords that describe your content. Separate with commas.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Description',
      type: 'text',
      description:
        'Optional but highly encouraged as it will help you convert more visitors from Google & Social. Ideally between 70 and 160 characters.',
      validation: (Rule) => [
        Rule.length(70, 160).warning('Description should be between 70 and 160 characters long'),
      ],
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      type: 'openGraph',
    }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
  preview: {
    select: {
      title: 'seoTitle',
      media: 'openGraphImage',
    },
  },
})
