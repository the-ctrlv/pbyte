import {defineType, defineField} from 'sanity'
import {TagIcon} from '@sanity/icons'

export const tag = defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'slug',
      options: {
        //Change to schema title to automatically populate
        source: 'label',
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, '-')
            //Remove special characters
            .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (Rule) => Rule.required(),
      },
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'category',
      type: 'array',
      title: 'Tag Category',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
    defineField({
      name: 'related',
      title: 'Related Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'tag'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'category.label',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
})
