import {defineType, defineField} from 'sanity'
import {ChartUpwardIcon} from '@sanity/icons'

export const area = defineType({
  title: 'Additional Areas',
  name: 'area',
  type: 'object',
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      name: 'area',
      type: 'array',
      title: 'Additional Areas',
      of: [
        defineField({
          title: 'Text Item',
          name: 'textItem',
          type: 'textItem',
        }),
        defineField({
          title: 'Button',
          name: 'button',
          type: 'button',
        }),
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
        }),
      ],
    }),
  ],
})
