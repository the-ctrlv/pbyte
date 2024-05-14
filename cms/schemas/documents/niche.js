import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const niche = defineType({
  name: 'niche',
  title: 'Niche',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle,
    }),
  },
})
